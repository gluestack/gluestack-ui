import React, { useCallback, useMemo } from 'react';

import {
  Center,
  ChevronDownIcon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectVirtualizedList,
  Icon,
} from '@custom-ui/themed';

const SelectWithVirtualizedList = ({
  isDisabled,
  isInvalid,
  ...props
}: any) => {
  const getItem = (_data: any, index: number): any => ({
    id: Math.random().toString(12).substring(0),
    title: _data[index],
  });

  const getItemCount = (_data: any) => _data.length;

  const Item = useCallback(
    ({ title }: any) => <SelectItem label={title} value={title} />,
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
    <Select isDisabled={isDisabled} isInvalid={isInvalid} {...props}>
      <SelectTrigger>
        <SelectInput placeholder="Select option" />
        {/* @ts-ignore */}
        <SelectIcon mr="$3">
          <Icon as={ChevronDownIcon} />
        </SelectIcon>
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectVirtualizedList
            data={data}
            initialNumToRender={5}
            renderItem={({ item }: any) => <Item title={item.title} />}
            keyExtractor={(item: any) => item.id}
            getItemCount={getItemCount}
            getItem={getItem}
          />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

SelectWithVirtualizedList.displayName =
  'SelectWithVirtualizedList is an example of how to use Select with list that uses VirtualizedList on native';

export default SelectWithVirtualizedList;

export { Center, Select, Icon, ChevronDownIcon };
