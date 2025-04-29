export function composeEventHandlers<E>(...args: (null | undefined | ((event: E) => void))[]) {
  return function handleEvent(event: E) {
    try {
      for (let i = 0; i < args.length; i++) {
        args[i]?.(event);
      }
    } catch (e) {
      //
    }
  };
}
