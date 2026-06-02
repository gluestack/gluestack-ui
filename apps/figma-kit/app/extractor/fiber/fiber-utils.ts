/**
 * extractor/fiber/fiber-utils.ts
 * --------------------------------
 * Low-level React fiber tree utilities.
 * Provides DOM↔fiber bridging, tree navigation, fiber type unwrapping,
 * and component skip-list logic.
 */

import { UnwrappedFiber } from "../types";
import {
  PRIMITIVE_NAMES,
  RN_INTERNAL_NAMES,
  INFRA_NAMES,
  NOISY_COMPONENT_NAMES,
} from "../constants";

export function getFiberFromDom(element: Element): unknown | null {
  const key = Object.keys(element).find((k) => k.startsWith("__reactFiber$"));
  if (!key) return null;
  return (element as unknown as Record<string, unknown>)[key];
}

export function getRootFiber(
  fiber: Record<string, unknown>,
): Record<string, unknown> {
  let current = fiber;
  while (current.return) {
    current = current.return as Record<string, unknown>;
  }
  return current;
}

export function getDomFromFiber(
  fiber: Record<string, unknown>,
): Element | null {
  let node: Record<string, unknown> | null = fiber;
  while (node) {
    if (node.stateNode instanceof Element) return node.stateNode;
    if (node.child) {
      node = node.child as Record<string, unknown>;
      continue;
    }
    while (node && !node.sibling) {
      node = (node.return as Record<string, unknown>) ?? null;
    }
    node = node ? (node.sibling as Record<string, unknown>) : null;
  }
  return null;
}

export function getRootFiberFromElement(
  el: Element,
): Record<string, unknown> | null {
  let anchor: Element | null = el;
  if (!getFiberFromDom(anchor)) anchor = el.querySelector("[class]") ?? null;
  if (!anchor) return null;
  const fiber = getFiberFromDom(anchor);
  if (!fiber) return null;
  return getRootFiber(fiber as Record<string, unknown>);
}

export function unwrapFiberType(fiberType: any): UnwrappedFiber | null {
  if (!fiberType) return null;

  if (typeof fiberType === "function") {
    const name = fiberType.displayName || fiberType.name || "Anonymous";
    return { fn: fiberType, name };
  }

  if (typeof fiberType === "object") {
    const typeofSymbol = fiberType.$$typeof?.toString() ?? "";

    if (typeofSymbol.includes("forward_ref")) {
      const render = fiberType.render;
      if (typeof render !== "function") return null;
      const name =
        fiberType.displayName ||
        render.displayName ||
        render.name ||
        "Anonymous";
      return { fn: render, name };
    }

    if (typeofSymbol.includes("memo")) {
      const inner = fiberType.type;
      const unwrapped = unwrapFiberType(inner);
      if (!unwrapped) return null;
      const name = fiberType.displayName || unwrapped.name;
      return { fn: unwrapped.fn, name };
    }
  }

  return null;
}

export function shouldSkipComponent(name: string): boolean {
  if (name.startsWith("$")) return true;
  if (name.includes(".")) return true;
  if (name.startsWith("CssInterop")) return true;
  if (PRIMITIVE_NAMES.has(name)) return true;
  if (RN_INTERNAL_NAMES.has(name)) return true;
  if (INFRA_NAMES.has(name)) return true;
  if (NOISY_COMPONENT_NAMES.has(name)) return true;
  if (name.endsWith("ContextProvider")) return true;
  if (name.endsWith("Provider")) return true;
  if (name.endsWith("Wrapper")) return true;
  if (name === "AnimatedHeight") return true;
  return false;
}

export function fiberHasNamedChild(fiber: Record<string, unknown>): boolean {
  let node = fiber.child as Record<string, unknown> | null;
  while (node) {
    const unwrapped = unwrapFiberType(node.type);
    if (unwrapped && unwrapped.name && unwrapped.name !== "Anonymous")
      return true;
    if (node.child && fiberHasNamedChild(node)) return true;
    node = node.sibling as Record<string, unknown> | null;
  }
  return false;
}
