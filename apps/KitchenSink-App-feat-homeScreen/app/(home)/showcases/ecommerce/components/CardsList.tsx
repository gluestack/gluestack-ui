import React from 'react';
import { useRouter } from 'expo-router';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { FlatList } from '@/components/ui/flat-list';
import { LinearGradient } from 'expo-linear-gradient';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Pressable } from '@/components/ui/pressable';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Icon } from '@/components/ui/icon';
import { PlayIcon } from '../icons';

interface Movie {
  id: number;
  title: string;
  poster: any;
  release?: string;
  tags?: string[];
}

interface CardsListProps {
  movies: Movie[];
  title: string;
}

export const CardsList = ({ movies, title }: CardsListProps) => {
  const router = useRouter();
  return (
    <VStack className="gap-2">
      <HStack className="justify-between items-center px-5">
        <Text className="text-typography-700 font-satoshi text-lg font-bold">
          {title}
        </Text>
        <Button variant="link" className="">
          <ButtonText>View All</ButtonText>
        </Button>
      </HStack>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        contentContainerClassName="gap-3 pl-5"
        data={movies}
        renderItem={({ item, index }) => (
          <>
            <Card
              key={index}
              className={`p-0 flex-row justify-center items-center w-[34vw] h-[20vh]  ${
                title === 'Continue Watching' || title === 'Keep watching'
                  ? 'w-[53vw] h-[16vh]'
                  : ''
              }`}
            >
              {title === 'Top 10 Movies' && (
                <Text className="text-secondary-600 font-spartanBold text-7xl absolute left-0 tracking-[-10] leading-[84px]">
                  {item.id}
                </Text>
              )}
              <Pressable
                onPress={() => {
                  router.push('/player');
                }}
              >
                <Box>
                  {title === 'Top 10 Movies' && (
                    <LinearGradient
                      colors={[
                        'rgba(0, 6, 15, 1)',
                        'rgba(0, 6, 15, 0.64)',
                        'rgba(0, 6, 15, 0.08)',
                      ]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0.4, y: 0 }}
                      className="absolute z-10 h-full w-full"
                    />
                  )}
                  <Box
                    className={`w-[34vw] h-[20vh] items-center justify-end rounded-xl ${
                      title === 'Top 10 Movies' ? 'w-[19vw]' : ''
                    } ${
                      title === 'Continue Watching' || title === 'Keep watching'
                        ? 'h-[16vh] w-[53vw]'
                        : ''
                    }`}
                  >
                    {(title === 'Continue Watching' ||
                      title === 'Keep watching') && (
                      <VStack className="z-10 items-center justify-center flex-1 bg-background-0/30 w-full rounded-xl overflow-hidden">
                        <Icon as={PlayIcon} className="h-10 w-10" />
                        <Text className="absolute bottom-6 text-typography-600 font-proximaNova text-sm">
                          1h 55m
                        </Text>
                        <Progress
                          value={50}
                          className="w-full bg-background-0/25 absolute bottom-0"
                          size="xs"
                        >
                          <ProgressFilledTrack className="bg-secondary-500" />
                        </Progress>
                      </VStack>
                    )}
                    <Image
                      source={item.poster}
                      alt={`image-${index}`}
                      className={`w-full h-full absolute top-0 left-0 rounded-xl `}
                    />
                    {item.release && (
                      <Text className="text-typography-600 font-satoshi font-medium text-sm bg-secondary-500 rounded-t-[4px] z-10 py-0.5 px-2">
                        {item.release}
                      </Text>
                    )}
                  </Box>
                </Box>
              </Pressable>
            </Card>
          </>
        )}
      />
    </VStack>
  );
};

