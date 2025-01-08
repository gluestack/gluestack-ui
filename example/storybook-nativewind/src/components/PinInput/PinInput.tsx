import React, { useState } from 'react';
import { PinInput, PinInputField } from '@/components/ui/pin-input';
import { Button, ButtonText } from '@/components/ui/button';
// import Clipboard from '@react-native-clipboard/clipboard';

const PinInputBasic = ({ ...props }: any) => {
  const [value, setValue] = useState('');
  // const [clipboardValue, setClipboardValue] = useState('');
  return (
    <>
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
      <Button
      // onPress={() => {
      //   Clipboard.getString().then((valueInClipboard) => {
      //     console.log('value in use', valueInClipboard);
      //     setClipboardValue(valueInClipboard);
      //   });
      // }}
      >
        <ButtonText className="bg-red-500 h-[100px] w-[100px] text-green-600 text-center justify-center items-center">
          {value}
        </ButtonText>
      </Button>
    </>
  );
};

PinInputBasic.description =
  'This is a basic PinInput component example. PinInputs are used to capture OTP from users.';

export default PinInputBasic;
