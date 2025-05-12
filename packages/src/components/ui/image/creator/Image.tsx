import React, { forwardRef } from 'react';

export const Image = (StyledImage: any) =>
  forwardRef(({ ...props }: any, ref?: any) => {
    // Assuming props is an object with a 'source' property
    let source = props.source;
    if (typeof source === 'number') {
      // Handle case where source is a number
    } else if (!props.source.uri) {
      // Check if source.uri is not defined or falsy
      source = {
        uri: props.source.default ? props.source.default.src : props.source,
        // If so, set source to an object with a 'uri' property
        // Use a ternary operator to check if props.source.default exists,
        // and if so, use its 'src' property, otherwise, use the original source
      };
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
