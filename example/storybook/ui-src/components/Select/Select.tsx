import React from 'react';
import { Select } from '@gluestack/ui-compiled';
import { InfoIcon } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

export const SelectStory = ({ isDisabled, isInvalid, ...props }: any) => {
  return (
    <Wrapper>
      <Select isDisabled={isDisabled} isInvalid={isInvalid} {...props}>
        <Select.ItemList placeholder="Select">
          <Select.Item value="select option" label="select option" />
          <Select.Item value="select option 1" label="select option 1" />
          <Select.Item value="select option 2" label="select option 2" />
          <Select.Item value="select option 3" label="select option 3" />
        </Select.ItemList>
        <Select.Icon>
          <InfoIcon sx={{ w: 20, h: 20 }} />
        </Select.Icon>
      </Select>
    </Wrapper>
  );
};
