import React from 'react';
import Wrapper from '../Wrapper';
import { createSelect } from '@gluestack-ui/select';
import { createActionsheet } from '@gluestack-ui/actionsheet';

import { Root, Icon, Item, ItemList } from '../styled-components/select';
import {
  Root as ActionsheetRoot,
  Backdrop,
  Item as ActionsheetItem,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
} from '../styled-components/actionsheet';
import { Center } from '../Center/Center';
// import { InfoIcon } from '../Icons/Icons';

const Actionsheet = createActionsheet({
  Root: ActionsheetRoot,
  Backdrop,
  Item: ActionsheetItem,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
});

export const Select = createSelect(
  {
    Root,
    Icon,
    Item,
    ItemList,
  },
  { Actionsheet }
) as any;

export const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
  return (
    <Wrapper>
      <Center w="100%">
        <Select isDisabled={isDisabled} isInvalid={isInvalid} {...props}>
          <Select.ItemList placeholder="Select">
            <Select.Item value="select option" label="select option" />
            <Select.Item value="select option 1" label="select option 1" />
            <Select.Item value="select option 2" label="select option 2" />
            <Select.Item value="select option 3" label="select option 3" />
          </Select.ItemList>
          <Select.Icon></Select.Icon>
        </Select>
      </Center>
    </Wrapper>
  );
};
