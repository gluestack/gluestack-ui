import React, { useState } from 'react';
import { Center, Switch, VStack, Text, HStack } from '../../../ui-components';
import Wrapper from '../../Wrapper';

export const SwitchStory = ({ isDisabled, ...props }: any) => {
  const [isEnabled, setIsEnabled] = useState(true);
  return (
    <Wrapper>
      <Center sx={{ flex: 1 }}>
        <Switch
          defaultValue={true}
          value={isEnabled}
          onValueChange={(val: any) => setIsEnabled(val)}
          isDisabled={isDisabled}
          {...props}
        />
      </Center>
    </Wrapper>
  );
};

export { Switch, VStack, Text, HStack };
