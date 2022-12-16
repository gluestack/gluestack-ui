import React, { useState } from 'react';
// import { Switch, Center } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export function Basic() {
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <Wrapper>
      {/* <Center sx={{ style: { flex: 1 } }}>
        <Switch value={isEnabled} onValueChange={(val) => setIsEnabled(val)} />
      </Center> */}
    </Wrapper>
  );
}
