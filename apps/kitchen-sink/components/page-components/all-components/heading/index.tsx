import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Heading } from '@/components/ui/heading';

export default function Example() {
  return (
    <ComponentPreviewer props={{}}>
      {props => {
  return <Heading>I am a Heading</Heading>
}
    </ComponentPreviewer>
  );
}