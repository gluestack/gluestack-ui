import React from 'react';
import { Input } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

export const InputStory = ({
  // variant,
  // isInvalid,
  // isDisabled,
  // size,
  ...props
}: any) => {
  const [value, setValue] = React.useState('Some Random Text');

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
