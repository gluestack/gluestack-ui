// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { StyledProvider, styled } from '@dank-style/react';
import { config } from './../dank.config';
import React from 'react';
const StyledView = styled(
  View,
  {
    p: '$1',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    bg: undefined,

    variants: {
      size: {
        lg: {
          _icon: {
            height: '$4',
            width: '$4',
          },

          _text: {
            fontSize: '$lg',
          },

          _indicator: {
            h: '$6',
            w: '$6',
          },
        },

        md: {
          _icon: {
            height: '$3',
            width: '$3',
          },

          _text: {
            fontSize: '$md',
          },

          _indicator: {
            h: '$5',
            w: '$5',
          },
        },

        sm: {
          _icon: {
            height: '$2',
            width: '$2',
          },

          _text: {
            fontSize: '$sm',
          },

          _indicator: {
            h: '$4',
            w: '$4',
          },
        },
      },
    },

    defaultProps: {
      //@ts-ignore
      size: 'md',
    },
    //@ts-ignore
    _web: {
      ':disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  {
    descendantStyle: ['_icon', '_text', '_indicator'],
  }
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
