import { Layout } from '@/components/custom/layout';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
