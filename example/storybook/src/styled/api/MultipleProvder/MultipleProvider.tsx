import React, { memo } from 'react';
import { View, Pressable, Text, TextInput } from 'react-native';
import { StyledProvider, styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { get, set } from '@gluestack-style/react';
import { AppProvider } from '@gluestack/design-system';
import { config } from '../../components/nb.config';

const StyleView = styled(
  Pressable,
  {
    _text: {
      // fontWeight: '$normal',
      // textDecorationLine: 'underline',
      // color: '$info700',
      // cursor: 'pointer',
    },

    variants: {
      variant: {
        test: {
          bg: '$amber100',
        },
        test2: {
          bg: '$amber100',
        },
      },
      size: {
        test: {
          bg: '$amber100',
        },
        test2: {
          bg: '$amber100',
        },
      },
    },
  },
  {
    descendantStyle: ['_text'],
    // DEBUG: 'STYLEVIEW1',
  }
);

const StyleText = styled(
  TextInput,
  {
    color: '$textLight700',
  },
  {
    ancestorStyle: ['_text'],
    // DEBUG: 'STYLETEXT1',
  }
);

const StyleView2 = styled(
  Pressable,
  {
    _text: {
      fontWeight: '$normal',
      textDecorationLine: 'underline',
      color: '$info700',
      cursor: 'pointer',
    },
  },
  {
    descendantStyle: ['_text'],
    // DEBUG: 'STYLEVIEW2',
  }
);

const StyleText2 = styled(
  Text,
  {
    color: '$textLight700',
  },
  {
    ancestorStyle: ['_text'],
    // DEBUG: 'STYLETEXT2',
  }
);

export function MultipleProvider() {
  const [currentColorMode, setCurrentColorMode] = React.useState(get());

  return (
    <Wrapper colorMode={'dark'}>
      <StyleView>
        <StyleText>Hello</StyleText>
      </StyleView>
      <AppProvider colorMode="dark">
        {/* <Pressable
          style={{
            backgroundColor: 'gray',
            padding: 12,
            marginBottom: 12,
          }}
          onPress={() => {
            // set(get() === 'dark' ? 'light' : 'dark');
            setCurrentColorMode(currentColorMode === 'dark' ? 'light' : 'dark');
          }}
        >
          <Text style={{ color: 'white' }}>
            Toggle {currentColorMode === 'dark' ? 'light' : 'dark'}
          </Text>
        </Pressable> */}

        <StyleView2>
          <StyleText2>Hello</StyleText2>
        </StyleView2>
      </AppProvider>
    </Wrapper>
  );
}
export default MultipleProvider;
