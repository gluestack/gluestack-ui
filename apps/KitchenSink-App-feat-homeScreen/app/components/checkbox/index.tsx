import { Box } from '@/components/ui/box'
import { Center } from '@/components/ui/center'
import { Checkbox, CheckboxGroup, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/checkbox'
import { FormControl } from '@/components/ui/form-control'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { CheckIcon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist'
import React from 'react'

const ExampleBasic = () => {
return (
    <Checkbox isDisabled={ false } isInvalid={ false }>
        <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon} />
        </CheckboxIndicator>
        <CheckboxLabel>Label</CheckboxLabel>
    </Checkbox>
  )
};

const ExampleMultipleCheckbox = () => {
const [values, setValues] = React.useState(["Eng"]);
  return (
    <CheckboxGroup value={values} onChange={(keys) => {
      setValues(keys)
    }}>
      <VStack space="xl">
        <Checkbox value="Eng">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Framer</CheckboxLabel>
        </Checkbox>
        <Checkbox value="invison">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Invision Studio</CheckboxLabel>
        </Checkbox>
        <Checkbox value="adobe">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Adobe XD</CheckboxLabel>
        </Checkbox>
      </VStack>
    </CheckboxGroup>
  )
};

const ExampleHorizontal = () => {
const [values, setValues] = React.useState(["Illustration"]);
  return (
    <CheckboxGroup value={values} onChange={(keys) => {
      setValues(keys)
    }}>
      <HStack space="2xl">
        <Checkbox value="Illustration">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Illustration</CheckboxLabel>
        </Checkbox>
        <Checkbox value="Animation">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Animation</CheckboxLabel>
        </Checkbox>
        <Checkbox value="Typography">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Typography</CheckboxLabel>
        </Checkbox>
      </HStack>
    </CheckboxGroup>
  )
};

const ExampleWithHelpText = () => {
const [values, setValues] = React.useState(["Design"]);
  return (
    <CheckboxGroup value={values} onChange={(keys) => {
      setValues(keys)
    }}>
      <VStack space="2xl">
        <Box>
          <Checkbox value="Design">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon}/>
            </CheckboxIndicator>
            <CheckboxLabel>Design</CheckboxLabel>
          </Checkbox>
          <Text size="sm" className='ml-7'>Subscribe to updates from the Design Feed</Text>
        </Box>
        <Box>
          <Checkbox value="Marketing">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon}/>
            </CheckboxIndicator>
            <CheckboxLabel>Marketing</CheckboxLabel>
          </Checkbox>
          <Text size="sm" className='ml-7'>Subscribe to updates from the Marketing Feed</Text>
        </Box>
      </VStack>
    </CheckboxGroup>
  )
};

const ExampleFormControl = () => {
return (
    <FormControl>
      <VStack space="sm">
        <Heading size="sm">Sign up for newsletters</Heading>
        <Checkbox>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Daily Bits</CheckboxLabel>
        </Checkbox>
        <Checkbox>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Event Updates</CheckboxLabel>
        </Checkbox>
        <Checkbox>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Sponsorship</CheckboxLabel>
        </Checkbox>
        <Text size="sm">Subscribe to newsletters for updates</Text>
      </VStack>
    </FormControl>
  )
};

const ExampleLabelLeft = () => {
const [values, setValues] = React.useState(["Jane"]);
  return (
    <CheckboxGroup value={values} onChange={(keys) => {
      setValues(keys)
    }}>
      <VStack space="lg" className='w-40'>
        <Checkbox className='justify-between' value="Jane">
          <CheckboxLabel>Jane Cooper</CheckboxLabel>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
        </Checkbox>
        <Checkbox value="Wade" className='justify-between'>
          <CheckboxLabel>Wade Warren</CheckboxLabel>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
        </Checkbox>
        <Checkbox className='justify-between' value="Robert">
          <CheckboxLabel>Robert Fox</CheckboxLabel>
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
        </Checkbox>
      </VStack>
    </CheckboxGroup>
  )
};

const ExampleControlled = () => {
const [values, setValues] = React.useState(['UX Research']);
  return (
    <CheckboxGroup value={values} onChange={(keys) => {
      setValues(keys);
    }}>
      <VStack space="md">
        <Checkbox value="UX Research">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>UX Research</CheckboxLabel>
        </Checkbox>
        <Checkbox value="Software">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Software Development</CheckboxLabel>
        </Checkbox>
      </VStack>
    </CheckboxGroup>
  )
};

const ExampleUncontrolled = () => {
const checkboxRef = React.useRef(null);
  const handleCheckboxChange = (e) => {
    const checkboxValue = checkboxRef.current.checked;
  };
  return (
    <CheckboxGroup ref={checkboxRef}>
      <VStack space="md">
        <Checkbox onChange={handleCheckboxChange} value="Apartments">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Apartments</CheckboxLabel>
        </Checkbox>
        <Checkbox onChange={handleCheckboxChange} value="Residents">
          <CheckboxIndicator>
            <CheckboxIcon as={CheckIcon}/>
          </CheckboxIndicator>
          <CheckboxLabel>Residents</CheckboxLabel>
        </Checkbox>
      </VStack>
    </CheckboxGroup>
  )
};

const ExampleCheckboxGroup = () => {
const [values, setValues] = React.useState([]);
  return (
    <Center>
      <CheckboxGroup value={values} onChange={setValues}>
        <VStack space="sm">
          <Checkbox isDisabled={true} value="Label 1">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon}/>
            </CheckboxIndicator>
            <CheckboxLabel>Label 1</CheckboxLabel>
          </Checkbox>
          <Checkbox value="Label 2">
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon}/>
            </CheckboxIndicator>
            <CheckboxLabel>Label 2</CheckboxLabel>
          </Checkbox>
        </VStack>
      </CheckboxGroup>
    </Center>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "multiple-checkbox",
    label: "Multiple Checkbox",
    content: <ExampleMultipleCheckbox />,
  },
  {
    value: "horizontal",
    label: "Horizontal",
    content: <ExampleHorizontal />,
  },
  {
    value: "with-help-text",
    label: "With Help Text",
    content: <ExampleWithHelpText />,
  },
  {
    value: "form-control",
    label: "Form Control",
    content: <ExampleFormControl />,
  },
  {
    value: "label-left",
    label: "Label Left",
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
    value: "checkbox-group",
    label: "Checkbox Group",
    content: <ExampleCheckboxGroup />,
  }
];

export default function ComponentExamples() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}