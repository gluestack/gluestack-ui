import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import { ButtonStory as Button } from './Button';
import { DocsContainer } from '@storybook/addon-docs';
import { ButtonIsLoadingExample } from './ButtonLoading';
import { ButtonSizesExample } from './ButtonSizes';
import { ButtonStylesExample } from './ButtonStyles';
import { ButtonWithIconsTemp } from './ButtonWithIcon';

const ButtonMeta: ComponentMeta<any> = {
  title: 'stories/FORMS/Button',
  component: Button,
  args: {
    // text: 'Button Text',
    // variant: 'solid',

    action: 'primary',
    variant: 'solid',
    text: 'Button',
    size: 'md',
    // children: {
    //   name: 'children',
    //   type: {
    //     name: 'string',
    //     required: true,
    //   },
    //   defaultValue: 'Button',
    //   control: {
    //     type: 'text',
    //   },
    // },

    // size: {
    //   name: 'size',
    //   type: {
    //     name: 'string',
    //   },
    //   defaultValue: 'md',
    //   control: {
    //     type: 'select',
    //   },
    //   options: ['xs', 'sm', 'md', 'lg', 'xl'],
    // },
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
    variant: {
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

// const ButtonGroup: ComponentMeta<any> = {
//   title: 'stories/FORMS/Button Group',
//   component: GroupedExample,
//   args: {
//     size: 'md',
//   },
//   argTypes: {
//     size: {
//       control: 'select',
//       options: ['xs', 'sm', 'md', 'lg', 'xl'],
//       description: 'The size of the button.',
//       table: {
//         defaultValue: { summary: 'md' },
//       },
//     },
//   },
//   parameters: {
//     docs: {
//       container: DocsContainer,
//       page: () => <></>,
//     },
//   },
// };

// export { ButtonGroup };

// const ButtonGroup = GroupedExample.bind({});

// ButtonGroup.parameters = {
//   controls: {
//     exclude: /.*/g,
//     include: size
//   },
//   docs: {
//     description: {
//       story: 'ButtonGroup',
//     },
//   },
// };

export default ButtonMeta;

export { Button };

export { ButtonWithIcon };

// export { ButtonGroup };

export { ButtonStyles };

export { ButtonSizes };

export { ButtonLoading };
