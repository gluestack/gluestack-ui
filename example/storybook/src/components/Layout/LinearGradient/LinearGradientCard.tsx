import type { ComponentStory } from '@storybook/react-native';
import React from 'react';
import {
  Box,
  Text,
  LinearGradient,
  Button,
  ButtonIcon,
  Icon,
  EditIcon,
} from '@gluestack-ui/themed';

type MyLinearGradientStory = ComponentStory<typeof LinearGradient>;

const LinearGradientCard: MyLinearGradientStory = () => {
  return (
    <LinearGradient
      colors={['$purple400', '$blue400', '$pink300']}
      borderRadius="$md"
    >
      <Box width={256} py="$12" justifyContent="center">
        <Text
          fontSize="$xl"
          pl="$2.5"
          color="$black"
          fontWeight="$thin"
          fontStyle="italic"
          textAlign="center"
        >
          Lilly James
        </Text>
        <Box bg="$fuchsia100" px="$2" mt="$4">
          <Text fontSize="$xs" color="$gray600" textAlign="center">
            Event Planner
          </Text>
        </Box>
      </Box>
    </LinearGradient>
  );
};

export default LinearGradientCard;

export { LinearGradient, Box, Text, Button, ButtonIcon, Icon, EditIcon };
