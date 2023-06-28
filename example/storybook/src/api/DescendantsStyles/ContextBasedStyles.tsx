import React from 'react';

import { Pressable, Text } from 'react-native';
import { AsForwarder, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { AddIcon } from '@gluestack/design-system';

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
  AsForwarder,
  {},
  {
    ancestorStyle: ['_icon'],
    DEBUG: 'FORWARDER ICON',
  }
);

export function ContextBasedStyles() {
  return (
    <Wrapper>
      <StyledButton>
        <StyledIcon as={AddIcon} color="$amber500" />
      </StyledButton>
    </Wrapper>
  );
}

export default ContextBasedStyles;
