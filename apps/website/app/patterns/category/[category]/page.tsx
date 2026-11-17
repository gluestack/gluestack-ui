import Catalog from '@/components/patterns/Catalog';
import { cardPatterns, categoryCounts } from '@/components/patterns/card-data';
import Shell, { Container } from '@/components/patterns/Shell';
import { categoryById, patternsIn, usedCategories } from '@/utils/patterns';
import { Metadata } from 'next';
import NextLink from 'next/link';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return usedCategories().map((c) => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const c = categoryById(category);
  if (!c) return {};
  return {
    title: `React Native ${c.title} screens for Expo | gluestack patterns`,
    description: `${patternsIn(c.id).length} copy-paste React Native ${c.title.toLowerCase()} screens for Expo. ${c.description} Built on gluestack-ui, ready for Claude Code, Cursor and Codex.`,
    alternates: { canonical: `https://gluestack.io/patterns/category/${c.id}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const c = categoryById(category);
  if (!c) notFound();
  return (
    <Shell>
      <Container className="flex flex-col gap-10 pb-24 pt-14">
        <div className="flex flex-col gap-4">
          <NextLink href="/patterns" className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground">
            ← All patterns
          </NextLink>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            React Native {c.title.toLowerCase()} screens
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">{c.description} Copy-paste Expo screens built on gluestack-ui, with a prompt for your coding agent.</p>
        </div>
        <Catalog patterns={cardPatterns()} categories={categoryCounts()} initialCategory={c.id} />
      </Container>
    </Shell>
  );
}
