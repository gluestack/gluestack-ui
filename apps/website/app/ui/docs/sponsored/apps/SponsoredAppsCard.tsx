'use client';

import React from 'react';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Link } from '@/components/ui/link';
import Image from 'next/image';

const sponsoredApps = [
  {
    name: 'AppLighter',
    url: 'https://www.applighter.com/',
    logo: '/icon/logo/applighter/logo.png',
    description: 'Build and ship apps faster',
  },
  {
    name: 'FlyDash',
    url: 'https://flydash.io/',
    logo: '/icon/logo/flydash/logo.png',
    description: 'Dashboard solutions for your apps',
  },
];

function SponsoredAppsCard() {
  return (
    <Box className="py-6 flex-1">
      <Box className="gap-5 flex lg:flex-row flex-col w-full">
        {sponsoredApps.map((app) => (
          <Link
            key={app.name}
            href={app.url}
            isExternal
            className="rounded-xl border lg:flex-1 border-outline-50 bg-background-50 hover:bg-background-100 transition-colors no-underline"
          >
            <Box className="p-6">
              <VStack space="md" className="items-center justify-center">
                <Box className="h-16 w-40 relative">
                  <Image
                    src={app.logo}
                    alt={app.name}
                    fill
                    className="object-contain"
                  />
                </Box>
                <Text className="text-lg font-semibold font-plus-jakarta text-typography-900">
                  {app.name}
                </Text>
                <Text className="text-sm text-typography-600 text-center">
                  {app.description}
                </Text>
              </VStack>
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export default SponsoredAppsCard;
