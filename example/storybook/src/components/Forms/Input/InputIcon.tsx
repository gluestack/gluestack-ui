import React from 'react';
import Wrapper from '../../Wrapper';
import {
  Input,
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
        <Input {...props}>
          <Input.Icon>
            <Icon as={ChevronLeftIcon} />
          </Input.Icon>
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
        </Input>
        <Input {...props}>
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <Input.Icon>
            <Icon as={ChevronRightIcon} />
          </Input.Icon>
        </Input>
      </VStack>
    </Wrapper>
  );
};

export { InputStory, Input, VStack, Icon, ChevronRightIcon, ChevronLeftIcon };
