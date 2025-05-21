import { CodePreviewer } from '@/components/custom/code-previewer';
import { FormControl, FormControlLabel, FormControlError, FormControlErrorText, FormControlErrorIcon, FormControlHelper, FormControlHelperText, FormControlLabelText } from '@/components/ui/form-control';
import { AlertCircleIcon, CircleIcon, CheckIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Button, ButtonText, ButtonSpinner } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon } from '@/components/ui/radio';
import { Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxLabel, CheckboxIcon } from '@/components/ui/checkbox';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { HStack } from '@/components/ui/hstack';


export default function ComponentExamples() {
  return (
    <div>
      <CodePreviewer
  code={`function App () {
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
        size="{{size}}"
        isDisabled={ {{isDisabled}} }
        isReadOnly={ {{isReadOnly}} }
        isRequired={ {{isRequired}} }
      >
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="{{size}}">
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
};`}
  argTypes={{
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
}}
  reactLive={{ FormControl, FormControlLabel, FormControlError, FormControlErrorText, FormControlErrorIcon, FormControlHelper, FormControlHelperText, FormControlLabelText, AlertCircleIcon, Input, InputField, InputIcon, InputSlot, Button, ButtonText, ButtonSpinner, VStack }}
/>

<CodePreviewer
  code={`function Example() {
  const [values, setValues] = React.useState("Mango");
  return (
    <FormControl>
      <FormControlLabel>
        <FormControlLabelText>
          Favourite fruit
        </FormControlLabelText>
      </FormControlLabel>
      <RadioGroup className='my-2' value={values} onChange={setValues}>
        <VStack space="sm">
          <Radio size="sm" value="Mango">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>
              Mango
            </RadioLabel>
          </Radio>
          <Radio size="sm" value="Apple">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>
              Apple
            </RadioLabel>
          </Radio>
          <Radio size="sm" value="Orange">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>
              Orange
            </RadioLabel>
          </Radio>
        </VStack>
      </RadioGroup>
      <FormControlHelper>
        <FormControlHelperText>
          Choose the fruit you like the most
        </FormControlHelperText>
      </FormControlHelper>
    </FormControl>
  );
}`}
  argTypes={{}}
  reactLive={{ FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon, VStack, CircleIcon }}
/>

<CodePreviewer
  code={`function App() {
      const [values, setValues] = React.useState(['bits']);
        return (
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>Sign up for newsletters</FormControlLabelText>
            </FormControlLabel>
            <CheckboxGroup
              className="my-2"
              value={values}
              onChange={(keys) => {
                setValues(keys);
              }}
            >
              <VStack space="sm">
                <Checkbox size="sm" value="bits">
                  <CheckboxIndicator className="mr-2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Daily Bits</CheckboxLabel>
                </Checkbox>
                <Checkbox size="sm" value="event">
                  <CheckboxIndicator className="mr-2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Event Updates</CheckboxLabel>
                </Checkbox>
                <Checkbox size="sm" value="sponsorship">
                  <CheckboxIndicator className="mr-2">
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel>Sponsorship</CheckboxLabel>
                </Checkbox>
              </VStack>
            </CheckboxGroup>
            <FormControlHelper>
              <FormControlHelperText>
                Subscribe to newsletters for updates
              </FormControlHelperText>
            </FormControlHelper>
          </FormControl>
        );
      }`}
  argTypes={{}}
  reactLive={{ FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxLabel, CheckboxIcon, VStack, CheckIcon }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <FormControl isInvalid>
      <FormControlLabel>
        <FormControlLabelText>
          Which time slot works best for you?
        </FormControlLabelText>
      </FormControlLabel>
      <RadioGroup className='my-2'>
        <VStack space="sm">
          <Radio size="sm" value="Mango">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>
              Monday
            </RadioLabel>
          </Radio>
          <Radio size="sm" value="Apple">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>
              Tuesday
            </RadioLabel>
          </Radio>
          <Radio size="sm" value="Orange">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>
              Wednesday
            </RadioLabel>
          </Radio>
        </VStack>
      </RadioGroup>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon}/>
        <FormControlErrorText>
          Choose one time slot for the meeting
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}`}
  argTypes={{}}
  reactLive={{ FormControl, FormControlLabel, FormControlLabelText, FormControlError, FormControlErrorIcon, FormControlErrorText, Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon, VStack, AlertCircleIcon, CircleIcon }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <FormControl>
      <FormControlLabel>
        <FormControlLabelText>
          Comment
        </FormControlLabelText>
      </FormControlLabel>
      <Textarea className="min-w-[200px]">
        <TextareaInput placeholder="Type your comment here..." />
      </Textarea>
      <FormControlHelper>
        <FormControlHelperText>
          Enter your feedback or comments
        </FormControlHelperText>
      </FormControlHelper>
    </FormControl>
  );
}`}
  argTypes={{}}
  reactLive={{ FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, Textarea, TextareaInput }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <HStack>
      <FormControl>
        <Button variant='outline' action='secondary'>
          <ButtonText>
            Cancel
          </ButtonText>
        </Button>
      </FormControl>
      <FormControl>
        <Button action='negative' className='ml-4'>
          <ButtonText className="text-white group-hover/button:text-white group-active/button:text-white">
            Delete
          </ButtonText>
        </Button>
      </FormControl>
    </HStack>
  );
}`}
  argTypes={{}}
  reactLive={{ FormControl, Button, ButtonText, HStack }}
/>
    </div>
  );
}