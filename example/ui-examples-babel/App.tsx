/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { config } from './gluestack-ui.config';
import './styles';
import { StyledProvider } from '@gluestack-style/react';
import { styled } from './src/core/styled';

const Box = styled(View, {
  bg: '$red500',
  padding: '$10',
});

export default function App() {
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
            sx={{
              bg: '$amber500',
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
