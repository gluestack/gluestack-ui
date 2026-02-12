import React, { useCallback } from 'react';
import { useImageViewer } from './Context';

export const ImageViewerCloseButton = <T extends object>(
  CloseButton: React.ComponentType<T>
) => {
  return React.forwardRef<React.ComponentRef<typeof CloseButton>, T>(
    function ImageViewerCloseButtonComponent(props, ref) {
      const { close } = useImageViewer();

      const handlePress = useCallback(() => {
        close();
      }, [close]);

      return <CloseButton ref={ref} onPress={handlePress} {...props} />;
    }
  );
};
