import { Select, ChevronDownIcon } from '@gluestack/ui';

import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ isDisabled, isInvalid, props }: any) => {
  return (
    <Wrapper>
      <Select {...props} isDisabled={isDisabled} isInvalid={isInvalid}>
        <Select.ItemList placeholder="Select">
          <Select.Item value="select option" label="select option" />
          <Select.Item value="select option 1" label="select option 1" />
          <Select.Item value="select option 2" label="select option 2" />
          <Select.Item value="select option 3" label="select option 3" />
        </Select.ItemList>
        <Select.Icon>
          <ChevronDownIcon sx={{ style: { w: 20, h: 20 } }} />
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
