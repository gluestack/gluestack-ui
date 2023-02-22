import React from 'react';
import Wrapper from '../Wrapper';

import { createInput } from '@gluestack-ui/input';
import { Root, Icon, StyledInput } from '../styled-components/input';
import { Center } from '../Center/Center';

export const Input = createInput({
  Root,
  Icon,
  Input: StyledInput,
});

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
      <Center justifyContent="center" h="100%" alignItems="center">
        <Input {...props}>
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
        </Input>
      </Center>
    </Wrapper>
  );
};
