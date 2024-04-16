import React from 'react';
import { Link, LinkText } from '../../../core-components/themed';

const LinkDemo = () => {
  return (
    <Link href="https://gluestack.io/" isExternal>
      <LinkText>gluestack</LinkText>
    </Link>
  );
};

export default LinkDemo;
