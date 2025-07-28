import React, { forwardRef } from 'react';

export const Image = (StyledImage: any) =>
  forwardRef(({ ...props }: any, ref?: any) => {
    // Handle different source formats
    let source = props.source;

    if (!source) {
      console.warn('Image component requires a source prop');
      return null;
    }

    if (typeof source === 'number') {
      // Handle case where source is a number (require() result)
      source = source; // Pass the number directly to React Native
    } else if (typeof source === 'object') {
      if (source.uri) {
        if (typeof source.uri === 'number') {
          // Handle case where uri is a require() result
          source = source.uri;
        } else {
          // Regular object with uri string
          source = source;
        }
      } else {
        // Check if source.uri is not defined or falsy
        source = {
          uri: source.default ? source.default.src : source,
        };
      }
    } else if (typeof source === 'string') {
      source = { uri: source };
    }

    const { alt, ...resolvedProps } = props;

    if (typeof alt !== 'string') {
      console.warn('Please pass alt prop to Image component');
    }

    return (
      <StyledImage
        {...resolvedProps}
        source={source}
        aria-label={props?.['aria-label'] || alt}
        role={props?.role || 'img'}
        alt={alt}
        ref={ref}
      />
    );
  });
