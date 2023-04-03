import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, Input } from '../../../ui-components';

export const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('Some Random Text');

  return (
    <Wrapper>
      <Center justifyContent="center" w="50%" alignItems="center">
        <Input {...props}>
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
            // placeholderTextColor={'$textLight900'}
          />
        </Input>
      </Center>
    </Wrapper>
  );
};

export { Input };
