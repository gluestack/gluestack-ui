import NextLink from 'next/link';
import CopyButton from './CopyButton';

export type CardPattern = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryTitle: string;
  components: number;
  tags: string[];
};

export default function PatternCard({ p, priority }: { p: CardPattern; priority?: boolean }) {
  return (
    <NextLink
      href={`/patterns/${p.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/60 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-[0_20px_60px_-25px_rgba(0,0,0,0.5)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[radial-gradient(120%_80%_at_50%_0%,rgb(var(--muted))_0%,transparent_70%)]">
        <div className="absolute inset-x-[14%] top-7 bottom-0 overflow-hidden rounded-t-[1.6rem] border border-b-0 border-border bg-background shadow-[0_-10px_40px_-20px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:-translate-y-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/patterns-shots/${p.slug}-light.webp`}
            alt={`${p.title} pattern preview`}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-cover object-top dark:hidden"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/patterns-shots/${p.slug}-dark.webp`}
            alt={`${p.title} pattern preview`}
            loading={priority ? 'eager' : 'lazy'}
            className="hidden h-full w-full object-cover object-top dark:block"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-2 justify-center gap-2 bg-gradient-to-t from-card via-card/80 to-transparent pb-4 pt-10 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <CopyButton
            fetchUrl={`/patterns/${p.slug}/prompt`}
            label="Copy prompt"
            event="copy_prompt"
            eventData={{ pattern: p.slug, from: 'card' }}
            className="h-9 bg-primary px-4 text-primary-foreground shadow-lg hover:bg-primary/90"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 border-t border-border px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="truncate text-[15px] font-semibold text-foreground">{p.title}</h3>
          <span className="shrink-0 text-xs text-muted-foreground">{p.components} components</span>
        </div>
        <p className="text-xs text-muted-foreground">{p.categoryTitle}</p>
      </div>
    </NextLink>
  );
}
