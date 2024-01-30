import {
  ScrollView,
  Button,
  ButtonText,
  Center,
  Input,
} from '@gluestack-ui/themed';
import { InputAccessoryView } from '@/components/InputAccessoryView';
import { config } from '@gluestack-ui/config';
import React from 'react';

export default function SafeAreaViewStory() {
  return (
    <Center>
      <ScrollView keyboardDismissMode="interactive">
        <Input
          style={{
            padding: 16,
            marginTop: 50,
          }}
          inputAccessoryViewID={inputAccessoryViewID}
          onChangeText={setText}
          value={text}
          placeholder={'Please type here…'}
        />
      </ScrollView>
      <InputAccessoryView nativeID={inputAccessoryViewID}>
        <Button onPress={() => setText(initialText)}>
          <ButtonText>Clear text </ButtonText>
        </Button>
      </InputAccessoryView>
    </Center>
  );
}

export {
  VStack,
  Center,
  Heading,
  GluestackUIProvider,
  SafeAreaView,
  Text,
} from '@gluestack-ui/themed';

export { config };
