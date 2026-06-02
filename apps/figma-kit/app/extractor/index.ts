/**
 * extractor/index.ts
 * -------------------
 * Public API for the React fiber extractor system.
 * Import from this file — never import from internal modules directly.
 *
 * Exports:
 *   extractComponentsFromFiber  — extract from a DOM root element
 *   extractComponentsFromFiberNode — extract from an already-resolved fiber
 *   extractOverlays             — open and extract all overlay candidates
 *   getDesignTokenRegistry      — return all CSS custom property tokens
 *   getRootFiberFromElement     — resolve root fiber from DOM element
 *   debugPrintFiberTree         — console-log the component hierarchy
 */

import { resetTokenCache } from "./dom/token-scanner";
import { traverseFiber, groupIntoComponents, extractFromFiberNode } from "./fiber/traversal";
import { getFiberFromDom, getRootFiber } from "./fiber/fiber-utils";
import { getBodyPortalSnapshot } from "./overlay/portal-utils";
import { detectOverlayCandidates } from "./overlay/detector";
import {
  extractViaRenderPropTrigger,
  extractViaChildTrigger,
  extractViaOpenProp,
} from "./overlay/extraction";
import {
  FiberExtractionResult,
  OverlayExtractionResult,
  ComponentFnEntry,
  RawEntry,
} from "./types";

export type {
  DesignTokenRef,
  SvgDimensions,
  ComponentVariant,
  ComponentDefinition,
  ComponentFnEntry,
  FiberExtractionResult,
  OverlayCandidate,
  OverlayExtractionResult,
} from "./types";

export { getDesignTokenRegistry } from "./dom/token-scanner";
export { getRootFiberFromElement } from "./fiber/fiber-utils";

export function extractComponentsFromFiber(
  rootElement: Element = document.body,
): FiberExtractionResult {
  resetTokenCache();

  let anchorElement: Element | null = rootElement;
  if (!getFiberFromDom(anchorElement)) {
    anchorElement = rootElement.querySelector("[class]") ?? null;
  }
  if (!anchorElement) {
    console.warn("[FiberExtractor] No React-controlled DOM node found.");
    return { components: [], componentFns: {} };
  }

  const initialFiber = getFiberFromDom(anchorElement);
  if (!initialFiber) {
    console.warn("[FiberExtractor] No fiber found on element.");
    return { components: [], componentFns: {} };
  }

  const rootFiber = getRootFiber(initialFiber as Record<string, unknown>);
  const raw: RawEntry[] = [];
  const componentFns: Record<string, ComponentFnEntry> = {};
  traverseFiber(rootFiber as Record<string, unknown>, raw, componentFns);
  const components = groupIntoComponents(raw);
  return { components, componentFns };
}

export function extractComponentsFromFiberNode(
  startFiber: Record<string, unknown>,
): FiberExtractionResult {
  resetTokenCache();
  return extractFromFiberNode(startFiber);
}

let _overlayExtractionActive = false;

export async function extractOverlays(
  rootFiber: Record<string, unknown>,
  componentFns: Record<string, ComponentFnEntry>,
  rootEl: Element = document.body,
): Promise<OverlayExtractionResult[]> {
  if (_overlayExtractionActive) {
    console.warn("[extractOverlays] Re-entrant call detected — ignoring.");
    return [];
  }
  _overlayExtractionActive = true;
  try {
    const candidates = detectOverlayCandidates(rootFiber);
    const results: OverlayExtractionResult[] = [];
    const baselinePortals = getBodyPortalSnapshot();

    for (const candidate of candidates) {
      try {
        let result: OverlayExtractionResult | null = null;

        if (candidate.triggerStrategy === "render-prop") {
          result = await extractViaRenderPropTrigger(candidate, baselinePortals);
        } else if (candidate.triggerStrategy === "child-trigger") {
          result = await extractViaChildTrigger(candidate, baselinePortals);
        } else {
          result = await extractViaOpenProp(candidate, componentFns, baselinePortals);
        }

        if (result && result.components.length > 0) {
          results.push(result);
        }
      } catch (e) {
        console.warn(`[OverlayExtractor] ❌ ${candidate.name}:`, e);
      }
    }

    return results;
  } finally {
    _overlayExtractionActive = false;
  }
}

export function debugPrintFiberTree(
  rootElement: Element = document.body,
): void {
  let anchorElement: Element | null = rootElement;
  if (!getFiberFromDom(anchorElement)) {
    anchorElement = rootElement.querySelector("[class]") ?? null;
  }
  if (!anchorElement) {
    console.warn("[debugPrintFiberTree] No React-controlled DOM node found.");
    return;
  }
  const initialFiber = getFiberFromDom(anchorElement);
  if (!initialFiber) {
    console.warn("[debugPrintFiberTree] No fiber found on element.");
    return;
  }
  const rootFiber = getRootFiber(initialFiber as Record<string, unknown>);
  const raw: RawEntry[] = [];
  const componentFns: Record<string, ComponentFnEntry> = {};
  traverseFiber(rootFiber as Record<string, unknown>, raw, componentFns);

  function printEntry(entry: RawEntry, indent: number): void {
    const prefix = "  ".repeat(indent);
    const textFlag = entry.isTextElement ? " [TEXT]" : "";
    console.log(`${prefix}▸ ${entry.name}${textFlag}  (${entry.children.length} children)`);
    for (const child of entry.children) printEntry(child, indent + 1);
  }

  console.groupCollapsed(`[debugPrintFiberTree] ${raw.length} root entries`);
  for (const entry of raw) printEntry(entry, 0);
  console.groupEnd();
  console.log("[debugPrintFiberTree] Components:", Object.keys(componentFns).sort().join(", "));
}
