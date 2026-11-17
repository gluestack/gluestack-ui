import { Link } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import { patterns } from '@/patterns.generated';

// Index of every pattern, for local development (yarn dev).
export default function Index() {
  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="p-6 gap-2">
      <Text className="text-2xl font-bold text-foreground mb-4">gluestack patterns</Text>
      {Object.keys(patterns).map((slug) => (
        <Link key={slug} href={`/${slug}`} className="text-base text-foreground underline py-1">
          {slug}
        </Link>
      ))}
      <View className="h-10" />
    </ScrollView>
  );
}
