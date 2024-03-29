'use client';

import React, { useCallback } from 'react';
import { headingStyle } from './styles';

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
