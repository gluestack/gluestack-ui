import React from 'react';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxGroup,
} from '@/components/ui/Checkbox';
import { Text } from '@/components/ui/Text';
import { RemoveIcon, Icon, CheckIcon } from '@/components/ui/Icon';
import { FormControl } from '@/components/ui/FormControl';
import { Center } from '@/components/ui/Center';
import { VStack } from '@/components/ui/VStack';
import { HStack } from '@/components/ui/HStack';
import { Heading } from '@/components/ui/Heading';
import { Box } from '@/components/ui/Box';

const CheckboxGroupBasic = ({ ...props }: any) => {
  return (
    <Checkbox {...props}>
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  );
};

CheckboxGroupBasic.description = 'This is a basic Checkbox component example';

export default CheckboxGroupBasic;

export {
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  Text,
  RemoveIcon,
  Icon,
  CheckIcon,
  FormControl,
  Center,
  VStack,
  HStack,
  Heading,
  Box,
};
