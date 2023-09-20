import React, { forwardRef } from 'react';
import { styled } from '../../styled';
import { View } from 'react-native';
import { Text } from '../../Text';

const InputLeftAddonStyled = styled(
  View,
  {
    p: '0.5rem',
    borderRightWidth: 0,
    borderWidth: '$1',
    borderColor: '$muted.300',
    borderRadius: '$sm',
    alignItems: 'center',
    justifyContent: 'center',
    _dark: {
      borderColor: '$muted.700',
      bg: '$muted.800',
    },
  },
  { descendantStyle: ['_text'] }
);

export const InputLeftAddon = forwardRef(
  (
    { children, ...props }: React.ComponentProps<typeof InputLeftAddonStyled>,
    ref?: any
  ) => (
    <InputLeftAddonStyled {...props} ref={ref}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </InputLeftAddonStyled>
  )
);
