'use client';

import { Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import PatternCard, { type CardPattern } from './PatternCard';

type Props = {
  patterns: (CardPattern & { featured?: boolean; added?: string })[];
  categories: { id: string; title: string; count: number }[];
  initialCategory?: string;
};

export default function Catalog({ patterns, categories, initialCategory = 'all' }: Props) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [sort, setSort] = useState<'featured' | 'new' | 'az'>('featured');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = patterns.filter((p) => (category === 'all' || p.category === category) &&
      (!q || [p.title, p.description, p.categoryTitle, ...p.tags].join(' ').toLowerCase().includes(q)));
    if (sort === 'az') list = [...list].sort((a, b) => a.title.localeCompare(b.title));
    else if (sort === 'new') list = [...list].sort((a, b) => (b.added ?? '').localeCompare(a.added ?? ''));
    else list = [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    return list;
  }, [patterns, query, category, sort]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <label className="relative flex h-11 w-full items-center rounded-full border border-border bg-card/60 pl-11 pr-4 focus-within:border-foreground/40 md:max-w-sm">
          <Search className="absolute left-4 h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${patterns.length} patterns`}
            className="h-full w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </label>
        <div className="flex items-center gap-1 self-start rounded-full border border-border p-1 text-sm md:self-auto">
          {(['featured', 'new', 'az'] as const).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSort(s)}
              className={cn('rounded-full px-3 py-1.5 capitalize transition-colors', sort === s ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground')}
            >
              {s === 'az' ? 'A–Z' : s === 'new' ? 'Newest' : 'Featured'}
            </button>
          ))}
        </div>
      </div>
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-hide md:mx-0 md:flex-wrap md:px-0">
        {[{ id: 'all', title: 'All', count: patterns.length }, ...categories].map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.id)}
            className={cn(
              'shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors',
              category === c.id ? 'border-foreground bg-foreground text-background' : 'border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground'
            )}
          >
            {c.title} <span className="opacity-60">{c.count}</span>
          </button>
        ))}
      </div>
      {results.length ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((p, i) => (
            <PatternCard key={p.slug} p={p} priority={i < 4} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-border p-16 text-center text-muted-foreground">
          No patterns match “{query}”. Try another word, or ask your agent to build it from the closest one.
        </div>
      )}
    </div>
  );
}
