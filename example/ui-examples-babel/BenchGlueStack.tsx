/* initialized with npx gluestack-ui@latest */
import { View } from 'react-native';
import { styled, StyledProvider } from '@gluestack-style/react';
import React from 'react';
import { config } from './gluestack-ui.config';
import { Button, GluestackUIProvider } from './gluestack-components';

// const Box = styled(View, {
//   bg: '$yellow500',
//   p: '$2',
//   m: '$1',
// });

const Gluestack = () => {
  return (
    <GluestackUIProvider config={config.theme}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {new Array(1000).fill(0).map((_, i) => (
          <Button
            key={i}
            sx={
              {
                // bg: '$amber500',
                // p: '$2',
                // m: '$1',
                // _dark: {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // ":hover": {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // ":active": {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // ":focused": {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // _text: {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // _icon: {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
                // _spinner: {
                //   bg: "$amber500",
                //   p: "$2",
                //   m: "$1",
                // },
              }
            }
          />
        ))}
      </View>
    </GluestackUIProvider>
  );
};

export default Gluestack;
