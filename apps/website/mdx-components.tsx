import type { MDXComponents } from "mdx/types";
import { blogComponents } from '@/components/custom/mdx/blog-components'
import { docsComponents } from '@/components/custom/mdx/docs-components'
import { usePathname } from "next/navigation";
export function useMDXComponents(components: MDXComponents): MDXComponents {
  const pathname = usePathname()
  
  if (pathname?.startsWith('/blog')) {
    return { ...blogComponents, ...components }
  }

  if (pathname?.startsWith("/docs")) {
    return { ...docsComponents, ...components };
  }

  return components;
}
