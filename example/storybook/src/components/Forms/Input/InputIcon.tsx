import React from 'react';
import Wrapper from '../../Wrapper';
import { Input, VStack, Icon, SearchIcon } from '../../../ui-components';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

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

export { InputStory, Input, VStack, Icon, SearchIcon, EyeIcon, EyeOffIcon };
