import React from 'react';

import { Pressable, Text } from 'react-native';
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
    _icon: {
      props: {
        color: '$blue500',
      },
    },
  },
  {
    descendantStyle: ['_icon'],
  }
);

const StyledIcon = styled(
  Text,
  {
    color: 'red',
  },
  {
    ancestorStyle: ['_icon'],
    DEBUG: 'STYLED_ICON',
  }
);

const MyText = styled(
  StyledIcon,
  {
    props: {
      color: '$white',
    },
  },
  {
    // ancestorStyle: ['_icon'],
    DEBUG: 'MYTEXT',
  }
);
// const StyledIcon = styled(
//   AsForwarder,
//   {},
//   {
//     ancestorStyle: ['_icon'],
//     DEBUG: 'FORWARDER ICON',
//   }
// );

// const AddIcon = createIcon({
//   Root: StyledIcon,
//   viewBox: '0 0 24 24',
//   d: 'M13.25 10.75V2H10.75V10.75H2V13.25H10.75V22H13.25V13.25H22V10.75H13.25Z',
// });

// AddIcon.displayName = 'AddIcon';

export function ContextBasedStyles() {
  return (
    <Wrapper>
      <StyledButton>
        {/* <StyledIcon as={MyText} color="$amber500">
          Text
        </StyledIcon> */}
        <MyText color="$amber400">Text</MyText>
      </StyledButton>
    </Wrapper>
  );
}

export default ContextBasedStyles;
