import { useState } from 'react';
import { Platform } from 'react-native';

export const useHover = () => {
  const [isHovered, setHovered] = useState(false);
  return {
    hoverProps: {
      onHoverIn: () => setHovered(true),
      onHoverOut: () => setHovered(false),
    },
    isHovered,
  };
};

export const useFocus = () => {
  const [isFocused, setFocused] = useState(false);
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    isFocused,
  };
};

export const useIsPressed = () => {
  const [isPressed, setIsPressed] = useState(false);
  return {
    pressableProps: {
      onPressIn: () => setIsPressed(true),
      onPressOut: () => setIsPressed(false),
    },
    isPressed,
  };
};

export const usePressed = (onPressIn: () => any, onPressOut: () => any) => {
  if (Platform.OS === 'web') {
    return {
      pressEvents: {
        onMouseDown: onPressIn,
        onMouseUp: onPressOut,
        onTouchStart: onPressIn,
        onTouchEnd: onPressOut,
      },
    };
  }
  return {
    pressEvents: {
      onPressIn,
      onPressOut,
    },
  };
};

export {
  keyboardDismissHandlerManager,
  useKeyboardDismissable,
  useBackHandler,
} from './useKeyboardDismisssable';
