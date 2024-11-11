export declare const useHover: () => {
  hoverProps: {
    onHoverIn: () => void;
    onHoverOut: () => void;
  };
  isHovered: boolean;
};
export declare const useFocus: () => {
  focusProps: {
    onFocus: () => void;
    onBlur: () => void;
  };
  isFocused: boolean;
};
export declare const useIsPressed: () => {
  pressableProps: {
    onPressIn: () => void;
    onPressOut: () => void;
  };
  isPressed: boolean;
};
export declare const usePressed: (
  onPressIn: () => any,
  onPressOut: () => any
) =>
  | {
      pressEvents: {
        onMouseDown: () => any;
        onMouseUp: () => any;
        onTouchStart: () => any;
        onTouchEnd: () => any;
        onPressIn?: undefined;
        onPressOut?: undefined;
      };
    }
  | {
      pressEvents: {
        onPressIn: () => any;
        onPressOut: () => any;
        onMouseDown?: undefined;
        onMouseUp?: undefined;
        onTouchStart?: undefined;
        onTouchEnd?: undefined;
      };
    };
export {
  keyboardDismissHandlerManager,
  useKeyboardDismissable,
  useBackHandler,
} from './useKeyboardDismisssable';
