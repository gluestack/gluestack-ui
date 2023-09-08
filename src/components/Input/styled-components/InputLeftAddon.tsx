import React, { forwardRef } from 'react';
import { styled } from '../../styled';
import { View } from 'react-native';
import { Text } from '../../Text';

const InputLeftAddonStyled = styled(View, {
  p: '0.5rem',
  borderRightWidth: 0,
  borderWidth: '$1',
  borderColor: '$muted.300',
  borderRadius: '$sm',
});

export const InputLeftAddon = forwardRef(
  (
    { children, ...props }: Parameters<typeof InputLeftAddonStyled>[0],
    ref?: any
  ) => (
    <InputLeftAddonStyled {...props} ref={ref}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </InputLeftAddonStyled>
  )
);
