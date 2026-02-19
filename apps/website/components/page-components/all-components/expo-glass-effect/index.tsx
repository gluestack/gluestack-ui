import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { GlassView } from '@/components/ui/expo-glass-effect';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { View } from 'react-native';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <View className="w-72 h-52 rounded-2xl overflow-hidden">
      {/* Colorful background so the glass effect is visible */}
      <View className="absolute inset-0 bg-indigo-500" />
      <View className="absolute top-0 left-0 w-28 h-28 rounded-full bg-purple-400 -translate-x-6 -translate-y-6" />
      <View className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-pink-400 translate-x-8 translate-y-8" />
      <View className="absolute top-6 right-6 w-16 h-16 rounded-full bg-yellow-300 opacity-70" />

      {/* Glass card */}
      <View className="flex-1 items-center justify-center p-4">
        <GlassView className="p-5 rounded-2xl items-center gap-1.5">
          <Text className="text-white text-lg font-semibold">Glass Effect</Text>
          <Text className="text-white/80 text-sm text-center">
            Built with expo-glass-effect
          </Text>
        </GlassView>
      </View>
    </View>
  )
}`}
      argTypes={{}}
      reactLive={{ GlassView, Text, VStack, View }}
    />
  );
}