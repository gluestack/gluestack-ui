const stories = [
  {
    content: `import type { ComponentMeta } from '@storybook/react-native';
    import { <%- storyName %> } from './<%- storyName %>';
    const My<%- storyName %>Meta: ComponentMeta<typeof <%- storyName %>> = {
      title: '<%- path %>/<%- storyName %>',
      component: <%- storyName %>,
    };
    
    export { <%- storyName %> } from './<%- storyName %>';
    export default My<%- storyName %>Meta;
    `,
    extension: '.stories.tsx',
  },
  {
    content: `import React from 'react';

    import { Text, View } from 'react-native';
    import { styled } from '@gluestack/ui-styled';
    import { Wrapper } from '../../components/Wrapper';
    const Styled<%- storyName %> = styled(
      View,
      {
        baseStyle: {
          style: {
          },
        },
      },
      {}
    );
    
    export function <%- storyName %>() {
      return (
        <Wrapper>
          <Styled<%- storyName %>>
          </Styled<%- storyName %>>
        </Wrapper>
      );
    }
    `,
    extension: '.tsx',
  },
];

module.exports = {
  stories,
};
