import React from 'react';
import { Text, View } from 'react-native';
import { Theme, styled } from '@gluestack-style/react';

const Box = styled(
  View,
  {
    _light: {
      bg: '$amber400',
    },
    p: '$10',
  },
  {
    componentName: 'MyBox',
  }
);

const MyText = styled(Text, {});

export default function TabOneScreen() {
  return (
    <>
      <Box $light-bg="pink" $t_modern-bg="purple" states={{ hover: true }} />
      <MyText fontFamily="$body">hello</MyText>
    </>
  );
}
