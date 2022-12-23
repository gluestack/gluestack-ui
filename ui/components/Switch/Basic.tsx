import React, { useState } from 'react';
import { Switch, Center } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export function Basic({ isDisabled, isInvalid, ...props }: any) {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <Wrapper>
      <Center sx={{ style: { flex: 1 } }}>
        <Switch
          value={isEnabled}
          isDisabled={isDisabled}
          onValueChange={(val: boolean) => setIsEnabled(val)}
        />
      </Center>
    </Wrapper>
  );
}
