import { Heading } from '@/components/ui/heading';
import { Link, LinkText } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import Fold2Tabs from './Fold2Tabs';

const Fold2 = () => {
  return (
    <VStack className="gap-20 mt-[120px]">
      <VStack className="gap-3">
        <Heading className="text-3xl font-bold sm:leading-[54px] leading-9 mb-3 text-foreground sm:text-4xl">
          Copy-paste components, patterns & screens
        </Heading>
        <Text className="text-muted-foreground text-lg font-normal leading-[30px] lg:w-[75%]">
          Quickly integrate pre-built, high-quality components and screens by
          copying and pasting from the gluestack UI component library. Save
          time, ensure consistency, and easily customize with Tailwind classes.
        </Text>
        <Link
          className="w-fit inline-block"
          aria-label="installation link"
          href="/ui/docs/home/getting-started/installation"
        >
          <LinkText className="text-lg font-bold underline underline-offset-4 group-hover/link:underline">
            Learn more
          </LinkText>
        </Link>
      </VStack>
      <Fold2Tabs />
    </VStack>
  );
};

export default Fold2;
