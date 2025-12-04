import { Textarea, TextareaInput } from '@/components/ui/textarea'
import { FormControl, FormControlError, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText } from '@/components/ui/form-control'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Textarea
      size="md"
      isReadOnly={ false }
      isInvalid={ false }
      isDisabled={ false }
      className="w-64"
    >
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  )
};

const SizeSm = () => {
return (
    <Textarea
      size="sm"
      isReadOnly={ false }
      isInvalid={ false }
      isDisabled={ false }
      className="w-64"
    >
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  )
};

const SizeLg = () => {
return (
    <Textarea
      size="lg"
      isReadOnly={ false }
      isInvalid={ false }
      isDisabled={ false }
      className="w-64"
    >
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  )
};

const SizeXl = () => {
return (
    <Textarea
      size="xl"
      isReadOnly={ false }
      isInvalid={ false }
      isDisabled={ false }
      className="w-64"
    >
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  )
};

const ExampleFormControl = () => {
return (
    <FormControl size="sm" className="max-w-[200px] w-full">
          <FormControlLabel>
            <FormControlLabelText>
              Write with me
            </FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput placeholder='Once upon a time...'/>
          </Textarea>
          <FormControlHelper>
            <FormControlHelperText>
              Start your story
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "sm",
    label: "Sm",
    content: <SizeSm />,
  },
  {
    value: "lg",
    label: "Lg",
    content: <SizeLg />,
  },
  {
    value: "xl",
    label: "Xl",
    content: <SizeXl />,
  },
  {
    value: "formcontrol",
    label: "FormControl",
    content: <ExampleFormControl />,
  }
];

export default function TextareaScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}