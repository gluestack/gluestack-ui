'use client';

import { useEffect, useRef, useState } from 'react';
import { useColorMode } from '@/app/provider';
import { cn } from '@/lib/utils';

type Props = {
  slug: string;
  title: string;
  /** Load the live Expo web preview (interactive). Otherwise show the screenshot only. */
  live?: boolean;
  className?: string;
  priority?: boolean;
};

function useSiteMode(): 'light' | 'dark' {
  const { colorMode } = useColorMode();
  const [system, setSystem] = useState<'light' | 'dark'>('dark');
  useEffect(() => {
    if (colorMode !== 'system') return;
    const m = window.matchMedia('(prefers-color-scheme: dark)');
    const set = () => setSystem(m.matches ? 'dark' : 'light');
    set();
    m.addEventListener('change', set);
    return () => m.removeEventListener('change', set);
  }, [colorMode]);
  return colorMode === 'system' ? system : colorMode;
}

function StatusBar() {
  return (
    <div className="flex h-[44px] items-center justify-between px-7 pt-1 text-[13px] font-semibold text-foreground">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <svg width="17" height="11" viewBox="0 0 17 11" className="fill-current"><rect x="0" y="7" width="3" height="4" rx="1" /><rect x="4.5" y="5" width="3" height="6" rx="1" /><rect x="9" y="2.5" width="3" height="8.5" rx="1" /><rect x="13.5" y="0" width="3" height="11" rx="1" /></svg>
        <svg width="15" height="11" viewBox="0 0 15 11" className="fill-current"><path d="M7.5 2.2c2 0 3.9.8 5.3 2.1l1.1-1.1A9 9 0 0 0 7.5.6 9 9 0 0 0 1.1 3.2l1.1 1.1A7.5 7.5 0 0 1 7.5 2.2Zm0 3.2c1.1 0 2.2.4 3 1.2l1.1-1.1a5.9 5.9 0 0 0-8.2 0l1.1 1.1c.8-.8 1.9-1.2 3-1.2Zm0 3.2c.4 0 .8.2 1.1.5L7.5 10.2 6.4 9.1c.3-.3.7-.5 1.1-.5Z" /></svg>
        <svg width="25" height="12" viewBox="0 0 25 12" className="fill-current"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" fill="none" stroke="currentColor" opacity="0.4" /><rect x="2" y="2" width="16" height="8" rx="2" /><rect x="22.5" y="4" width="1.5" height="4" rx="0.75" opacity="0.4" /></svg>
      </div>
    </div>
  );
}

/**
 * An iPhone-proportioned frame (390 x 844 points) that scales to its container width.
 * The live preview is the pattern's Expo web export at /preview/<slug>.
 */
export default function PhoneFrame({ slug, title, live = false, className, priority }: Props) {
  const mode = useSiteMode();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const initialMode = useRef(mode);

  useEffect(() => {
    iframeRef.current?.contentWindow?.postMessage({ type: 'gluestack:theme', mode }, '*');
  }, [mode, loaded]);

  return (
    <div className={cn('relative mx-auto w-full max-w-[340px]', className)}>
      <div className="relative aspect-[390/844] w-full rounded-[3rem] bg-gradient-to-b from-neutral-300 to-neutral-400 p-[10px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)] dark:from-neutral-700 dark:to-neutral-800">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2.4rem] bg-background">
          <div className="absolute left-1/2 top-[10px] z-10 h-[26px] w-[96px] -translate-x-1/2 rounded-full bg-black" />
          <StatusBar />
          <div className="relative flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/patterns-shots/${slug}-light.webp`}
              alt={`${title} screen, light mode`}
              className={cn('absolute inset-0 h-full w-full object-cover object-top dark:hidden', live && loaded && 'invisible')}
              loading={priority ? 'eager' : 'lazy'}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/patterns-shots/${slug}-dark.webp`}
              alt={`${title} screen, dark mode`}
              className={cn('absolute inset-0 hidden h-full w-full object-cover object-top dark:block', live && loaded && '!invisible')}
              loading={priority ? 'eager' : 'lazy'}
            />
            {live && (
              <iframe
                ref={iframeRef}
                title={`${title} live preview`}
                src={`/preview/${slug}?theme=${initialMode.current}`}
                onLoad={() => setTimeout(() => setLoaded(true), 250)}
                className={cn('absolute inset-0 h-full w-full border-0 transition-opacity duration-500', loaded ? 'opacity-100' : 'opacity-0')}
                loading={priority ? 'eager' : 'lazy'}
              />
            )}
          </div>
          <div className="pointer-events-none absolute bottom-2 left-1/2 h-[5px] w-[130px] -translate-x-1/2 rounded-full bg-foreground/80" />
        </div>
      </div>
    </div>
  );
}
