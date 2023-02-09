import { Root, Icon, Input as TextInput } from './styled-component';
import { createInput } from '@universa11y/input';
import React from 'react';
import { useState } from 'react';
import { Wrapper } from '../Wrapper';

const InputTemp = createInput({
  Root,
  Icon,
  Input: TextInput,
});

export const Input = () => {
  const [value, setValue] = useState('Some Random Text');
  return (
    <Wrapper>
      <InputTemp>
        <InputTemp.Input
          onChangeText={(text: string) => {
            setValue(text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
      </InputTemp>
    </Wrapper>
  );
};

export default Input;
