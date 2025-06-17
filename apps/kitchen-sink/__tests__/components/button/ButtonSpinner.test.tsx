import React from 'react';
import { render } from '@testing-library/react-native';
import { ButtonSpinner } from '@/components/ui/button';

describe('ButtonSpinner Component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ButtonSpinner testID="spinner" />
    );
    
    expect(getByTestId('spinner')).toBeTruthy();
  });

  it('renders with custom size', () => {
    const { getByTestId } = render(
      <ButtonSpinner testID="custom-size-spinner" size="large" />
    );
    
    expect(getByTestId('custom-size-spinner')).toBeTruthy();
  });

  it('renders with custom color', () => {
    const { getByTestId } = render(
      <ButtonSpinner testID="custom-color-spinner" color="red" />
    );
    
    expect(getByTestId('custom-color-spinner')).toBeTruthy();
  });

  it('renders with custom style', () => {
    const { getByTestId } = render(
      <ButtonSpinner testID="custom-style-spinner" className="m-2" />
    );
    
    expect(getByTestId('custom-style-spinner')).toBeTruthy();
  });
}); 