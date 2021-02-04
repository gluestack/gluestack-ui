import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { RadioGroup, Radio } from './index';

const RadioExample = () => {
  return (
    <RadioGroup label="Favorite pet">
      <Radio value="dogs">Dogs</Radio>
      <Radio value="cats">Cats</Radio>
    </RadioGroup>
  );
};

export const Example = () => {
  return <RadioExample />;
};

storiesOf('Radio', module).add('Radio group', Example);
