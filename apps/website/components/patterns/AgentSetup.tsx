import { type AgentGuide } from './agents-data';
import CopyButton from './CopyButton';

export function SnippetBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/50">
      <div className="flex items-center justify-between border-b border-border px-4 py-2">
        <span className="text-xs text-muted-foreground">{label}</span>
        <CopyButton text={code} iconOnly label="Copy" className="h-8 w-8 text-muted-foreground hover:bg-muted hover:text-foreground" />
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed text-foreground">{code}</pre>
    </div>
  );
}

export function AgentSetup({ agent }: { agent: AgentGuide }) {
  return (
    <div className="flex flex-col gap-3">
      {agent.mcp.map((m) => (
        <SnippetBlock key={m.label} label={m.label} code={m.code} />
      ))}
    </div>
  );
}
