import React from 'react';
import renderer from 'react-test-renderer';
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { render } from '@testing-library/react-native';

import { Button } from '../src/components/Forms/Button/Button';
import Wrapper from '../src/components/Wrapper';

describe('Button component', () => {
  it('matches snapshot', () => {
    //@ts-ignore
    const tree = renderer
      .create(
        <Wrapper>
          <Button />
        </Wrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
