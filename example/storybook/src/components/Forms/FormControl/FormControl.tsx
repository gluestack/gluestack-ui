import React from 'react';
import {
  FormControl,
  Input,
  Radio,
  Button,
  Box,
  Checkbox,
  TextArea,
  Select,
  Slider,
  Switch,
  Modal,
  HStack,
  VStack,
  Heading,
  Text,
  Center,
  Icon,
  CircleIcon,
  CheckIcon,
  WarningIcon,
  ChevronDownIcon,
} from '../../../ui-components';

import Wrapper from '../../Wrapper';

export const FormControlStory = ({ ...props }) => {
  return (
    <Wrapper>
      <FormControl {...props}>
        {/* Label Message */}
        <FormControl.Label>
          <FormControl.Label.Text>Password</FormControl.Label.Text>
        </FormControl.Label>
        <Input>
          <Input.Input
            type="password"
            defaultValue="12345"
            placeholder="password"
          />
        </Input>
        {/* Helper Text */}
        <FormControl.Helper>
          <FormControl.Helper.Text>
            Must be atleast 6 characters.
          </FormControl.Helper.Text>
        </FormControl.Helper>
        {/* Error Message */}
        <FormControl.Error>
          <FormControl.Error.Icon>
            <Icon
              as={WarningIcon}
              sx={{ color: '$red500', height: '$3', width: '$3' }}
            />
          </FormControl.Error.Icon>
          <FormControl.Error.Text>
            Atleast 6 characters are required.
          </FormControl.Error.Text>
        </FormControl.Error>
      </FormControl>
    </Wrapper>
  );
};

export {
  FormControl,
  Box,
  Input,
  Button,
  Radio,
  Checkbox,
  TextArea,
  Select,
  Slider,
  Switch,
  Modal,
  HStack,
  VStack,
  Heading,
  Text,
  Center,
  Icon,
  WarningIcon,
  ChevronDownIcon,
  CircleIcon,
  CheckIcon,
};
