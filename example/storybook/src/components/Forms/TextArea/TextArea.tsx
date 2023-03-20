import React from 'react';
import Wrapper from '../../Wrapper';
import { TextArea } from '../../../ui-components';

export const TextAreaStory = ({ ...props }: any) => {
  return (
    <Wrapper>
      <TextArea {...props}>
        <TextArea.Input
          placeholder="Your text goes here..."
          placeholderTextColor="$textDark400"
          // sx={{
          //   _dark: {
          //     placeholderTextColor: 'black',
          //   },
          // }}
        />
      </TextArea>
    </Wrapper>
  );
};

export { TextArea };
