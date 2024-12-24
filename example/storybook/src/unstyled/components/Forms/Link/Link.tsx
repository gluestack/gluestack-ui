import React from 'react';

import { Link, LinkText, Icon, HStack, Text } from '../../../ui-components';
import { ArrowUpRightIcon } from 'lucide-react-native';

const LinkStory = () => {
  return (
    <Link href="https://google.com" isExternal>
      <LinkText>Gluestack</LinkText>
    </Link>
  );
};

export default LinkStory;

export { Link, LinkText, ArrowUpRightIcon, Icon, HStack, Text };
