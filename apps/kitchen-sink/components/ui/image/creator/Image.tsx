import React, { forwardRef } from 'react';

export const Image = (StyledImage: any) =>
  forwardRef(({ ...props }: any, ref?: any) => {
    // Assuming props is an object with a 'source' property
    let source = props.source;

    if (!source) {
      console.warn('Image component requires a source prop');
      return null;
    }

    if (typeof source === 'number') {
      // Handle case where source is a number
      source = { uri: source };
    } else if (typeof source === 'object') {
      if (!source.uri) {
        // Check if source.uri is not defined or falsy
        source = {
          uri: source.default ? source.default.src : source,
          // If so, set source to an object with a 'uri' property
          // Use a ternary operator to check if source.default exists,
          // and if so, use its 'src' property, otherwise, use the original source
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
