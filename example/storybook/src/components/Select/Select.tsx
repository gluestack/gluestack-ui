import React from 'react';
import { Root, Icon, Item, ItemList } from './styled-component';
import { createSelect } from '@universa11y/select';
import { createIcon } from '@universa11y/icon';
import { Root as IconRoot } from '../Icon/styled-component';

const SelectTemp = createSelect({
  Root,
  Icon,
  Item,
  ItemList,
}) as any;

const ChevronDownIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 24 24',
  d: 'M20.2286 6L11.9973 14.3785L3.76862 6.00268L2 7.80293L12 18L22 7.80293L20.2286 6Z',
});

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
        <ChevronDownIcon sx={{ style: { w: 20, h: 20 } }} />
      </SelectTemp.Icon>
    </SelectTemp>
  );
};
