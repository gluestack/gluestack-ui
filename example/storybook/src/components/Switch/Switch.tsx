import React, { useState } from 'react';
import { Center } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

import { createSwitch } from '@universa11y/switch';
import { Root } from '../styled-components/switch';

export const Switch = createSwitch({
  Root,
}) as any;

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
