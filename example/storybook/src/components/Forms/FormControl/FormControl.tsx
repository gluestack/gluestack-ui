import React from 'react';
import {
  FormControl,
  Input,
  Radio,
  Button,
  Box,
  Checkbox,
  Textarea,
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
  AlertCircleIcon,
  ChevronDownIcon,
} from '../../../ui-components';

const FormControlStory = ({ ...props }) => {
  return (
    <FormControl {...props}>
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

      <FormControl.Helper>
        <FormControl.Helper.Text>
          Must be atleast 6 characters.
        </FormControl.Helper.Text>
      </FormControl.Helper>

      <FormControl.Error>
        <FormControl.Error.Icon>
          <Icon
            as={AlertCircleIcon}
            sx={{ color: '$red500', height: '$3', width: '$3' }}
          />
        </FormControl.Error.Icon>
        <FormControl.Error.Text>
          Atleast 6 characters are required.
        </FormControl.Error.Text>
      </FormControl.Error>
    </FormControl>
  );
};

export default FormControlStory;

export {
  FormControl,
  Box,
  Input,
  Button,
  Radio,
  Checkbox,
  Textarea,
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
  AlertCircleIcon,
  ChevronDownIcon,
  CircleIcon,
  CheckIcon,
};
