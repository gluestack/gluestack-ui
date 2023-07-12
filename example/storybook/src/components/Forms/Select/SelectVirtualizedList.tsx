import React, { useCallback, useMemo } from 'react';

import { Center, ChevronDownIcon, Select, Icon } from '../../../ui-components';

export const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
  const getItem = (_data: any, index: number): any => ({
    id: Math.random().toString(12).substring(0),
    title: _data[index],
  });

  const getItemCount = (_data: any) => _data.length;

  const Item = useCallback(
    ({ title }: any) => <Select.Item label={title} value={title} />,
    []
  );

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Item ${index + 1}`),
    []
  );

  return (
    <Center>
      <Select
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        placeholder="Select option"
        {...props}
      >
        <Select.Trigger>
          <Select.Input />
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
            <Select.VirtualizedList
              data={data}
              initialNumToRender={5}
              renderItem={({ item }: any) => <Item title={item.title} />}
              keyExtractor={(item: any) => item.id}
              getItemCount={getItemCount}
              getItem={getItem}
            />
          </Select.Content>
        </Select.Portal>
      </Select>
    </Center>
  );
};

export { Center, Select, Icon, ChevronDownIcon };
