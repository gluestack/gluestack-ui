import React from 'react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GluestackUIProvider } from '../../storybook/src/ui-components';
import { config } from '../../storybook/src/gluestack-ui.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GluestackUIProvider config={config}>
      <Component {...pageProps} />
    </GluestackUIProvider>
  );
}
