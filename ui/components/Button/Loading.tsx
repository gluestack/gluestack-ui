import React from 'react';
import { ComponentStory } from '@storybook/react-native';
import { Button, HStack, AddIcon, MinusIcon } from '@gluestack/ui';

type MyButtonStory = ComponentStory<typeof Button>;
// type MyButtonGroupStory = ComponentStory<typeof Button>;

const ButtonIsLoadingTemp: MyButtonStory = ({}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <HStack space="md">
      <Button
        sx={{
          style: {
            opacity: isLoading ? 0.4 : 1,
          },
        }}
      >
        <Button.Spinner color="white" />
      </Button>
      <Button
        sx={{
          style: {
            opacity: isLoading ? 0.4 : 1,
          },
        }}
      >
        <Button.Spinner color="white" sx={{ style: { mr: 8 } }} />
        <Button.Text>Submitting</Button.Text>
      </Button>
      <Button
        sx={{
          style: {
            opacity: isLoading ? 0.4 : 1,
          },
        }}
      >
        <Button.Text>Submitting</Button.Text>
        <Button.Spinner color="white" sx={{ style: { ml: 8 } }} />
      </Button>
    </HStack>
  );
};

export const Loading = ButtonIsLoadingTemp.bind({});
// ButtonIsLoading.args = {};
Loading.parameters = {
  controls: {
    exclude: /.*/g,
  },
  docs: {
    heading: {
      story: 'Loading',
    },
    description: {
      story: 'Loading State',
    },
  },
};
