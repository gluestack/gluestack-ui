import { useState } from 'react';

export const useIsPressProps = () => {
  const [isPressed, setIsPressed] = useState(false);
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
    isPressed,
  };
};
