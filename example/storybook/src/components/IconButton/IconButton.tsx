import React from 'react';
import { VStack, HamburgerIcon } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';
import { createIconButton } from '@universa11y/icon-button';
import { Root, Text, Spinner } from '../styled-components/icon-button';

export const IconButton = createIconButton({
  Root,
  Text,
  Spinner,
}) as any;

export const IconButtonStory = ({
  variant = 'primary',
  isLoading = false,
  showText = false,
  text = 'Icon Button',
  ...props
}: any) => {
  return (
    <Wrapper>
      <VStack
        space="sm"
        //@ts-ignore
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* <IconButton variant={variant}>
          <IconButton.Text>Hello </IconButton.Text>
          <SearchIcon sx={{ w: 24, h: 24  }} />
          {isLoading && <IconButton.Spinner />}
        </IconButton> */}

        <IconButton variant={variant} {...props}>
          {!isLoading && showText && (
            <IconButton.Text sx={{ mr: 8 }}>{text}</IconButton.Text>
          )}
          {!isLoading && (
            <HamburgerIcon
              sx={{
                w: '$5',
                h: '$5',
                color: '$backgroundDark50',
              }}
            />
          )}
          {isLoading && <IconButton.Spinner />}
        </IconButton>
      </VStack>
    </Wrapper>
  );
};
