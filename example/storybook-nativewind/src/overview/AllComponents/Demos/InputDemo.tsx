import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from '@/components/ui';
import React from 'react';

const InputDemo = () => {
  return (
    <Input w="90%">
      <InputSlot pl="$3">
        <InputIcon as={SearchIcon} />
      </InputSlot>
      <InputField placeholder="Search..." />
    </Input>
  );
};

export default InputDemo;
