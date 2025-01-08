import React, { forwardRef } from 'react';
import { ImageViewerContext } from './ImageViewerContext';
import { useAnimatedStyle } from 'react-native-reanimated';

const ImageViewerBackdrop = (StyledImageViewerBackdrop: any) =>
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const { scale } = React.useContext(ImageViewerContext);
    const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity: scale,
      };
    });

    return (
      <StyledImageViewerBackdrop
        {...props}
        ref={ref}
        className={props.className}
        style={[animatedStyle]}
      >
        {children}
      </StyledImageViewerBackdrop>
    );
  });

export default ImageViewerBackdrop;
