'use client';

import React, { useCallback } from 'react';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { headingStyle as headingBaseStyle } from './index';

const headingStyle = tva({
  extend: headingBaseStyle,
  base: 'font-sans tracking-sm my-0 bg-transparent border-0 box-border display-inline list-none margin-0 padding-0 position-relative text-start no-underline whitespace-pre-wrap word-wrap-break-word',
});

const Heading = ({ className, size = 'lg', as: AsComp, ...props }: any) => {
  const MappedHeading = useCallback(
    () => {
      switch (size) {
        case '5xl':
        case '4xl':
        case '3xl':
          return (
            <h1
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case '2xl':
          return (
            <h2
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case 'xl':
          return (
            <h3
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case 'lg':
          return (
            <h4
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case 'md':
          return (
            <h5
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case 'sm':
        case 'xs':
          return (
            <h6
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        default:
          return (
            <h4
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [size]
  );

  if (AsComp) {
    return (
      <AsComp className={headingStyle({ size, class: className })} {...props} />
    );
  }

  return <MappedHeading />;
};

Heading.displayName = 'Heading';

export { Heading };
