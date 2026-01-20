/* eslint-disable react-hooks/exhaustive-deps */
import React, { forwardRef } from 'react';
import { ExitAnimationContext } from '../../overlay/creator';

export const OverlayAnimatePresence = forwardRef(
  ({ children, visible = false, AnimatePresence }: any, ref?: any) => {
    const [animationState, setAnimationState] = React.useState('');
    const prevVisible = React.useRef(visible);
    const { setExited }: any = React.useContext(ExitAnimationContext);

    React.useEffect(() => {
      if (animationState === 'exited') {
        setExited(true);
      } else if (animationState === 'entered') {
        setExited(false);
      }
    }, [animationState]);

    React.useEffect(() => {
      if (prevVisible.current !== visible && !visible) {
        setAnimationState('exiting');
        // Allow time for exit animation, then mark as exited
        setTimeout(() => setAnimationState('exited'), 200);
      }

      if (visible) {
        setAnimationState('entering');
        // Mark as entered after enter animation
        setTimeout(() => setAnimationState('entered'), 200);
      }
      prevVisible.current = visible;
    }, [visible]);

    if (!AnimatePresence) {
      return visible ? children : null;
    }

    return (
      <AnimatePresence ref={ref}>{visible ? children : null}</AnimatePresence>
    );
  }
);
