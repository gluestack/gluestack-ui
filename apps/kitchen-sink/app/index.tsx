import React from "react";
import { Pressable, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { getAllComponents } from '@/utils/getComponents';

const components = getAllComponents();

export default function ComponentList() {
  const router = useRouter();

  return (
    <ScrollView className="bg-background-0 flex-1 p-4">
      <Heading size="2xl" className="text-typography-900 mb-6">
        GlueStack UI Components
      </Heading>
      <VStack space="lg">
        {components.map((category) => (
          <Box key={category.category}>
            <Heading size="lg" className="text-typography-900 mb-4">
              {category.category}
            </Heading>
            <VStack space="sm">
              {category.components.map((component) => (
                <Pressable
                  key={component.name}
                  onPress={() => router.push(`components/${component.path}`)}
                >
                  <Box className="p-3 rounded-lg bg-background-100">
                    <Text className="text-typography-900">{component.name}</Text>
                    {component.tags && component.tags.length > 0 && (
                      <Box className="flex-row gap-2 mt-1">
                        {component.tags.map((tag) => (
                          <Text 
                            key={tag}
                            className="text-xs text-typography-500"
                          >
                            #{tag}
                          </Text>
                        ))}
                      </Box>
                    )}
                  </Box>
                </Pressable>
              ))}
            </VStack>
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
}
