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
  Image,
} from '../../../ui-components';

type MyLinearGradientStory = ComponentStory<typeof LinearGradient>;

const LinearGradientCard: MyLinearGradientStory = () => {
  return (
    <LinearGradient colors={['$purple400', '$blue400']}>
      <Box h={200} w={400} justifyContent="center" alignItems="center">
        <Image
          size="xs"
          w={300}
          source={{
            uri: 'https://ui.gluestack.io/_next/image?url=%2Ficon%2Flogo%2Fdark-mode.svg&w=384&q=75',
          }}
        />
      </Box>
    </LinearGradient>
  );
};

export default LinearGradientCard;

export { LinearGradient, Box, Text, Button, ButtonIcon, Icon, EditIcon };
