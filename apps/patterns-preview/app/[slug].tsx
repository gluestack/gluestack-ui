import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { patterns } from '@/patterns.generated';

export async function generateStaticParams(): Promise<Record<string, string>[]> {
  return Object.keys(patterns).map((slug) => ({ slug }));
}

export default function PatternScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const Pattern = slug ? patterns[slug] : undefined;
  if (!Pattern) {
    return (
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="text-muted-foreground">Pattern not found</Text>
      </View>
    );
  }
  return (
    <View className="flex-1 bg-background">
      <Pattern />
    </View>
  );
}
