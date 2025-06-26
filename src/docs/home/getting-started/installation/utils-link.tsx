import Link from 'next/link';
import { InlineCode } from '@/docs-components/inline-code';
export function UtilsLink() {
  return (
    <Link
      isExternal
      className="leading-6 font-body text-typography-950 underline underline-offset-4 decoration-typography-950 inline-block"
      href={`https://github.com/gluestack/gluestack-ui/tree/${process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'}/src/utils/gluestack-utils`}
    >
      GitHub repository
    </Link>
  );
}

export function OverlayLink() {
  return (
    <Link
      isExternal
      className="leading-6 font-body text-typography-950 underline underline-offset-4 decoration-typography-950 inline-block"
      href={`https://github.com/gluestack/gluestack-ui/tree/${process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'}/src/components/ui/overlay`}
    >
      GitHub repository
    </Link>
  );
}

export function ToastLink() {
  return (
    <Link
      isExternal
      className="leading-6 font-body text-typography-950 underline underline-offset-4 decoration-typography-950 inline-block"
      href={`https://github.com/gluestack/gluestack-ui/tree/${process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'}/src/components/ui/toast`}
    >
      GitHub repository
    </Link>
  );
}

export function GluestackUIProviderLink() {
  return (
    <Link
      isExternal
      className="leading-6 font-body text-typography-950 underline underline-offset-4 decoration-typography-950 inline-block"
      href={`https://github.com/gluestack/gluestack-ui/tree/${process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'}/src/components/ui/gluestack-ui-provider`}
    >
      GitHub repository
    </Link>
  );
}
