import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Link } from '@/components/ui/link';
import { LinkText } from '@/components/ui/link';

export default function Example() {
  return (
    <ComponentPreviewer
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
