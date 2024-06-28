import React from 'react';
import { Link, LinkText } from '@/components/ui/link';
const LinkBasic = ({ ...props }: any) => {
  return (
    <Link {...props} href="">
      <LinkText>Link Text</LinkText>
    </Link>
  );
};

LinkBasic.description =
  'This is a basic Link component example.  A link is a component that users can tap to navigate to a new page.';

export default LinkBasic;

export { Link, LinkText };
