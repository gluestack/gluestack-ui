import { useHover as useHoverWeb, HoverProps } from '@react-aria/interactions';
import { useEffect } from 'react';
import { attachEventHandlersOnRef } from '@react-native-aria/utils';

export const useHover = (props = {} as HoverProps, ref?: any) => {
  let params = useHoverWeb(props);
  useEffect(() => {
    ref && ref.current && attachEventHandlersOnRef(params.hoverProps, ref);
  }, []);

  const finalResult = {
    ...params,
    hoverProps: {
      ...params.hoverProps,
      onHoverIn: params.hoverProps.onPointerEnter,
      onHoverOut: params.hoverProps.onPointerLeave,
    },
  };

  return finalResult;
};
