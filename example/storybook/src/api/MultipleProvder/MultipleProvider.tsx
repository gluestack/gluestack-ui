import React, { memo } from 'react';
import { View, Pressable, Text } from 'react-native';
import { styled } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { get, set } from '@gluestack-style/react';

const StyleView = memo(
  styled(
    View,
    {
      w: 100,
      h: 100,
      bg: '$red500',

      _dark: {
        bg: '$info600',
      },
    },
    {}
  )
);

export function MultipleProvider() {
  const [currentColorMode, setCurrentColorMode] = React.useState(get());

  return (
    <Wrapper colorMode={currentColorMode}>
      <Wrapper>
        <Pressable
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
        </Pressable>
        <StyleView />
      </Wrapper>
    </Wrapper>
  );
}
export default MultipleProvider;
