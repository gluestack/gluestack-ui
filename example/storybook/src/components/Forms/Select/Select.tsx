import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, ChevronDownIcon, Select, Icon } from '../../../ui-components';

export const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
  return (
    <Wrapper>
      <Center>
        <Select isDisabled={isDisabled} isInvalid={isInvalid} {...props}>
          <Select.Trigger>
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
              <Select.Item label="UX Research" value="UX Research" />
              <Select.Item label="Web Development" value="Web Development" />
              <Select.Item
                label="Cross Platform Development Process"
                value="Cross Platform Development Process"
              />
              <Select.Item
                label="UI Designing"
                value="UI Designing"
                isDisabled={true}
              />
              <Select.Item
                label="Backend Development"
                value="Backend Development"
              />
            </Select.Content>
          </Select.Portal>
        </Select>
      </Center>
    </Wrapper>
  );
};

export { Center, Select, Icon, ChevronDownIcon };
