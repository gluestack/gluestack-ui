import { Heading } from '@/components/ui/heading';
import { Link, LinkText } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import ExampleInteractive from './ExampleInteractive';

const Example = () => {
  return (
    <VStack className="gap-10 md:gap-20 w-full mt-[120px]">
      <VStack className="gap-3 w-full">
        <Heading size="2xl" className="text-3xl md:text-4xl font-bold">
          Same code for Next.js and Expo
        </Heading>
        <Text className="text-lg font-normal leading-[30px] w-full md:w-[75%]">
          Build universal apps with consistent code across Next.js and Expo
          projects. Boost productivity, ensure code consistency, and simplify
          maintenance for both web and mobile platforms using a powerful React
          Native component library.
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
      <ExampleInteractive />
    </VStack>
  );
};

export default Example;
