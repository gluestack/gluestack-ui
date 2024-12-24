import {
  ScrollView,
  Button,
  ButtonText,
  Center,
  Input,
  InputAccessoryView,
} from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import React, { useState } from 'react';
import Wrapper from '../../Wrapper';

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

export { config, Wrapper };
