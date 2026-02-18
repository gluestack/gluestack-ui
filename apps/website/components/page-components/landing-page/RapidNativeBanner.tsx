import { HStack } from '@/components/ui/hstack';
import { Icon, ArrowRightIcon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import Link from 'next/link';

export default function RapidNativeBanner() {
  return (
    <Link
      href="https://rapidnative.com/?utm_source=gluestack.io&utm_medium=banner&utm_campaign=brand-awareness"
      target="_blank"
      className="absolute top-5 left-1/2 -translate-x-1/2 z-10 w-full max-w-[620px]"
    >
      <HStack className="bg-primary/90 backdrop-blur-sm rounded-full px-4 sm:px-8 py-2.5 sm:py-3.5 items-center justify-center gap-2 sm:gap-3 hover:bg-primary/95 transition-all duration-200 shadow-sm mx-auto">
        <Text className="text-sm sm:text-base font-medium text-primary-foreground text-center">
          🎉 Prompt to React Native UI available now!
        </Text>
        <Icon
          as={ArrowRightIcon}
          className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground flex-shrink-0"
        />
      </HStack>
    </Link>
  );
}