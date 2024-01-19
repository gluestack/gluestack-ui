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
  SelectSectionList,
  SelectSectionHeaderText,
  SelectTrigger,
  Icon,
} from '@custom-ui/themed';

const SelectWithSectionList = ({ isDisabled, isInvalid, ...props }: any) => {
  const DATA = [
    {
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  const Item = useCallback(({ item }: any) => {
    return <SelectItem label={item} value={item} />;
  }, []);

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
          <SelectSectionList
            sections={DATA}
            keyExtractor={(item: any, index: any) => item + index}
            renderItem={({ item }: any) => <Item item={item} />}
            renderSectionHeader={({ section: { title, data } }: any) => (
              <SelectSectionHeaderText>
                {title} ({data.length})
              </SelectSectionHeaderText>
            )}
          />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
};

SelectWithSectionList.displayName =
  'SelectWithSectionList is an example of how to use Select with list that uses SectionList on native';

export default SelectWithSectionList;

export { Center, Select, Icon, ChevronDownIcon };
