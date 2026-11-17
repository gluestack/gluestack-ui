import Catalog from '@/components/patterns/Catalog';
import { cardPatterns, categoryCounts } from '@/components/patterns/card-data';
import Shell, { Container } from '@/components/patterns/Shell';
import { patterns } from '@/utils/patterns';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `React Native UI patterns: ${patterns.length} Expo screens for agents | gluestack`,
  description:
    'Browse production-ready Expo and React Native screens: authentication, onboarding, AI chat, commerce, finance, dashboards, settings and more. Copy a prompt for your coding agent or install with the registry.',
  alternates: { canonical: 'https://gluestack.io/patterns' },
};

export default function PatternsPage() {
  return (
    <Shell>
      <Container className="flex flex-col gap-10 pb-24 pt-14">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Patterns</p>
          <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Expo &amp; React Native screens, ready for your agent.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Every pattern runs live, works in light and dark, and comes with a prompt, the source and an install command.
          </p>
        </div>
        <Catalog patterns={cardPatterns()} categories={categoryCounts()} />
      </Container>
    </Shell>
  );
}
