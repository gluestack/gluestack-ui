// Setup guides for the /for/<agent> pages and the agents page.
export const MCP_URL = 'https://gluestack.io/api/mcp';

export type AgentGuide = {
  slug: string;
  name: string;
  vendor: string;
  blurb: string;
  /** Steps to add the gluestack MCP server. */
  mcp: { label: string; code: string; lang: string }[];
  /** Where to paste a copied prompt. */
  paste: string;
};

export const AGENTS: AgentGuide[] = [
  {
    slug: 'claude-code',
    name: 'Claude Code',
    vendor: 'Anthropic',
    blurb: 'Give Claude Code a catalog of native screens. It can search patterns, read component docs and install them into your Expo app.',
    mcp: [{ label: 'Add the server (run in your project)', code: `claude mcp add --transport http gluestack ${MCP_URL}`, lang: 'bash' }],
    paste: 'Paste a copied prompt straight into the Claude Code prompt. It runs the gluestack-ui CLI, writes the screen and wires it to your routes.',
  },
  {
    slug: 'cursor',
    name: 'Cursor',
    vendor: 'Anysphere',
    blurb: 'Use gluestack patterns from Cursor’s agent. Add the MCP server once and ask for screens by name.',
    mcp: [{ label: 'Add to .cursor/mcp.json', code: JSON.stringify({ mcpServers: { gluestack: { url: MCP_URL } } }, null, 2), lang: 'json' }],
    paste: 'Paste a copied prompt into the Agent panel (Cmd+I). Cursor applies the setup commands and creates the screen file.',
  },
  {
    slug: 'codex',
    name: 'Codex',
    vendor: 'OpenAI',
    blurb: 'Point Codex at the gluestack catalog so it builds native screens from proven patterns instead of guessing.',
    mcp: [{ label: 'Add to ~/.codex/config.toml', code: `[mcp_servers.gluestack]\nurl = "${MCP_URL}"`, lang: 'toml' }],
    paste: 'Paste a copied prompt into Codex in your terminal or IDE. It installs the components and writes the screen.',
  },
  {
    slug: 'vscode-copilot',
    name: 'VS Code Copilot',
    vendor: 'GitHub',
    blurb: 'Bring gluestack patterns to GitHub Copilot agent mode in VS Code.',
    mcp: [{ label: 'Add to .vscode/mcp.json', code: JSON.stringify({ servers: { gluestack: { type: 'http', url: MCP_URL } } }, null, 2), lang: 'json' }],
    paste: 'Paste a copied prompt into Copilot Chat in Agent mode.',
  },
  {
    slug: 'windsurf',
    name: 'Windsurf',
    vendor: 'Windsurf',
    blurb: 'Let Cascade pull Expo and React Native screens from the gluestack catalog.',
    mcp: [{ label: 'Add to ~/.codeium/windsurf/mcp_config.json', code: JSON.stringify({ mcpServers: { gluestack: { serverUrl: MCP_URL } } }, null, 2), lang: 'json' }],
    paste: 'Paste a copied prompt into Cascade.',
  },
  {
    slug: 'gemini-cli',
    name: 'Gemini CLI',
    vendor: 'Google',
    blurb: 'Use gluestack patterns from Gemini CLI.',
    mcp: [{ label: 'Add to ~/.gemini/settings.json', code: JSON.stringify({ mcpServers: { gluestack: { httpUrl: MCP_URL } } }, null, 2), lang: 'json' }],
    paste: 'Paste a copied prompt into Gemini CLI.',
  },
];

export const agentBySlug = (slug: string) => AGENTS.find((a) => a.slug === slug);
