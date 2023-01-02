import { ComponentStory } from '@storybook/react-native';
import { Button, HStack, AddIcon, MinusIcon } from '@gluestack/ui';

type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

const ButtonWithIconsTemp: MyButtonStory = ({}) => {
  return (
    <HStack space="md">
      <Button>
        <MinusIcon sx={{ style: { mr: 8, color: '$white' } }} />
        <Button.Text>LeftIcon</Button.Text>
      </Button>
      <Button>
        <Button.Text>RightIcon</Button.Text>
        <AddIcon sx={{ style: { ml: 8, color: '$white' } }} />
      </Button>
    </HStack>
  );
};

export const ButtonWithIcons = ButtonWithIconsTemp.bind({});
// ButtonWithIcons.args = {};
// ButtonWithIcons.argTypes = {
//   '*': {
//     table: {
//       disable: true,
//     },
//   },
// };
ButtonWithIcons.parameters = {
  // options: {
  //   withKnobs: {
  //     disable: true, // do not show the knobs addon on this story
  //   },
  // },
  controls: {
    exclude: /.*/g,
  },
  docs: {
    description: {
      story: 'Button With Right and Left Icons',
    },
  },
};
