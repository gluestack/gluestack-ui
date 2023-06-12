export const usePressedHandler = (
  onPressIn: () => any,
  onPressOut: () => any
) => {
  return {
    pressEvents: {
      onPressIn,
      onPressOut,
    },
  };
};
