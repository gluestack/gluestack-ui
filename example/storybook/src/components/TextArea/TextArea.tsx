import React from 'react';
import Wrapper from '../Wrapper';
import { TextArea } from '@components';

export const TextAreaStory = ({ ...props }: any) => {
  return (
    <Wrapper>
      <TextArea {...props}>
        <TextArea.Input
          placeholder="Your text goes here..."
          placeholderTextColor="white"
          sx={{
            _dark: {
              placeholderTextColor: 'black',
            },
          }}
        />
      </TextArea>
    </Wrapper>
  );
};
