import React from 'react';
import { render } from '@testing-library/react-native';
import { Button, ButtonIcon } from '../../../components/ui/button';
import { EditIcon, AddIcon, InfoIcon } from '../../../components/ui/icon';

describe('ButtonIcon Component', () => {
  it('renders correctly with EditIcon', () => {
    const { getByTestId } = render(
      <Button>
        <ButtonIcon testID="edit-icon" as={EditIcon} />
      </Button>
    );
    const icon = getByTestId('edit-icon');
    expect(icon).toBeTruthy();
  });

  it('renders with different icons', () => {
    const { getByTestId, rerender } = render(
      <Button>
        <ButtonIcon testID="icon" as={EditIcon} />
      </Button>
    );
    expect(getByTestId('icon')).toBeTruthy();

    rerender(
      <Button>
        <ButtonIcon testID="icon" as={AddIcon} />
      </Button>
    );
    expect(getByTestId('icon')).toBeTruthy();

    rerender(
      <Button>
        <ButtonIcon testID="icon" as={InfoIcon} />
      </Button>
    );
    expect(getByTestId('icon')).toBeTruthy();
  });

  it('renders with custom size', () => {
    const { getByTestId } = render(
      <Button>
        <ButtonIcon testID="custom-size-icon" as={EditIcon} size="lg" />
      </Button>
    );
    const icon = getByTestId('custom-size-icon');
    expect(icon).toBeTruthy();
  });

  it('renders with custom color', () => {
    const { getByTestId } = render(
      <Button>
        <ButtonIcon testID="custom-color-icon" as={EditIcon} color="red" />
      </Button>
    );
    const icon = getByTestId('custom-color-icon');
    expect(icon).toBeTruthy();
  });

  it('renders with custom style', () => {
    const { getByTestId } = render(
      <Button>
        <ButtonIcon testID="custom-style-icon" as={EditIcon} className="m-2" />
      </Button>
    );
    const icon = getByTestId('custom-style-icon');
    expect(icon).toBeTruthy();
  });
}); 