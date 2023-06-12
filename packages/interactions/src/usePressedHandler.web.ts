export const usePressedHandler = (
  onPressIn: () => any,
  onPressOut: () => any
) => {
  return {
    pressEvents: {
      onMouseDown: onPressIn,
      onMouseUp: onPressOut,
      onTouchStart: onPressIn,
      onTouchEnd: onPressOut,
    },
  };
};
