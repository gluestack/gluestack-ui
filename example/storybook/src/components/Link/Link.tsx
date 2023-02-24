import { createLink } from '@gluestack-ui/link';
import React from 'react';
import Wrapper from '../Wrapper';
import { Text } from '../Text/Text';
import { Root } from '../styled-components/link';

const LinkTemp: any = createLink({
  Root,
});

export const Link = () => {
  return (
    <Wrapper>
      <LinkTemp href="https://gluestack.io/" isExternal>
        <Text
          sx={{
            'fontWeight': '$normal',
            'color': '$info600',
            ':hover': {
              textDecorationLine: 'underline',
            },
            ':active': {
              textDecorationLine: 'underline',
              color: '$info700',
            },
            ':pressed': {
              textDecorationLine: 'underline',
              color: '$info700',
            },
            '_dark': {
              'color': '$info300',
              ':hover': {
                textDecorationLine: 'underline',
                color: '$info300',
              },
              ':active': {
                textDecorationLine: 'underline',
                color: '$info200',
              },
            },
          }}
        >
          gluestack
        </Text>
      </LinkTemp>
    </Wrapper>
  );
};

export { Text as LinkText };
