import React, { forwardRef } from 'react';
import { styled } from '../../styled';
import { View } from 'react-native';
import { Text } from '../../Text';

const InputRightAddonStyled = styled(
  View,
  {
    p: '0.5rem',
    borderLeftWidth: 0,
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

export const InputRightAddon = forwardRef(
  (
    { children, ...props }: React.ComponentProps<typeof InputRightAddonStyled>,
    ref?: any
  ) => (
    <InputRightAddonStyled {...props} ref={ref}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </InputRightAddonStyled>
  )
);
