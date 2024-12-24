import {
  Center,
  Button,
  ButtonText,
  Text,
  Box,
  StatusBar,
} from '@gluestack-ui/themed';
import React from 'react';
import { Platform } from 'react-native';

export default function StatusBarStory() {
  const [visible, setVisible] = React.useState(true);
  if (Platform.OS === 'web') {
    return (
      <Center
        sx={{
          _web: {
            h: '100vh',
          },
        }}
      >
        <Text>This Component only work on native devices</Text>
      </Center>
    );
  }
  return (
    <Center>
      <Box flex={1} h="100%">
        <StatusBar hidden={!visible} />
        <Center flex={1} h="100%">
          <Button
            onPress={() => {
              setVisible((prev) => !prev);
            }}
          >
            <ButtonText>Toggle StatusBar Visibility</ButtonText>
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
