import React from 'react';

export const ImageViewerContent = <T extends object>(
  Content: React.ComponentType<T>
) => {
  return React.forwardRef<React.ComponentRef<typeof Content>, T>(
    function ImageViewerContentComponent(props, ref) {
      return <Content ref={ref} {...props} />;
    }
  );
};
