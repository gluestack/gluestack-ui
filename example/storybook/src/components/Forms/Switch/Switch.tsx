import React, { useState } from 'react';
import { Switch, VStack, Text, HStack } from '@gluestack-ui/themed';

const SwitchStory = ({ ...props }: any) => {
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <Switch
      defaultValue={true}
      value={isEnabled || props.isEnabled}
      onValueChange={(val: any) => setIsEnabled(val)}
      {...props}
    />
  );
};

export default SwitchStory;

export { Switch, VStack, Text, HStack };
