import React, { useCallback } from 'react';
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
import { cssInterop } from 'nativewind';
import { headingStyle } from './styles';

const Heading = ({ className, size = 'lg', as: AsComp, ...props }: any) => {
  const MappedHeading = useCallback(
    () => {
      switch (size) {
        case '5xl':
        case '4xl':
        case '3xl':
          cssInterop(H1, { className: 'style' });
          return (
            <H1
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case '2xl':
          cssInterop(H2, { className: 'style' });
          return (
            <H2
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case 'xl':
          cssInterop(H3, { className: 'style' });
          return (
            <H3
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case 'lg':
          cssInterop(H4, { className: 'style' });
          return (
            <H4
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case 'md':
          cssInterop(H5, { className: 'style' });
          return (
            <H5
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        case 'sm':
        case 'xs':
          cssInterop(H6, { className: 'style' });
          return (
            <H6
              className={headingStyle({ size, class: className })}
              {...props}
            />
          );
        default:
          cssInterop(H4, { className: 'style' });
          return (
            <H4
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
