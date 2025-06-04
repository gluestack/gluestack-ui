import { ComponentPreviewer } from '@/components/custom/component-previewer';
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectItem,
} from '@/components/ui/select';
import { ChevronDownIcon, Icon, AlertCircleIcon } from '@/components/ui/icon';
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
          variant: {
            control: {
              type: 'select',
            },
            options: ['underlined', 'outline', 'rounded'],
            defaultValue: 'outline',
          },
          size: {
            control: {
              type: 'select',
            },
            options: ['sm', 'md', 'lg', 'xl'],
            defaultValue: 'md',
          },
        }}
        title={'Basic'}
      >
        {(props) => {
          return (
            <Select>
              <SelectTrigger variant={props.variant} size={props.size}>
                <SelectInput placeholder="Select option" />
                <SelectIcon className="mr-3" as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="UX Research" value="ux" />
                  <SelectItem label="Web Development" value="web" />
                  <SelectItem
                    label="Cross Platform Development Process"
                    value="Cross Platform Development Process"
                  />
                  <SelectItem
                    label="UI Designing"
                    value="ui"
                    isDisabled={true}
                  />
                  <SelectItem label="Backend Development" value="backend" />
                </SelectContent>
              </SelectPortal>
            </Select>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Select FormControlled'}>
        {(props) => {
          return (
            <FormControl isRequired isInvalid>
              <FormControlLabel>
                <FormControlLabelText>
                  Choose your favorite color
                </FormControlLabelText>
              </FormControlLabel>
              <Select>
                <SelectTrigger>
                  <SelectInput placeholder="Select option" className="flex-1" />
                  <SelectIcon className="mr-3" as={ChevronDownIcon} />
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
                <FormControlHelperText>
                  You can only select one option
                </FormControlHelperText>
              </FormControlHelper>
              <FormControlError>
                <FormControlErrorIcon as={AlertCircleIcon} />
                <FormControlErrorText>Mandatory field</FormControlErrorText>
              </FormControlError>
            </FormControl>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
