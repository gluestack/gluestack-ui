import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist'
import { Box } from '@/components/ui/box'
import { FormControl } from '@/components/ui/form-control'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { CircleIcon } from '@/components/ui/icon'
import { Radio, RadioGroup, RadioIcon, RadioIndicator, RadioLabel } from '@/components/ui/radio'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import React from 'react'

const ExampleBasic = () => {
return (
    <RadioGroup>
      <Radio value="{{value}}" isInvalid={ false } isDisabled={ false }>
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label</RadioLabel>
      </Radio>
    </RadioGroup>
  )
};

const ExampleMultipleRadio = () => {
const [values, setValues] = React.useState("Eng");
        return (
          <RadioGroup value={values} onChange={setValues}>
            <VStack space="sm">
              <Radio value="Eng" >
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>English</RadioLabel>
              </Radio>
              <Radio value="Fre" >
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>French</RadioLabel>
              </Radio>
              <Radio value="Ger" >
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>German</RadioLabel>
              </Radio>
            </VStack>
          </RadioGroup>
        )
};

const ExampleHorizontal = () => {
const [values, setValues] = React.useState("Cash On Delivery");
          return (
            <RadioGroup value={values} onChange={setValues} >
              <HStack space="2xl">
                <Radio value="Credit Card">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Credit Card</RadioLabel>
                </Radio>
                <Radio value="Cash On Delivery">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Cash On Delivery</RadioLabel>
                </Radio>
              </HStack>
            </RadioGroup>
          )
};

const ExampleWithHelpText = () => {
const [values, setValues] = React.useState("Read-only");
          return (
            <RadioGroup value={values} onChange={setValues}>
              <VStack space="2xl">
                <Box>
                  <Radio value="Read-only" size="md">
                    <RadioIndicator>
                      <RadioIcon as={CircleIcon}/>
                    </RadioIndicator>
                    <RadioLabel>Extended coverage</RadioLabel>
                  </Radio>
                  <Text size="$sm" className="ml-7 text-muted-foreground">Extra services included</Text>
                </Box>
                <Box>
                  <Radio value="Write" size="md">
                    <RadioIndicator>
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>Basic coverage</RadioLabel>
                  </Radio>
                  <Text size="$sm" className="ml-7 text-muted-foreground">Nothing extra included</Text>
                </Box>
              </VStack>
            </RadioGroup>
          )
};

const ExampleFormControl = () => {
return (
    <FormControl>
          <VStack space="md">
            <Heading size="sm">
              Which time slot works best for you?
            </Heading>
            <RadioGroup>
              <VStack space="sm">
                <Radio value="Monday" size="md" >
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Monday</RadioLabel>
                </Radio>
                <Radio value="Tuesday" size="md">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Tuesday</RadioLabel>
                </Radio>
                <Radio value="Wednesday" size="md">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Wednesday</RadioLabel>
                </Radio>
              </VStack>
            </RadioGroup>
            <Text className="text-sm text-light-500">
              Choose a time slot for the meeting
            </Text>
          </VStack>
        </FormControl>
  )
};

const ExampleLabelLeft = () => {
const [values, setValues] = React.useState("Monday");
        return (
          <RadioGroup value={values} onChange={setValues} >
            <VStack space="lg" className="w-40">
              <Radio value="Monday" className="justify-between">
                <RadioLabel>Jane Cooper</RadioLabel>
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
              </Radio>
              <Radio value="Tuesday" className="justify-between">
                <RadioLabel>Wade Warren</RadioLabel>
                <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                </RadioIndicator>
              </Radio>
            </VStack>
          </RadioGroup >
        )
};

const ExampleControlled = () => {
const [values, setValues] = React.useState('Apartments');
        return (
          <RadioGroup value={values} onChange={setValues}>
            <VStack space='md'>
              <Radio value="Apartments">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Apartments</RadioLabel>
              </Radio>
              <Radio value="Houses">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Houses</RadioLabel>
              </Radio>
            </VStack>
          </RadioGroup>
          )
};

const ExampleUncontrolled = () => {
const radioRef = React.useRef(null);
        const handleRadioChange = (e) => {
          e.preventDefault();
          const checkboxValue = radioRef.current.checked;
        };
        return (
          <RadioGroup>
            <VStack space='md'>
              <Radio value="Hotels" ref={radioRef} onChange={handleRadioChange} >
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Hotels</RadioLabel>
              </Radio>
              <Radio value="Living quarters" ref={radioRef} onChange={handleRadioChange} >
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Living quarters</RadioLabel>
              </Radio>
            </VStack>
          </RadioGroup>
        )
};

const ExampleRadioGroup = () => {
const [values, setValues] = React.useState("1st");
          return (
            <RadioGroup value={values} onChange={setValues}>
              <VStack space="sm">
                <Radio value="1st">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Label 1</RadioLabel>
                </Radio>
                <Radio value="2nd">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Label 2</RadioLabel>
                </Radio>
                <Radio value="3rd">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Label 3</RadioLabel>
                </Radio>
              </VStack>
            </RadioGroup>
          )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "multiple-radio",
    label: "Multiple Radio",
    content: <ExampleMultipleRadio />,
  },
  {
    value: "horizontal",
    label: "Horizontal",
    content: <ExampleHorizontal />,
  },
  {
    value: "with-help-text",
    label: "With help text",
    content: <ExampleWithHelpText />,
  },
  {
    value: "form-control",
    label: "Form Control",
    content: <ExampleFormControl />,
  },
  {
    value: "label-left",
    label: "Label left",
    content: <ExampleLabelLeft />,
  },
  {
    value: "controlled",
    label: "Controlled",
    content: <ExampleControlled />,
  },
  {
    value: "uncontrolled",
    label: "Uncontrolled",
    content: <ExampleUncontrolled />,
  },
  {
    value: "radio-group",
    label: "Radio group",
    content: <ExampleRadioGroup />,
  }
];

export default function ComponentExamples() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}