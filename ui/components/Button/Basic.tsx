import { ComponentStory } from '@storybook/react-native';
import { Center, Button, MinusIcon, AddIcon } from '@gluestack/ui';

type MyButtonStory = ComponentStory<typeof Button>;

export const Basic: MyButtonStory = ({
  leftIcon,
  isLoading,
  rightIcon,
  text,
  ...props
}) => {
  return (
    <Center>
      <Button {...props}>
        {isLoading && <Button.Spinner sx={{ style: { mr: 8 } }} />}
        {leftIcon && <MinusIcon sx={{ style: { mr: 8 } }} />}
        <Button.Text>{text}</Button.Text>
        {rightIcon && <AddIcon sx={{ style: { ml: 8 } }} />}
      </Button>
    </Center>
  );
};
