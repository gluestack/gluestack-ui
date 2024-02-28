import React, { forwardRef } from 'react';
import { ExitAnimationContext } from '@gluestack-ui/overlay';
import { Transition } from './Transition';

const PresenceTransition = (
  { visible = false, onTransitionComplete, ...rest }: any,
  ref?: any
) => {
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
