import { FormControl, FormControlLabel, FormControlError, FormControlErrorText, FormControlErrorIcon, FormControlHelper, FormControlHelperText, FormControlLabelText } from '@/components/ui/form-control'
import { AlertCircleIcon, CircleIcon, CheckIcon } from '@/components/ui/icon'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { Button, ButtonText, ButtonSpinner } from '@/components/ui/button'
import { VStack } from '@/components/ui/vstack'
import { Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon } from '@/components/ui/radio'
import { Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxLabel, CheckboxIcon } from '@/components/ui/checkbox'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Textarea, TextareaInput } from '@/components/ui/textarea'
import { HStack } from '@/components/ui/hstack'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
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
        isDisabled={ false }
        isReadOnly={ false }
        isRequired={ false }
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
          <FormControlErrorIcon as={AlertCircleIcon} className="text-destructive"/>
          <FormControlErrorText  className="text-destructive">
            At least 6 characters are required.
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Button className="w-fit self-end mt-4" size="sm"  onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
    </VStack>
  )
};

const ExampleFormControlWithRadio = () => {
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
  )
};

const ExampleFormControlWithCheckbox = () => {
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
        )
};

const ExampleSigningForm = () => {
const [isInvalid, setIsInvalid] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("12345");
  const [values, setValues] = React.useState("Male");
  const handleSubmit = () => {
    if (inputValue.length < 6) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <VStack className="bg-popover border gap-4 max-w-[350px] border-border rounded-md px-8 pt-6 pb-8">
      <VStack space="sm">
      <Heading size="xl">Get Started</Heading>
     <Text className="text-foreground/70 text-[15px] leading-[20px] font-body">Welcome to gluestack-ui - Elevate your app with our components</Text>
     </VStack>
      <FormControl className=""
      >
        <FormControlLabel className="mt-2">
          <FormControlLabelText>Name</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1">
          <InputField
            type="text"
            placeholder="Enter your name"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
        </Input>
      
      </FormControl>
       <FormControl
      >
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1">
          <InputField
            type="text"
            placeholder="Enter your email"
            value={inputValue}
            onChangeText={(text) => setInputValue(text)}
          />
        </Input>
      
      </FormControl>

          <FormControl>
      <FormControlLabel>
        <FormControlLabelText>
          Gender
        </FormControlLabelText>
      </FormControlLabel>
      <RadioGroup className='my-1' value={values} onChange={setValues}>
        <HStack space="sm">
          <Radio size="sm" value="Male">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>
              Male
            </RadioLabel>
          </Radio>
          <Radio size="sm" value="Female">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>
              Female
            </RadioLabel>
          </Radio>
            <Radio size="sm" value="Other">
            <RadioIndicator>
              <RadioIcon as={CircleIcon} />
            </RadioIndicator>
            <RadioLabel>
              Other
            </RadioLabel>
          </Radio>
        
        </HStack>
      </RadioGroup>
     
    </FormControl>
    <VStack space="sm">
      <Button className="w-full mt-4" size="lg" onPress={handleSubmit}>
        <ButtonText className="font-medium font-body">Create an account</ButtonText>
      </Button>
      </VStack>
    </VStack>
  )
};

const ExampleFormControlWithTextarea = () => {
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
  )
};

const ExampleFormControlWithFormActions = () => {
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
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "form-control-with-radio",
    label: "Form Control with Radio",
    content: <ExampleFormControlWithRadio />,
  },
  {
    value: "form-control-with-checkbox",
    label: "Form Control with Checkbox",
    content: <ExampleFormControlWithCheckbox />,
  },
  {
    value: "signing-form",
    label: "Signing Form",
    content: <ExampleSigningForm />,
  },
  {
    value: "form-control-with-textarea",
    label: "Form Control with Textarea",
    content: <ExampleFormControlWithTextarea />,
  },
  {
    value: "form-control-with-form-actions",
    label: "Form Control with Form Actions",
    content: <ExampleFormControlWithFormActions />,
  }
];

export default function ComponentExamples() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}