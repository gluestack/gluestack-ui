import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Trigger } from './useOverlayPosition';

const Example = () => {
  return <Trigger />;
};

storiesOf('useOverlayPosition', module).add('useOverlayPosition', Example);
