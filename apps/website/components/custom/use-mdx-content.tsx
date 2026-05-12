'use client';

import { usePathname } from 'next/navigation';

export const useMDXContent = () => {
  const pathname = usePathname();

  // Convert path to file path
  const filePath = pathname.replace('/ui/docs/', '');
  const mdxPath = `app/ui/docs/${filePath}/index.mdx`;

  // In a real implementation, you would fetch this content
  // For now, we'll return a mock
  const getMDXContent = async () => {
    try {
      // This would normally fetch from the file system or API
      const response = await fetch(`/api/mdx-content?path=${mdxPath}`);
      if (response.ok) {
        return await response.text();
      }
    } catch (error) {
      console.error('Failed to fetch MDX content:', error);
    }

    return '';
  };

  return {
    mdxPath,
    getMDXContent
  };
};