import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
} from '@gluestack-ui/themed';
import React from 'react';

const InputDemo = () => {
  return (
    <Input>
      <InputSlot pl="$3">
        <InputIcon as={SearchIcon} />
      </InputSlot>
      <InputField placeholder="Search..." />
    </Input>
  );
};

export default InputDemo;
