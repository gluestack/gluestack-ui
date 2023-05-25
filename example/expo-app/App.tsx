// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import { StyledProvider, styled } from '../../packages/react/src/index';
import { config } from './dank.config';

const StyledView = styled(
  TextInput,
  {
    p: '$2',
    // @ts-ignore
    multiline: true,
    textAlignVertical: 'top',
    h: 100,
    w: 300,
    outlineColor: '$primary600',
  },
  { ancestorStyle: ['_input'] }
);

// console.log(StyledView, 'styled view here');

// console.timeEnd('make view');

// const StyledText = styled(Text, { color: '$red400' }, {});
export default function App() {
  return (
    <StyledProvider config={config}>
      <View style={styles.container}>
        <StyledView placeholder="hello"></StyledView>
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
