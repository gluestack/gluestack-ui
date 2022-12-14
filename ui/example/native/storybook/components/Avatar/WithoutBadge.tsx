import { Avatar, HStack, Text } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ ...props }) => {
  return (
    <Wrapper>
      {/* @ts-ignore */}
      <HStack sx={{ style: { gap: 8 } }}>
        <Avatar sx={{ style: { bg: '$purple.400' } }}>
          <Avatar.Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            }}
          >
            <Text
              sx={{
                style: {
                  color: 'white',
                  fontWeight: 'semibold',
                  fontSize: '32px',
                },
              }}
            >
              AB
            </Text>
          </Avatar.Image>
        </Avatar>
        <Avatar sx={{ style: { bg: '$purple.400' } }}>
          <Avatar.Image
            source={{
              uri: 'https://images.unspla',
            }}
          >
            <Text
              sx={{
                style: {
                  color: 'white',
                  fontWeight: 'semibold',
                  fontSize: '32px',
                },
              }}
            >
              AB
            </Text>
          </Avatar.Image>
        </Avatar>
      </HStack>
    </Wrapper>
  );
};
