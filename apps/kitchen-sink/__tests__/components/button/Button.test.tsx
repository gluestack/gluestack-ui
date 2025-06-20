import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button, ButtonText, ButtonSpinner, ButtonIcon } from '@/components/ui/button';
import { EditIcon } from '@/components/ui/icon';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(
      <Button>
        <ButtonText>Click me</ButtonText>
      </Button>
    );
    
    expect(getByText('Click me')).toBeTruthy();
  });

  it('handles press events', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button onPress={onPressMock}>
        <ButtonText>Click me</ButtonText>
      </Button>
    );
    
    fireEvent.press(getByText('Click me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders with different variants', () => {
    const variants = ['solid', 'outline', 'link'];
    const { rerender, getByText } = render(
      <Button variant={variants[0]}>
        <ButtonText>Button</ButtonText>
      </Button>
    );
    
    variants.forEach((variant) => {
      rerender(
        <Button variant={variant}>
          <ButtonText>Button</ButtonText>
        </Button>
      );
      expect(getByText('Button')).toBeTruthy();
    });
  });

  it('renders with loading state', () => {
    const { getByTestId } = render(
      <Button>
        <ButtonSpinner testID="button-spinner" />
        <ButtonText>Loading...</ButtonText>
      </Button>
    );
    
    expect(getByTestId('button-spinner')).toBeTruthy();
  });

  it('renders with icon', () => {
    const { getByTestId } = render(
      <Button>
        <ButtonIcon testID="button-icon" as={EditIcon} />
        <ButtonText>Edit</ButtonText>
      </Button>
    );
    
    expect(getByTestId('button-icon')).toBeTruthy();
  });

  it('renders with different sizes', () => {
    const sizes = ['xs', 'sm', 'md', 'lg'];
    const { rerender, getByText } = render(
      <Button size={sizes[0]}>
        <ButtonText>Button</ButtonText>
      </Button>
    );

    sizes.forEach((size) => {
      rerender(
        <Button size={size}>
          <ButtonText>Button</ButtonText>
        </Button>
      );
      expect(getByText('Button')).toBeTruthy();
    });
  });

  it('renders with different actions', () => {
    const actions = ['primary', 'secondary', 'positive', 'negative'];
    const { rerender, getByText } = render(
      <Button action={actions[0]}>
        <ButtonText>Button</ButtonText>
      </Button>
    );

    actions.forEach((action) => {
      rerender(
        <Button action={action}>
          <ButtonText>Button</ButtonText>
        </Button>
      );
      expect(getByText('Button')).toBeTruthy();
    });
  });

  it('renders disabled state correctly', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button isDisabled onPress={onPressMock}>
        <ButtonText>Disabled Button</ButtonText>
      </Button>
    );
    
    fireEvent.press(getByText('Disabled Button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders with custom style', () => {
    const { getByTestId } = render(
      <Button testID="custom-button" className="bg-red-500">
        <ButtonText>Custom Style</ButtonText>
      </Button>
    );
    
    expect(getByTestId('custom-button')).toBeTruthy();
  });
}); 