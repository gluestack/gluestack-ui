import React from 'react';
import Wrapper from '../../Wrapper';
import { Input, Center, Icon, SearchIcon } from '../../../ui-components';

const InputStory = ({ ...props }: any) => {
  const [value, setValue] = React.useState('');

  return (
    <Wrapper>
      <Input {...props}>
        <Input.Input
          onChange={(e: any) => {
            setValue(e.nativeEvent.text);
          }}
          value={value}
          placeholder="Enter Text here"
        />
        <Input.Icon pr="$4">
          <Icon as={SearchIcon} />
        </Input.Icon>
      </Input>
    </Wrapper>
  );
};

export { InputStory, Input, Center };
