import React, { useState } from 'react';
import { Center, Switch } from '@components';
import Wrapper from '../Wrapper';

export const SwitchStory = ({
  isDisabled,
  isEnabled: isEnabledProp,
  ...props
}: any) => {
  const [isEnabled, setIsEnabled] = useState(false);
  React.useEffect(() => {
    if (!isDisabled) setIsEnabled(isEnabledProp);
  }, [isEnabledProp, isDisabled]);
  return (
    <Wrapper>
      <Center sx={{ flex: 1 }}>
        <Switch
          value={isEnabled}
          onValueChange={(val: any) => setIsEnabled(val)}
          isDisabled={isDisabled}
          {...props}
        />
      </Center>
    </Wrapper>
  );
};
