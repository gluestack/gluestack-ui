import { CodePreviewer } from '@/components/code-previewer';
import { Link } from '@/components/ui/link';
import { LinkText } from '@/components/ui/link';

export default function Example() {
  return (
    <CodePreviewer
      code={`function Example() {
  return (
    <Link href="https://gluestack.io/">
      <LinkText>gluestack</LinkText>
    </Link>
  )
}`}
      argTypes={{}}
      reactLive={{ Link, LinkText }}
    />
  );
}