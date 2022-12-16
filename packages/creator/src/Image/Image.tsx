import React, { forwardRef, useRef, useCallback, useState } from 'react';

export const Image = ({ StyledImage, StyledImageFallbackText }: any) =>
  forwardRef(
    (
      {
        // children,
        source,
        src,
        fallbackElement,
        alt,
        fallbackSource,
        ignoreFallback,
        ...props
      }: any,
      ref: any
    ) => {
      const finalSource: any = useRef(null);

      const getSource = useCallback(() => {
        if (source) {
          finalSource.current = source;
        } else if (src) {
          finalSource.current = { uri: src };
        }
        return finalSource.current;
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [source?.uri, src]);

      const [renderedSource, setSource] = useState(getSource());
      const [alternate, setAlternate] = useState(false);
      const [fallbackSourceFlag, setfallbackSourceFlag] = useState(true);

      React.useEffect(() => {
        setSource(getSource());
        return () => {
          finalSource.current = null;
        };
      }, [source?.uri, src, getSource]);

      const onImageLoadError = useCallback(
        (event: any) => {
          props.onError && props.onError(event);
          console.warn(event.nativeEvent.error);
          if (
            !ignoreFallback &&
            fallbackSource &&
            fallbackSource !== renderedSource &&
            fallbackSourceFlag
          ) {
            setfallbackSourceFlag(false);
            setSource(fallbackSource);
          } else {
            setAlternate(true);
          }
        },
        [
          fallbackSource,
          fallbackSourceFlag,
          ignoreFallback,
          props,
          renderedSource,
        ]
      );

      if (typeof alt !== 'string') {
        console.warn('Please pass alt prop to Image component');
      }

      if (alternate) {
        if (fallbackElement) {
          if (React.isValidElement(fallbackElement)) {
            return fallbackElement;
          }
        } else return <StyledImageFallbackText>{alt}</StyledImageFallbackText>;
      }

      return (
        <StyledImage
          source={renderedSource}
          accessibilityLabel={alt}
          alt={alt}
          {...props}
          onError={onImageLoadError}
          ref={ref}
        />
      );
    }
  );
