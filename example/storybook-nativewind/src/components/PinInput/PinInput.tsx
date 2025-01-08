import React, { useState } from 'react';
import { PinInput, PinInputField } from '@/components/ui/pin-input';

const PinInputBasic = ({ ...props }: any) => {
  const [value, setValue] = useState('1357');
  return (
    <PinInput
      {...props}
      className=""
      defaultValue={'0000'}
      value={value}
      onChange={(e: any) => {
        setValue(e);
      }}
      noOfFields={4}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <PinInputField key={index} index={index} />
      ))}
    </PinInput>
  );
};

PinInputBasic.description =
  'This is a basic PinInput component example. PinInputs are used to capture OTP from users.';

export default PinInputBasic;
