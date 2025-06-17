import React from 'react';
import { render } from '@testing-library/react-native';
import { Button, ButtonText } from '../../../components/ui/button';

describe('ButtonText Component', () => {
  it('renders text correctly', () => {
    const { getByText } = render(
      <Button>
        <ButtonText>Hello World</ButtonText>
      </Button>
    );
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders with custom style', () => {
    const { getByText } = render(
      <Button>
        <ButtonText className="m-2">Custom Style</ButtonText>
      </Button>
    );
    expect(getByText('Custom Style')).toBeTruthy();
  });

  it('renders with different text content', () => {
    const { rerender, getByText } = render(
      <Button>
        <ButtonText>Initial Text</ButtonText>
      </Button>
    );
    expect(getByText('Initial Text')).toBeTruthy();

    rerender(
      <Button>
        <ButtonText>Updated Text</ButtonText>
      </Button>
    );
    expect(getByText('Updated Text')).toBeTruthy();
  });

  
}); 