import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, ChevronDownIcon, Select, Icon } from '../../../ui-components';

export const SelectStory = ({ size, variant, ...props }: any) => {
  return (
    <Wrapper>
      <Select {...props} placeholder="Select option">
        <Select.Trigger size={size} variant={variant}>
          <Select.Input />
          <Select.Icon
            mr={variant === 'underlined' ? 0 : '$3'}
            ml={variant === 'underlined' ? '$3' : 0}
            as={ChevronDownIcon}
          />
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
    </Wrapper>
  );
};

export { Center, Select, Icon, ChevronDownIcon };
