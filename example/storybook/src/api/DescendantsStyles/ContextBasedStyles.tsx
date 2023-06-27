import React, { useState } from 'react';

import { Pressable, Text } from 'react-native';
import { AsForwarder, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { AddIcon, Icon } from '@gluestack/design-system';

const StyledButton = styled(
  Pressable,
  {
    'borderRadius': '$sm',
    'backgroundColor': '$primary500',
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',

    '_text': {
      props: {
        color: '$blue500',
        margin: '8px',
      },
    },

    '_icon': {
      props: {
        color: '$blue500',
      },
    },

    ':disabled': {
      opacity: 0.4,
    },
  },
  {
    descendantStyle: ['_text', '_spinner', '_icon'],
    ancestorStyle: ['_button'],
  }
);

const StyledIcon = styled(
  AsForwarder,
  {},
  {
    // ancestorStyle: ['_icon'],
  },
  {
    // propertyTokenMap: {
    //   stroke: 'colors',
    // },
  }
);

const StyledButtonText = styled(
  Text,
  {
    color: '$red800',
    fontWeight: '700',
  },
  { ancestorStyle: ['_text'] }
);

export function ContextBasedStyles({ ...args }) {
  const [state, setState] = useState(false);
  return (
    <Wrapper>
      <StyledButton
        {...args}
        onPress={() => {
          setState(!state);
        }}
      >
        <StyledButtonText color="red">
          Hello hello {state ? 'true' : 'false'}
        </StyledButtonText>
        <StyledIcon as={AddIcon} color="red">
          Hello icons
        </StyledIcon>
      </StyledButton>
    </Wrapper>
  );
}

export default ContextBasedStyles;
