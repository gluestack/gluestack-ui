import React, { forwardRef } from 'react';
import { View } from 'react-native';

export const OverlayAnimatePresence = forwardRef(
  ({ children, visible = false, onExit }: any, ref?: any) => {
    const prevVisible = React.useRef(visible);

    React.useEffect(() => {
      if (prevVisible.current !== visible && !visible) {
        onExit();
      }
      prevVisible.current = visible;
    }, [visible, onExit]);

    if (!visible) {
      return null;
    }

    return <View ref={ref}>{children}</View>;
  }
);
