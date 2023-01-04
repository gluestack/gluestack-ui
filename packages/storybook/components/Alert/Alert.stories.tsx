import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Alert, InfoIcon } from '@gluestack/ui';
import Wrapper from '../Wrapper';

const MyAlertMeta: ComponentMeta<typeof Alert> = {
  title: 'FEEDBACK/Alert',
  component: Alert,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'subtle-info',
        'solid-info',
        'outline-info',
        'left-accent-info',
        'top-accent-info',
        'outline-light-info',
        'subtle-success',
        'solid-success',
        'outline-success',
        'left-accent-success',
        'top-accent-success',
        'outline-light-success',
        'subtle-warning',
        'solid-warning',
        'outline-warning',
        'left-accent-warning',
        'top-accent-warning',
        'outline-light-warning',
        'subtle-error',
        'solid-error',
        'outline-error',
        'left-accent-error',
        'top-accent-error',
        'outline-light-error',
      ],
    },
  },
  args: {
    variant: 'subtle-success',
  },
};

export default MyAlertMeta;

type AlertStory = ComponentStory<typeof Alert>;

export const Basic: AlertStory = ({ variant, ...props }) => {
  return (
    <Wrapper>
      <Alert variant={variant} sx={{ bg: '$red400' }} {...props}>
        <Alert.Icon>
          <InfoIcon sx={{ style: { width: 18, height: 18 } }} />
        </Alert.Icon>
        <Alert.Text>Selection successfully moved!</Alert.Text>
      </Alert>
    </Wrapper>
  );
};
