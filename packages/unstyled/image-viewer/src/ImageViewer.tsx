import React, { forwardRef } from 'react';
import { ImageViewerContext } from './ImageViewerContext';

const ImageViewer = (StyledRoot: any) =>
  forwardRef(({ children, isOpen, onClose, ...props }: any, ref?: any) => {
    const [scale, setScale] = React.useState(1);

    const contextValue = React.useMemo(() => {
      return {
        onClose,
        isOpen,
        scale,
        setScale,
      };
    }, [onClose, isOpen, scale]);

    return (
      <ImageViewerContext.Provider value={contextValue}>
        <StyledRoot
          visible={isOpen}
          onRequestClose={onClose}
          transparent={true}
          animationType="fade"
          {...props}
          ref={ref}
          className={props.className}
        >
          {children}
        </StyledRoot>
      </ImageViewerContext.Provider>
    );
  });

export default ImageViewer;
