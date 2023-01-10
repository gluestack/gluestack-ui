import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react-native';
import { IconButton, VStack, HamburgerIcon } from '@gluestack/design-system';
import Wrapper from '../Wrapper';

const IconButtonMeta: ComponentMeta<typeof IconButton> = {
  title: 'FORMS/IconButton',
  component: IconButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'subtle', 'outline', 'ghost'],
    },
  },
  args: {
    text: 'PRESS',
    variant: 'solid',
    isLoading: false,
    showText: false,
  },
};

export default IconButtonMeta;

type MyBadgeStory = ComponentStory<typeof IconButton>;

export const Basic: MyBadgeStory = ({
  variant,
  isLoading,
  showText,
  text,
  ...props
}) => {
  return (
    <Wrapper>
      <VStack
        space="sm"
        //@ts-ignore
        sx={{
          style: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
      >
        {/* <IconButton variant={variant}>
          <IconButton.Text>Hello </IconButton.Text>
          <SearchIcon sx={{ style: { w: 24, h: 24 } }} />
          {isLoading && <IconButton.Spinner />}
        </IconButton> */}

        <IconButton variant={variant} {...props}>
          {!isLoading && showText && (
            <IconButton.Text sx={{ style: { mr: 8 } }}>{text}</IconButton.Text>
          )}
          {!isLoading && <HamburgerIcon sx={{ style: { w: 24, h: 24 } }} />}
          {isLoading && <IconButton.Spinner />}
        </IconButton>
      </VStack>
    </Wrapper>
  );
};
