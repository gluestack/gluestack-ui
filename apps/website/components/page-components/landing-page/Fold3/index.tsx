import { Heading } from '@/components/ui/heading';
import { Link, LinkText } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import Fold3Interactive from './Fold3Interactive';

const Fold3 = () => {
  return (
    <VStack className="gap-10 sm:gap-20 flex-1 mt-[60px] sm:mt-[120px] max-w-[1440px] mx-auto">
      <VStack className="gap-3 w-full">
        <Heading
          size="2xl"
          className="text-2xl sm:text-3xl font-bold sm:leading-[54px] leading-9 mb-3 text-foreground lg:text-4xl"
        >
          Customize all the way, don't lose control!
        </Heading>
        <Text className="text-muted-foreground text-base sm:text-lg font-normal leading-[28px] sm:leading-[30px] lg:w-[75%]">
          Take full control of your code with copy-paste components for
          unlimited customization. Customize every UI component and element
          precisely, from aesthetics to interactive behaviours.
        </Text>
        <Link
          className="w-fit inline-block"
          href="/ui/docs/home/overview/introduction"
        >
          <LinkText className="text-base sm:text-lg font-bold underline underline-offset-4 group-hover/link:underline">
            Learn more
          </LinkText>
        </Link>
      </VStack>
      <Fold3Interactive />
    </VStack>
  );
};

export default Fold3;
