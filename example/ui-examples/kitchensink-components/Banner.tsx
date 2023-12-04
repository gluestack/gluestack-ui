import React from 'react';
import { HStack, Link, Text } from '../gluestack-ui-components';

const Banner = React.memo(() => {
  return (
    <HStack
      justifyContent="center"
      alignItems="center"
      space="sm"
      h="$16"
      sx={{
        _light: { bg: '$backgroundLight900' },
        _dark: { bg: '$backgroundDark800' },
      }}
    >
      <Text
        size="sm"
        color="$textLight0"
        sx={{
          _dark: { color: '$textLight0' },
        }}
      >
        Show total prices up front
      </Text>
      <Link href="https://ui.gluestack.io">
        <Link.Text
          color="$textLight0"
          sx={{
            _dark: { color: '$textDark200' },
          }}
          fontWeight="$semibold"
          size="sm"
        >
          Learn more
        </Link.Text>
      </Link>
    </HStack>
  );
});
export default Banner;
