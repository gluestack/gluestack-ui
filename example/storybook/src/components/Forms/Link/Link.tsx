import React from 'react';

import {
  Link as LinkTemp,
  Icon,
  HStack,
  Text,
  Center,
} from '../../../ui-components';
import { ArrowUpRightIcon } from 'lucide-react-native';

export const LinkStory = () => {
  return (
    <Center>
      <LinkTemp href="https://google.com" isExternal>
        <LinkTemp.Text>Gluestack</LinkTemp.Text>
      </LinkTemp>
    </Center>
  );
};

export { LinkTemp, ArrowUpRightIcon, Icon, HStack, Text };
