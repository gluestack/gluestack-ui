import { ComponentStory } from '@storybook/react-native';
import { Button, HStack, AddIcon, InfoIcon } from '@gluestack/ui';

type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

const ButtonWithIconsTemp: MyButtonStory = ({}) => {
  return (
    <HStack space="md">
      <Button>
        <InfoIcon mr="$2" color="$white" />
        <Button.Text>LeftIcon</Button.Text>
      </Button>
      <Button>
        <Button.Text>RightIcon</Button.Text>
        <AddIcon ml="$2" color="$white" />
      </Button>
    </HStack>
  );
};

export const ButtonWithIcons = ButtonWithIconsTemp.bind({});

ButtonWithIcons.parameters = {
  controls: {
    exclude: /.*/g,
  },
};
