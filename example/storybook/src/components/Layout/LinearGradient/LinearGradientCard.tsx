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
      <Box width={250} py="$12">
        <Text
          fontSize="$xl"
          pl="$2.5"
          color="$white"
          fontWeight="$thin"
          fontStyle="italic"
        >
          Lilly James
        </Text>
        <Box bg="$fuchsia100" px="$2" mt="$4" alignItems="center">
          <Text fontSize="$xs" color="$gray600">
            Graphic Designer
          </Text>
        </Box>
      </Box>
    </LinearGradient>
  );
};

export default LinearGradientCard;

export { LinearGradient, Box, Text, Button, ButtonIcon, Icon, EditIcon };
