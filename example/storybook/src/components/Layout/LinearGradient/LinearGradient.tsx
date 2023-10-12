import React from 'react';
import {
  Box,
  Text,
  LinearGradient,
  Button,
  ButtonIcon,
  Icon,
  EditIcon,
  Pressable,
} from '@gluestack-ui/themed';

const LinearGradientStory = ({ ...props }: any) => {
  return (
    <LinearGradient {...props} colors={['$purple400', '$red400']}>
      <Box px={'$12'} py={'$6'}>
        <Text color="$white">Box</Text>
      </Box>
    </LinearGradient>
  );
};

LinearGradientStory.description =
  'This is a basic LinearGradient component example. LinearGradients are used to add gradients to components.';

export default LinearGradientStory;

export {
  LinearGradient,
  Box,
  Text,
  Button,
  ButtonIcon,
  Icon,
  EditIcon,
  Pressable,
};
