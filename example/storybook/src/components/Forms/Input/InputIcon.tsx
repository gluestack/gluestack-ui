import React from 'react';
import Wrapper from '../../Wrapper';
import { Input, VStack, Icon, SearchIcon } from '../../../ui-components';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Wrapper>
      <VStack space="md">
        <Input {...props} size="sm">
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <Input.Icon pr="$4">
            <Icon as={SearchIcon} />
          </Input.Icon>
        </Input>

        <Input {...props} size="md">
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <Input.Icon pr="$4">
            <Icon as={SearchIcon} />
          </Input.Icon>
        </Input>

        <Input {...props} size="lg" isDisabled>
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <Input.Icon pr="$4">
            <Icon as={SearchIcon} />
          </Input.Icon>
        </Input>

        <Input {...props} size="xl" isInvalid>
          <Input.Input
            onChange={(e: any) => {
              setValue(e.nativeEvent.text);
            }}
            value={value}
            placeholder="Enter Text here"
          />
          <Input.Icon pr="$4">
            <Icon as={SearchIcon} />
          </Input.Icon>
        </Input>
      </VStack>
    </Wrapper>
  );
};

export { InputStory, Input, VStack, Icon, SearchIcon };
