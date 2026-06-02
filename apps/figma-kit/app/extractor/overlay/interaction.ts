/**
 * extractor/overlay/interaction.ts
 * ----------------------------------
 * DOM interaction utilities for triggering overlay components.
 *
 * ROOT CAUSE OF MENU FAILURE (confirmed by fiber dump):
 *
 * Gluestack's Menu button fiber tree walking upward from the DOM node:
 *   [0] <button> host fiber   ← onClick (React Aria keyboard handler — NOT menu open)
 *   [1] View                  ← onClick (gesture responder passthrough — NOT menu open)
 *   [2] Pressable             ← onPress ← THIS is the one that opens the menu
 *   [3] Pressable             ← onPress
 *   [4] CssInterop.Pressable  ← onPress
 *   ...
 *   [8] Button                ← onPress
 *
 * THE BUG in all previous versions:
 *   tryCallPressOnFiber checked onClick before onPress, AND walkUp started
 *   from depth 0. So it hit depth-0's onClick (React Aria), called it,
 *   returned true — but that handler does NOT open the menu. The menu
 *   stayed closed while the code thought it had succeeded.
 *
 * THE FIX:
 *   1. Walk upward collecting ONLY onPress fibers (skip onClick-only fibers).
 *   2. Call the shallowest onPress first (depth 2 = first Pressable).
 *   3. Only fall back to onClick if zero onPress handlers exist anywhere
 *      (handles plain HTML buttons with no React Pressable wrapper).
 */

import { getFiberFromDom } from "../fiber/fiber-utils";

// ---------------------------------------------------------------------------
// Synthetic event — satisfies react-native-web gesture responder
// ---------------------------------------------------------------------------

function makeSyntheticEvent(target: Element): Record<string, unknown> {
  return {
    preventDefault: () => {},
    stopPropagation: () => {},
    nativeEvent: {
      target,
      pageX: 0,
      pageY: 0,
      timestamp: Date.now(),
    },
    currentTarget: target,
    target,
    bubbles: true,
    cancelable: true,
    defaultPrevented: false,
    eventPhase: 3,
    isTrusted: true, // satisfies react-native-web gesture responder isTrusted check
    timeStamp: Date.now(),
    type: "press",
  };
}

// ---------------------------------------------------------------------------
// Call onPress on ONE fiber. Returns true on success.
// Does NOT try onClick — see module comment for why.
// ---------------------------------------------------------------------------

function callOnPressFiber(
  f: Record<string, unknown>,
  target: Element,
): boolean {
  const props = (f.memoizedProps ?? {}) as Record<string, unknown>;
  if (typeof props.onPress === "function") {
    try {
      (props.onPress as (e: unknown) => void)(makeSyntheticEvent(target));
      return true;
    } catch {
      /* ignore */
    }
  }
  return false;
}

// ---------------------------------------------------------------------------
// Walk upward collecting every fiber that has onPress (not onClick).
// Returns them shallowest-first (lowest depth index = closest to DOM node).
// ---------------------------------------------------------------------------

function collectOnPressFibers(
  startFiber: Record<string, unknown>,
  maxDepth = 30,
): Array<{ fiber: Record<string, unknown>; depth: number }> {
  const results: Array<{ fiber: Record<string, unknown>; depth: number }> = [];
  let f = startFiber as any;
  let depth = 0;
  while (f && depth < maxDepth) {
    const props = (f.memoizedProps ?? {}) as Record<string, unknown>;
    if (typeof props.onPress === "function") {
      results.push({ fiber: f, depth });
    }
    f = f.return;
    depth++;
  }
  return results;
}

// ---------------------------------------------------------------------------
// Public: invokeFiberPress
// ---------------------------------------------------------------------------

/**
 * Invokes the React onPress handler on a DOM element by walking its fiber
 * tree upward, bypassing isTrusted restrictions entirely.
 *
 * Targets onPress-only fibers (skips onClick at depth 0/1 which are React
 * Aria / gesture-responder internals that do not open Gluestack overlays).
 *
 * Falls back to onClick only if no onPress exists anywhere in the tree
 * (plain HTML buttons, server-rendered content).
 */
export function invokeFiberPress(el: Element): boolean {
  const fiber = getFiberFromDom(el);
  if (!fiber) return false;

  // Collect all onPress candidates walking upward, shallowest first
  const candidates = collectOnPressFibers(fiber as Record<string, unknown>, 30);

  for (const { fiber: f, depth } of candidates) {
    if (callOnPressFiber(f, el)) {
      const name =
        (f as any).type?.displayName ?? (f as any).type?.name ?? "unknown";
      console.log(
        `[interaction] ✅ onPress called on fiber [${depth}] ${name}`,
      );
      return true;
    }
  }

  // Last resort: onClick (for non-Gluestack components)
  let f = fiber as any;
  let depth = 0;
  while (f && depth < 30) {
    const props = (f.memoizedProps ?? {}) as Record<string, unknown>;
    if (typeof props.onClick === "function") {
      try {
        (props.onClick as (e: unknown) => void)(makeSyntheticEvent(el));
        return true;
      } catch {
        /* ignore */
      }
    }
    f = f.return;
    depth++;
  }

  return false;
}

// ---------------------------------------------------------------------------
// Public: triggerPress
// ---------------------------------------------------------------------------

/**
 * Primary trigger entry point.
 * Always tries fiber-based invocation first. Only falls back to DOM event
 * simulation when no fiber handler is found (plain HTML buttons with no
 * React handler, or server-rendered content).
 */
export function triggerPress(el: Element): void {
  const handled = invokeFiberPress(el);
  if (!handled) simulateClick(el);
}

// ---------------------------------------------------------------------------
// Public: simulateClick (fallback for non-React elements)
// ---------------------------------------------------------------------------

export function simulateClick(el: Element): void {
  el.scrollIntoView({ block: "center", behavior: "instant" });
  const rect = el.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const opts = { bubbles: true, cancelable: true, clientX: x, clientY: y };
  el.dispatchEvent(new PointerEvent("pointerover", opts));
  el.dispatchEvent(new PointerEvent("pointerenter", opts));
  el.dispatchEvent(new PointerEvent("pointerdown", opts));
  el.dispatchEvent(new MouseEvent("mousedown", opts));
  el.dispatchEvent(new PointerEvent("pointerup", opts));
  el.dispatchEvent(new MouseEvent("mouseup", opts));
  el.dispatchEvent(new MouseEvent("click", opts));
}

// ---------------------------------------------------------------------------
// Public: simulateClose
// ---------------------------------------------------------------------------

export function simulateClose(): void {
  document.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Escape",
      bubbles: true,
      cancelable: true,
    }),
  );
}
