'use client';

import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  /** Text to copy, or a URL to fetch the text from on click (keeps big prompts out of the page). */
  text?: string;
  fetchUrl?: string;
  label?: string;
  copiedLabel?: string;
  /** Analytics event pushed to GTM's dataLayer. */
  event?: string;
  eventData?: Record<string, string>;
  className?: string;
  iconOnly?: boolean;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

async function copy(text?: string, fetchUrl?: string) {
  if (text !== undefined) return navigator.clipboard.writeText(text);
  if (!fetchUrl) return;
  const blob = fetch(fetchUrl).then((r) => r.text()).then((t) => new Blob([t], { type: 'text/plain' }));
  // Safari only allows async clipboard writes through a ClipboardItem promise.
  if (typeof ClipboardItem !== 'undefined' && navigator.clipboard.write) {
    try {
      await navigator.clipboard.write([new ClipboardItem({ 'text/plain': blob })]);
      return;
    } catch {
      /* fall through */
    }
  }
  await navigator.clipboard.writeText(await (await blob).text());
}

export default function CopyButton({
  text,
  fetchUrl,
  label = 'Copy',
  copiedLabel = 'Copied',
  event,
  eventData,
  className,
  iconOnly,
}: Props) {
  const [state, setState] = useState<'idle' | 'copied' | 'error'>('idle');
  return (
    <button
      type="button"
      onClick={async (e) => {
        e.preventDefault();
        e.stopPropagation();
        try {
          await copy(text, fetchUrl);
          setState('copied');
          if (event) window.dataLayer?.push({ event, ...eventData });
        } catch {
          setState('error');
        }
        setTimeout(() => setState('idle'), 1800);
      }}
      aria-label={iconOnly ? label : undefined}
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
    >
      {state === 'copied' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {!iconOnly && <span>{state === 'copied' ? copiedLabel : state === 'error' ? 'Copy failed' : label}</span>}
    </button>
  );
}
