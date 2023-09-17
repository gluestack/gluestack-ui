import { Root } from './styled-components';
import { Text } from '../Text';
import { createLink } from '@gluestack-ui/link';
import { forwardRef } from 'react';
import React from 'react';
import { usePropResolution } from '../../hooks/usePropResolution';

const AccessibleLink = createLink({
  Root,
  Text,
});

export const Link = forwardRef(
  (
    { children, ...props }: React.ComponentProps<typeof AccessibleLink>,
    ref?: any
  ) => {
    const resolvedProps = usePropResolution(props);
    return (
      <AccessibleLink {...resolvedProps} ref={ref}>
        {typeof children === 'string' ? (
          <AccessibleLink.Text>{children}</AccessibleLink.Text>
        ) : (
          children
        )}
      </AccessibleLink>
    );
  }
);
