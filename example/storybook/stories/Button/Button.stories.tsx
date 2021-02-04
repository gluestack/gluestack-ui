import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button } from './Button';

export const Example = () => {
  return <Button> Button</Button>;
};

storiesOf('Button', module).add('Button', Example);
