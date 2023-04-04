import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, Input, Box } from '../../../ui-components';

export const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('Some Random Text');

  return (
    <Wrapper>
      <Center justifyContent="center" w="50%" alignItems="center" h={300}>
        <Box bg="$green500" w="$full" h={100} />

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
        <Box bg="$green500" w="$full" h={100} />
      </Center>
    </Wrapper>
  );
};

export { Input };
