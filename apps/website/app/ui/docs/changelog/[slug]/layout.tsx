import React from 'react';
import { Metadata } from 'next';
import { getChangelogEntryBySlug } from '@/app/ui/docs/changelog/changelog-data';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getChangelogEntryBySlug(slug);
  
  if (!entry) {
    return {
      title: 'Changelog Entry | gluestack-ui',
    };
  }

  return {
    title: `${entry.title} | Changelog | gluestack-ui`,
    description: entry.excerpt || 'Changelog entry from gluestack-ui',
  };
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
