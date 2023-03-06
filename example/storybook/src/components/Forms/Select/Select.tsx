import React from 'react';
import Wrapper from '../../Wrapper';
import { Center, Select } from '../../../ui-components';

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

export { Center, Select };
