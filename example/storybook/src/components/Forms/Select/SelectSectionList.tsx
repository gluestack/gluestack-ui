import React, { useCallback } from 'react';
import Wrapper from '../../Wrapper';
import { Center, ChevronDownIcon, Select, Icon } from '../../../ui-components';

export const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
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
    return <Select.Item label={item} value={item} />;
  }, []);

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
            <Select.SectionList
              sections={DATA}
              keyExtractor={(item: any, index: any) => item + index}
              renderItem={({ item }: any) => <Item item={item} />}
              renderSectionHeader={({ section: { title, data } }: any) => (
                <Select.SectionHeaderText>
                  {title} ({data.length})
                </Select.SectionHeaderText>
              )}
            />
          </Select.Content>
        </Select.Portal>
      </Select>
    </Wrapper>
  );
};

export { Center, Select, Icon, ChevronDownIcon };
