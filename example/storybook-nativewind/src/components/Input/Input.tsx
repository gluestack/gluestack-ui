import React from 'react';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { SearchIcon } from '@/components/ui/icon';

const InputBasic = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Input {...props}>
      <InputField
        onChange={(e: any) => {
          setValue(e.nativeEvent.text);
        }}
        value={value}
        placeholder="Enter Text here"
      />
      <InputSlot className={props.variant === 'underlined' ? `pr-0` : `pr-4`}>
        <InputIcon as={SearchIcon} />
      </InputSlot>
    </Input>
  );
};

InputBasic.description =
  'This is a basic Input component example. Inputs are used to capture data from users.';

export default InputBasic;
