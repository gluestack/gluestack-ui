import {
  ScrollView,
  Button,
  ButtonText,
  Center,
  Input,
} from '@gluestack-ui/themed';
import { InputAccessoryView } from '@/components/ui/input-accessory-view';
import { config } from '@gluestack-ui/config';
import React, { useState } from 'react';

export default function SafeAreaViewStory() {
  const inputAccessoryViewID = 'uniqueID';
  const initialText = '';
  const [text, setText] = useState(initialText);
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
