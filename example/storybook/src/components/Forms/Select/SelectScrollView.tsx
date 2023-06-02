import React, { useCallback, useMemo } from 'react';
import Wrapper from '../../Wrapper';
import { Center, ChevronDownIcon, Select, Icon } from '../../../ui-components';

export const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  const renderItem = useCallback(
    (item: any) => <Select.Item label={item} value={item} />,
    []
  );

  return (
    <Wrapper>
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
            <Select.ScrollView>{data.map(renderItem)}</Select.ScrollView>
          </Select.Content>
        </Select.Portal>
      </Select>
    </Wrapper>
  );
};

export { Center, Select, Icon, ChevronDownIcon };
