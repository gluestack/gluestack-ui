import React from 'react';
import Wrapper from '../../Wrapper';
import { TextArea } from '../../../ui-components';

export const TextAreaStory = ({ ...props }: any) => {
  return (
    <Wrapper>
      <TextArea
        {...props}
        sx={{
          ':active': {
            bg: '$red400',
          },
        }}
        // width="80%"
        mx="$2"
      >
        <TextArea.Input placeholder="Your text goes here..." />
      </TextArea>
    </Wrapper>
  );
};

export { TextArea };
