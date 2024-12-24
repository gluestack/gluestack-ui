import {
  Fab,
  FabIcon,
  EditIcon,
  HStack,
  Avatar,
  AvatarImage,
  VStack,
  Heading,
  Text,
  Box,
} from '@gluestack-ui/themed';
import React from 'react';

const FabDemo = () => {
  return (
    <Box
      borderColor="$borderLight200"
      borderRadius="$lg"
      borderWidth="$1"
      p="$5"
      minWidth={210}
      sx={{
        '_dark': {
          bg: '$backgroundDark900',
          borderColor: '$borderDark800',
        },
        '@sm': {
          minWidth: 220,
        },
        '@md': {
          minWidth: 200,
        },
        '@lg': {
          minWidth: 220,
        },
        '@xl': {
          minWidth: 215,
        },
      }}
    >
      <VStack space="md">
        <HStack space="sm" alignItems="center">
          <Avatar size="sm">
            <AvatarImage
              source={{
                uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
              }}
            />
          </Avatar>
          <VStack>
            <Heading size="xs">Kevin Jay</Heading>
            <Text size="xs">Hi Rachel</Text>
          </VStack>
        </HStack>
        <HStack space="sm" alignItems="center">
          <Avatar size="sm">
            <AvatarImage
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
              }}
            />
          </Avatar>
          <VStack>
            <Heading size="xs">Albert</Heading>
            <Text size="xs">Coffee?</Text>
          </VStack>
        </HStack>
      </VStack>
      <Fab bg="$emerald600" size="md" sx={{ ':hover': { bg: '$emerald500' } }}>
        <FabIcon as={EditIcon} w={16} h={16} />
      </Fab>
    </Box>
  );
};

export default FabDemo;
