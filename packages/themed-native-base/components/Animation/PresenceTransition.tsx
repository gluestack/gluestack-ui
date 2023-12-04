import React, { forwardRef } from 'react';
import { ExitAnimationContext } from '@gluestack-ui/overlay';
import { Transition } from './Transition';
import type { IPresenceTransitionProps } from './types';

export const PresenceTransition = forwardRef(
  (
    {
      visible = false,
      onTransitionComplete,
      ...rest
    }: IPresenceTransitionProps,
    ref: any
  ) => {
    const { setExited } = React.useContext(ExitAnimationContext);

    return (
      <Transition
        visible={visible}
        onTransitionComplete={(state) => {
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
  }
);
