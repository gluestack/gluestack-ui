// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { StyledProvider, styled } from '@dank-style/react';
import { config } from './dank.config';

const StyledView = styled(
  View,
  {
    bg: '$amber900',
    p: '$9',
    props: {
      bg: '$red500',
    },
  },
  {}
);

// console.log(StyledView, 'styled view here');

// console.timeEnd('make view');

const StyledText = styled(Text, {}, {});
export default function App() {
  return (
    <StyledProvider config={config}>
      <View style={styles.container}>
        <StyledView>
          <StyledText>Hello world</StyledText>
        </StyledView>
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
