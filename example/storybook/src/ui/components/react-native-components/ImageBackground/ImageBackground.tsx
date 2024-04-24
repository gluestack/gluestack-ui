import {
  Center,
  Heading,
  Text,
  View,
  ImageBackground,
} from '@gluestack-ui/themed';
import React from 'react';
import Wrapper from '../../Wrapper';

export default function ImageBackgroundStory() {
  return (
    <View h="$96" w="$96">
      <ImageBackground
        source={{ uri: 'https://legacy.reactjs.org/logo-og.png' }}
        style={{ flex: 1, justifyContent: 'center' }}
      >
        <Text
          color="$white"
          fontSize={42}
          lineHeight={84}
          fontWeight="$bold"
          textAlign="center"
          backgroundColor="#000000c0"
        >
          Inside
        </Text>
      </ImageBackground>
    </View>
  );
}

export { View, Center, Heading, Text, Wrapper, ImageBackground };
