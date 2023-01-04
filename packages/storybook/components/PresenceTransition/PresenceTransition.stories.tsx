import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { Button, Center, PresenceTransition, Text } from '@gluestack/ui';
import Wrapper from '../Wrapper';

const PresenceTransitionMeta: ComponentMeta<typeof PresenceTransition> = {
  title: 'TRANSITION/PresenceTransition',
  component: PresenceTransition,
  argTypes: {},
  args: {
    isOpen: false,
  },
};

export default PresenceTransitionMeta;

type PresenceTransitionStory = ComponentStory<typeof PresenceTransition>;

export const Basic: PresenceTransitionStory = ({
  isOpen: isOpenProp,
  ...props
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  return (
    <Wrapper>
      <Center>
        <Button onPress={() => setIsOpen(!isOpen)}>
          <Button.Text>{isOpen ? 'Hide' : 'Show'}</Button.Text>
        </Button>
        <PresenceTransition
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 250,
            },
          }}
        >
          <Center
            sx={{
              style: {
                mt: '$7',
                bg: '$primary700',
                borderRadius: '$sm',
                w: 200,
                h: 100,
                color: '$white',
              },
            }}
          >
            <Text sx={{ style: { color: '$white' } }}>SCALE FADE</Text>
          </Center>
        </PresenceTransition>
      </Center>
    </Wrapper>
  );
};
