import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styled } from '@dank-style/react';
import { Wrapper } from '../../components/Wrapper';

const StyledButton = styled(
  View,
  {
    'borderRadius': 4,
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    'm': 12,
    'backgroundColor': '$red400',
    'padding': '$3',

    // '@sm': {
    //   'bg': '$blue400',
    //   ':hover': {
    //     bg: '$purple500',
    //   },
    // },

    // 'variants': {
    //   variant: {
    //     redbox: {
    //       borderRadius: 12,
    //     },
    //   },
    // },

    // 'defaultProps': {},

    '_text': {
      color: '$blue400',
    },
    ':hover': {
      bg: '$blue600',
    },
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

const StyledView = styled(
  View,
  {
    'borderRadius': 4,
    'flexDirection': 'row',
    'justifyContent': 'center',
    'alignItems': 'center',
    'm': 12,
    'backgroundColor': '$red400',
    'padding': '$3',

    // '@sm': {
    //   'bg': '$blue400',
    //   ':hover': {
    //     bg: '$purple500',
    //   },
    // },

    // 'variants': {
    //   variant: {
    //     redbox: {
    //       borderRadius: 12,
    //     },
    //   },
    // },

    // 'defaultProps': {},

    '_text': {
      color: '$blue400',
    },
    ':hover': {
      bg: '$blue600',
    },
  },
  {
    descendantStyle: ['_text'],
  }
);
const StyledViewText = styled(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function SxStyleResolution({ ...args }) {
  const [state, setState] = React.useState(false);
  return (
    <Wrapper>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledButton
          {...args}
          // variant="redbox"
          sx={{ bg: '$amber400' }}
        >
          <StyledText>bluebox - sm</StyledText>
        </StyledButton>
        <StyledView
          sx={{
            bg: '$amber400',
            _text: {
              color: '$red500',
            },
          }}

          // states={{ hover: true }}
          // sx={{ bg: state ? '$purple400' : '$yellow400' }}
        >
          <StyledViewText>bluebox - sm</StyledViewText>
        </StyledView>
        {/* <StyledButton>
          <Text>bluebox - md</Text>
        </StyledButton> */}
        <Pressable
          onPress={() => {
            setState(!state);
          }}
        >
          Press me
        </Pressable>
      </View>
    </Wrapper>
  );
}

export default SxStyleResolution;
