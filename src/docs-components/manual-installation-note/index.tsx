'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { InlineCode } from '@/docs-components/inline-code';
function ManualInstallationNote() {
  const pathname = usePathname();
  const githubLink = `https://github.com/gluestack/gluestack-ui/tree/${process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'}/src/components/ui/`;
  
  // Extract component name from pathname
  const getComponentName = (path: string) => {
    const segments = path.split('/');
    const componentsIndex = segments.indexOf('components');
    
    if (componentsIndex !== -1 && componentsIndex < segments.length - 1) {
      return segments[componentsIndex + 1];
    }
    
    return null;
  };
  
  const componentName = getComponentName(pathname);
  const currentUrl = `${githubLink}${componentName}`;

  return (
    <div>This command will copies all the code from <Link className="leading-6 font-body text-typography-950 underline underline-offset-4 decoration-typography-950 inline-block" href={currentUrl}>git repo</Link> — excluding the docs and examples folders — into your project’s <InlineCode>components/ui</InlineCode> directory.</div>
  );
}

export default ManualInstallationNote;