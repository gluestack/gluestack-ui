import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer props={{}}>
      {props => {
  return <Text>Hello World!</Text>
}
    </ComponentPreviewer>
  );
}