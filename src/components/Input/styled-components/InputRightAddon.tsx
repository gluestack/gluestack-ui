import React, { forwardRef } from 'react';
import { styled } from '../../styled';
import { View } from 'react-native';
import { Text } from '../../Text';

const InputRightAddonStyled = styled(View, {
  p: '0.5rem',
  borderLeftWidth: 0,
  borderWidth: '$1',
  borderColor: '$muted.300',
  borderRadius: '$sm',
});

export const InputRightAddon = forwardRef(
  (
    { children, ...props }: Parameters<typeof InputRightAddonStyled>[0],
    ref?: any
  ) => (
    <InputRightAddonStyled {...props} ref={ref}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </InputRightAddonStyled>
  )
);
