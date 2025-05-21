import { CodePreviewer } from '@/components/custom/code-previewer';
import { Link, LinkText } from '@/components/ui/link';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { ArrowUpRight } from 'lucide-react-native';

<CodePreviewer
  code={`function Example() {
  return (
    <Link href="https://gluestack.io/">
      <LinkText>gluestack</LinkText>
    </Link>
  )
}`}
  argTypes={{}}
  reactLive={{ Link, LinkText }}
/>

<CodePreviewer
  code={`function Example() {
  return (
    <Link href="https://gluestack.io/">
      <LinkText>gluestack</LinkText>
    </Link>
  )
}`}
  argTypes={{}}
  reactLive={{ Link, LinkText }}
/>

<CodePreviewer
  code={`function Example() {
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
  );
}`}
  argTypes={{}}
  reactLive={{ Link, LinkText, HStack, Text, Icon, ArrowUpRight }}
/>