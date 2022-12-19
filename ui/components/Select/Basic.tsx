import { Select, ChevronDownIcon } from '@gluestack/ui';

import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ props }: any) => {
  return (
    <Wrapper>
      <Select>
        <Select.ItemList placeholder="Select">
          <Select.Item value="select option" label="select option" />
          <Select.Item value="select option1" label="select option1" />
          <Select.Item value="select option2" label="select option2" />
          <Select.Item value="select option3" label="select option3" />
        </Select.ItemList>
        <Select.Icon sx={{ w: 10, h: 10 }}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select>
    </Wrapper>
  );
};
/**
 * 
 * 
 * 
 *  <Select placeholder="Select">
 * <Select.ItemList>
          <Select.Item value="select option" label="select option" />
          <Select.Item value="select option1" label="select option1" />
          <Select.Item value="select option2" label="select option2" />
          <Select.Item value="select option3" label="select option3" />
        </<Select.ItemList>  
        <Select.Icon>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Root>
 */
