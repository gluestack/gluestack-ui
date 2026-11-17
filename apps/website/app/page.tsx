import Home from '@/components/patterns/Home';
import { patterns } from '@/utils/patterns';
import { Metadata } from 'next';

const title = 'gluestack: Expo & React Native UI patterns for AI agents';
const description = `${patterns.length}+ copy-paste Expo and React Native screens built on gluestack-ui, the open-source React & React Native component library. One prompt for Claude Code, Cursor or Codex, an MCP server and a shadcn-compatible registry.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: 'https://gluestack.io/' },
  openGraph: {
    title,
    description,
    siteName: 'gluestack',
    url: 'https://gluestack.io/',
    images: [{ url: 'https://gluestack.io/images/og-image.png', alt: title }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', site: '@gluestack', title, description, images: [{ url: 'https://gluestack.io/images/og-image.png' }] },
  icons: { icon: '/favicon.ico', apple: '/icon/apple-touch-icon.png' },
};

export default function Page() {
  return <Home />;
}
