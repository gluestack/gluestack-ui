import { ArrowUpRight, Boxes, Package } from 'lucide-react';
import { Metadata } from 'next';
import NextLink from 'next/link';
import { notFound } from 'next/navigation';
import { MCP_URL } from '@/components/patterns/agents-data';
import { toCard } from '@/components/patterns/card-data';
import CodeView from '@/components/patterns/CodeView';
import CopyButton from '@/components/patterns/CopyButton';
import InstallTabs from '@/components/patterns/InstallTabs';
import PatternCard from '@/components/patterns/PatternCard';
import PhoneFrame from '@/components/patterns/PhoneFrame';
import Shell, { Container } from '@/components/patterns/Shell';
import {
  addCommand,
  buildPrompt,
  categoryById,
  getPattern,
  installCommand,
  patterns,
  shadcnCommand,
  SITE_URL,
  targetPath,
} from '@/utils/patterns';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return patterns.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getPattern(slug);
  if (!p) return {};
  const cat = categoryById(p.category);
  const title = `${p.title}: React Native ${cat?.title ?? ''} screen for Expo | gluestack`;
  return {
    title,
    description: `${p.description} Copy-paste Expo / React Native screen built on gluestack-ui, with a prompt for Claude Code, Cursor and Codex.`,
    alternates: { canonical: `${SITE_URL}/patterns/${p.slug}` },
    openGraph: {
      title,
      description: p.description,
      url: `${SITE_URL}/patterns/${p.slug}`,
      images: [{ url: `${SITE_URL}/patterns-shots/${p.slug}-dark.webp`, width: 585, height: 1200, alt: p.title }],
    },
  };
}

export default async function PatternPage({ params }: Props) {
  const { slug } = await params;
  const p = getPattern(slug);
  if (!p) notFound();
  const cat = categoryById(p.category);
  const prompt = buildPrompt(p);
  const cli = [
    '# 1. Set up gluestack-ui (once per project)',
    'npx gluestack-ui@latest init',
    addCommand(p) && `\n# 2. Add the components this screen uses\n${addCommand(p)}`,
    installCommand(p) && `\n# 3. Packages\n${installCommand(p)}`,
    `\n# Then copy the code below into ${targetPath(p.slug)}`,
  ]
    .filter(Boolean)
    .join('\n');

  const related = [
    ...patterns.filter((x) => x.category === p.category && x.slug !== p.slug),
    ...patterns.filter((x) => x.category !== p.category && x.featured),
  ]
    .slice(0, 4)
    .map(toCard);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: p.title,
    description: p.description,
    programmingLanguage: 'TypeScript',
    runtimePlatform: 'React Native, Expo',
    codeRepository: 'https://github.com/gluestack/gluestack-ui',
    license: 'https://opensource.org/licenses/MIT',
    url: `${SITE_URL}/patterns/${p.slug}`,
  };

  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="flex flex-col gap-16 pb-24 pt-10">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <NextLink href="/patterns" className="hover:text-foreground">Patterns</NextLink>
          <span>/</span>
          <NextLink href={`/patterns/category/${p.category}`} className="hover:text-foreground">{cat?.title}</NextLink>
          <span>/</span>
          <span className="text-foreground">{p.title}</span>
        </nav>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16 [&>*]:min-w-0">
          <div className="flex flex-col gap-4 lg:hidden">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{cat?.title}</p>
            <p className="text-balance text-4xl font-semibold tracking-tight text-foreground">{p.title}</p>
            <p className="text-base leading-relaxed text-muted-foreground">{p.description}</p>
            <CopyButton
              text={prompt}
              label="Copy prompt"
              copiedLabel="Copied, paste it into your agent"
              event="copy_prompt"
              eventData={{ pattern: p.slug, from: 'detail_mobile' }}
              className="h-12 w-full bg-foreground px-6 text-[15px] text-background"
            />
          </div>
          <div className="flex flex-col items-center gap-4 lg:sticky lg:top-20 lg:self-start">
            <div className="relative w-full rounded-[2.5rem] bg-[radial-gradient(70%_60%_at_50%_30%,rgb(var(--muted)),transparent_75%)] py-6">
              <PhoneFrame slug={p.slug} title={p.title} live priority className="max-w-[290px] sm:max-w-[340px]" />
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>Live preview · follows the site theme</span>
              <a href={`/preview/${p.slug}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-foreground">
                Open full screen <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-8">
            <div className="hidden flex-col gap-4 lg:flex">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{cat?.title}</p>
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">{p.title}</h1>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{p.description}</p>
              {p.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">{t}</span>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              <CopyButton
                text={prompt}
                label="Copy prompt"
                copiedLabel="Prompt copied, paste it into your agent"
                event="copy_prompt"
                eventData={{ pattern: p.slug, from: 'detail' }}
                className="h-12 bg-foreground px-6 text-[15px] text-background hover:opacity-90"
              />
              <CopyButton
                text={p.code}
                label="Copy code"
                event="copy_code"
                eventData={{ pattern: p.slug }}
                className="h-12 border border-border px-6 text-[15px] text-foreground hover:border-foreground/40"
              />
            </div>

            <InstallTabs
              slug={p.slug}
              tabs={[
                { id: 'prompt', label: 'Prompt', body: prompt, note: 'Paste into Claude Code, Cursor, Codex or any coding agent. It contains everything: setup, components, code and how to adapt it.' },
                { id: 'cli', label: 'CLI', body: cli },
                { id: 'shadcn', label: 'shadcn', body: shadcnCommand(p.slug), note: 'Installs the screen and every gluestack-ui component it needs into components/.' },
                { id: 'mcp', label: 'MCP', body: `claude mcp add --transport http gluestack ${MCP_URL}\n\n# then ask your agent:\n# "Use the gluestack ${p.slug} pattern for my ${p.title.toLowerCase()} screen"`, note: 'Connect once, then ask for patterns by name. Setup for other agents at gluestack.io/agents.' },
              ]}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3 rounded-2xl border border-border p-5">
                <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Boxes className="h-4 w-4" /> gluestack-ui components used
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.components.map((c) =>
                    c.docs ? (
                      <NextLink
                        key={c.name}
                        href={c.docs}
                        className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-foreground transition-colors hover:border-foreground/40 hover:bg-muted"
                      >
                        {c.title} <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
                      </NextLink>
                    ) : (
                      <span key={c.name} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{c.title}</span>
                    )
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-2xl border border-border p-5">
                <p className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <Package className="h-4 w-4" /> Details
                </p>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-xs">
                  <dt className="text-muted-foreground">File</dt>
                  <dd className="truncate font-mono text-foreground">{targetPath(p.slug)}</dd>
                  <dt className="text-muted-foreground">Lines</dt>
                  <dd className="text-foreground">{p.lines}</dd>
                  <dt className="text-muted-foreground">Packages</dt>
                  <dd className="text-foreground">{p.dependencies.length ? p.dependencies.join(', ') : 'none beyond gluestack-ui'}</dd>
                  <dt className="text-muted-foreground">Platforms</dt>
                  <dd className="text-foreground">iOS, Android, Web</dd>
                  <dt className="text-muted-foreground">License</dt>
                  <dd className="text-foreground">MIT</dd>
                </dl>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-[#0b0b0c]">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                <span className="font-mono text-xs text-neutral-400">{targetPath(p.slug)}</span>
                <CopyButton text={p.code} iconOnly label="Copy code" className="h-8 w-8 text-neutral-400 hover:bg-white/10 hover:text-white" />
              </div>
              <div className="max-h-[640px] overflow-auto">
                <CodeView code={p.code} />
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="flex flex-col gap-6">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">More patterns</h2>
              <NextLink href="/patterns" className="text-sm text-muted-foreground hover:text-foreground">View all →</NextLink>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((r) => (
                <PatternCard key={r.slug} p={r} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </Shell>
  );
}
