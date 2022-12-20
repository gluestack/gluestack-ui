import React from 'react';
import { Button, Center, AddIcon } from '@gluestack/ui';

export const Example = ({
  variant,
  text,
  size,
  isLoading,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return (
    <Center>
      <Button variant={variant} size={size} {...props}>
        {isLoading && <Button.Spinner />}
        {leftIcon && <AddIcon />}
        <Button.Text>{text}</Button.Text>
        {rightIcon && <AddIcon />}
      </Button>
    </Center>
  );
};
