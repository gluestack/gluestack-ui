import { ScreenScrollView } from "@/components/custom/screen-scroll-view";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, View } from "react-native";
import Animated, { FadeInDown, Easing } from "react-native-reanimated";

type ShowcaseItem = {
  title: string;
  description: string;
  path: string;
};

const showcases: ShowcaseItem[] = [
  {
    title: "Login Flow",
    description: "Complete authentication experience",
    path: "showcases/login",
  },
  {
    title: "Dashboard",
    description: "Analytics and data visualization",
    path: "showcases/dashboard",
  },
  {
    title: "Profile",
    description: "User profile and settings",
    path: "showcases/profile",
  },
  {
    title: "E-Commerce",
    description: "Shopping cart and checkout",
    path: "showcases/ecommerce",
  },
  {
    title: "Social Feed",
    description: "Timeline and interactions",
    path: "showcases/social",
  },
];

export default function ShowcasesTab() {
  const router = useRouter();

  return (
    <ScreenScrollView
      className="px-5"
      contentContainerStyle={{ paddingTop: 40 }}
    >
      <VStack space="2xl" className="pb-10">
        {/* Header */}
        <Animated.View entering={FadeInDown.duration(500).springify()}>
          <VStack space="xs">
            <Heading size="2xl" className="text-typography-900">
              Showcases
            </Heading>
            <Text className="text-typography-500 text-base">
              See components in real-world scenarios
            </Text>
          </VStack>
        </Animated.View>

        {/* Showcase Cards */}
        <VStack space="md">
          {showcases.map((showcase, index) => (
            <Animated.View
              key={showcase.path}
              entering={FadeInDown.duration(300)
                .delay(index * 80)
                .easing(Easing.out(Easing.ease))}
            >
              <Pressable onPress={() => router.push(showcase.path as any)}>
                <Card className="p-5">
                  <View className="gap-1">
                    <Heading size="lg" className="text-typography-900">
                      {showcase.title}
                    </Heading>
                    <Text className="text-typography-500">
                      {showcase.description}
                    </Text>
                  </View>
                </Card>
              </Pressable>
            </Animated.View>
          ))}
        </VStack>
      </VStack>
    </ScreenScrollView>
  );
}
