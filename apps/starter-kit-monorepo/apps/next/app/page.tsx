import { Button, ButtonText } from '@repo/components/ui/button';
import { Text } from '@repo/components/ui/text';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 bg-background">
      <Text size="4xl" bold className="text-foreground">
        Gluestack UI Monorepo
      </Text>
      <Text size="lg" className="text-muted-foreground text-center max-w-md">
        Shared gluestack-ui components across Next.js and Expo — powered by{' '}
        <Text size="lg" bold>
          @repo/ui
        </Text>
      </Text>

      <div className="flex flex-row gap-3 flex-wrap justify-center">
        <Button className="bg-red-400" variant="default">
          <ButtonText>Default Button</ButtonText>
        </Button>
        <Button variant="outline">
          <ButtonText>Outline Button</ButtonText>
        </Button>
        <Button variant="secondary">
          <ButtonText>Secondary</ButtonText>
        </Button>
        <Button className="bg-red-400" variant="destructive">
          <ButtonText>Destructive</ButtonText>
        </Button>
        <Button variant="ghost">
          <ButtonText>Ghost</ButtonText>
        </Button>
      </div>

      <Text size="sm" className="text-muted-foreground mt-4">
        Edit{' '}
        <code className="bg-muted px-1 py-0.5 rounded text-sm">
          apps/next/app/page.tsx
        </code>{' '}
        or{' '}
        <code className="bg-muted px-1 py-0.5 rounded text-sm">
          packages/ui/src
        </code>{' '}
        to get started.
      </Text>
    </main>
  );
}
