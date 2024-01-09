import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import './global.css';
import { styled } from '@gluestack-style/nativewind';
const Button = styled(Pressable, {
  variants: {
    variant: {
      primary: 'bg-blue-500 p-10',
      secondary: 'bg-red-500',
    },
    size: {
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      size: 'sm',
      value: 'bg-red-500 p-2',
    },
  ],
});

export default function App() {
  return (
    <View className="flex-1 bg-slate-500  items-center justify-center">
      <Text className="text-white">
        Open up App.tsx to start working on your app!
      </Text>
      <Button variant="primary">
        <Text className="text-white">Hello</Text>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}
