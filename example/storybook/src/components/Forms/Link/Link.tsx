import React from 'react';

import { Link, Icon, HStack, Text } from '../../../ui-components';
import { ArrowUpRightIcon } from 'lucide-react-native';

const LinkStory = ({ ...props }: any) => {
  return (
    <Link href="https://google.com" isExternal {...props}>
      <Link.Text
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
      </Link.Text>
    </Link>
  );
};

export default LinkStory;

export { Link, ArrowUpRightIcon, Icon, HStack, Text };
