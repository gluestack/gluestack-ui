import { ComponentStory } from '@storybook/react-native';
import { Center, Button, VStack } from '@gluestack/ui';
import Wrapper from '../Wrapper';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonVariants: MyButtonStory = ({}) => {
  const variants = ['solid', 'subtle', 'outline', 'link', 'ghost', 'unstyled'];
  return (
    <Wrapper>
      <Center>
        <VStack space="md">
          {variants.map((variant) => {
            return (
              <Button variant={variant}>
                <Button.Text>{variant}</Button.Text>
              </Button>
            );
          })}
        </VStack>
      </Center>
    </Wrapper>
  );
};

export const Variants = ButtonVariants.bind({});

Variants.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
