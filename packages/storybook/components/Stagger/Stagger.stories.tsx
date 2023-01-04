import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';
import {
  Stagger,
  AddIcon,
  Button,
  Center,
  InfoIcon,
  PlayIcon,
  ShareIcon,
} from '@gluestack/ui';
import Wrapper from '../Wrapper';

const StaggerMeta: ComponentMeta<typeof Stagger> = {
  title: 'TRANSITION/Stagger',
  component: Stagger,
  argTypes: {},
  args: {
    isOpen: false,
  },
};

export default StaggerMeta;

type MyCustomStaggerStory = ComponentStory<typeof Stagger>;

export const Basic: MyCustomStaggerStory = ({
  isOpen: isOpenProp,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  React.useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);
  return (
    <Wrapper>
      <Stagger
        visible={isOpen}
        initial={{
          opacity: 0,
          scale: 0,
          translateY: 34,
        }}
        animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            mass: 0.8,
            stagger: {
              offset: 30,
              reverse: true,
            },
          },
        }}
        exit={{
          translateY: 34,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true,
            },
          },
        }}
      >
        <Center sx={{ style: { color: '$white' } }}>
          <Button
            sx={{
              style: {
                mb: '$4',
                borderRadius: 999,
                bg: '$indigo500',
              },
            }}
          >
            <ShareIcon sx={{ style: { w: 20, h: 24 } }} />
          </Button>
          <Button
            sx={{
              style: {
                mb: '$4',
                borderRadius: 999,
                bg: '$yellow500',
              },
            }}
          >
            <AddIcon sx={{ style: { w: 20, h: 24 } }} />
          </Button>
          <Button
            sx={{
              style: {
                mb: '$4',
                borderRadius: 999,
                bg: '$info500',
              },
            }}
          >
            <InfoIcon sx={{ style: { w: 20, h: 24 } }} />
          </Button>
          <Button
            sx={{
              style: {
                mb: '$4',
                borderRadius: 999,
                bg: '$warning500',
              },
            }}
          >
            <PlayIcon sx={{ style: { w: 20, h: 24 } }} />
          </Button>
        </Center>
      </Stagger>
      <Center>
        <Button
          onPress={() => setIsOpen(!isOpen)}
          sx={{
            style: {
              borderRadius: 999,
            },
            size: 'lg',
          }}
        >
          <Button.Text>Click</Button.Text>
        </Button>
      </Center>
    </Wrapper>
  );
};
