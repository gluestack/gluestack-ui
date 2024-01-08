import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import './global.css';
import { styled } from '@gluestack-style/nativewind';
const Button = styled(Pressable, {
  variants: {
    variant: {
      primary: 'bg-blue-500',
      secondary: 'bg-red-500',
    },
  },
});

export default function App() {
  return (
    <View className="flex-1 bg-red-500 items-center justify-center">
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button className="p-4" variant="primary">
        <Text>Hello</Text>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}
