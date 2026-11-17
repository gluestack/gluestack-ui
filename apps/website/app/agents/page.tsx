import { ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import NextLink from 'next/link';
import { AgentSetup, SnippetBlock } from '@/components/patterns/AgentSetup';
import { AGENTS, MCP_URL } from '@/components/patterns/agents-data';
import Shell, { Container, SectionTitle } from '@/components/patterns/Shell';
import { patterns } from '@/utils/patterns';

export const metadata: Metadata = {
  title: 'gluestack for AI agents: MCP server, prompts and registry for React Native UI',
  description:
    'Connect Claude Code, Cursor, Codex, VS Code Copilot, Windsurf or Gemini CLI to gluestack: an MCP server, copy-paste prompts and a shadcn-compatible registry of Expo and React Native screens.',
  alternates: { canonical: 'https://gluestack.io/agents' },
};

const TOOLS = [
  ['search_patterns', 'Find screens by intent ("checkout with saved cards") or category.'],
  ['get_pattern', 'A complete prompt: setup, components to add, packages, full source, how to adapt it.'],
  ['list_components', 'Every gluestack-ui component with its docs link and dependencies.'],
  ['get_component', 'The source of a single component, NativeWind flavour.'],
];

export default function AgentsPage() {
  const claude = AGENTS[0];
  return (
    <Shell>
      <section className="border-b border-border">
        <Container className="flex flex-col gap-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">For agents</p>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Give your coding agent a catalog of native screens.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Agents are good at logic and bad at taste. gluestack gives them {patterns.length} proven Expo and React Native screens and the
            components they are made of, through whatever channel your agent speaks: a prompt, an MCP server, a registry or llms.txt.
          </p>
          <div className="max-w-2xl">
            <AgentSetup agent={claude} />
          </div>
          <div className="flex flex-wrap gap-2">
            {AGENTS.map((a) => (
              <NextLink key={a.slug} href={`/for/${a.slug}`} className="rounded-full border border-border px-4 py-2 text-sm text-foreground hover:border-foreground/40 hover:bg-card">
                {a.name} setup →
              </NextLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 [&>*]:min-w-0">
          <SectionTitle
            eyebrow="MCP server"
            title="Remote, stateless, no install."
            sub={`One HTTP endpoint (${MCP_URL}) that any MCP client can add. It is read-only and needs no API key.`}
          />
          <div className="flex flex-col divide-y divide-border rounded-2xl border border-border">
            {TOOLS.map(([name, body]) => (
              <div key={name} className="flex flex-col gap-1 p-5">
                <code className="font-mono text-sm text-foreground">{name}</code>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-card/30 py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 [&>*]:min-w-0">
          <SectionTitle
            eyebrow="Prompts"
            title="Every pattern is a prompt."
            sub="Hit Copy prompt on any pattern. The prompt is self-contained, so the agent does not have to browse: it sets up gluestack-ui if needed, adds exactly the components the screen uses, writes the file and adapts it to your app."
          />
          <div className="flex flex-col gap-4">
            <SnippetBlock label="Fetch a prompt directly" code={`curl https://gluestack.io/patterns/sign-in/prompt`} />
            <SnippetBlock label="Markdown version of any pattern page" code={`https://gluestack.io/patterns/sign-in.md`} />
            <NextLink href="/patterns" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline">
              Browse patterns <ArrowRight className="h-4 w-4" />
            </NextLink>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 [&>*]:min-w-0">
          <SectionTitle
            eyebrow="Registry"
            title="Works with the shadcn CLI."
            sub="Every pattern and every gluestack-ui component is a registry item. Installing a pattern pulls the components it depends on."
          />
          <div className="flex flex-col gap-4">
            <SnippetBlock label="Install a pattern" code={`npx shadcn@latest add https://gluestack.io/r/product-detail.json`} />
            <SnippetBlock label="Install a component" code={`npx shadcn@latest add https://gluestack.io/r/ui/button.json`} />
            <SnippetBlock label="Registry index" code={`https://gluestack.io/r/registry.json`} />
            <p className="text-sm text-muted-foreground">
              Prefer the gluestack-ui CLI for components (<code className="font-mono">npx gluestack-ui@latest add button</code>); it also sets up the provider and theme.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 [&>*]:min-w-0">
          <SectionTitle eyebrow="llms.txt" title="Readable by any model." sub="The docs and the catalog are published as markdown for agents that read the web." />
          <div className="flex flex-col gap-4">
            <SnippetBlock label="Index" code="https://gluestack.io/llms.txt" />
            <SnippetBlock label="Everything in one file" code="https://gluestack.io/llms-full.txt" />
          </div>
        </Container>
      </section>
    </Shell>
  );
}
