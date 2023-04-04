import React from 'react';
import Wrapper from '../../Wrapper';
import { InputField, Center } from '../../../ui-components';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Wrapper>
      <Center justifyContent="center" w="50%" alignItems="center" h={300}>
        <InputField {...props}>
          <InputField.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
        </InputField>
      </Center>
    </Wrapper>
  );
};

export { InputStory, InputField, Center };
