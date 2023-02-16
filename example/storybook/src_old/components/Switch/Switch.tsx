import { Root } from './styled-component';
import { createSwitch } from '@universa11y/switch';
import React from 'react';
import { useState } from 'react';
import { Wrapper } from '../Wrapper';

export const AccessibleSwitch: any = createSwitch({
  Root,
});

export const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Wrapper>
      <AccessibleSwitch
        value={isEnabled}
        onValueChange={(val: any) => setIsEnabled(val)}
      />
    </Wrapper>
  );
};

export default Switch;
