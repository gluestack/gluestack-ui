'use client';

import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SearchModal } from './SearchModal';

export function SearchTrigger() {
  const [open, setOpen] = useState(false);

  // ⌘K / Ctrl+K keyboard shortcut
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search documentation (⌘K)"
        className="
          flex items-center gap-2
          h-8 w-64
          px-3 rounded-lg
          text-sm text-muted-foreground
          bg-foreground/[0.03] dark:bg-[#1F1F1F]
          border border-border
          hover:border-primary/40 hover:bg-foreground/[0.06] dark:hover:bg-[#2a2a2a]
          transition-colors
          max-md:w-8 max-md:bg-transparent max-md:border-none max-md:px-0 max-md:justify-center
        "
      >
        <Search className="h-3.5 w-3.5 shrink-0" />
        <span className="flex-1 text-left text-sm max-md:hidden">Search docs</span>
        <kbd className="hidden sm:inline-flex max-md:hidden items-center gap-0.5 rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      <SearchModal open={open} onOpenChange={setOpen} />
    </>
  );
}
