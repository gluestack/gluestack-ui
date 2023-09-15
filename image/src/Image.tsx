import React, { forwardRef } from 'react';

export const Image = (StyledImage: any) =>
  forwardRef(({ ...props }: any, ref?: any) => {
    let source = props.source;
    if (!props.source.uri) {
      source = {
        uri: props.source.default ? props.source.default.src : props.source,
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
        accessibilityLabel={props?.accessibilityLabel || alt}
        accessibilityRole={props?.accessibilityRole || 'image'}
        alt={alt}
        ref={ref}
      />
    );
  });
