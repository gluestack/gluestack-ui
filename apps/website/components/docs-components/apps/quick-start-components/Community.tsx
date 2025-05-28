import React from 'react';
import { Link } from '@/components/ui/link';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
export type CommunityItem = {
  name: string;
  icon: React.ReactElement;
  link: string;
  description: string;
};

export const Community = ({
  communities,
}: {
  communities: CommunityItem[];
}) => {
  return (
    <Box className="my-6">
      <VStack space="sm">
        <Heading size="2xl" className="font-bold font-Plus Jakarta Sans">
          Join our community
        </Heading>
        <Text className="text-base">
          Be a part of this journey. Everyone is welcome!
        </Text>
      </VStack>
      <HStack className="my-6 flex-col flex-wrap gap-5 lg:flex-row">
        {communities.map((community, key) => {
          return (
            <Link
              href={community.link}
              key={key}
              isExternal
              className="min-w-[300px] lg:max-w-[300px] sm:flex-1 border-outline-100 rounded-xl overflow-hidden border hover:bg-background-50"
            >
              <VStack space="sm" className="p-6">
                <HStack className="items-center text-black  dark:text-white">
                  {community.icon}
                  <Text className="text-xl font-medium leading-xl ml-3">
                    {community.name}
                  </Text>
                </HStack>
                <Text className="text-typography-600  dark:text-typography-400 flex-wrap leading-md">
                  {community.description}
                </Text>
              </VStack>
            </Link>
          );
        })}
      </HStack>
    </Box>
  );
};

export default Community;
