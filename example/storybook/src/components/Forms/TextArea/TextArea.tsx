import React from 'react';
import Wrapper from '../../Wrapper';
import { TextArea } from '../../../ui-components';

export const TextAreaStory = ({ ...props }: any) => {
  return (
    <Wrapper>
      <TextArea {...props} w="20%">
        <TextArea.Input
          placeholder="Your text goes here..."
          // placeholderTextColor="$textDark400"

          // onFocus={(e: any) => {
          //   console.log(e.target.value);
          // }}
          // onPressOut={(e: any) => {
          //   console.log(e.target.value, 'Out');
          // }}
          // onBlur={(e: any) => {
          //   console.log(e.target.value, 'BLURRED');
          // }}
          // onKeyPress={(e: any) => {
          //   console.log(e.target.value, 'KEYY PRESSED');
          // }}
          // onPressIn={(e: any) => {
          //   console.log(e.target.value, 'In');
          // }}
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
