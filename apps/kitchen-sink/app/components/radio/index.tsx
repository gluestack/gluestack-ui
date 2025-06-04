import { ComponentPreviewer } from '@/components/custom/component-previewer';
import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
  RadioLabel,
} from '@/components/ui/radio';
import { CircleIcon } from '@/components/ui/icon';
import { Center } from '@/components/ui/center';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';
import { FormControl } from '@/components/ui/form-control';

import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <ScrollView
      className="bg-background-0 flex-1"
      contentContainerClassName="px-3 pb-6"
    >
      <ComponentPreviewer
        props={{
          size: {
            control: {
              type: 'select',
            },
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
          },
          isInvalid: {
            control: {
              type: 'boolean',
            },
            defaultValue: false,
          },
          isDisabled: {
            control: {
              type: 'boolean',
            },
            defaultValue: false,
          },
        }}
        title={'Basic'}
      >
        {(props) => {
          return (
            <RadioGroup>
              <Radio
                value={props.value}
                size={props.size}
                isInvalid={props.isInvalid}
                isDisabled={props.isDisabled}
              >
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Label</RadioLabel>
              </Radio>
            </RadioGroup>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Multiple Radio'}>
        {(props) => {
          const [values, setValues] = React.useState('Eng');
          return (
            <RadioGroup value={values} onChange={setValues}>
              <VStack space="sm">
                <Radio value="Eng">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>English</RadioLabel>
                </Radio>
                <Radio value="Fre">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>French</RadioLabel>
                </Radio>
                <Radio value="Ger">
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>German</RadioLabel>
                </Radio>
              </VStack>
            </RadioGroup>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Horizontal'}>
        {(props) => {
          const [values, setValues] = React.useState('Cash On Delivery');
          return (
            <RadioGroup value={values} onChange={setValues}>
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
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'With help text'}>
        {(props) => {
          const [values, setValues] = React.useState('Read-only');
          return (
            <RadioGroup value={values} onChange={setValues}>
              <VStack space="2xl">
                <Box>
                  <Radio value="Read-only" size="md">
                    <RadioIndicator>
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>Extended coverage</RadioLabel>
                  </Radio>
                  <Text size="$sm" className="ml-7 text-typography-500">
                    Extra services included
                  </Text>
                </Box>
                <Box>
                  <Radio value="Write" size="md">
                    <RadioIndicator>
                      <RadioIcon as={CircleIcon} />
                    </RadioIndicator>
                    <RadioLabel>Basic coverage</RadioLabel>
                  </Radio>
                  <Text size="$sm" className="ml-7 text-typography-500">
                    Nothing extra included
                  </Text>
                </Box>
              </VStack>
            </RadioGroup>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Form Control'}>
        {(props) => {
          return (
            <FormControl>
              <VStack space="md">
                <Heading size="sm">Which time slot works best for you?</Heading>
                <RadioGroup>
                  <VStack space="sm">
                    <Radio value="Monday" size="md">
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
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Label left'}>
        {(props) => {
          const [values, setValues] = React.useState('Monday');
          return (
            <RadioGroup value={values} onChange={setValues}>
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
            </RadioGroup>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Controlled'}>
        {(props) => {
          const [values, setValues] = React.useState('Apartments');
          return (
            <RadioGroup value={values} onChange={setValues}>
              <VStack space="md">
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
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Uncontrolled'}>
        {(props) => {
          const radioRef = React.useRef(null);
          const handleRadioChange = (e) => {
            e.preventDefault();
            const checkboxValue = radioRef.current.checked;
          };
          return (
            <RadioGroup>
              <VStack space="md">
                <Radio
                  value="Hotels"
                  ref={radioRef}
                  onChange={handleRadioChange}
                >
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Hotels</RadioLabel>
                </Radio>
                <Radio
                  value="Living quarters"
                  ref={radioRef}
                  onChange={handleRadioChange}
                >
                  <RadioIndicator>
                    <RadioIcon as={CircleIcon} />
                  </RadioIndicator>
                  <RadioLabel>Living quarters</RadioLabel>
                </Radio>
              </VStack>
            </RadioGroup>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Radio group'}>
        {(props) => {
          const [values, setValues] = React.useState('1st');
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
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
