import { Root, Icon, Item, ItemList } from './styled-component';
import { createSelect } from '@universa11y/select';
import React from 'react';
import { ChevronDownIcon } from '../../../../../packages/icon/Icons';

const SelectTemp = createSelect({
  Root,
  Icon,
  Item,
  ItemList,
}) as any;

export const Select = () => {
  return (
    <SelectTemp>
      <SelectTemp.ItemList placeholder="Select">
        <SelectTemp.Item value="select option" label="select option" />
        <SelectTemp.Item value="select option 1" label="select option 1" />
        <SelectTemp.Item value="select option 2" label="select option 2" />
        <SelectTemp.Item value="select option 3" label="select option 3" />
      </SelectTemp.ItemList>
      <SelectTemp.Icon>
        {/* <ChevronDownIcon sx={{ style: { w: 20, h: 20 } }} /> */}
      </SelectTemp.Icon>
    </SelectTemp>
  );
};
