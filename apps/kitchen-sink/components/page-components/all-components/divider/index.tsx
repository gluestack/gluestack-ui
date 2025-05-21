import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { Divider } from '@/components/ui/divider';

export default function Example() {
  return (
    <ComponentPreviewer props={{}}>
      {props => {
  return (
<Center>
  <Text className="font-semibold">
    Easy
  </Text>
  <Divider className="my-0.5" />
  <Text className="font-semibold">
    Difficult
  </Text>
</Center>
)
}
    </ComponentPreviewer>
  );
}