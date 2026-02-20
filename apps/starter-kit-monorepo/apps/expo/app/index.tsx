import { Button, ButtonText } from '@repo/components/ui/button';
import { Text } from '@repo/components/ui/text';
import { VStack } from '@repo/components/ui/vstack';
import { HStack } from '@repo/components/ui/hstack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerClassName="flex-grow items-center justify-center gap-6 p-8">
        <Text size="4xl" bold className="text-foreground">
          Gluestack UI Monorepo
        </Text>
        <Text size="lg" className="text-muted-foreground text-center">
          Shared gluestack-ui components across Next.js and Expo — powered by{' '}
          <Text size="lg" bold>
            @repo/ui
          </Text>
        </Text>
        <VStack space="md">
          <HStack space="md">
            <Button variant="default">
              <ButtonText>Default Button in expo </ButtonText>
            </Button>
            <Button variant="outline">
              <ButtonText>Outline Button</ButtonText>
            </Button>
            <Button variant="secondary">
              <ButtonText>Secondary</ButtonText>
            </Button>
            <Button variant="destructive">
              <ButtonText>Destructive</ButtonText>
            </Button>
            <Button variant="ghost">
              <ButtonText>Ghost</ButtonText>
            </Button>
          </HStack>
        </VStack>

        <Text size="sm" className="text-muted-foreground mt-4 text-center">
          Edit{' '}
          <Text size="sm" bold>
            apps/expo/app/index.tsx
          </Text>{' '}
          or{' '}
          <Text size="sm" bold>
            packages/ui/src
          </Text>{' '}
          to get started.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
