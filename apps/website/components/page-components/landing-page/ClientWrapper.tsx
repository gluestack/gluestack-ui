'use client';

import useErrorShortcut from './SentryTestComponent';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useErrorShortcut();
  return <>{children}</>;
}

