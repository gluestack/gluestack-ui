// @ts-nocheck
import React from 'react';
import { createStyled, AddCssTokenVariables } from '@gluestack-style/react';
import { Wrapper } from '../../components/Wrapper';
import { View, Text } from 'react-native';
const styledCssTokensVariables = createStyled([new AddCssTokenVariables({})]);

const StyledView = styledCssTokensVariables(
  View,
  {
    w: 200,
    h: 200,
    bg: '$blue500',
  },
  {
    descendantStyle: ['_text'],
  }
);

const StyledText = styledCssTokensVariables(
  Text,
  {},
  {
    ancestorStyle: ['_text'],
  }
);

export function CSSVariables() {
  return (
    <Wrapper>
      <StyledView>
        <StyledText
          style={{
            color: 'var(--gluestack-style-colors-orange300)',
            margin: 'var(--gluestack-style-space-4)',
          }}
        >
          Hello World
        </StyledText>
      </StyledView>
    </Wrapper>
  );
}

export default CSSVariables;
