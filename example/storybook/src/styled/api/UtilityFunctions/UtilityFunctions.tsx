import React from 'react';
import { createGlobalStylesWeb, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { View, Text } from 'react-native';

const StyledView = styled(
  View,
  {
    w: 200,
    h: 200,
    bg: '$blue500',
  },
  {
    descendantStyle: ['_text'],
  }
);

const StyledText = styled(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function UtilityFunctions() {
  const addGlobalCss = createGlobalStylesWeb({
    '.test': { p: '$8', bg: '$amber400' },
    'body': {
      bg: '$coolGray800',
    },
    '#hash': {
      bg: '$amber700',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <Wrapper
      globalStyles={{
        '.test': { p: '$8', bg: '$amber400' },
        'body': {
          bg: '$coolGray800',
        },
        '#hash': {
          bg: '$amber700',
          alignItems: 'center',
          justifyContent: 'center',
        },
      }}
    >
      <div className="test"></div>
      <StyledView nativeID="hash">
        <StyledText>Hello World</StyledText>
      </StyledView>
    </Wrapper>
  );
}

export default UtilityFunctions;
