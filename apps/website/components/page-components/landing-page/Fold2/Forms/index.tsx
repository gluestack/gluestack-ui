'use client';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import {
  RadioGroup,
  Radio,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from '@/components/ui/radio';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import {
  AlertCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CircleIcon,
  EyeIcon,
  EyeOffIcon,
  SearchIcon,
} from '@/components/ui/icon';
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectItem,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
} from '@/components/ui/select';
import React from 'react';

const FormsContent = ({ show }: { show: boolean }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => !showState);
  };
  const [values, setValues] = React.useState('Eng');
  return (
    <Box
      className={`gap-6 w-full md:flex-row flex-col ${show ? '' : 'hidden'}`}
    >
      <VStack className="p-6 gap-8 md:w-2/3 w-full border border-dashed rounded-lg border-outline-100">
        <FormControl className="gap-1.5">
          <FormControlLabel>
            <FormControlLabelText className="text-sm font-medium leading-normal text-typography-900">
              Text Input
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              aria-label="Text Input"
              placeholder="Placeholder Text"
              className="text-sm font-normal leading-[21px] text-typography-600 h-full"
            />
          </Input>
        </FormControl>

        <FormControl
          size="md"
          isDisabled={false}
          isInvalid={false}
          isReadOnly={false}
          isRequired={false}
        >
          <FormControlLabel className="mb-1">
            <FormControlLabelText className="text-typography-900 text-sm">
              Password
            </FormControlLabelText>
          </FormControlLabel>
          <Input className="text-center">
            <InputField
              aria-label="xxxxx"
              placeholder="xxxxx"
              className="text-sm font-normal leading-[21px] text-typography-600 h-full"
              type={showPassword ? 'text' : 'password'}
            />
            <InputSlot className="pr-3" onPress={handleState}>
              <InputIcon
                as={showPassword ? EyeIcon : EyeOffIcon}
                className="text-darkBlue-500 w-4 h-4"
              />
            </InputSlot>
          </Input>

          <FormControlError>
            <FormControlErrorIcon
              className="h-[10px] w-[10px]"
              as={AlertCircleIcon}
            />
            <FormControlErrorText>
              At least 6 characters are required.
            </FormControlErrorText>
          </FormControlError>
        </FormControl>

        <FormControl isRequired>
          <FormControlLabel>
            <FormControlLabelText className="text-typography-900 text-sm">
              Choose your favorite color
            </FormControlLabelText>
          </FormControlLabel>
          <Select>
            <SelectTrigger>
              <SelectInput
                aria-label="Select an option"
                placeholder="Select an option"
                className="text-sm"
              />
              <SelectIcon className="mr-3 w-3.5 h-3.5" as={ChevronDownIcon} />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Red" value="red" />
                <SelectItem label="Blue" value="blue" />
                <SelectItem label="Black" value="black" />
                <SelectItem label="Pink" value="pink" isDisabled={true} />
                <SelectItem label="Green" value="green" />
              </SelectContent>
            </SelectPortal>
          </Select>
          <FormControlHelper>
            <FormControlHelperText className="text-sm font-normal text-typography-500">
              You can only select one option
            </FormControlHelperText>
          </FormControlHelper>
        </FormControl>

        <Input>
          <InputField
            aria-label="Search for employee"
            className="text-sm font-normal leading-[21px] text-typography-600 h-full"
            placeholder="Search for employee"
          />
          <InputSlot className="pr-3">
            <InputIcon
              as={SearchIcon}
              className="text-background-400 w-4 h-4"
            />
          </InputSlot>
        </Input>
      </VStack>
      <VStack className="gap-6 w-full">
        <HStack className="gap-6 md:flex-row flex-col">
          <Box className="p-6 flex-1 gap-8 border border-dashed rounded-lg border-outline-100">
            <RadioGroup className="gap-6" value={values} onChange={setValues}>
              <Radio className="gap-2" value="Eng">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <VStack>
                  <RadioLabel className="text-sm font-normal text-typography-900">
                    Extended coverage
                  </RadioLabel>
                  <RadioLabel className="text-sm text-typography-500 font-normal">
                    Extra serivices included
                  </RadioLabel>
                </VStack>
              </Radio>
              <Radio className="gap-2" value="Fre">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <VStack>
                  <RadioLabel className="text-sm font-normal text-typography-900">
                    Basic coverage
                  </RadioLabel>
                  <RadioLabel className="text-sm text-typography-500 font-normal">
                    Nothing extra included
                  </RadioLabel>
                </VStack>
              </Radio>
            </RadioGroup>
          </Box>

          <VStack className="flex-1 p-6 gap-[15px] border border-dashed rounded-lg border-outline-100">
            <Text className="text-typography-900 text-base font-normal">
              Select Toppings
            </Text>
            <VStack className="gap-3">
              <HStack className="justify-between">
                <Checkbox
                  isChecked={true}
                  size="sm"
                  className="gap-2"
                  isInvalid={false}
                  isDisabled={false}
                  value={''}
                >
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel className="text-sm font-normal leading-[21px] text-typography-900">
                    Pepperoni
                  </CheckboxLabel>
                </Checkbox>
                <Text className="text-sm font-normal text-typography-900">
                  $0.5
                </Text>
              </HStack>
              <HStack className="justify-between">
                <Checkbox
                  size="sm"
                  className="gap-2"
                  isInvalid={false}
                  isDisabled={false}
                  value={''}
                >
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel className="text-sm font-normal leading-[21px] text-typography-900">
                    Mushrooms
                  </CheckboxLabel>
                </Checkbox>
                <Text className="text-sm font-normal text-typography-900">
                  $1.0
                </Text>
              </HStack>
              <HStack className="justify-between">
                <Checkbox
                  size="sm"
                  className="gap-2"
                  isInvalid={false}
                  isDisabled={false}
                  value={''}
                >
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel className="text-sm font-normal leading-[21px] text-typography-900">
                    Bacon
                  </CheckboxLabel>
                </Checkbox>
                <Text className="text-sm font-normal text-typography-900">
                  $2.0
                </Text>
              </HStack>
            </VStack>
          </VStack>
        </HStack>

        <Box>
          <Accordion
            // @ts-ignore
            defaultValue="accordion"
            size="sm"
            variant="filled"
            type="single"
            className="w-full bg-transparent shadow-none"
          >
            <AccordionItem
              className="bg-background-50 rounded-t-lg"
              value="accordion1"
            >
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }: { isExpanded: boolean }) => {
                    return (
                      <>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="mr-3" />
                        ) : (
                          <AccordionIcon
                            as={ChevronDownIcon}
                            className="mr-3"
                          />
                        )}
                        <AccordionTitleText className="text-typography-900">
                          How do I place an order?
                        </AccordionTitleText>
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="ml-8">
                <AccordionContentText>
                  To place an order, simply select the products you want,
                  proceed to checkout, provide shipping and payment information,
                  and finalize your purchase.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-background-50 rounded-b-lg"
              value="accordion2"
            >
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }: { isExpanded: boolean }) => {
                    return (
                      <>
                        {isExpanded ? (
                          <AccordionIcon as={ChevronUpIcon} className="mr-3" />
                        ) : (
                          <AccordionIcon
                            as={ChevronDownIcon}
                            className="mr-3"
                          />
                        )}
                        <AccordionTitleText className="text-typography-900">
                          What payment methods do you accept?
                        </AccordionTitleText>
                      </>
                    );
                  }}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent className="ml-8">
                <AccordionContentText>
                  We accept all major credit cards, including Visa, Mastercard,
                  and American Express. We also support payments through PayPal.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Box>
      </VStack>
    </Box>
  );
};

export default FormsContent;
