import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Link } from '@/components/ui/link';
import { LinkText } from '@/components/ui/link';

export default function Example() {
  return (
    <ComponentPreviewer props={{}}>
      {props => {
  return (
    <Link href="https://gluestack.io/">
      <LinkText>gluestack</LinkText>
    </Link>
  )
}
    </ComponentPreviewer>
  );
}