import { HoverProps } from '@react-aria/interactions';
import { useState } from 'react';

export const useHover = (_props?: HoverProps, _ref?: any) => {
  const [isHovered, setHovered] = useState(false);
  let params = {
    hoverProps: {
      onHoverIn: () => setHovered(true),
      onHoverOut: () => setHovered(false),
    },
    isHovered,
  };

  return params;
};
