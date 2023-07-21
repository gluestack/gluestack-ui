import React from 'react';

import { Pressable, Text, View } from 'react-native';
import { AsForwarder, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
// import { AddIcon } from '@gluestack/design-system';
import { createIcon } from '@gluestack-ui/icon';
import { Svg } from 'react-native-svg';

const Box = styled(View, {
  bg: '$red500',
  width: '100px',
  height: '100px',
});

export function ContextBasedStyles() {
  return (
    <Wrapper>
      <Box sx={{ bg: '$amber500' }} />
    </Wrapper>
  );
}

export default ContextBasedStyles;
