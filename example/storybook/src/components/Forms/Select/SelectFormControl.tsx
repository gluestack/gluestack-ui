import React from 'react';
import Wrapper from '../../Wrapper';
import {
  Center,
  ChevronDownIcon,
  Select,
  Icon,
  FormControl,
  AlertCircleIcon,
} from '../../../ui-components';

export const SelectStory = ({ size, variant, ...props }: any) => {
  return (
    <Wrapper>
      <FormControl {...props}>
        <FormControl.Label>
          <FormControl.Label.Text>
            Choose your favorite color
          </FormControl.Label.Text>
        </FormControl.Label>
        <Select>
          <Select.Trigger size={size} variant={variant}>
            <Select.Input placeholder="Select option" />
            <Select.Icon mr="$3">
              <Icon as={ChevronDownIcon} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Backdrop />
            <Select.Content>
              <Select.DragIndicatorWrapper>
                <Select.DragIndicator />
              </Select.DragIndicatorWrapper>
              <Select.Item label="Red" value="Red" />
              <Select.Item label="Blue" value="Blue" />
              <Select.Item label="Black" value="Black" />
              <Select.Item label="Pink" value="Pink" isDisabled={true} />
              <Select.Item label="Green" value="Green" />
            </Select.Content>
          </Select.Portal>
        </Select>
        <FormControl.Helper>
          <FormControl.Helper.Text>
            You can only select one option
          </FormControl.Helper.Text>
        </FormControl.Helper>
        <FormControl.Error>
          <FormControl.Error.Icon>
            <Icon as={AlertCircleIcon} />
          </FormControl.Error.Icon>
          <FormControl.Error.Text>Mandatory field</FormControl.Error.Text>
        </FormControl.Error>
      </FormControl>
    </Wrapper>
  );
};

export { Center, Select, Icon, ChevronDownIcon, FormControl, AlertCircleIcon };
