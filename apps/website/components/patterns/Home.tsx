import NextLink from 'next/link';
import { ArrowRight, Bot, Boxes, FileText, Github, MousePointerClick, Plug, Sparkles, Terminal } from 'lucide-react';
import { categories, componentCount, featuredPatterns, patterns, shadcnCommand } from '@/utils/patterns';
import { AGENTS } from './agents-data';
import { toCard } from './card-data';
import CopyButton from './CopyButton';
import HeroStage from './HeroStage';
import PatternCard from './PatternCard';
import Shell, { CommandLine, Container, Eyebrow, SectionTitle } from './Shell';

const LIBRARY_COMPONENTS = [
  'button', 'input', 'avatar', 'badge', 'card', 'checkbox', 'switch', 'tabs', 'progress',
  'slider', 'select', 'modal', 'actionsheet', 'toast', 'menu', 'popover', 'tooltip', 'skeleton',
];

const FAQ = [
  {
    q: 'What is gluestack now?',
    a: 'gluestack is a catalog of production-ready Expo and React Native screens, built on gluestack-ui, the open-source component library. Each pattern ships with a prompt your coding agent can follow end to end, plus a registry entry and an MCP server so agents can find and install patterns on their own.',
  },
  {
    q: 'Is it free?',
    a: 'Yes. The patterns, the components and the MCP server are free and MIT licensed. Copy them into commercial apps.',
  },
  {
    q: 'I already use gluestack-ui. Does anything change?',
    a: 'No. The library, its npm packages and every docs page stay exactly where they were (gluestack.io/ui/docs). Patterns are made of the same components, so they drop straight into your app.',
  },
  {
    q: 'Do I need an AI agent to use the patterns?',
    a: 'No. Every pattern page has the full source, a list of the components it uses and an install command. The prompt is a shortcut, not a requirement.',
  },
  {
    q: 'Which agents does it work with?',
    a: 'Anything that can read a prompt or talk to an MCP server: Claude Code, Cursor, Codex, Windsurf, GitHub Copilot in VS Code, Gemini CLI, and app builders such as RapidNative.',
  },
  {
    q: 'Does it work with Expo Router and plain React Native?',
    a: 'Yes. Patterns are plain React Native components styled with NativeWind, so they work in Expo (with or without Expo Router), React Native CLI projects and on the web through React Native Web.',
  },
];

function Hero() {
  const total = patterns.length;
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_70%_40%,rgba(125,211,252,0.10),transparent_70%),radial-gradient(40%_40%_at_20%_10%,rgba(196,181,253,0.10),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(to_right,rgb(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--border))_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(70%_60%_at_50%_40%,black,transparent)]" />
      <Container className="grid grid-cols-1 items-center gap-6 pb-10 pt-14 lg:min-h-[calc(100dvh-53px)] lg:grid-cols-[1.05fr_1fr] lg:gap-4 lg:py-10 [&>*]:min-w-0">
        <div className="relative z-10 flex flex-col items-start gap-7">
          <NextLink
            href="/agents"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 py-1 pl-1 pr-3 text-[13px] text-muted-foreground backdrop-blur hover:text-foreground"
          >
            <span className="rounded-full bg-foreground px-2 py-0.5 text-[11px] font-semibold text-background">New</span>
            UI patterns for coding agents
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </NextLink>
          <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-[4.4rem]">
            UI patterns your agent can{' '}
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-emerald-500 bg-clip-text text-transparent dark:from-sky-300 dark:via-violet-300 dark:to-emerald-300">
              ship.
            </span>
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {total} production-ready Expo and React Native screens built on gluestack-ui. Copy one prompt into Claude Code,
            Cursor or Codex and get a polished screen in your app. Light and dark, iOS, Android and web.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <NextLink
              href="/patterns"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-[15px] font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Browse patterns <ArrowRight className="h-4 w-4" />
            </NextLink>
            <NextLink
              href="/agents"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-card/60 px-6 text-[15px] font-medium text-foreground backdrop-blur transition-colors hover:border-foreground/40"
            >
              <Plug className="h-4 w-4" /> Connect your agent
            </NextLink>
          </div>
          <div className="w-full max-w-xl">
            <CommandLine command={shadcnCommand('sign-in')} />
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <a href="https://github.com/gluestack/gluestack-ui" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Github className="h-4 w-4" /> 5.4k stars
            </a>
            <span>~280k weekly npm downloads</span>
            <span>MIT licensed</span>
            <span>
              Using gluestack-ui?{' '}
              <NextLink href="/ui/docs" className="text-foreground underline-offset-4 hover:underline">
                Docs are here
              </NextLink>
            </span>
          </div>
        </div>
        <HeroStage />
      </Container>
    </section>
  );
}

function FeaturedGrid() {
  const featured = featuredPatterns().slice(0, 8).map(toCard);
  const used = categories.filter((c) => patterns.some((p) => p.category === c.id));
  return (
    <section className="py-24">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionTitle
            eyebrow="The catalog"
            title="Screens, not snippets."
            sub="Whole screens with real layout, state and both color modes, made from gluestack-ui components. Open one to play with it live, then hand it to your agent."
          />
          <NextLink href="/patterns" className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-foreground hover:underline">
            All {patterns.length} patterns <ArrowRight className="h-4 w-4" />
          </NextLink>
        </div>
        <div className="flex flex-wrap gap-2">
          {used.map((c) => (
            <NextLink
              key={c.id}
              href={`/patterns/category/${c.id}`}
              className="rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              {c.title}
            </NextLink>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <PatternCard key={p.slug} p={p} priority={i < 4} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: MousePointerClick, title: 'Pick a pattern', body: 'Browse by category or search. Every pattern runs live in a phone frame, in light and dark.' },
    { icon: Sparkles, title: 'Copy the prompt', body: 'One prompt carries the setup, the components to add, the full source and how to adapt it.' },
    { icon: Bot, title: 'Your agent ships it', body: 'Paste it into Claude Code, Cursor or Codex. Or skip the copy: the MCP server lets the agent fetch patterns itself.' },
  ];
  return (
    <section className="border-y border-border bg-card/30 py-24">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 [&>*]:min-w-0">
        <div className="flex flex-col gap-10">
          <SectionTitle eyebrow="How it works" title="From catalog to your app in one prompt." />
          <ol className="flex flex-col gap-7">
            {steps.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-background">
                  <s.icon className="h-5 w-5 text-foreground" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-mono text-xs text-muted-foreground">0{i + 1}</p>
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="overflow-hidden rounded-3xl border border-border bg-[#0b0b0c] shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-neutral-500">~/my-expo-app</span>
          </div>
          <div className="flex flex-col gap-3 p-6 font-mono text-[13px] leading-relaxed text-neutral-300">
            <p>
              <span className="text-sky-400">&gt;</span> Add the &quot;Wallet&quot; screen to my Expo / React Native app using gluestack-ui.
              <span className="text-neutral-500"> [prompt from gluestack.io, 212 lines]</span>
            </p>
            <p className="text-neutral-400">
              <span className="text-violet-400">⏺</span> Bash(npx gluestack-ui@latest add avatar button heading icon pressable text)
            </p>
            <p className="pl-5 text-neutral-500">⎿ Added 6 components to components/ui</p>
            <p className="text-neutral-400">
              <span className="text-violet-400">⏺</span> Write(components/patterns/wallet-home.tsx)
            </p>
            <p className="text-neutral-400">
              <span className="text-violet-400">⏺</span> Update(app/(tabs)/index.tsx)
            </p>
            <p className="pl-5 text-neutral-500">⎿ Swapped sample data for useTransactions()</p>
            <p className="text-emerald-400">✓ Wallet screen added. Works in light and dark on iOS, Android and web.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AgentSurfaces() {
  const cards = [
    {
      icon: Sparkles,
      title: 'Copy prompt',
      body: 'The fastest path. A self-contained prompt with setup, components, code and adaptation steps.',
      code: 'Add the "Sign in" screen to my Expo app…',
    },
    {
      icon: Plug,
      title: 'MCP server',
      body: 'Let the agent search the catalog and pull patterns and component docs on its own.',
      code: 'claude mcp add --transport http gluestack https://gluestack.io/api/mcp',
    },
    {
      icon: Terminal,
      title: 'Registry',
      body: 'shadcn-compatible registry items for every pattern and component, with dependencies resolved.',
      code: 'npx shadcn@latest add https://gluestack.io/r/cart.json',
    },
    {
      icon: FileText,
      title: 'llms.txt',
      body: 'Every pattern and docs page as markdown, indexed for agents that read the web.',
      code: 'https://gluestack.io/llms.txt',
    },
  ];
  return (
    <section className="py-24">
      <Container className="flex flex-col gap-12">
        <SectionTitle
          center
          eyebrow="Built for agents"
          title="Every way your agent can reach it."
          sub="Patterns are just as easy for an agent to find on its own as they are for you to copy."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 [&>*]:min-w-0">
          {cards.map((c) => (
            <div key={c.title} className="flex flex-col gap-4 rounded-3xl border border-border bg-card/50 p-6">
              <c.icon className="h-5 w-5 text-foreground" />
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
              <code className="mt-auto block truncate rounded-xl bg-muted px-3 py-2 font-mono text-[11.5px] text-foreground">{c.code}</code>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm text-muted-foreground">Setup guides for</p>
          <div className="flex flex-wrap justify-center gap-2">
            {AGENTS.map((a) => (
              <NextLink
                key={a.slug}
                href={`/for/${a.slug}`}
                className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-foreground/40 hover:bg-card"
              >
                {a.name}
              </NextLink>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Library() {
  return (
    <section className="border-y border-border bg-card/30 py-24">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center [&>*]:min-w-0">
        <div className="flex flex-col gap-8">
          <SectionTitle
            eyebrow="Built on gluestack-ui"
            title="Made of components you already trust."
            sub="Every pattern is assembled from gluestack-ui, the open-source, accessible, universal component library for React and React Native. Nothing proprietary: copy the components, own the code."
          />
          <dl className="grid grid-cols-3 gap-6">
            {[
              ['60+', 'components'],
              ['5.4k', 'GitHub stars'],
              ['3', 'platforms from one codebase'],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col gap-1">
                <dt className="text-3xl font-semibold tracking-tight text-foreground">{n}</dt>
                <dd className="text-sm text-muted-foreground">{l}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-3">
            <NextLink href="/ui" className="inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background">
              <Boxes className="h-4 w-4" /> Explore the components
            </NextLink>
            <NextLink href="/ui/docs" className="inline-flex h-11 items-center gap-2 rounded-full border border-border px-5 text-sm font-medium text-foreground hover:border-foreground/40">
              Read the docs
            </NextLink>
          </div>
        </div>
        <div className="flex flex-wrap gap-2.5">
          {LIBRARY_COMPONENTS.map((c) => (
            <NextLink
              key={c}
              href={`/ui/docs/components/${c}`}
              className="group inline-flex items-center gap-2 rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/40"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-sky-400 to-violet-400" />
              {c.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')}
            </NextLink>
          ))}
          <NextLink href="/ui/docs/components/all-components" className="inline-flex items-center gap-2 rounded-2xl border border-dashed border-border px-4 py-3 text-sm text-muted-foreground hover:text-foreground">
            +{Math.max(0, 60 - LIBRARY_COMPONENTS.length)} more <ArrowRight className="h-3.5 w-3.5" />
          </NextLink>
        </div>
      </Container>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-24">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] [&>*]:min-w-0">
        <SectionTitle eyebrow="FAQ" title="Questions, answered." />
        <div className="flex flex-col divide-y divide-border border-y border-border">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-foreground">
                {f.q}
                <span className="text-xl text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="pt-3 text-[15px] leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/60 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_0%,rgba(125,211,252,0.14),transparent_70%)]" />
          <div className="relative flex flex-col items-center gap-6">
            <Eyebrow>Start shipping</Eyebrow>
            <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Your next screen is one prompt away.
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <NextLink href="/patterns" className="inline-flex h-12 items-center gap-2 rounded-full bg-foreground px-6 text-[15px] font-medium text-background">
                Browse patterns <ArrowRight className="h-4 w-4" />
              </NextLink>
              <CopyButton
                text="claude mcp add --transport http gluestack https://gluestack.io/api/mcp"
                label="Copy MCP command"
                event="copy_mcp"
                eventData={{ from: 'home_cta' }}
                className="h-12 border border-border bg-background px-6 text-[15px] text-foreground hover:border-foreground/40"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {patterns.length} patterns · built on 60+ gluestack-ui components · free and open source
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'gluestack',
        url: 'https://gluestack.io',
        potentialAction: { '@type': 'SearchAction', target: 'https://gluestack.io/patterns?q={query}', 'query-input': 'required name=query' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
    ],
  };
  return (
    <Shell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <FeaturedGrid />
      <HowItWorks />
      <AgentSurfaces />
      <Library />
      <Faq />
      <FinalCta />
    </Shell>
  );
}
