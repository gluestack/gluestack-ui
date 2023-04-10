import React from 'react';
import renderer from 'react-test-renderer';
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { render } from '@testing-library/react-native';

import { ButtonStory } from '../src/components/Forms/Button/Button';
import Wrapper from '../src/components/Wrapper';

describe('Button component', () => {
  it('matches snapshot', () => {
    //@ts-ignore
    const tree = renderer
      .create(
        <Wrapper>
          <ButtonStory />
        </Wrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Button disabled', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <ButtonStory isDisabled />
        </Wrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Button hovered', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <ButtonStory isHovered />
        </Wrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <ButtonStory isPressed />
        </Wrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should press button', () => {
    const mock = jest.fn();
    const tree = renderer
      .create(
        <Wrapper>
          <ButtonStory onPress={mock} />
        </Wrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
