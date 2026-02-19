import { GlassView, GlassContainer } from '@/components/ui/liquid-glass'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { View } from 'react-native'
import { HStack } from '@/components/ui/hstack'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <View className="w-72 h-52 rounded-2xl overflow-hidden">
      {/* Colorful background so the glass effect is visible */}
      <View className="absolute inset-0 bg-indigo-500" />
      <View className="absolute top-0 left-0 w-28 h-28 rounded-full bg-purple-400 -translate-x-6 -translate-y-6" />
      <View className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-pink-400 translate-x-8 translate-y-8" />
      <View className="absolute top-6 right-6 w-16 h-16 rounded-full bg-yellow-300 opacity-70" />

      {/* Glass card */}
      <View className="flex-1 items-center justify-center p-4">
        <GlassView className="p-5 rounded-2xl items-center gap-1.5" glassEffectStyle="clear">
          <Text className="text-foreground/90 text-lg font-semibold">Glass Effect</Text>
          <Text className="text-foreground/70 text-sm text-center">
            Built with expo-glass-effect
          </Text>
        </GlassView>
      </View>
    </View>
  )
};

const ExampleWithGlassContainer = () => {
return (
    <View className="w-72 rounded-2xl overflow-hidden">
      {/* Colorful background so the glass effect is visible */}
      <View className="absolute inset-0 bg-teal-600" />
      <View className="absolute top-0 right-0 w-36 h-36 rounded-full bg-emerald-400 translate-x-10 -translate-y-10" />
      <View className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-cyan-400 -translate-x-8 translate-y-8" />
      <View className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-lime-300 opacity-50" />

      {/* GlassContainer merges adjacent GlassViews */}
      <View className="p-4">
        <GlassContainer spacing={10} className="rounded-3xl bg-background/30">
          <VStack className="gap-2 p-2">
            <GlassView className="p-4 rounded-full" isInteractive>
              <HStack className="gap-3 items-center px-4">
                <VStack className="gap-0.5">
                  <Text className="text-foreground/90 font-semibold">Notifications</Text>
                  <Text className="text-foreground/70 text-sm">3 new alerts</Text>
                </VStack>
              </HStack>
            </GlassView>
            <GlassView className="p-4 rounded-full" isInteractive>
              <HStack className="gap-3 items-center px-4">
                <VStack className="gap-0.5">
                  <Text className="text-foreground/90 font-semibold">Messages</Text>
                  <Text className="text-foreground/70 text-sm">2 unread</Text>
                </VStack>
              </HStack>
            </GlassView>
          </VStack>
        </GlassContainer>
      </View>
    </View>
  )
};

const ExampleWithColorScheme = () => {
return (
    <View className="w-72 h-40 rounded-2xl overflow-hidden">
      {/* Colorful background so the glass effect is visible */}
      <View className="absolute inset-0 bg-violet-600" />
      <View className="absolute top-0 left-0 w-32 h-32 rounded-full bg-fuchsia-400 -translate-x-8 -translate-y-8" />
      <View className="absolute bottom-0 right-0 w-28 h-28 rounded-full bg-blue-400 translate-x-6 translate-y-6" />
      <View className="absolute top-4 right-12 w-14 h-14 rounded-full bg-rose-300 opacity-60" />

      <View className="flex-1 flex-row items-center justify-center gap-3 px-4">
        <GlassContainer className="flex-row gap-2">
        <GlassView colorScheme="light" className="flex-1 h-24 rounded-xl items-center justify-center gap-1" glassEffectStyle="clear" isInteractive>
          <Text className="text-white font-semibold text-sm">Light</Text>
          <Text className="text-white/70 text-xs">Always light</Text>
        </GlassView>
        <GlassView colorScheme="dark" className="flex-1 h-24 rounded-xl items-center justify-center gap-1" glassEffectStyle="clear" isInteractive>
          <Text className="text-white font-semibold text-sm">Dark</Text>
          <Text className="text-white/70 text-xs">Always dark</Text>
        </GlassView>
        <GlassView colorScheme="auto" className="flex-1 h-24 rounded-xl items-center justify-center gap-1" glassEffectStyle="clear" isInteractive>
          <Text className="text-white font-semibold text-sm">Auto</Text>
          <Text className="text-white/70 text-xs">System</Text>
        </GlassView>
        </GlassContainer>
      </View>
    </View>
  )
};

const ExampleWithGlassStyle = () => {
return (
    <View className="w-72 h-44 rounded-2xl overflow-hidden">
      {/* Colorful background so the glass effect is visible */}
      <View className="absolute inset-0 bg-orange-500" />
      <View className="absolute top-0 right-0 w-36 h-36 rounded-full bg-red-400 translate-x-10 -translate-y-10" />
      <View className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-amber-300 -translate-x-8 translate-y-8" />
      <View className="absolute top-8 left-10 w-16 h-16 rounded-full bg-yellow-200 opacity-60" />

      <View className="flex-1 flex-row items-center justify-center gap-4 px-5">
        <GlassView
          glassEffectStyle="regular"
          isInteractive
          className="flex-1 h-28 rounded-3xl items-center justify-center gap-1.5"
        >
          <Text className="text-foreground/90 font-semibold">Regular</Text>
          <Text className="text-foreground/70 text-xs text-center">Frosted</Text>
        </GlassView>
        <GlassView
          glassEffectStyle="clear"
          isInteractive
          className="flex-1 h-28 rounded-3xl items-center justify-center gap-1.5"
        >
          <Text className="text-foreground/90 font-semibold">Clear</Text>
          <Text className="text-foreground/70 text-xs text-center">Transparent</Text>
        </GlassView>
      </View>
    </View>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "with-glasscontainer",
    label: "With GlassContainer",
    content: <ExampleWithGlassContainer />,
  },
  {
    value: "with-color-scheme",
    label: "With Color Scheme",
    content: <ExampleWithColorScheme />,
  },
  {
    value: "with-glass-style",
    label: "With Glass Style",
    content: <ExampleWithGlassStyle />,
  }
];

export default function LiquidGlassScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}