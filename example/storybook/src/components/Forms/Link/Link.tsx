import React from 'react';
import Wrapper from '../../Wrapper';
import { Link as LinkTemp, Icon, HStack, Text } from '../../../ui-components';
import { ArrowUpRightIcon } from 'lucide-react-native';

export const Link = () => {
  return (
    <Wrapper>
      <LinkTemp href="https://google.com" isExternal>
        <LinkTemp.Text>Gluestack</LinkTemp.Text>
      </LinkTemp>
    </Wrapper>
  );
};

export { LinkTemp, ArrowUpRightIcon, Icon, HStack, Text };
