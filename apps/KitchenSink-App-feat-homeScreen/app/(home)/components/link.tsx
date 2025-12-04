import { Link, LinkText } from '@/components/ui/link'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { Icon } from '@/components/ui/icon'
import { ArrowUpRight } from 'lucide-react-native'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Link href="https://gluestack.io/">
      <LinkText>gluestack</LinkText>
    </Link>
  )
};

const ExampleDefaultLink = () => {
return (
    <HStack>
            <Text
              size="lg"
            >Design inspiration from&nbsp;</Text>
              <Link href="https://gluestack.io/" isExternal>
                <LinkText size="lg">pinterest.com</LinkText>
              </Link>
          </HStack>
  )
};

const ExampleLinkWithIcon = () => {
return (
    <HStack>
      <Text size="lg">Go to&nbsp;</Text>
      <Link href="https://gluestack.io/" isExternal>
        <HStack>
          <LinkText size="lg">Pinterest</LinkText>
          <Icon as={ArrowUpRight} size="lg" className="mt-0.5 text-info-600"/>
        </HStack>
      </Link>
    </HStack>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "default-link",
    label: "Default Link",
    content: <ExampleDefaultLink />,
  },
  {
    value: "link-with-icon",
    label: "Link with Icon",
    content: <ExampleLinkWithIcon />,
  }
];

export default function LinkScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}