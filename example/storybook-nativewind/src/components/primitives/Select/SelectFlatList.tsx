import React, { useCallback } from 'react';

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
  SelectFlatList,
  SelectTrigger,
  Icon,
} from '@custom-ui/themed';

const SelectWithFlatList = ({ isDisabled, isInvalid, ...props }: any) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = useCallback(
    ({ title }: any) => <SelectItem label={title} value={title} />,
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
          <SelectFlatList
            data={DATA}
            renderItem={({ item }: any) => <Item title={item.title} />}
            keyExtractor={(item: any) => item.id}
          />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

SelectWithFlatList.description =
  'This is an example of Select component with FlatList. Selects with flatlist can be used when you have a large number of options and you want to optimize the performance of the list by using FlatList.';

export default SelectWithFlatList;

export { Center, Select, Icon, ChevronDownIcon };
