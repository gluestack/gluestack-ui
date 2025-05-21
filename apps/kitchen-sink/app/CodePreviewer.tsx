import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

type CodePreviewerProps = {
  children: (props: { [key: string]: any }) => React.ReactNode;
  props: {
    [key: string]: {
      options: string[];
      defaultValue: string;
    };
  };
};

export const CodePreviewer = ({ children, props }: CodePreviewerProps) => {
  // Initialize state for each option dynamically
  const initialState = Object.keys(props).reduce(
    (acc, key) => {
      acc[key] = props[key].defaultValue;
      return acc;
    },
    {} as { [key: string]: string },
  );

  const [selectedValues, setSelectedValues] = useState(initialState);

  const handleChange = (type: string, value: string) => {
    setSelectedValues((prev) => ({ ...prev, [type]: value }));
  };

  return (
    <View className="p-4">
      <Text className="text-lg font-semibold">Component Preview</Text>

      {/* Loop through the props dynamically and render select options */}
      {Object.keys(props).map((key) => (
        <View key={key} className="mt-4">
          <Text className="mb-2">Select {key}:</Text>
          <View className="border p-2 rounded">
            {props[key].options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => handleChange(key, option)}
                className="p-2"
              >
                <Text className="text-black">{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      {/* Rendering the children with updated props */}
      {children(selectedValues)}
    </View>
  );
};

export default CodePreviewer;
