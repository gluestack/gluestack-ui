import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import NextLink from 'next/link';
import { notFound } from 'next/navigation';
import { AgentSetup } from '@/components/patterns/AgentSetup';
import { AGENTS, agentBySlug } from '@/components/patterns/agents-data';
import { toCard } from '@/components/patterns/card-data';
import PatternCard from '@/components/patterns/PatternCard';
import Shell, { Container } from '@/components/patterns/Shell';
import { featuredPatterns, patterns } from '@/utils/patterns';

type Props = { params: Promise<{ agent: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return AGENTS.map((a) => ({ agent: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = agentBySlug((await params).agent);
  if (!a) return {};
  return {
    title: `React Native UI patterns for ${a.name} | gluestack`,
    description: `Build Expo and React Native screens with ${a.name}: add the gluestack MCP server or paste a pattern prompt. ${patterns.length}+ production-ready screens built on gluestack-ui.`,
    alternates: { canonical: `https://gluestack.io/for/${a.slug}` },
  };
}

export default async function AgentPage({ params }: Props) {
  const a = agentBySlug((await params).agent);
  if (!a) notFound();
  const examples = ['Build the onboarding for my habit tracker using the gluestack welcome-carousel pattern', 'Find a gluestack pattern for a checkout screen and add it under app/(shop)/checkout.tsx', 'Use gluestack components to redo my settings screen in the style of the settings pattern'];
  return (
    <Shell>
      <Container className="flex flex-col gap-16 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 [&>*]:min-w-0">
          <div className="flex flex-col gap-6">
            <NextLink href="/agents" className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground">
              ← All agents
            </NextLink>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              React Native UI patterns for {a.name}
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">{a.blurb}</p>
            <div className="flex flex-col gap-3">
              <h2 className="text-sm font-medium text-foreground">1. Connect the MCP server</h2>
              <AgentSetup agent={a} />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-medium text-foreground">2. Or copy a prompt</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{a.paste}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card/40 p-6">
            <h2 className="text-sm font-medium text-foreground">Things to ask {a.name}</h2>
            {examples.map((e) => (
              <p key={e} className="rounded-2xl border border-border bg-background px-4 py-3 font-mono text-[13px] leading-relaxed text-foreground">
                “{e}”
              </p>
            ))}
          </div>
        </div>
        <section className="flex flex-col gap-6">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground">Popular patterns</h2>
            <NextLink href="/patterns" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              All patterns <ArrowRight className="h-4 w-4" />
            </NextLink>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPatterns().slice(0, 4).map(toCard).map((p) => (
              <PatternCard key={p.slug} p={p} />
            ))}
          </div>
        </section>
      </Container>
    </Shell>
  );
}
