import React from 'react';
import { Text, View, Pressable } from 'react-native';
import {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetBackdrop,
  ActionsheetItemText,
  ActionsheetDragIndicator,
} from './index';
import { cssInterop } from 'nativewind';
import { useState } from 'react';
cssInterop(Pressable, { className: 'style' });

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handlePress = () => {
    setIsOpen(true);
  };
  return (
    <>
      <View
        className="flex-1 justify-center items-center mt-96"
        style={{
          marginTop: 96,
        }}
      >
        <Pressable onPress={handlePress}>
          <Text>Hello</Text>
        </Pressable>
      </View>

      <Actionsheet
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        onOpen={() => {
          setIsOpen(true);
        }}
      >
        <ActionsheetBackdrop />

        <ActionsheetContent className="pl-8">
          <ActionsheetDragIndicator />
          <ActionsheetItem>
            <ActionsheetItemText>Awesome 🎉</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem
            onPress={() => {
              setIsOpen(false);
            }}
          >
            <ActionsheetItemText>Close</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  );
}
