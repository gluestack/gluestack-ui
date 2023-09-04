import React from 'react';
import { View } from 'react-native';
import { config } from './gluestack-ui.config';
import { styled, StyledProvider } from '../../packages/react';
// import { Box, Heading } from './src/core';

const Box = styled(View, {
  bg: '$primary100',
  h: '$10',
  w: '$10',
});

export default function App() {
  return (
    <>
      {/* gluestack-ui provider */}
      <StyledProvider config={config.theme}>
        <Box bg="$red500" />
      </StyledProvider>
    </>
  );
}
