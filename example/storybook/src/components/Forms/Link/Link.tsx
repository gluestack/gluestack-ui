import React from 'react';

import { Link, Icon, HStack, Text } from '../../../ui-components';
import { ArrowUpRightIcon } from 'lucide-react-native';

const LinkStory = ({ ...props }: any) => {
  return (
    <Link href="https://google.com" isExternal {...props}>
      <Link.Text>GLUESTACK</Link.Text>
    </Link>
  );
};

export default LinkStory;

export { Link, ArrowUpRightIcon, Icon, HStack, Text };
