/**
 * gluestack MCP server: stateless Streamable HTTP transport (JSON responses, no sessions).
 * Lets coding agents search the pattern catalog and fetch patterns and gluestack-ui components.
 *
 *   claude mcp add --transport http gluestack https://gluestack.io/api/mcp
 */
import {
  buildPrompt,
  categories,
  categoryById,
  getPattern,
  patterns,
  SITE_URL,
  type Pattern,
} from '@/utils/patterns';
import { ui } from '@/utils/patterns/registry';

const SERVER_INFO = { name: 'gluestack', title: 'gluestack: Expo & React Native UI patterns', version: '1.0.0' };
const PROTOCOL_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26', '2024-11-05'];

const INSTRUCTIONS = `gluestack has production-ready Expo / React Native screens ("patterns") built on gluestack-ui components.
Use search_patterns to find a screen that matches what the user is building, then get_pattern for a complete, step-by-step prompt with the code.
Follow the returned steps: set up gluestack-ui if missing, add the listed components with the gluestack-ui CLI, create the file, then adapt it to the app.
Use get_component for the source and docs link of an individual gluestack-ui component.`;

type Json = Record<string, unknown>;
type RpcRequest = { jsonrpc: '2.0'; id?: string | number | null; method: string; params?: Json };

const TOOLS = [
  {
    name: 'search_patterns',
    title: 'Search patterns',
    description:
      'Search the gluestack catalog of Expo / React Native screens (authentication, onboarding, AI chat, commerce, finance, dashboards, settings, lists, productivity, feedback). Returns matching patterns with slug, title, description and the components they use. Call with no query to list everything.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'What the screen should be, e.g. "login with social buttons" or "shopping cart".' },
        category: { type: 'string', enum: categories.map((c) => c.id), description: 'Optional category filter.' },
        limit: { type: 'number', description: 'Max results (default 10).' },
      },
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: 'get_pattern',
    title: 'Get pattern',
    description:
      'Get one pattern by slug: a complete prompt with setup, the gluestack-ui components to add, packages to install, the full TypeScript source and how to adapt it.',
    inputSchema: {
      type: 'object',
      properties: { slug: { type: 'string', description: 'Pattern slug from search_patterns, e.g. "sign-in".' } },
      required: ['slug'],
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: 'list_components',
    title: 'List components',
    description: 'List the gluestack-ui components (name, docs URL, npm dependencies).',
    inputSchema: { type: 'object', properties: {} },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
  {
    name: 'get_component',
    title: 'Get component',
    description:
      'Get the source files of a gluestack-ui component (NativeWind flavour) with its dependencies and docs URL. Prefer `npx gluestack-ui@latest add <name>` to install it.',
    inputSchema: {
      type: 'object',
      properties: { name: { type: 'string', description: 'Component name, e.g. "button", "input", "avatar".' } },
      required: ['name'],
    },
    annotations: { readOnlyHint: true, openWorldHint: false },
  },
];

function score(p: Pattern, words: string[]) {
  const hay = {
    title: p.title.toLowerCase(),
    tags: p.tags.join(' ').toLowerCase(),
    desc: p.description.toLowerCase(),
    cat: (categoryById(p.category)?.title ?? p.category).toLowerCase(),
    comps: p.components.map((c) => c.name).join(' '),
  };
  let s = 0;
  let matched = 0;
  for (const w of words) {
    const before = s;
    if (hay.title.includes(w)) s += 5;
    if (hay.tags.includes(w)) s += 3;
    if (hay.cat.includes(w)) s += 2;
    if (hay.desc.includes(w)) s += 1;
    if (hay.comps.includes(w)) s += 1;
    if (s > before) matched++;
  }
  // Patterns that match more of the query words rank first.
  return s * matched;
}

const text = (t: string) => ({ content: [{ type: 'text', text: t }] });
const toolError = (t: string) => ({ content: [{ type: 'text', text: t }], isError: true });

function callTool(name: string, args: Json) {
  switch (name) {
    case 'search_patterns': {
      const q = String(args.query ?? '').toLowerCase().trim();
      const words = q.split(/\W+/).filter((w) => w.length > 1);
      const limit = Math.min(Number(args.limit) || 10, 50);
      let list = patterns.filter((p) => !args.category || p.category === args.category);
      if (words.length) {
        list = list
          .map((p) => ({ p, s: score(p, words) }))
          .filter((x) => x.s > 0)
          .sort((a, b) => b.s - a.s)
          .map((x) => x.p);
      }
      const rows = list.slice(0, limit).map((p) => ({
        slug: p.slug,
        title: p.title,
        category: p.category,
        description: p.description,
        components: p.components.map((c) => c.name),
        preview: `${SITE_URL}/patterns/${p.slug}`,
      }));
      return text(
        rows.length
          ? JSON.stringify(rows, null, 2)
          : `No pattern matches "${q}". Categories: ${categories.map((c) => c.id).join(', ')}. Call search_patterns with no query to list all ${patterns.length}.`
      );
    }
    case 'get_pattern': {
      const p = getPattern(String(args.slug ?? ''));
      if (!p) return toolError(`Unknown pattern "${args.slug}". Use search_patterns to find a slug.`);
      return text(buildPrompt(p));
    }
    case 'list_components': {
      const rows = Object.values(ui).map((c) => ({
        name: c.name,
        docs: `${SITE_URL}/ui/docs/components/${c.name}`,
        dependencies: c.dependencies,
      }));
      return text(JSON.stringify(rows, null, 2));
    }
    case 'get_component': {
      const c = ui[String(args.name ?? '').toLowerCase()];
      if (!c) return toolError(`Unknown component "${args.name}". Use list_components.`);
      const body = [
        `# ${c.title} (gluestack-ui)`,
        `Install: npx gluestack-ui@latest add ${c.name}`,
        `Docs: ${SITE_URL}/ui/docs/components/${c.name}`,
        c.dependencies.length ? `Dependencies: ${c.dependencies.join(', ')}` : '',
        c.registryDependencies.length ? `Uses components: ${c.registryDependencies.join(', ')}` : '',
        ...c.files.map((f) => `\n## ${f.path}\n\n\`\`\`tsx\n${f.content.trimEnd()}\n\`\`\``),
      ]
        .filter(Boolean)
        .join('\n');
      return text(body);
    }
    default:
      return null;
  }
}

function handle(req: RpcRequest): Json | null {
  const ok = (result: unknown) => ({ jsonrpc: '2.0', id: req.id ?? null, result });
  const err = (code: number, message: string) => ({ jsonrpc: '2.0', id: req.id ?? null, error: { code, message } });
  // Notifications (no id) get no response.
  if (req.id === undefined || req.id === null) return null;
  switch (req.method) {
    case 'initialize': {
      const asked = String(req.params?.protocolVersion ?? '');
      return ok({
        protocolVersion: PROTOCOL_VERSIONS.includes(asked) ? asked : PROTOCOL_VERSIONS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions: INSTRUCTIONS,
      });
    }
    case 'ping':
      return ok({});
    case 'tools/list':
      return ok({ tools: TOOLS });
    case 'tools/call': {
      const name = String(req.params?.name ?? '');
      const result = callTool(name, (req.params?.arguments as Json) ?? {});
      return result ? ok(result) : err(-32602, `Unknown tool: ${name}`);
    }
    case 'resources/list':
      return ok({ resources: [] });
    case 'prompts/list':
      return ok({ prompts: [] });
    default:
      return err(-32601, `Method not found: ${req.method}`);
  }
}

const CORS = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'POST, GET, OPTIONS',
  'access-control-allow-headers': 'content-type, mcp-protocol-version, mcp-session-id, authorization',
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error' } }, { status: 400, headers: CORS });
  }
  const batch = Array.isArray(body);
  const responses = (batch ? body : [body])
    .map((r) => (r && typeof r === 'object' && 'method' in r ? handle(r as RpcRequest) : { jsonrpc: '2.0', id: null, error: { code: -32600, message: 'Invalid Request' } }))
    .filter(Boolean);
  if (!responses.length) return new Response(null, { status: 202, headers: CORS });
  return Response.json(batch ? responses : responses[0], { headers: CORS });
}

export async function GET() {
  // No server-initiated stream: this server is stateless.
  return new Response(
    JSON.stringify({ name: SERVER_INFO.name, transport: 'streamable-http', usage: 'POST JSON-RPC here', docs: `${SITE_URL}/agents` }),
    { status: 405, headers: { ...CORS, allow: 'POST, OPTIONS', 'content-type': 'application/json' } }
  );
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: CORS });
}
