import React from 'react';
import Wrapper from '../../Wrapper';
import { Link, Icon, HStack } from '../../../ui-components';
import { ArrowUpRightIcon } from 'lucide-react-native';

export const LinkStory = () => {
  return (
    <Wrapper>
      <Link href="https://google.com" isExternal>
        <Link.Text>Gluestack</Link.Text>
      </Link>
    </Wrapper>
  );
};

export { Link, ArrowUpRightIcon, Icon, HStack };
