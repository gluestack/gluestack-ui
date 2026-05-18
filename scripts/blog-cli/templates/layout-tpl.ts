export function generateLayoutTs(
  title: string,
  description: string,
  coverPath: string
): string {
  const escapedTitle = title.replace(/'/g, "\\'");
  const escapedDesc = description.replace(/'/g, "\\'");

  return `import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${escapedTitle} | gluestack',
  description: '${escapedDesc}',
  openGraph: {
    images: [
      {
        url: '${coverPath}',
        width: 1200,
        height: 630,
        alt: '${escapedTitle}',
      },
    ],
  },
  twitter: {
    images: {
      url: '${coverPath}',
      width: 1200,
      height: 630,
      alt: '${escapedTitle}',
    },
  },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
`;
}