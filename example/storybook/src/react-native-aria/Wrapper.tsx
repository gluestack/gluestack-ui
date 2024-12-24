import React from 'react';
import { SafeAreaView } from 'react-native';
import { OverlayProvider } from '@react-native-aria/overlays';
import { SSRProvider } from '@react-native-aria/utils';

export function Wrapper({ children }: any) {
  return (
    <OverlayProvider>
      <SSRProvider>
        <SafeAreaView>{children}</SafeAreaView>
      </SSRProvider>
    </OverlayProvider>
  );
}
