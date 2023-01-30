import { Root } from './styled-component';
import { createSwitch } from '@universa11y/switch';
import React from 'react';
import { useState } from 'react';
import { Wrapper } from '../Wrapper';

const SwitchTemp = createSwitch({
  Root,
});

export const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Wrapper>
      <SwitchTemp
        value={isEnabled}
        onValueChange={(val: any) => setIsEnabled(val)}
      />
    </Wrapper>
  );
};

export default Switch;
