import React from 'react';
import { Link, LinkText } from '@gluestack-ui/themed';

const LinkDemo = () => {
  return (
    <Link href="https://v1.gluestack.io/" isExternal>
      <LinkText>gluestack</LinkText>
    </Link>
  );
};

export default LinkDemo;
