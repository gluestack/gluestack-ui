import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, ChevronDownIcon, Select, Icon } from '../../../ui-components';

export const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
  const data = React.useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => 'Item' + index),
    []
  );
  const getItem = (_data, index) => ({
    id: Math.random().toString(12).substring(0),
    title: _data[index],
  });
  const getItemCount = (_data) => _data.length;

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
              <Select.VirtualizedList
                data={data}
                initialNumToRender={5}
                renderItem={({ item }: any) => {
                  return <Item title={item.title} />;
                }}
                keyExtractor={(item: any) => item.id}
                getItemCount={getItemCount}
                getItem={getItem}
              />
            </Select.Content>
          </Select.Portal>
        </Select>
      </Center>
    </Wrapper>
  );
};

export { Center, Select, Icon, ChevronDownIcon };
