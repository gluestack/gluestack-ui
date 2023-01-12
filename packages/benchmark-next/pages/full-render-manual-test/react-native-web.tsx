import React from 'react';
import { View } from 'react-native';

const Box = (props: any) => {
  return (
    <View
      display="inline-block"
      width="100"
      height="100"
      backgroundColor="gray.100"
      textAlign="center"
      lineHeight={1}
      fontSize="100px"
      {...props.css}
    >
      {props.children}
    </View>
  );
};

export default function App() {
  return (
    <>
      <h1>React native web</h1>
      {Array(500)
        .fill(1)
        .map((_, i) => (
          <Box css={{ margin: i + 'px' }} key={i}>
            {i}
          </Box>
        ))}
    </>
  );
}
