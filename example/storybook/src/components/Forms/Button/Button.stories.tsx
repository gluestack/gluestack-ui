import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import { ButtonStory as Button } from './Button';
import { DocsContainer } from '@storybook/addon-docs';
import { ButtonIsLoadingExample } from './ButtonLoading';
import { ButtonSizesExample } from './ButtonSizes';
import { ButtonStylesExample } from './ButtonStyles';
import { ButtonWithIconsTemp } from './ButtonWithIcon';

// const stories = [
//   {
//     name: 'With Icons',
//     id: 'forms-button--button-with-icons',
//   },
// ];

// const creatorCode = `import {
//   StyledButton,
//   StyledButtonText,
//   StyledButtonGroup,
//   StyledButtonGroupSpacer,
//   StyledButtonSpinner,
// } from '../../styled-components';
// import { createButton } from '@gluestack/ui-creator';

// export const Button = createButton({
//   StyledButton,
//   StyledButtonText,
//   StyledButtonGroup,
//   StyledButtonGroupSpacer,
//   StyledButtonSpinner,
// }) as any;
// `;

// const uiCode = `import { Button } from "@gluestack/ui";
// export default () => (
//     <Button>
//       <Button.Spinner />
//       <Button.Text />
//     </Button>
//   );`;
// const apiReference = {
//   Text: {
//     description: 'Text inside a Button',
//     props: {
//       fontStyle: {
//         description: 'font style for Text',
//         default: 'none',
//         Type: ['none', 'italic'],
//       },
//       fontWeight: {
//         description: 'Font weight',
//         default: 'normal',
//         Type: ['number', 'bold', 'normal'],
//       },
//       letterSpacing: {
//         description: 'letter spacing',
//         default: '-',
//         Type: 'number',
//       },
//       lineHeight: {
//         description: 'line Height',
//         default: '-',
//         Type: 'number',
//       },
//       textAlign: {
//         description: 'Text Alignment',
//         default: 'auto',
//         Type: ['auto', 'left', 'right', 'center', 'justify'],
//       },
//       textDecorationLine: {
//         description: 'Text Decoration',
//         default: 'none',
//         Type: ['none', 'underline', 'line-through', 'underline line-through'],
//       },
//       textTransform: {
//         description: 'Text Transform',
//         default: 'none',
//         Type: ['none', 'uppercase', 'lowercase', 'capitalize'],
//       },
//       textShadowColor: {
//         description: 'Text Shadow Color',
//         default: '-',
//         Type: 'string',
//       },
//       textShadowOffset: {
//         description: 'Takes a Object with width and height for text shadow',
//         default: '-',
//         Type: 'Object',
//       },
//       textShadowRadius: {
//         description: 'Text Shadow blur radius',
//         default: '-',
//         Type: 'number',
//       },
//     },
//   },
//   Spinner: {
//     description: 'ActivityIndicator used for loading State',
//     props: {
//       animating: {
//         description: 'Whether to show the indicator (true) or hide it (false).',
//         default: 'true',
//         Type: 'boolean',
//       },
//       color: {
//         description: 'The foreground color of the spinner.',
//         default: '-',
//         Type: 'string',
//       },
//       size: {
//         description: 'Size of the indicator.',
//         default: 'small',
//         Type: ['small', 'large'],
//       },
//     },
//   },
// };

// const features = [
//   'The button component with support for custom icons, spinners, etc.',
//   'Utility props Support',
//   'Color Mode Support',
//   'Fully accessible component',
// ];
const MyButtonMeta: ComponentMeta<any> = {
  title: 'stories/FORMS/Button',
  component: Button,
  args: {
    // text: 'Button Text',
    // variant: 'solid',

    action: 'primary',
    variant: 'solid',
    text: 'Button text',
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
      options: ['xs', 'sm', 'md', 'lg'],
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

export default MyButtonMeta;

export { Button };

export { ButtonWithIcon };

// export { ButtonGroup };

export { ButtonStyles };

export { ButtonSizes };

export { ButtonLoading };
