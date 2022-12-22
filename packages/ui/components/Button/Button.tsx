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
        {isLoading && <Button.Spinner sx={{ style: { mr: 8 } }} />}
        {leftIcon && <AddIcon sx={{ style: { mr: 8 } }} />}
        <Button.Text>{text}</Button.Text>
        {rightIcon && <AddIcon sx={{ style: { ml: 8 } }} />}
      </Button>
    </Center>
  );
};
