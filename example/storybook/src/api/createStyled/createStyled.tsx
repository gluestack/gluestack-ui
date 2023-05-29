import React from 'react';
import { View, Text } from 'react-native';
import { createStyled, AddCssTokenVariables } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';

const styledCustomized = createStyled([new AddCssTokenVariables({})]);

const StyledView = styledCustomized(
  View,
  {
    w: 100,
    h: 200,
    bg: '$blue500',
  },
  {
    descendantStyle: ['_text'],
  }
);

const StyledText = styledCustomized(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);
export function CreateStyled({ ...args }: any) {
  return (
    <Wrapper>
      <StyledView {...args}>
        <StyledText>Hello World</StyledText>
      </StyledView>
    </Wrapper>
  );
}
export default CreateStyled;
