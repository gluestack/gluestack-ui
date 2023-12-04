import React, { useState } from 'react';
import { Switch, VStack, Text, HStack } from '../../../ui-components';

const SwitchStory = ({ isDisabled = false, ...props }: any) => {
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

export default SwitchStory;

export { Switch, VStack, Text, HStack };
