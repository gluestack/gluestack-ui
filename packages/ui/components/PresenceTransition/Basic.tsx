import { Button, Center, PresenceTransition, Text } from '@gluestack/ui';
import React, { useState } from 'react';
/* eslint-disable no-console */
export const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
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
  );
};

// mt="7" bg="teal.500" rounded="md" w="200" h="100" _text={{
// color: "white"
