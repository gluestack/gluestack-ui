import React, { forwardRef } from 'react';
// @ts-ignore
import { ExitAnimationContext } from '@gluestack-ui/overlay';
// import { ExitAnimationContext } from '../../primitives/Overlay/ExitAnimationContext';
import { Transition } from './Transition';
// import type { IPresenceTransitionProps } from './types';
// import { useHasResponsiveProps } from '../../@gluestack-ui/hooks/useHasResponsiveProps';

const PresenceTransition = (
  { visible = false, onTransitionComplete, ...rest }: any,
  ref?: any
) => {
  // const [animationExited, setAnimationExited] = React.useState(!visible);

  const { setExited }: any = React.useContext(ExitAnimationContext);

  return (
    <Transition
      visible={visible}
      onTransitionComplete={(state: any) => {
        if (state === 'exited') {
          setExited(true);
        } else {
          setExited(false);
        }
        onTransitionComplete && onTransitionComplete(state);
      }}
      {...rest}
      ref={ref}
    />
  );
};

export default forwardRef(PresenceTransition);
