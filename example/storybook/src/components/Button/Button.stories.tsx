import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import { ButtonStory as Button } from './Button';
import { DocsContainer } from '@storybook/addon-docs';
import { ButtonIsLoadingExample } from './ButtonLoading';
import { ButtonSizesExample } from './ButtonSizes';
import { ButtonStylesExample } from './ButtonStyles';
import { ButtonWithIconsTemp } from './ButtonWithIcon';
import { GroupedExample } from './ButtonGroup';

const MyButtonMeta: ComponentMeta<any> = {
  title: 'stories/FORMS/Button',
  component: Button,
  args: {
    action: 'primary',
    style: 'solid',
    text: 'Button text',
    size: 'md',
  },
  argTypes: {
    action: {
      control: 'select',
      description: 'The action of button.',
      options: ['primary', 'secondary', 'positive', 'negative'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    style: {
      control: 'select',
      options: ['link', 'outline', 'solid'],
      description: 'The style of button.',
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'The size of the button.',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
  },
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

const ButtonLoading = ButtonIsLoadingExample.bind({});

ButtonLoading.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

const ButtonSizes = ButtonSizesExample.bind({});

ButtonSizes.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

const ButtonStyles = ButtonStylesExample.bind({});

ButtonStyles.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

const ButtonWithIcon = ButtonWithIconsTemp.bind({});

ButtonWithIcon.parameters = {
  controls: {
    exclude: /.*/g,
  },
};

const ButtonGroup = GroupedExample.bind({});

ButtonGroup.parameters = {
  controls: {
    exclude: /.*/g,
  },
  docs: {
    description: {
      story: 'ButtonGroup',
    },
  },
};

export default MyButtonMeta;

export { Button };

export { ButtonWithIcon };

export { ButtonGroup };

export { ButtonStyles };

export { ButtonSizes };

export { ButtonLoading };
