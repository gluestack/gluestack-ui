import { ComponentStory } from '@storybook/react-native';
import { Button, VStack, Center } from '@gluestack/ui';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonSizes: MyButtonStory = ({}) => {
  const sizes = ['xs', 'sm', 'md', 'lg'];
  return (
    <Center>
      <VStack space="md">
        {sizes.map((size) => {
          return (
            <Button size={size}>
              <Button.Text>Button {size}</Button.Text>
            </Button>
          );
        })}
      </VStack>
    </Center>
  );
};

export const Sizes = ButtonSizes.bind({});

Sizes.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
