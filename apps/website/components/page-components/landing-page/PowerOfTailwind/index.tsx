import { Heading } from '@/components/ui/heading';
import { Link, LinkText } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import PowerOfTailwindInteractive from './PowerOfTailwindInteractive';

const PowerOfTailwind = () => {
  return (
    <VStack className="mt-[120px] gap-10 md:gap-20 w-full">
      <VStack className="gap-3 w-full">
        <Heading
          size="2xl"
          className="text-3xl font-bold sm:leading-[54px] leading-9 text-typography-900 sm:text-4xl w-full"
        >
          The Power of Tailwind CSS with NativeWind
        </Heading>
        <Text className="text-typography-700 text-lg font-normal leading-[30px] w-full md:w-[75%]">
          Unleash your creativity and maximize the styling possibilities with{' '}
          <a
            href="https://gluestack.io/ui/docs/home/getting-started/installation"
            className="underline underline-offset-4 group-hover/link:underline"
          >
            Tailwind UI components
          </a>{' '}
          and utility classes. Combine Tailwind utility classes with the
          powerful styling engine of NativeWind, ideal for universal
          applications.
        </Text>
        <Link
          href="https://gluestack.io/ui/docs/home/getting-started/installation"
          className="w-fit inline-block"
        >
          <LinkText className="text-lg font-bold underline underline-offset-4 group-hover/link:underline">
            Learn more
          </LinkText>
        </Link>
      </VStack>
      <PowerOfTailwindInteractive />
    </VStack>
  );
};

export default PowerOfTailwind;
