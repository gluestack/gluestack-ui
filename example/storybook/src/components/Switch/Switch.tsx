import { Root } from './styled-component';
import { createSwitch } from '@universa11y/switch';
import React from 'react';
import { useState } from 'react';

const SwitchTemp = createSwitch({
  Root,
});

export const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <SwitchTemp
        value={isEnabled}
        onValueChange={(val: any) => setIsEnabled(val)}
      />
    </>
  );
};
