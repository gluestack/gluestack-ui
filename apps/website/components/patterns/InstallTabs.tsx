'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import CopyButton from './CopyButton';

type Tab = { id: string; label: string; body: string; note?: string; mono?: boolean };

export default function InstallTabs({ tabs, slug }: { tabs: Tab[]; slug: string }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card/50">
      <div className="flex items-center justify-between gap-2 border-b border-border px-2">
        <div className="flex gap-1 overflow-x-auto scrollbar-hide">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActive(t.id)}
              className={cn(
                'relative shrink-0 px-3 py-3 text-sm transition-colors',
                t.id === tab.id ? 'text-foreground after:absolute after:inset-x-2 after:bottom-0 after:h-[2px] after:rounded-full after:bg-foreground' : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <CopyButton
          text={tab.body}
          label="Copy"
          event={tab.id === 'prompt' ? 'copy_prompt' : 'copy_install'}
          eventData={{ pattern: slug, from: `tab_${tab.id}` }}
          className="h-8 shrink-0 px-3 text-muted-foreground hover:bg-muted hover:text-foreground"
        />
      </div>
      {tab.note && <p className="px-4 pt-3 text-xs text-muted-foreground">{tab.note}</p>}
      <pre className={cn('max-h-[260px] overflow-auto whitespace-pre-wrap break-words p-4 text-[12.5px] leading-relaxed text-foreground', tab.mono !== false && 'font-mono')}>
        {tab.body}
      </pre>
    </div>
  );
}
