import React from 'react';

import { Pressable, Text, TextInput } from 'react-native';
import { AsForwarder, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
// import { AddIcon } from '@gluestack/design-system';
import { createIcon } from '@gluestack-ui/icon';
import { Svg } from 'react-native-svg';

const StyledButton = styled(
  Pressable,
  {
    backgroundColor: '$primary500',
    p: '$2',
    // _icon: {
    //   props: {
    //     color: '$blue500',
    //   },
    // },
  },
  {
    descendantStyle: ['_icon'],
  }
);

const StyledIcon = styled(
  Text,
  {
    color: 'red',
    props: {
      placeholderTextColor: 'red',
    },
    _dark: {
      props: {
        placeholderTextColor: 'red',
      },
    },
  },
  {
    // ancestorStyle: ['_icon'],
    DEBUG: 'STYLED_ICON',
  }
);

const MyText = styled(
  StyledIcon,
  {
    color: 'blue',
    bg: '$amber400',
    // props: {
    //   color: '$white',
    // },
  },
  {
    // ancestorStyle: ['_icon'],
    DEBUG: 'MYTEXT',
  }
);

const MyTextForward = styled(
  AsForwarder,
  {
    color: 'yellow',
    // props: {
    //   color: '$white',
    // },
  },
  {
    // ancestorStyle: ['_icon'],
    DEBUG: 'MYTEXT',
  }
);

export function ContextBasedStyles() {
  return (
    <Wrapper>
      <StyledButton>
        <MyText>hello</MyText>
        {/* <StyledIcon as={MyText}>Text</StyledIcon>
        <MyText as={StyledIcon}>Text</MyText> */}
        {/* <MyTextForward as={StyledIcon}>Text</MyTextForward> */}
        {/* <MyText>Text</MyText> */}
      </StyledButton>
    </Wrapper>
  );
}

export default ContextBasedStyles;
