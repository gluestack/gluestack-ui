/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { config } from './gluestack-ui.config';
import './styles';
import { StyledProvider } from '../../packages/react';
import { Box, Heading } from './src/core';

const bg = '$40';
const abc = '$pink500';
export default function App() {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  console.log(hover, active, '+++');
  return (
    <>
      {/* top SafeAreaView */}
      <SafeAreaView />
      {/* bottom SafeAreaView */}
      <SafeAreaView
        style={{
          ...styles.container,
        }}
      >
        {/* gluestack-ui provider */}
        <StyledProvider config={config.theme}>
          <Box
            onHoverIn={() => setHover(true)}
            onHoverOut={() => setHover(false)}
            onPressIn={() => setActive(true)}
            onPressOut={() => setActive(false)}
            states={{
              hover,
              active,
            }}
            bg={{}}
            sx={{
              bg: '$red500',
            }}
          />
        </StyledProvider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
});
