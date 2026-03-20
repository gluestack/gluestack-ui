import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import NextLink from 'next/link';

const index = () => {
  return (
    <Box className="w-full bg-white dark:bg-background/60 bg-opacity-60 z-10 web:fixed web:bottom-0 web:left-0 border-border/80 border-b py-0.5 items-center backdrop-blur">
      <Text className="text-sm sm:text-base font-semibold tracking-wide animate-pulse">
        🚀 gluestack-ui v5 alpha is{' '}
        <NextLink
          href="https://v5.gluestack.io/"
          target="_blank"
          className="text-primary underline"
        >
          here!
        </NextLink>
      </Text>
    </Box>
  );
};

export default index;