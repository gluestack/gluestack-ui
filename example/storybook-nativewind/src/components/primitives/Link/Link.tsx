import React from 'react';

import { Link, LinkText, Icon, HStack, Text } from '@custom-ui/themed';
import { ArrowUpRightIcon } from 'lucide-react-native';

const LinkBasic = ({ ...props }: any) => {
  return (
    <Link href="https://google.com" isExternal {...props}>
      <LinkText>GLUESTACK</LinkText>
    </Link>
  );
};

LinkBasic.description =
  'This is a basic Link component example.  A link is a component that users can tap to navigate to a new page.';

export default LinkBasic;

export { Link, LinkText, ArrowUpRightIcon, Icon, HStack, Text };
