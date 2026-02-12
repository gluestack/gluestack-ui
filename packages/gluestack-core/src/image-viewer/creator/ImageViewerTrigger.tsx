import React, { useCallback } from 'react';
import { useImageViewer } from './Context';

export const ImageViewerTrigger = <T extends object>(
  Trigger: React.ComponentType<T>
) => {
  return React.forwardRef<React.ComponentRef<typeof Trigger>, T>(
    function ImageViewerTriggerComponent(props, ref) {
      const { open } = useImageViewer();

      const handlePress = useCallback(() => {
        open();
      }, [open]);

      return <Trigger ref={ref} onPress={handlePress} {...props} />;
    }
  );
};
