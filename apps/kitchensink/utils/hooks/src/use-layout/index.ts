import { useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';

export const useLayout = () => {
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });
  return {
    onLayout: (e: LayoutChangeEvent) => {
      setLayout(e.nativeEvent.layout);
    },
    layout,
  };
};
