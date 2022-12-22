import React from 'react';
import { IconButton, SearchIcon, VStack, HamburgerIcon } from '@gluestack/ui';
import Wrapper from '../Wrapper';

export const IconButtonExample = ({
  variant,
  isLoading,
  showText,
  text,
  ...props
}: any) => {
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

        <IconButton variant={variant}>
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
