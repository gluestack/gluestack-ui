import { ComponentStory } from '@storybook/react-native';
import { Center, Button, VStack } from '@gluestack/ui';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonVariants: MyButtonStory = ({}) => {
  const variants = ['solid', 'subtle', 'outline', 'link', 'ghost', 'unstyled'];
  return (
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
  );
};

export const Variants = ButtonVariants.bind({});

Variants.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
