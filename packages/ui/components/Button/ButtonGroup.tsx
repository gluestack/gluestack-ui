import React from 'react';
import { Button, Center, AddIcon } from '@gluestack/ui';

export const Example = ({
  variant,
  text,
  size,
  isLoading,
  leftIcon,
  rightIcon,
  direction,
  ...props
}) => {
  return (
    <Center>
      <Button.Group direction={direction}>
        <Button variant={variant} size={size} {...props}>
          {isLoading && <Button.Spinner />}
          {leftIcon && <AddIcon />}
          <Button.Text>{text}</Button.Text>
          {rightIcon && <AddIcon />}
        </Button>
        <Button
          variant={variant}
          size={size}
          {...props}
          sx={{ style: { bg: '$blue500' } }}
        >
          {isLoading && <Button.Spinner />}
          {leftIcon && <AddIcon />}
          <Button.Text>{text}</Button.Text>
          {rightIcon && <AddIcon />}
        </Button>
        <Button variant={variant} size={size} {...props}>
          {isLoading && <Button.Spinner />}
          {leftIcon && <AddIcon />}
          <Button.Text>{text}</Button.Text>
          {rightIcon && <AddIcon />}
        </Button>
      </Button.Group>
    </Center>
  );
};
