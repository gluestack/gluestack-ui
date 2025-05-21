import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { FormControl } from '@/components/ui/form-control';
import { FormControlLabel } from '@/components/ui/form-control';
import { FormControlError } from '@/components/ui/form-control';
import { FormControlErrorText } from '@/components/ui/form-control';
import { FormControlErrorIcon } from '@/components/ui/form-control';
import { FormControlHelper } from '@/components/ui/form-control';
import { FormControlHelperText } from '@/components/ui/form-control';
import { FormControlLabelText } from '@/components/ui/form-control';
import { AlertCircleIcon } from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { InputField } from '@/components/ui/input';
import { InputIcon } from '@/components/ui/input';
import { InputSlot } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';
import { ButtonSpinner } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';

export default function Example() {
  return (
    <ComponentPreviewer props={{
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": true
  },
  "isReadOnly": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": true
  },
  "isRequired": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": true
  },
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg"
    ],
    "defaultValue": "md"
  }
}}>
      {props => function App () {
  const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("12345");

  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <VStack>
      <FormControl
        isInvalid={isInvalid}
        size={props.size}
        isDisabled={props.isDisabled}
        isReadOnly={props.isReadOnly}
        isRequired={props.isRequired}
      >
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
          <FormControlErrorIcon as={AlertCircleIcon} className="text-red-500"/>
          <FormControlErrorText  className="text-red-500">
            At least 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Button className="w-fit self-end mt-4" size="sm" variant="outline" onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
    </VStack>
  );
};}
    </ComponentPreviewer>
  );
}