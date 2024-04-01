import React from 'react';
import { Link, LinkText } from '@/components/ui';

const LinkDemo = () => {
  return (
    <Link href="https://gluestack.io/" isExternal>
      <LinkText>gluestack</LinkText>
    </Link>
  );
};

export default LinkDemo;
