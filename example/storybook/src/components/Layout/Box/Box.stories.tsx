import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import { BoxStory as Box } from './Box';
import { BoxWithRefExample as BoxWithRef } from './BoxWithRef';

const BoxMeta: ComponentMeta<typeof Box> = {
  title: 'stories/LAYOUT/Box',
  component: Box,

  args: { bg: 'red500', w: 100, h: 100 },
  parameters: {
    docs: {
      page: () => (
        <>
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

BoxWithRef.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

export default BoxMeta;

export { Box };

export { BoxWithRef };
