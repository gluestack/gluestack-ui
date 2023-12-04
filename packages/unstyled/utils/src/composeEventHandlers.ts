export function composeEventHandlers<E>(
  originalEventHandler?: null | ((event: E) => void),
  ourEventHandler?: (event: E) => void
) {
  return function handleEvent(event: E) {
    try {
      originalEventHandler?.(event);
      ourEventHandler?.(event);
    } catch (e) {
      //
    }
  };
}
