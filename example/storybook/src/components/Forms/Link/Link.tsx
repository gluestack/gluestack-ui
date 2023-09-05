import React from 'react';

import { Link, LinkText, Icon, HStack, Text } from '@gluestack-ui/themed';
import { ArrowUpRightIcon } from 'lucide-react-native';

const LinkBasic = () => {
  return (
    <Link href="https://google.com" isExternal>
      <LinkText>Gluestack</LinkText>
    </Link>
  );
};

export default LinkBasic;

export { Link, LinkText, ArrowUpRightIcon, Icon, HStack, Text };
