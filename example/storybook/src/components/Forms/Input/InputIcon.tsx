import React from 'react';

import {
  Input,
  VStack,
  Icon,
  SearchIcon,
  InputIcon,
  InputInput,
} from '@gluestack-ui/themed';
import { EyeIcon, EyeOffIcon } from 'lucide-react-native';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <VStack space="md" w="$full">
      <Input {...props} size="sm">
        <InputInput
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputIcon pr="$4">
          <Icon as={SearchIcon} />
        </InputIcon>
      </Input>

      <Input {...props} size="md">
        <InputInput
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputIcon pr="$4">
          <Icon as={SearchIcon} />
        </InputIcon>
      </Input>

      <Input {...props} size="lg" isDisabled>
        <InputInput
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputIcon pr="$4">
          <Icon as={SearchIcon} />
        </InputIcon>
      </Input>

      <Input {...props} size="xl" isInvalid>
        <InputInput
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <InputIcon pr="$4">
          <Icon as={SearchIcon} />
        </InputIcon>
      </Input>
    </VStack>
  );
};

export default InputStory;

export { Input, VStack, Icon, SearchIcon, EyeIcon, EyeOffIcon };
