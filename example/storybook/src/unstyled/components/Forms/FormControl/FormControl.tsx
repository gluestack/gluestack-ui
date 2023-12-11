import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Input,
  InputInput,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  Button,
  ButtonText,
  Box,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  Textarea,
  TextareaInput,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Slider,
  Switch,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
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
      <FormControlLabel>
        <FormControlLabelText>Password</FormControlLabelText>
      </FormControlLabel>
      <Input>
        <InputInput
          type="password"
          defaultValue="12345"
          placeholder="password"
        />
      </Input>

      <FormControlHelper>
        <FormControlHelperText>
          Must be atleast 6 characters.
        </FormControlHelperText>
      </FormControlHelper>

      <FormControlError>
        <FormControlErrorIcon>
          <Icon
            as={AlertCircleIcon}
            sx={{ color: '$red500', height: '$3', width: '$3' }}
          />
        </FormControlErrorIcon>
        <FormControlErrorText>
          Atleast 6 characters are required.
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

export default FormControlStory;

export {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Box,
  Input,
  InputInput,
  Button,
  ButtonText,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  Textarea,
  TextareaInput,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Slider,
  Switch,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
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
