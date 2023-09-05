import React, { useState } from 'react';
import { Switch, VStack, Text, HStack } from '@gluestack-ui/themed';

const SwitchBasic = ({ isDisabled = false, ...props }: any) => {
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <Switch
      defaultValue={true}
      value={isEnabled}
      onValueChange={(val: any) => setIsEnabled(val)}
      isDisabled={isDisabled}
      {...props}
    />
  );
};

export default SwitchBasic;

export { Switch, VStack, Text, HStack };
