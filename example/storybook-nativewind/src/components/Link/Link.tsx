import React from 'react';
import { Link, LinkText } from '@/components/ui/Link';
import { Icon } from '@/components/ui/Icon';
import { HStack } from '@/components/ui/HStack';
import { Text } from '@/components/ui/Text';
import { ArrowUpRightIcon } from 'lucide-react-native';
const LinkBasic = ({ ...props }: any) => {
  return (
    <>
      <Link href="https://google.com" {...props} isExternal>
        <LinkText
        // @ts-ignore
        >
          GLUESTACK
        </LinkText>
      </Link>
    </>
  );
};

LinkBasic.description =
  'This is a basic Link component example.  A link is a component that users can tap to navigate to a new page.';

export default LinkBasic;

export { Link, LinkText, ArrowUpRightIcon, Icon, HStack, Text };
