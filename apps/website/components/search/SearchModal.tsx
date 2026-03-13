'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Search, X, FileText, ArrowRight, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useSearch, type SearchHit } from '@/hooks/useSearch';

// ─── Text highlighter ─────────────────────────────────────────────────────────

function highlight(text: string, query: string): React.ReactNode {
  if (!query.trim()) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <mark key={i} className="bg-primary/20 text-foreground rounded-sm px-0.5 not-italic font-medium">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

// ─── Excerpt extractor ────────────────────────────────────────────────────────

function getExcerpt(content: string, query: string, maxLen = 140): string {
  const lower = content.toLowerCase();
  const idx = lower.indexOf(query.toLowerCase());
  if (idx === -1) return content.slice(0, maxLen) + (content.length > maxLen ? '…' : '');
  const start = Math.max(0, idx - 50);
  const end = Math.min(content.length, idx + query.length + 90);
  return (start > 0 ? '…' : '') + content.slice(start, end) + (end < content.length ? '…' : '');
}

// ─── Result item ─────────────────────────────────────────────────────────────

function ResultItem({
  hit,
  query,
  isActive,
  onSelect,
  onHover,
}: {
  hit: SearchHit;
  query: string;
  isActive: boolean;
  onSelect: () => void;
  onHover: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isActive) ref.current?.scrollIntoView({ block: 'nearest' });
  }, [isActive]);

  const { title, description, content, section, subsection } = hit.document;
  const excerpt = description || getExcerpt(content, query);

  return (
    <button
      ref={ref}
      onClick={onSelect}
      onMouseEnter={onHover}
      className={`w-full text-left px-4 py-3 flex items-start gap-3 rounded-lg transition-colors group ${
        isActive
          ? 'bg-primary/10 text-foreground'
          : 'hover:bg-muted/60 text-foreground'
      }`}
    >
      <FileText
        className={`mt-0.5 h-4 w-4 shrink-0 transition-colors ${
          isActive ? 'text-primary' : 'text-muted-foreground'
        }`}
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-0.5">
          {section && (
            <>
              <span className="text-xs text-muted-foreground truncate">{section}</span>
              {subsection && (
                <>
                  <span className="text-xs text-muted-foreground">/</span>
                  <span className="text-xs text-muted-foreground truncate">{subsection}</span>
                </>
              )}
            </>
          )}
        </div>
        <p className="text-sm font-medium leading-snug truncate">
          {highlight(title, query)}
        </p>
        {excerpt && (
          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2 leading-relaxed">
            {highlight(excerpt, query)}
          </p>
        )}
      </div>
      <ArrowRight
        className={`mt-1 h-3.5 w-3.5 shrink-0 transition-opacity ${
          isActive ? 'opacity-100 text-primary' : 'opacity-0'
        }`}
      />
    </button>
  );
}

// ─── Modal content ────────────────────────────────────────────────────────────

function SearchModalContent({ onClose }: { onClose: () => void }) {
  const { query, setQuery, hits, isLoading } = useSearch();
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Reset active when hits change
  useEffect(() => setActiveIndex(0), [hits]);

  // Focus input on open
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const navigate = useCallback(
    (hit: SearchHit) => {
      router.push(hit.document.path);
      onClose();
    },
    [router, onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, hits.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter' && hits[activeIndex]) {
        e.preventDefault();
        navigate(hits[activeIndex]);
      }
    },
    [hits, activeIndex, navigate]
  );

  const showResults = query.trim().length > 0;

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <Dialog.Content
        className="fixed left-1/2 top-[15%] z-50 w-full max-w-xl -translate-x-1/2 rounded-xl border border-border bg-background shadow-2xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2"
        onKeyDown={handleKeyDown}
        aria-label="Search documentation"
      >
        {/* Input row */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          {isLoading ? (
            <Loader2 className="h-4 w-4 shrink-0 text-muted-foreground animate-spin" />
          ) : (
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          )}
          <input
            ref={inputRef}
            type="text"
            placeholder="Search docs…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <Dialog.Close asChild>
            <button
              className="shrink-0 text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5 hover:bg-muted transition-colors"
              aria-label="Close search"
            >
              Esc
            </button>
          </Dialog.Close>
        </div>

        {/* Results */}
        {showResults && (
          <div className="max-h-[400px] overflow-y-auto p-2">
            {hits.length > 0 ? (
              <>
                <p className="px-2 pb-1 text-xs text-muted-foreground">
                  {hits.length} result{hits.length !== 1 ? 's' : ''}
                </p>
                {hits.map((hit, i) => (
                  <ResultItem
                    key={hit.id}
                    hit={hit}
                    query={query}
                    isActive={i === activeIndex}
                    onSelect={() => navigate(hit)}
                    onHover={() => setActiveIndex(i)}
                  />
                ))}
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2">
                <Search className="h-8 w-8 opacity-30" />
                <p className="text-sm">No results for &ldquo;{query}&rdquo;</p>
                <p className="text-xs opacity-70">Try a different search term</p>
              </div>
            )}
          </div>
        )}

        {/* Empty state (no query yet) */}
        {!showResults && (
          <div className="flex flex-col items-center justify-center py-10 text-muted-foreground gap-1.5">
            <Search className="h-8 w-8 opacity-20" />
            <p className="text-sm">Search the docs…</p>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center gap-4 px-4 py-2.5 border-t border-border">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <kbd className="inline-flex h-5 items-center rounded border border-border px-1 font-mono text-[10px]">↑</kbd>
            <kbd className="inline-flex h-5 items-center rounded border border-border px-1 font-mono text-[10px]">↓</kbd>
            Navigate
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <kbd className="inline-flex h-5 items-center rounded border border-border px-1 font-mono text-[10px]">↵</kbd>
            Open
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <kbd className="inline-flex h-5 items-center rounded border border-border px-1 font-mono text-[10px]">Esc</kbd>
            Close
          </span>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

// ─── Public component ─────────────────────────────────────────────────────────

export function SearchModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {open && <SearchModalContent onClose={() => onOpenChange(false)} />}
    </Dialog.Root>
  );
}
