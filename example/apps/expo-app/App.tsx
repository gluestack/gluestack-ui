import React from 'react';
import { SafeAreaView } from 'react-native';
import {
  GluestackUIProvider,
  Button,
  ButtonText,
  Center,
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
export default function App() {
  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
      }}
    >
      <GluestackUIProvider config={config}>
        <Center flex={1}>
          <Button>
            <ButtonText>Hello</ButtonText>
          </Button>
        </Center>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}
