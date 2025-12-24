'use client';
import React from 'react';
import Animated, { FadeOut } from 'react-native-reanimated';
import { AlertDialogContext } from '@gluestack-ui/core/alert-dialog/creator';

interface AnimatePresenceProps {
  children: React.ReactNode;
}

export const AnimatePresence = ({ children }: AnimatePresenceProps) => {
  const { visible } = React.useContext(AlertDialogContext);
  const [shouldRender, setShouldRender] = React.useState(visible);

  React.useEffect(() => {
    if (visible) {
      setShouldRender(true);
    } else {
      // Delay unmounting to allow exit animation to complete
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!shouldRender) {
    return null;
  }

  return <>{children}</>;
};

AnimatePresence.displayName = 'AnimatePresence';
