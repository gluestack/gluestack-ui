import React from 'react';
import Wrapper from '../../Wrapper';
import {
  InputField,
  VStack,
  Icon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from '../../../ui-components';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Wrapper>
      <VStack
        justifyContent="center"
        w="50%"
        alignItems="center"
        h={300}
        space="md"
      >
        <InputField {...props}>
          <InputField.Icon>
            <Icon as={ChevronLeftIcon} />
          </InputField.Icon>
          <InputField.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
        </InputField>
        <InputField {...props}>
          <InputField.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <InputField.Icon>
            <Icon as={ChevronRightIcon} />
          </InputField.Icon>
        </InputField>
      </VStack>
    </Wrapper>
  );
};

export {
  InputStory,
  InputField,
  VStack,
  Icon,
  ChevronRightIcon,
  ChevronLeftIcon,
};
