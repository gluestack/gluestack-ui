import { ComponentStory } from '@storybook/react-native';
import { Center, Button, MinusIcon, AddIcon } from '@gluestack/ui';
import Wrapper from '../Wrapper';

type MyButtonStory = ComponentStory<typeof Button>;

export const Basic: MyButtonStory = ({ text, ...props }) => {
  return (
    <Wrapper>
      <Center>
        <Button {...props}>
          <Button.Text>{text}</Button.Text>
        </Button>
      </Center>
    </Wrapper>
  );
};
