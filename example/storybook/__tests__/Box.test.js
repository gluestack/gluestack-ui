import React from 'react';
import renderer from 'react-test-renderer';
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { render } from '@testing-library/react-native';

import BoxStory from '../src/components/Layout/Box/Box';
import Wrapper from '../src/components/Wrapper';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <Wrapper>
        <BoxStory />
      </Wrapper>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
