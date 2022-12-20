import { Button, Center, PresenceTransition } from '@gluestack/ui';
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
              borderRadius: 999,
              w: 200,
              h: 100,
              color: '$white',
            },
          }}
        >
          ScaleFade
        </Center>
      </PresenceTransition>
    </Center>
  );
};

// mt="7" bg="teal.500" rounded="md" w="200" h="100" _text={{
// color: "white"
