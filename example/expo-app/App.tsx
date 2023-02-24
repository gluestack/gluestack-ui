// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import { StyledProvider, styled } from '@dank-style/react';
import { StyledProvider, styled } from '../../packages/react/src/index';
import { config } from './dank.config';

const StyledView = styled(
  View,
  {
    borderRadius: 9999,
    justifyContent: 'center',
    alignItems: 'center',
    h: 100,
    w: 100,
    position: 'relative',
    bg: '$primary600',

    variants: {
      size: {
        md: {
          w: '$12',
          h: '$12',
          bg: '$red500',

          _badge: {
            w: 14,
            h: 14,
          },

          _text: {
            fontSize: 17,
          },
        },
      },
    },

    defaultProps: {
      size: 'md',
    },
  },
  {
    descendantStyle: ['_badge', '_text'],
    DEBUG: 'AVATAR',
  }
);

// console.log(StyledView, 'styled view here');

// console.timeEnd('make view');

const StyledText = styled(Text, { color: '$red400' }, {});
export default function App() {
  return (
    <StyledProvider config={config}>
      <View style={styles.container}>
        <StyledView></StyledView>
        <StyledText>Hello world 2</StyledText>
      </View>
    </StyledProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
