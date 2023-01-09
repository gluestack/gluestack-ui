import { Link } from 'solito/link';
import React from 'react';
import { Button, ButtonText } from '@gluestack/ui';
import { Text } from 'react-native';

export function DocsButton() {
  return (
    <Link href="/button2">
      <Button disabled sx={{ style: { bg: '$blue.500' } }}>
        <ButtonText sx={{ style: { color: '$red.500' } }}>Button 1!</ButtonText>
      </Button>
      <Text>Hello from Button 1</Text>
    </Link>
  );
}
