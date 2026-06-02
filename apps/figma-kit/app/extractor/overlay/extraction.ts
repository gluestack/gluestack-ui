/**
 * extractor/overlay/extraction.ts
 * ---------------------------------
 * Three extraction strategies for overlay components:
 *
 * Strategy A — click the render-prop trigger button (Menu, Tooltip, Popover)
 * Strategy B — click the *Trigger child component button
 * Strategy C — open-prop controlled (Modal, Drawer, AlertDialog)
 *              Attempt order:
 *                1. Click modalTriggerDomNode if detector found one
 *                2. State dispatch (findAndDispatchOpenState) as fallback
 *                3. Isolated render with open prop forced true as last resort
 *
 * KEY FIX for Menu (Strategy A):
 *
 * Previously: findRenderPropTriggerDom returned a DOM element, then
 * triggerPress tried to simulate events on it — which fails for Gluestack
 * because isTrusted=false.
 *
 * Now: findRenderPropPressTarget returns BOTH the DOM element AND the
 * fiber that owns onPress. extractViaRenderPropTrigger calls the onPress
 * fiber prop directly, completely bypassing DOM event dispatch.
 */

import {
  OverlayCandidate,
  OverlayExtractionResult,
  ComponentFnEntry,
} from "../types";
import { extractFromFiberNode } from "../fiber/traversal";
import { getDomFromFiber, getRootFiberFromElement } from "../fiber/fiber-utils";
import {
  snapshotDomNodesInFiberSubtree,
  waitForOverlayMount,
  getBodyPortalSnapshot,
  waitForNewPortal,
} from "./portal-utils";
import { triggerPress, invokeFiberPress, simulateClose } from "./interaction";
import {
  findAndDispatchOpenState,
  findAndDispatchCloseState,
} from "./state-dispatch";
import { findRenderPropPressTarget } from "./signals";

// ---------------------------------------------------------------------------
// Internal extraction helpers
// ---------------------------------------------------------------------------

function extractPortalContent(
  name: string,
  portalEl: Element,
): OverlayExtractionResult {
  const { components, componentFns } = extractFromFiberNode(
    getRootFiberFromElement(portalEl) ?? ({} as any),
  );
  return { name, portalSnapshot: portalEl, components, componentFns };
}

function extractFromCandidateDom(
  candidateFiber: Record<string, unknown>,
  overlayName: string,
): OverlayExtractionResult {
  const domNode = getDomFromFiber(candidateFiber) ?? document.body;
  const { components, componentFns } = extractFromFiberNode(candidateFiber);
  return {
    name: overlayName,
    portalSnapshot: domNode,
    components,
    componentFns,
  };
}

async function findDialogResult(
  name: string,
): Promise<OverlayExtractionResult | null> {
  for (const child of Array.from(document.body.children)) {
    const dialogEl = child.querySelector(
      "[role='dialog'],[role='alertdialog']",
    );
    if (dialogEl) {
      let host: Element = dialogEl;
      while (host.parentElement && host.parentElement !== document.body)
        host = host.parentElement;
      return extractPortalContent(name, host);
    }
  }
  return null;
}

// ---------------------------------------------------------------------------
// Core: press a fiber's onPress directly, wait for mount, extract result
//
// This is the low-level primitive used by all strategies. It accepts the
// fiber that owns the press handler and the DOM node for fallback.
// ---------------------------------------------------------------------------

async function pressAndExtract(
  pressFiber: Record<string, unknown>,
  triggerDomEl: Element,
  overlayName: string,
  candidateFiber: Record<string, unknown>,
  baselinePortals: Set<Element>,
): Promise<OverlayExtractionResult | null> {
  const baselineDomNodes = snapshotDomNodesInFiberSubtree(candidateFiber);
  const allBodyBefore = new Set(Array.from(document.body.children));

  // --- Attempt 1: call onPress/onClick directly on the fiber ---
  // This is the only reliable method for Gluestack Pressable components.
  const props = (pressFiber.memoizedProps ?? {}) as Record<string, unknown>;
  let pressed = false;

  const syntheticEvent = {
    preventDefault: () => {},
    stopPropagation: () => {},
    nativeEvent: { target: triggerDomEl },
    currentTarget: triggerDomEl,
    target: triggerDomEl,
    bubbles: true,
    isTrusted: true, // satisfies react-native-web gesture responder check
    timeStamp: Date.now(),
    type: "press",
  };

  if (typeof props.onPress === "function") {
    try {
      (props.onPress as (e: unknown) => void)(syntheticEvent);
      pressed = true;
    } catch {
      /* ignore */
    }
  } else if (typeof props.onClick === "function") {
    try {
      (props.onClick as (e: unknown) => void)({
        ...syntheticEvent,
        type: "click",
      });
      pressed = true;
    } catch {
      /* ignore */
    }
  }

  // --- Attempt 2: walk the full fiber tree from the DOM node (invokeFiberPress) ---
  if (!pressed) {
    pressed = invokeFiberPress(triggerDomEl);
  }

  // --- Attempt 3: DOM event simulation (last resort) ---
  if (!pressed) {
    triggerPress(triggerDomEl);
    pressed = true; // simulateClick always fires, even if it doesn't open anything
  }

  // --- Wait for overlay to mount ---
  let mountType = await waitForOverlayMount(
    candidateFiber,
    baselineDomNodes,
    baselinePortals,
    800,
  );

  // If still nothing, try a second DOM-level trigger on the element itself
  if (!mountType) {
    const candidateDomNode = getDomFromFiber(candidateFiber);
    if (candidateDomNode && candidateDomNode !== triggerDomEl) {
      invokeFiberPress(candidateDomNode);
      mountType = await waitForOverlayMount(
        candidateFiber,
        baselineDomNodes,
        baselinePortals,
        600,
      );
    }
  }

  const extraWait = mountType === "fiber" ? 400 : 0;
  if (extraWait > 0) await new Promise((r) => setTimeout(r, extraWait));

  // --- Check for a new body-level portal ---
  for (const child of Array.from(document.body.children)) {
    if (!allBodyBefore.has(child)) {
      const result = extractPortalContent(overlayName, child);
      simulateClose();
      await new Promise((r) => requestAnimationFrame(r));
      return result;
    }
  }

  // --- Check for a dialog role inside existing portal containers ---
  const dialogResult = await findDialogResult(overlayName);
  if (dialogResult) {
    simulateClose();
    await new Promise((r) => requestAnimationFrame(r));
    return dialogResult;
  }

  // --- Fall back to scoped fiber subtree extraction ---
  const scopedResult = extractFromCandidateDom(candidateFiber, overlayName);
  const overlayComp = scopedResult.components.find(
    (c) => c.name === overlayName,
  );
  const scopedHasOverlayChildren =
    overlayComp !== undefined &&
    overlayComp.variants.some((v: any) => (v.children?.length ?? 0) > 0);

  if (!scopedHasOverlayChildren) {
    const pageRootFiber =
      getRootFiberFromElement(document.body) ?? candidateFiber;
    const { components: allComponents, componentFns: allFns } =
      extractFromFiberNode(pageRootFiber);
    const overlayMatches = allComponents.filter((c) => c.name === overlayName);
    const bestMatch = overlayMatches.reduce<(typeof overlayMatches)[0] | null>(
      (best, c) => {
        const childCount = c.variants.reduce(
          (n, v) => n + (v.children?.length ?? 0),
          0,
        );
        const bestChildCount = best
          ? best.variants.reduce((n, v) => n + (v.children?.length ?? 0), 0)
          : -1;
        return childCount > bestChildCount ? c : best;
      },
      null,
    );

    if (
      bestMatch &&
      bestMatch.variants.some((v) => (v.children?.length ?? 0) > 0)
    ) {
      const childNames = new Set<string>();
      bestMatch.variants.forEach((v) =>
        (v.children ?? []).forEach((ch) => ch.name && childNames.add(ch.name)),
      );
      const relatedComponents = allComponents.filter(
        (c) => c.name === overlayName || childNames.has(c.name),
      );
      simulateClose();
      await new Promise((r) => requestAnimationFrame(r));
      return {
        name: overlayName,
        portalSnapshot: getDomFromFiber(candidateFiber) ?? document.body,
        components: relatedComponents,
        componentFns: allFns,
      };
    }
  }

  simulateClose();
  await new Promise((r) => requestAnimationFrame(r));
  if (scopedResult.components.length === 0) return null;
  return scopedResult;
}

// ---------------------------------------------------------------------------
// Legacy: DOM-only click+extract (used by child-trigger and Modal paths)
// ---------------------------------------------------------------------------

export async function clickAndExtract(
  triggerEl: Element,
  overlayName: string,
  candidateFiber: Record<string, unknown>,
  baselinePortals: Set<Element>,
): Promise<OverlayExtractionResult | null> {
  // Resolve the press fiber from this DOM element so we can call onPress directly
  const fiber = (triggerEl as any)[
    Object.keys(triggerEl).find(
      (k) =>
        k.startsWith("__reactFiber") || k.startsWith("__reactInternalInstance"),
    ) ?? ""
  ] as Record<string, unknown> | undefined;

  const pressFiber = fiber ?? ({} as Record<string, unknown>);
  return pressAndExtract(
    pressFiber,
    triggerEl,
    overlayName,
    candidateFiber,
    baselinePortals,
  );
}

// ---------------------------------------------------------------------------
// Strategy A — render-prop trigger (Menu, Tooltip, Popover)
// ---------------------------------------------------------------------------

export async function extractViaRenderPropTrigger(
  candidate: OverlayCandidate,
  baselinePortals: Set<Element>,
): Promise<OverlayExtractionResult | null> {
  // Use findRenderPropPressTarget to get BOTH the fiber (for direct onPress call)
  // AND the DOM node (for fallback). This is the key fix — the old code only
  // had the DOM node and relied on DOM events which fail for Gluestack.
  const pressTarget = findRenderPropPressTarget(candidate.fiber);

  if (!pressTarget) {
    console.warn(`[Overlay:A] No press target found for ${candidate.name}`);
    return null;
  }

  console.log(
    `[Overlay:A] Pressing ${candidate.name} via fiber onPress on`,
    pressTarget.domNode,
    "handler fiber:",
    (pressTarget.fiber as any)?.type?.displayName ??
      (pressTarget.fiber as any)?.type?.name ??
      "unknown",
  );

  return pressAndExtract(
    pressTarget.fiber,
    pressTarget.domNode,
    candidate.name,
    candidate.fiber,
    baselinePortals,
  );
}

// ---------------------------------------------------------------------------
// Strategy B — child *Trigger component
// ---------------------------------------------------------------------------

export async function extractViaChildTrigger(
  candidate: OverlayCandidate,
  baselinePortals: Set<Element>,
): Promise<OverlayExtractionResult | null> {
  const triggerEl = candidate.childTriggerDomNode;
  if (!triggerEl) return null;
  return clickAndExtract(
    triggerEl,
    candidate.name,
    candidate.fiber,
    baselinePortals,
  );
}

// ---------------------------------------------------------------------------
// Strategy C — open-prop controlled (Modal, Drawer, AlertDialog)
// ---------------------------------------------------------------------------

export async function extractViaOpenProp(
  candidate: OverlayCandidate,
  componentFns: Record<string, ComponentFnEntry>,
  baselinePortals: Set<Element>,
): Promise<OverlayExtractionResult | null> {
  const openProp = candidate.openPropName!;
  const isCurrentlyOpen = candidate.props[openProp] === true;

  // If already open just extract
  if (isCurrentlyOpen) {
    const result = await findDialogResult(candidate.name);
    if (result && result.components.length > 0) return result;
  }

  // ── Attempt 1: click the trigger button if detector found one ────────────
  if (candidate.modalTriggerDomNode) {
    console.log(
      `[Overlay:C] Trying button click for ${candidate.name}`,
      candidate.modalTriggerDomNode,
    );
    const buttonResult = await clickAndExtract(
      candidate.modalTriggerDomNode,
      candidate.name,
      candidate.fiber,
      baselinePortals,
    );
    if (buttonResult && buttonResult.components.length > 0) return buttonResult;
    console.log(
      `[Overlay:C] Button click failed for ${candidate.name}, trying state dispatch`,
    );
  }

  // ── Attempt 2: state dispatch ─────────────────────────────────────────────
  const baselineDomNodes = snapshotDomNodesInFiberSubtree(candidate.fiber);
  const allBodyBefore = new Set(Array.from(document.body.children));

  const dispatched = findAndDispatchOpenState(candidate.fiber);
  if (dispatched) {
    const mountType = await waitForOverlayMount(
      candidate.fiber,
      baselineDomNodes,
      baselinePortals,
      800,
    );
    if (mountType === "fiber") await new Promise((r) => setTimeout(r, 400));

    for (const child of Array.from(document.body.children)) {
      if (!allBodyBefore.has(child)) {
        const result = extractPortalContent(candidate.name, child);
        findAndDispatchCloseState(candidate.fiber);
        await new Promise((r) => requestAnimationFrame(r));
        return result;
      }
    }

    const result = await findDialogResult(candidate.name);
    findAndDispatchCloseState(candidate.fiber);
    await new Promise((r) => requestAnimationFrame(r));
    if (result && result.components.length > 0) return result;
  }

  // ── Attempt 3: isolated render with open prop forced true ─────────────────
  const entry = componentFns[candidate.name];
  if (!entry) return null;

  const NOOP = () => {};
  const safeProps: Record<string, any> = {};
  for (const [k, v] of Object.entries(candidate.props)) {
    if (k === "children") {
      safeProps[k] = v;
      continue;
    }
    if (typeof v === "function") {
      safeProps[k] = NOOP;
      continue;
    }
    if (v === null || v === undefined) continue;
    if (typeof v === "object" && !Array.isArray(v)) continue;
    safeProps[k] = v;
  }
  safeProps[openProp] = true;

  const container = document.createElement("div");
  container.style.cssText =
    "position:fixed;left:-9999px;top:0;width:1px;height:1px;overflow:visible;z-index:0;";
  document.body.appendChild(container);
  const { createRoot } = await import("react-dom/client");
  const React = await import("react");
  const root = createRoot(container);
  try {
    const baseline = getBodyPortalSnapshot();
    root.render(React.createElement(entry.type, safeProps));
    await new Promise((r) =>
      requestAnimationFrame(() => requestAnimationFrame(r)),
    );
    const portal = await waitForNewPortal(baseline, 2500);
    if (portal) return extractPortalContent(candidate.name, portal);
    const containerFiber = getRootFiberFromElement(container);
    if (containerFiber) {
      const { components, componentFns: fns } =
        extractFromFiberNode(containerFiber);
      if (components.length > 0)
        return {
          name: candidate.name,
          portalSnapshot: container,
          components,
          componentFns: fns,
        };
    }
    if (container.children.length > 0)
      return extractPortalContent(candidate.name, container);
    return null;
  } finally {
    root.unmount();
    container.remove();
  }
}
