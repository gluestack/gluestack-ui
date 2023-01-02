import { ComponentStory } from '@storybook/react-native';
import { Center, Button, VStack } from '@gluestack/ui';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonVariants: MyButtonStory = ({}) => {
  return (
    <Center>
      <VStack space="md">
        <Button variant="solid">
          <Button.Text>Solid</Button.Text>
        </Button>
        <Button variant="subtle">
          <Button.Text>Subtle</Button.Text>
        </Button>
        <Button variant="outline">
          <Button.Text>Outline</Button.Text>
        </Button>
        <Button variant="link">
          <Button.Text>Link</Button.Text>
        </Button>
        <Button variant="ghost">
          <Button.Text>Ghost</Button.Text>
        </Button>
      </VStack>
    </Center>
  );
};

export const Variants = ButtonVariants.bind({});

Variants.parameters = {
  // options: {
  //   withKnobs: {
  //     disable: true, // do not show the knobs addon on this story
  //   },
  // },
  controls: {
    exclude: /.*/g,
  },
  docs: {},
};
