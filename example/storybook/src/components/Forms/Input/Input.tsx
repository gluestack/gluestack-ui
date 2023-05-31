import React from 'react';
import Wrapper from '../../Wrapper';
import { Input, Center } from '../../../ui-components';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Wrapper>
      <Input {...props}>
        <Input.Input
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
      </Input>
    </Wrapper>
  );
};

export { InputStory, Input, Center };
