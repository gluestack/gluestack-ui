import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, ChevronDownIcon, Select, Icon } from '../../../ui-components';

export const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
  return (
    <Wrapper>
      <Center>
        {/* <Select isDisabled={isDisabled} isInvalid={isInvalid} {...props}>
          <Select.ItemList placeholder="Select">
            <Select.Item value="select option" label="select option" />
            <Select.Item value="select option 1" label="select option 1" />
            <Select.Item value="select option 2" label="select option 2" />
            <Select.Item value="select option 3" label="select option 3" />
          </Select.ItemList>
          <Select.Icon>
            <Icon as={InfoIcon} />
          </Select.Icon>
        </Select> */}
        <Select isDisabled={isDisabled} isInvalid={isInvalid} {...props}>
          <Select.Trigger>
            <Select.Input placeholder="Select option" />
            <Select.Icon>
              <Icon as={ChevronDownIcon} />
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Backdrop />
            <Select.Content>
              <Select.DragIndicatorWrapper>
                <Select.DragIndicator />
              </Select.DragIndicatorWrapper>
              {/* <Select.Item value="Option 1" label="Option 1" />
              <Select.Item value="Option 2" label="Option 2" />
              <Select.Item value="Option 3" label="Option 3" />
              <Select.Item value="Option 4" label="Option 4" />
              <Select.Item value="Option 5" label="Option 5" />
              <Select.Item value="Option 6" label="Option 6" /> */}
              {[...Array(50).keys()].map((index: any) => (
                <Select.Item
                  value={`Option ${index}`}
                  label={`Option ${index}`}
                />
              ))}
            </Select.Content>
          </Select.Portal>
        </Select>
      </Center>
    </Wrapper>
  );
};

export { Center, Select, Icon, ChevronDownIcon };
