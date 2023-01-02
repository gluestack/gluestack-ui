import React from 'react';
import { ComponentMeta } from '@storybook/react-native';
import { Button } from '@gluestack/ui';
import { Page } from '../../storybookDocsComponents/Page';
const MyButtonMeta: ComponentMeta<typeof Button> = {
  title: 'FORMS/Button',
  component: Button,
  args: {
    text: 'Button Text',
    variant: 'solid',
    size: 'md',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline', 'ghost', 'link'],
      description: 'The variant of the button style to use.',
      table: {
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Page
            title="Button"
            description=" The Button component triggers an event or an action. Examples can be
          submitting forms and deleting a data point."
            componentName="button"
          />
        </>
      ),
    },
  },
};

export default MyButtonMeta;

export { Basic } from './Basic';

export { ButtonWithIcons } from './ButtonWithIcon';

// export { ButtonGroup } from './ButtonGroup';

export { Variants } from './Variants';

export { Sizes } from './Sizes';

export { Loading } from './Loading';
