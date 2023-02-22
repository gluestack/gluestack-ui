// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';

import { StyledProvider, styled } from '@dank-style/react';
import { config } from './dank.config';

const StyledView = styled(
  Switch,
  {
    'onthumbColor': '$muted50',
    'offThumbColor': '$muted50',
    'offTrackColor': '$muted300',
    'onTrackColor': '$primary600',

    'variants': {
      size: {
        sm: {
          transform: [
            {
              scale: 0.75,
            },
          ],
        },

        md: {},

        lg: {
          transform: [
            {
              scale: 1.25,
            },
          ],

          margin: 1,
        },
      },
    },

    'defaultProps': {
      size: 'md',
    },
    ':disabled': {
      opacity: 0.4,
    },
    //@ts-ignore
    ':invalid': {
      borderColor: '$error600',
      borderWidth: 2,
      borderRadius: 12,
    },
    ':hover': {
      //@ts-ignore
      offTrackColor: '$muted400',
      onTrackColor: '$primary700',
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
