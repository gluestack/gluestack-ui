import React from 'react';
import { styled } from '@gluestack-style/react';
import { View } from 'react-native';

const Box = styled(
  View,
  {
    baseStyle: {
      style: {
        display: 'inline-block',
        width: 100,
        height: 100,
        backgroundColor: '$gray400',
        textAlign: 'center',
        lineHeight: 1,
        fontSize: 100,
      },
    },
  },
  {},
  {}
);

export default function App() {
  return (
    <>
      <h1>UI Styled</h1>
      {Array(500)
        .fill(1)
        .map((_, i) => (
          <Box sx={{ style: { margin: i + 'px' } }} key={i}>
            {i}
          </Box>
        ))}
    </>
  );
}
