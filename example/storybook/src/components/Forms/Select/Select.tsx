import React from 'react';
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

  const Item = React.useCallback(({ title }: any) => {
    return <Select.Item value={title} label={title} />;
  }, []);

  return (
    <Wrapper>
      <Center>
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
              <Select.SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <Item title={item} />}
                renderSectionHeader={({ section: { title } }) => (
                  <Select.SectionHeaderText>{title}</Select.SectionHeaderText>
                )}
              />
            </Select.Content>
          </Select.Portal>
        </Select>
      </Center>
    </Wrapper>
  );
};

export { Center, Select, Icon, ChevronDownIcon };
