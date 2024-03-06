import React from 'react';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxGroup,
} from '@/components/ui/checkbox';
import { Text } from '@/components/ui/text';
import { RemoveIcon, Icon, CheckIcon } from '@/components/ui/icon';
import { FormControl } from '@/components/ui/form-control';
import { Center } from '@/components/ui/center';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';

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
