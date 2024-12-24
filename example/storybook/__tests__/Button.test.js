import React from 'react';
import renderer from 'react-test-renderer';
// import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { render } from '@testing-library/react-native';

import MyButtonMeta, {
  Button,
} from '../src/components/Forms/Button/Button.stories';
import Wrapper from '../src/components/Wrapper';

const { argTypes } = MyButtonMeta;

describe('Button component', () => {
  const argTypes = MyButtonMeta.argTypes;

  for (const key in argTypes) {
    const opts = argTypes[key].options;

    if (argTypes[key].type === 'boolean') {
      it(`${key}`, () => {
        //@ts-ignore
        const props = {
          [key]: true,
        };
        const tree = renderer
          .create(
            <Wrapper>
              <Button {...props} />
            </Wrapper>
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    } else {
      opts.forEach((arg) => {
        it(`${key} ${arg}`, () => {
          //@ts-ignore
          const props = {
            [key]: arg,
          };
          const tree = renderer
            .create(
              <Wrapper>
                <Button {...props} />
              </Wrapper>
            )
            .toJSON();
          expect(tree).toMatchSnapshot();
        });
      });
    }
  }
});
