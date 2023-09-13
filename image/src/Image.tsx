import React, { forwardRef, useCallback, useRef, useState } from 'react';

export const Image = (StyledImage: any) =>
  forwardRef(({ ...props }: any, ref?: any) => {
    const { source, src, alt, ...resolvedProps } = props;

    const finalSource: any = useRef(null);

    const getSource = useCallback(() => {
      if (source) {
        finalSource.current = source;
      } else if (src) {
        finalSource.current = { uri: src };
      }
      return finalSource.current;
    }, [source, src]);

    const [renderedSource, setSource] = useState(getSource());

    React.useEffect(() => {
      setSource(getSource());
      return () => {
        finalSource.current = null;
      };
    }, [source, src, getSource]);

    if (typeof alt !== 'string') {
      console.warn('Please pass alt prop to Image component');
    }

    return (
      <StyledImage
        source={renderedSource}
        accessibilityLabel={alt}
        accessibilityRole={props?.accessibilityRole || 'image'}
        alt={alt}
        {...resolvedProps}
        ref={ref}
      />
    );
  });
