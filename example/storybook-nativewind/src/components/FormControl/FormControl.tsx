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
} from '@/components/ui/form-control';
import { AlertCircleIcon } from '@/components/ui/icon';
import { Input, InputField } from '@/components/ui/input';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';

const FormControlBasic = ({ isInvalid: propsIsInvalid, ...props }: any) => {
  const [isInvalid, setIsInvalid] = React.useState(propsIsInvalid);
  const [inputValue, setInputValue] = React.useState('12345');

  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  React.useEffect(() => {
    setIsInvalid(propsIsInvalid);
  }, [propsIsInvalid]);

  return (
    <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
      <FormControl isInvalid={isInvalid} {...props}>
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size={props.size}>
          <InputField
            type="password"
            placeholder="password"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
        </Input>

        <FormControlHelper>
          <FormControlHelperText>
            Must be at least 6 characters.
          </FormControlHelperText>
        </FormControlHelper>

        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            At least 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <Button className="w-fit self-end mt-4" size="sm" onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
    </VStack>
  );
};

FormControlBasic.description =
  'This is a basic FormControl component example.  A form control is a component that users can interact with to enter or select data.';

export default FormControlBasic;

export {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Input,
  InputField,
  AlertCircleIcon,
};
