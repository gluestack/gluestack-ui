/**
 * extractor/overlay/state-dispatch.ts
 * --------------------------------------
 * Directly dispatches React useState setters to open/close overlay components.
 *
 * Why this approach: Gluestack's Pressable uses react-native-web's gesture
 * responder which checks event.isTrusted. DOM event simulation always
 * produces isTrusted=false, so onPress never fires. Walking the fiber tree
 * to find and call hook.queue.dispatch() is the only reliable alternative.
 *
 * OVERLAY_INTERNAL_NAMES guards against dispatching to Gluestack's own
 * internal boolean hooks (isHovered, isPressed) before reaching the
 * user's showModal state.
 */

export const OVERLAY_INTERNAL_NAMES = new Set([
  "Overlay",
  "AnimatePresence",
  "FocusScope",
  "MotionComponent",
  "AnimatedComponent",
  "withStyleContext",
  "PresenceChild",
  "PortalWrapper",
  "Portal",
]);

export function findAndDispatchOpenState(
  overlayFiber: Record<string, unknown>,
): boolean {
  let f: Record<string, unknown> | null = overlayFiber.return as Record<
    string,
    unknown
  > | null;
  let depth = 0;
  let passedInternals = false;

  while (f && depth < 40) {
    const typeName: string =
      (f as any).type?.displayName ?? (f as any).type?.name ?? "";

    if (!passedInternals) {
      if (OVERLAY_INTERNAL_NAMES.has(typeName) || typeName === "") {
        f = (f as any).return;
        depth++;
        continue;
      }
      passedInternals = true;
    }

    let hook = (f as any).memoizedState;
    while (hook) {
      if (
        hook.memoizedState === false &&
        hook.queue != null &&
        typeof hook.queue.dispatch === "function"
      ) {
        console.log(
          `[Overlay:C] Dispatching useState(false→true) on ${typeName}`,
        );
        try {
          hook.queue.dispatch(true);
        } catch {
          /* ignore */
        }
        return true;
      }
      hook = hook.next;
    }
    f = (f as any).return;
    depth++;
  }
  return false;
}

export function findAndDispatchCloseState(
  overlayFiber: Record<string, unknown>,
): void {
  let f: Record<string, unknown> | null = overlayFiber.return as Record<
    string,
    unknown
  > | null;
  let depth = 0;

  while (f && depth < 40) {
    let hook = (f as any).memoizedState;
    while (hook) {
      if (
        hook.memoizedState === true &&
        hook.queue != null &&
        typeof hook.queue.dispatch === "function"
      ) {
        try {
          hook.queue.dispatch(false);
        } catch {
          /* ignore */
        }
        return;
      }
      hook = hook.next;
    }
    f = (f as any).return;
    depth++;
  }
}
