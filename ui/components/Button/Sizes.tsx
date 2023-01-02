import { ComponentStory } from '@storybook/react-native';
import { Button, VStack, Center } from '@gluestack/ui';

type MyButtonStory = ComponentStory<typeof Button>;

const ButtonSizes: MyButtonStory = ({}) => {
  return (
    <Center>
      <VStack space="md">
        <Button size="xs">
          <Button.Text>xs: Button Text</Button.Text>
        </Button>
        <Button size="sm">
          <Button.Text>sm: Button Text</Button.Text>
        </Button>
        <Button size="md">
          <Button.Text>md: Button Text</Button.Text>
        </Button>
        <Button size="lg">
          <Button.Text>lg: Button Text</Button.Text>
        </Button>
      </VStack>
    </Center>
  );
};

export const Sizes = ButtonSizes.bind({});
// Sizes.args = {};
// Sizes.argTypes = {
//   '*': {
//     table: {
//       disable: true,
//     },
//   },
// };
Sizes.parameters = {
  controls: {
    exclude: /.*/g,
  },
  docs: {
    heading: {
      story: 'Sizes of button',
    },
  },
};
