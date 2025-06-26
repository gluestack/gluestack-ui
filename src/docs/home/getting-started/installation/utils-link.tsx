import Link from 'next/link';
import { InlineCode } from '@/docs-components/inline-code';
export default function UtilsLink() {
  return (
    <div>
      Copy all the contents of the gluestack-utils folder from the{' '}
      <Link
        className="leading-6 font-body text-typography-950 underline underline-offset-4 decoration-typography-950 inline-block"
        href={`https://github.com/gluestack/gluestack-ui/tree/${process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'}/src/utils/gluestack-utils`}
      >
        GitHub repository
      </Link>{' '}
      into your project's <InlineCode>utils/gluestack-utils</InlineCode> directory.
    </div>
  );
}
