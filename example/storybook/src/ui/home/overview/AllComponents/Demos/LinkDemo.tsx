import React from 'react';
import { Link, LinkText } from '@gluestack-ui/themed';

const LinkDemo = () => {
  return (
    <Link href="https://gluestack.io/" isExternal>
      <LinkText>gluestack</LinkText>
    </Link>
  );
};

export default LinkDemo;
