/**
 * extractor/overlay/signals.ts
 * ------------------------------
 * Pattern detection helpers that identify HOW an overlay can be triggered.
 *
 * Pattern A — render-prop trigger (Menu, Tooltip, Popover, Select)
 * Pattern B — child *Trigger subcomponent (some Modal/ActionSheet variants)
 * Pattern C — external isOpen/open/visible prop (Modal, AlertDialog, Drawer)
 *
 * ROOT CAUSE FIX for Menu:
 *
 * Gluestack's Menu fiber tree looks like this:
 *
 *   Menu fiber  (has props.trigger = (props) => <Button {...props} />)
 *   └── [Menu internals that CALL trigger()]
 *       └── Button fiber           ← this is what we need to press
 *           └── Pressable fiber    ← holds the actual onPress handler
 *               └── div[role=button] stateNode  ← DOM node
 *
 * The OLD code looked at the Menu fiber's PARENT siblings for a button.
 * That fails because there are no siblings — the button is INSIDE the Menu.
 *
 * The NEW findRenderPropTriggerDom searches INSIDE the Menu fiber's own
 * subtree. The trigger render-prop result is always a child of the component
 * that owns the trigger prop, so we walk inward not outward.
 *
 * We also export findTriggerFiberInSubtree so interaction.ts can use the
 * FIBER (not just the DOM node) to invoke onPress directly.
 */

import { unwrapFiberType } from "../fiber/fiber-utils";
import { OPEN_PROP_NAMES } from "../constants";

// ---------------------------------------------------------------------------
// Pattern A
// ---------------------------------------------------------------------------

export function hasTriggerRenderProp(props: Record<string, unknown>): boolean {
  return typeof props["trigger"] === "function";
}

// ---------------------------------------------------------------------------
// Pattern B
// ---------------------------------------------------------------------------

export function findChildTriggerFiber(
  fiber: Record<string, unknown>,
): Record<string, unknown> | null {
  let child = fiber.child as Record<string, unknown> | null;
  let depth = 0;
  while (child && depth < 10) {
    const u = unwrapFiberType(child.type);
    if (u?.name?.endsWith("Trigger")) return child;
    let sib = child.sibling as Record<string, unknown> | null;
    while (sib) {
      const su = unwrapFiberType(sib.type);
      if (su?.name?.endsWith("Trigger")) return sib;
      sib = sib.sibling as Record<string, unknown> | null;
    }
    child = child.child as Record<string, unknown> | null;
    depth++;
  }
  return null;
}

// ---------------------------------------------------------------------------
// Pattern C
// ---------------------------------------------------------------------------

export function getOpenPropName(
  props: Record<string, unknown>,
): string | undefined {
  return OPEN_PROP_NAMES.find((p) => p in props);
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

/**
 * Returns true if a DOM element looks like a pressable target.
 */
function isPressableElement(el: Element): boolean {
  const tag = el.tagName?.toLowerCase() ?? "";
  const role = el.getAttribute("role") ?? "";
  return tag === "button" || role === "button" || el.hasAttribute("tabindex");
}

// ---------------------------------------------------------------------------
// Core: find the pressable fiber AND its DOM node inside a subtree
//
// This is the KEY function for Gluestack Menu. It walks the fiber subtree
// of the Menu component and finds:
//   (a) the fiber that has onPress/onClick — to invoke directly
//   (b) the DOM element below it — to use as the triggerDomNode
//
// We prefer role=button elements (react-native-web Pressable output) over
// native <button> elements.
// ---------------------------------------------------------------------------

export interface PressTarget {
  domNode: Element;
  fiber: Record<string, unknown>;
}

export function findPressTargetInSubtree(
  fiber: Record<string, unknown> | null,
  maxDepth = 15,
): PressTarget | null {
  let bestRoleButton: PressTarget | null = null;
  let bestNativeButton: PressTarget | null = null;
  let bestTabIndex: PressTarget | null = null;

  function findOnPressAbove(
    domFiber: Record<string, unknown>,
  ): Record<string, unknown> {
    // Walk upward from the DOM node's own fiber to find the nearest
    // ancestor with onPress. This correctly finds Pressable which wraps
    // the DOM node from above — it's never visited going downward.
    let f = (domFiber as any).return as Record<string, unknown> | null;
    let d = 0;
    while (f && d < 15) {
      const props = (f.memoizedProps ?? {}) as Record<string, unknown>;
      if (typeof props.onPress === "function") return f;
      f = (f as any).return;
      d++;
    }
    // No onPress found above — fall back to the DOM fiber itself
    return domFiber;
  }

  function walk(f: Record<string, unknown> | null, d: number): void {
    if (!f || d > maxDepth) return;

    if (f.stateNode instanceof Element) {
      const el = f.stateNode as Element;
      const role = el.getAttribute("role") ?? "";
      const tag = el.tagName?.toLowerCase() ?? "";

      if (role === "button" && !bestRoleButton) {
        bestRoleButton = { domNode: el, fiber: findOnPressAbove(f) };
      } else if (tag === "button" && !bestNativeButton) {
        bestNativeButton = { domNode: el, fiber: findOnPressAbove(f) };
      } else if (el.hasAttribute("tabindex") && !bestTabIndex) {
        bestTabIndex = { domNode: el, fiber: findOnPressAbove(f) };
      }
    }

    walk(f.child as Record<string, unknown> | null, d + 1);
    walk(f.sibling as Record<string, unknown> | null, d + 1);
  }

  walk(fiber, 0);
  return bestRoleButton ?? bestNativeButton ?? bestTabIndex;
}

/**
 * Convenience: just the DOM element from findPressTargetInSubtree.
 */
export function findPressableInSubtree(
  fiber: Record<string, unknown> | null,
  maxDepth = 15,
): Element | null {
  return findPressTargetInSubtree(fiber, maxDepth)?.domNode ?? null;
}

// ---------------------------------------------------------------------------
// Pattern A — render-prop trigger DOM + fiber resolution
// ---------------------------------------------------------------------------

/**
 * Strategy 1: search INSIDE the overlay fiber's own subtree.
 *
 * For Gluestack Menu, the trigger prop is called by Menu internals and
 * renders the Button as a CHILD of the Menu fiber. So the button's DOM
 * node and fiber are both descendants of the Menu fiber.
 *
 * This is the primary strategy and covers Gluestack, Radix, and most
 * headless UI libraries that use render props.
 */
function findTriggerFromSubtree(
  overlayFiber: Record<string, unknown>,
): PressTarget | null {
  return findPressTargetInSubtree(
    overlayFiber.child as Record<string, unknown> | null,
    15,
  );
}

/**
 * Strategy 2: search sibling fibers in the parent.
 *
 * For patterns where the trigger is a sibling of the overlay in the
 * parent's JSX, e.g.:
 *   <View>
 *     <Button onPress={openMenu} />   ← sibling
 *     <Menu isOpen={...} />
 *   </View>
 */
function findTriggerFromSiblings(
  overlayFiber: Record<string, unknown>,
): PressTarget | null {
  const parent = overlayFiber.return as Record<string, unknown> | null;
  if (!parent) return null;

  let sib = parent.child as Record<string, unknown> | null;
  while (sib) {
    if (sib !== overlayFiber) {
      const found = findPressTargetInSubtree(sib, 8);
      if (found) return found;
    }
    sib = sib.sibling as Record<string, unknown> | null;
  }
  return null;
}

/**
 * Main export for Pattern A trigger resolution.
 * Returns a PressTarget with both the DOM node and the fiber that owns
 * the press handler — so interaction.ts can call onPress directly.
 *
 * Tries subtree first (Gluestack/Radix), then siblings (other patterns).
 */
export function findRenderPropPressTarget(
  overlayFiber: Record<string, unknown>,
): PressTarget | null {
  return (
    findTriggerFromSubtree(overlayFiber) ??
    findTriggerFromSiblings(overlayFiber)
  );
}

/**
 * Backward-compatible DOM-only version used by detector.ts to store
 * triggerDomNode on the candidate.
 */
export function findRenderPropTriggerDom(
  overlayFiber: Record<string, unknown>,
): Element | null {
  return findRenderPropPressTarget(overlayFiber)?.domNode ?? null;
}

// ---------------------------------------------------------------------------
// Pattern B — child trigger DOM resolution
// ---------------------------------------------------------------------------

export function findChildTriggerDom(
  triggerFiber: Record<string, unknown>,
): Element | null {
  return findPressableInSubtree(
    triggerFiber.child as Record<string, unknown> | null,
    8,
  );
}

// ---------------------------------------------------------------------------
// Pattern C — Modal trigger button search
// ---------------------------------------------------------------------------

/**
 * Walks upward from the Modal fiber and searches sibling subtrees for a
 * pressable button. The Modal's trigger button is always in the parent's
 * render output as a sibling, not inside the Modal itself.
 */
export function findModalTriggerButton(
  modalFiber: Record<string, unknown>,
  maxAncestors = 8,
): Element | null {
  let self: Record<string, unknown> = modalFiber;
  let parent = modalFiber.return as Record<string, unknown> | null;
  let depth = 0;

  while (parent && depth < maxAncestors) {
    let sib = parent.child as Record<string, unknown> | null;
    while (sib) {
      if (sib !== self) {
        const found = findPressableInSubtree(sib, 8);
        if (found) return found;
      }
      sib = sib.sibling as Record<string, unknown> | null;
    }
    self = parent;
    parent = parent.return as Record<string, unknown> | null;
    depth++;
  }

  return null;
}

// ---------------------------------------------------------------------------
// Utility — sibling trigger search (used externally)
// ---------------------------------------------------------------------------

export function findSiblingTriggerButton(
  overlayFiber: Record<string, unknown>,
  maxAncestors = 6,
): Element | null {
  let current = overlayFiber.return as Record<string, unknown> | null;
  let depth = 0;

  while (current && depth < maxAncestors) {
    let sib = current.child as Record<string, unknown> | null;
    while (sib) {
      if (sib !== overlayFiber) {
        const found = findPressableInSubtree(sib, 8);
        if (found) return found;
      }
      sib = sib.sibling as Record<string, unknown> | null;
    }
    current = current.return as Record<string, unknown> | null;
    depth++;
  }
  return null;
}
