'use client';
import { HStack } from '@/components/ui/hstack';
import { Icon, ArrowRightIcon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import Link from 'next/link';

export default function RapidNativeBanner() {
  return (
    <Link
      href="https://rapidnative.com/?utm_source=gluestack.io&utm_medium=banner&utm_campaign=brand-awareness"
      target="_blank"
      className="absolute top-5 left-1/2 -translate-x-1/2 z-10 w-[calc(100%-32px)] sm:w-auto max-w-[620px]"
    >
      <div className="relative">
        <HStack className="bg-primary-500/90 backdrop-blur-sm rounded-full px-4 sm:px-8 py-2.5 sm:py-3.5 items-center justify-center gap-2 sm:gap-3 hover:bg-primary-600/95 transition-all duration-200 shadow-sm mx-auto">
          <Text className="text-[8px] font-semibold text-primary-500 bg-typography-0 px-2 py-0.5 rounded-lg uppercase tracking-wide">
            Partner
          </Text>
          <Text className="text-sm sm:text-base font-medium text-typography-0 text-center">
            RapidNative: Generate React Native apps with Prompts!
          </Text>
        </HStack>
      </div>
    </Link>
  );
}
