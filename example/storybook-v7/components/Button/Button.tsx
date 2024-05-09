import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

interface MyButtonProps {
  onPress: () => void;
  text: string;
}

export const MyButton = ({ onPress, text }: MyButtonProps) => {
  return (
    <>
      <View className="bg-blue-500">
        <Text>dfhgfhgfh</Text>
      </View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: 'purple',
    alignSelf: 'flex-start',
    borderRadius: 8,
  },
  text: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});
