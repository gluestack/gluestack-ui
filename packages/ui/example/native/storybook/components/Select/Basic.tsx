import { Select } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ props }: any) => {
  return (
    <Wrapper>
      <Select>
        <Select.Item value="select option" label="select option" />
        <Select.Item value="select option1" label="select option1" />
        <Select.Item value="select option2" label="select option2" />
        <Select.Item value="select option3" label="select option3" />
      </Select>
    </Wrapper>
  );
};
