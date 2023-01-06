// import { StatusBar } from "expo-status-bar";
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeNavigation } from '@gluestack/docs/navigation/native';
import { Provider } from '@gluestack/docs/provider';
// import { Button } from "ui";
// import { ButtonExpo } from "./button-expo";

export default function App() {
  return (
    <Provider>
      <SafeAreaView style={{ flex: 1 }}>
        <NativeNavigation></NativeNavigation>
      </SafeAreaView>
    </Provider>
  );
}
