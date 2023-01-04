import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Box } from '@gluestack/ui';
import { Page } from '../../storybookDocsComponents/Page';
import { config } from '../../src/styled-components/ui.config';

var st = document.createElement('style');
document.body.append(st);

let colors: any = config?.tokens?.colors;
if (!colors) colors = [];

const MyBoxMeta: ComponentMeta<typeof Box> = {
  title: 'LAYOUT/Box',
  component: Box,
  argTypes: {
    bg: {
      control: 'select',
      options: Object.keys(colors),
      description: 'Background color of the box',
    },
    w: {
      control: 'number',
      description: 'width of the box',
    },
    h: {
      control: 'number',
      description: 'height of the box',
    },
  },
  args: { bg: 'red500', w: 100, h: 100 },
  parameters: {
    docs: {
      page: () => (
        <>
          <Page
            title="Box"
            description="This is a generic component for low level layout needs. It is similar to a `div` in HTML."
            componentName="Box"
          />
          <div
            style={{
              backgroundColor: '#bbf7d0',
              padding: 12,
            }}
          >
            <p>Tip: Common use cases for Box component are:</p>
            <ul>
              <li>Create responsive layouts with ease.</li>
              <li>
                Provide a shorthand to pass styles via props (bg instead of
                backgroundColor).
              </li>
            </ul>
          </div>
        </>
      ),
    },
  },
};

export default MyBoxMeta;

export { Basic } from './Basic';

export { WithRef } from './WithRef';
