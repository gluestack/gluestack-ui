import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, ChevronDownIcon, Select, Icon } from '../../../ui-components';

export const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
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
  const Item = React.useCallback(
    ({ title }) => <Select.Item value={title} label={title} />,
    []
  );

  return (
    <Wrapper>
      <Center>
        {/* <Select isDisabled={isDisabled} isInvalid={isInvalid} {...props}>
          <Select.ItemList placeholder="Select">
            <Select.Item value="select option" label="select option" />
            <Select.Item value="select option 1" label="select option 1" />
            <Select.Item value="select option 2" label="select option 2" />
            <Select.Item value="select option 3" label="select option 3" />
          </Select.ItemList>
          <Select.Icon>
            <Icon as={InfoIcon} />
          </Select.Icon>
        </Select> */}
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
              <Select.FlatList
                data={DATA}
                renderItem={({ item }: any) => <Item title={item.title} />}
                keyExtractor={(item) => item.id}
              />
            </Select.Content>
          </Select.Portal>
        </Select>
      </Center>
    </Wrapper>
  );
};

export { Center, Select, Icon, ChevronDownIcon };
