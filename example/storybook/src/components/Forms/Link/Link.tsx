import React from 'react';

import { Link, LinkText, Icon, HStack, Text } from '../../../ui-components';
import { ArrowUpRightIcon } from 'lucide-react-native';

const LinkStory = ({ ...props }: any) => {
  return (
    <Link href="https://google.com" isExternal {...props}>
      <LinkText
        // @ts-ignore
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': 'md',
          }),
        }}
      >
        GLUESTACK
      </LinkText>
    </Link>
  );
};

export default LinkStory;

export { Link, LinkText, ArrowUpRightIcon, Icon, HStack, Text };
