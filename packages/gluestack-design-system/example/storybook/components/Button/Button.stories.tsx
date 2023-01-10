import React from 'react';
import type { ComponentMeta } from '@storybook/react-native';
import { Button } from '@gluestack/design-system';
import { Page } from '../../storybookDocsComponents/Page';
import { DocsContainer } from '@storybook/addon-docs';
const stories = [
  {
    name: 'With Icons',
    id: 'forms-button--button-with-icons',
  },
];

const creatorCode = `import {
  StyledButton,
  StyledButtonText,
  StyledButtonGroup,
  StyledButtonGroupSpacer,
  StyledButtonSpinner,
} from '../../styled-components';
import { createButton } from '@gluestack/design-system-creator';

export const Button = createButton({
  StyledButton,
  StyledButtonText,
  StyledButtonGroup,
  StyledButtonGroupSpacer,
  StyledButtonSpinner,
}) as any;
`;

const uiCode = `import { Button } from "@gluestack/design-system";
export default () => (
    <Button>
      <Button.Spinner />
      <Button.Text />
    </Button>
  );`;
const apiReference = {
  Text: {
    description: 'Text inside a Button',
    props: {
      fontStyle: {
        description: 'font style for Text',
        default: 'none',
        Type: ['none', 'italic'],
      },
      fontWeight: {
        description: 'Font weight',
        default: 'normal',
        Type: ['number', 'bold', 'normal'],
      },
      letterSpacing: {
        description: 'letter spacing',
        default: '-',
        Type: 'number',
      },
      lineHeight: {
        description: 'line Height',
        default: '-',
        Type: 'number',
      },
      textAlign: {
        description: 'Text Alignment',
        default: 'auto',
        Type: ['auto', 'left', 'right', 'center', 'justify'],
      },
      textDecorationLine: {
        description: 'Text Decoration',
        default: 'none',
        Type: ['none', 'underline', 'line-through', 'underline line-through'],
      },
      textTransform: {
        description: 'Text Transform',
        default: 'none',
        Type: ['none', 'uppercase', 'lowercase', 'capitalize'],
      },
      textShadowColor: {
        description: 'Text Shadow Color',
        default: '-',
        Type: 'string',
      },
      textShadowOffset: {
        description: 'Takes a Object with width and height for text shadow',
        default: '-',
        Type: 'Object',
      },
      textShadowRadius: {
        description: 'Text Shadow blur radius',
        default: '-',
        Type: 'number',
      },
    },
  },
  Spinner: {
    description: 'ActivityIndicator used for loading State',
    props: {
      animating: {
        description: 'Whether to show the indicator (true) or hide it (false).',
        default: 'true',
        Type: 'boolean',
      },
      color: {
        description: 'The foreground color of the spinner.',
        default: '-',
        Type: 'string',
      },
      size: {
        description: 'Size of the indicator.',
        default: 'small',
        Type: ['small', 'large'],
      },
    },
  },
};

const features = [
  'The button component with support for custom icons, spinners, etc.',
  'Utility props Support',
  'Color Mode Support',
  'Fully accessible component',
];
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
      container: DocsContainer,
      page: () => (
        <>
          <Page
            title="Button"
            description="The Button component triggers an event or an action. Examples can be
          submitting forms and deleting a data point."
            componentName="button"
            apiReference={apiReference}
            features={features}
            stories={stories}
            anatomyCode={uiCode}
            creatorCode={creatorCode}
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
