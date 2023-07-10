import React, { useCallback } from 'react';

import { Center, ChevronDownIcon, Select, Icon } from '../../../ui-components';

const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
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
    ({ title }: any) => <Select.Item label={title} value={title} />,
    []
  );

  return (
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
          <Select.FlatList
            data={DATA}
            renderItem={({ item }: any) => <Item title={item.title} />}
            keyExtractor={(item: any) => item.id}
          />
        </Select.Content>
      </Select.Portal>
    </Select>
  );
};

export default SelectStory;

export { Center, Select, Icon, ChevronDownIcon };
