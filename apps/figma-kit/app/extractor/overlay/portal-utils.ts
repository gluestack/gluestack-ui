/**
 * extractor/overlay/portal-utils.ts
 * ------------------------------------
 * Utilities for detecting and waiting on React portal DOM nodes.
 * A "portal" is a body-level element created by ReactDOM.createPortal
 * (e.g. Radix, Gluestack OverlayProvider) that hosts floating UI.
 */

export const OVERLAY_ARIA_ROLES = new Set([
  "dialog",
  "menu",
  "listbox",
  "tooltip",
  "alertdialog",
]);

export function isLikelyPortal(el: Element): boolean {
  const cs = window.getComputedStyle(el);
  const z = parseInt(cs.zIndex ?? "0", 10);
  if (cs.position === "fixed" || cs.position === "absolute" || z > 50)
    return true;
  if (
    el.querySelector(
      "[role='dialog'],[role='menu'],[role='listbox'],[role='tooltip'],[role='alertdialog']",
    )
  )
    return true;
  if (
    el.hasAttribute("data-radix-portal") ||
    el.hasAttribute("data-overlay-container")
  )
    return true;
  return false;
}

export function getBodyPortalSnapshot(): Set<Element> {
  const result = new Set<Element>();
  for (const child of Array.from(document.body.children)) {
    if (isLikelyPortal(child)) result.add(child);
  }
  return result;
}

export async function waitForNewPortal(
  baseline: Set<Element>,
  timeoutMs = 1200,
): Promise<Element | null> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    await new Promise((r) => requestAnimationFrame(r));
    for (const child of Array.from(document.body.children)) {
      if (!baseline.has(child) && isLikelyPortal(child)) return child;
    }
  }
  return null;
}

export function snapshotDomNodesInFiberSubtree(
  fiber: Record<string, unknown>,
): Set<Element> {
  const nodes = new Set<Element>();
  function walk(f: Record<string, unknown> | null): void {
    if (!f) return;
    if (f.stateNode instanceof Element) nodes.add(f.stateNode);
    walk(f.child as Record<string, unknown> | null);
    walk(f.sibling as Record<string, unknown> | null);
  }
  walk(fiber);
  return nodes;
}

export async function waitForOverlayMount(
  candidateFiber: Record<string, unknown>,
  baselineDomNodes: Set<Element>,
  baselinePortals: Set<Element>,
  timeoutMs = 1500,
): Promise<"fiber" | "portal" | null> {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, 30));
    const current = snapshotDomNodesInFiberSubtree(candidateFiber);
    for (const node of current) {
      if (!baselineDomNodes.has(node)) return "fiber";
    }
    for (const child of Array.from(document.body.children)) {
      if (!baselinePortals.has(child) && isLikelyPortal(child)) return "portal";
    }
  }
  return null;
}
