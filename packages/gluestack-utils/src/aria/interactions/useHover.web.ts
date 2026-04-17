import { useHover as useHoverWeb, HoverProps, HoverResult } from '@react-aria/interactions';
import { useEffect } from 'react';
import { attachEventHandlersOnRef } from '../utils';

export const useHover = (props = {} as HoverProps, ref?: any): HoverResult => {
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
