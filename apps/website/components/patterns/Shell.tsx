import WebsiteLayout from '@/components/page-components/landing-page/WebsiteLayout';
import Footer from '@/components/page-components/landing-page/Footer';
import CopyButton from './CopyButton';

/** Header + page + footer, shared by the patterns and marketing pages. */
export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <WebsiteLayout>
      <div className="w-full overflow-x-hidden bg-background">{children}</div>
      <Footer />
    </WebsiteLayout>
  );
}

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{children}</p>
  );
}

export function SectionTitle({ eyebrow, title, sub, center }: { eyebrow?: string; title: React.ReactNode; sub?: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex flex-col gap-3 ${center ? 'items-center text-center' : ''}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-3xl text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-[2.6rem] sm:leading-[1.1]">
        {title}
      </h2>
      {sub && <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{sub}</p>}
    </div>
  );
}

/** Terminal-style command line with a copy button. */
export function CommandLine({ command, label }: { command: string; label?: string }) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-card/70 py-2 pl-4 pr-2 font-mono text-[13px] text-foreground">
      <span className="select-none text-muted-foreground">$</span>
      <span className="min-w-0 flex-1 truncate">{command}</span>
      <CopyButton text={command} iconOnly label={label ?? 'Copy command'} className="h-8 w-8 shrink-0 text-muted-foreground hover:bg-muted hover:text-foreground" />
    </div>
  );
}
