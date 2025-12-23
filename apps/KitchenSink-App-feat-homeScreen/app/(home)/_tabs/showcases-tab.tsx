import React from 'react';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Cast } from 'lucide-react-native';
import { ScrollView } from '@/components/ui/scroll-view';
import { VStack } from '@/components/ui/vstack';
import { Bookmark } from 'lucide-react-native';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { SearchIcon } from '@/components/ui/icon';
import { Animated, Dimensions } from 'react-native';
import { createIcon } from '@/components/ui/icon';
import { Path, Rect } from 'react-native-svg';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { FlatList } from '@/components/ui/flat-list';
import { LinearGradient } from 'expo-linear-gradient';
import { Box } from '@/components/ui/box';
import { Button, ButtonText,ButtonIcon } from '@/components/ui/button';
import { memo, useState, useRef, useEffect, useCallback } from 'react';
import { Pressable } from '@/components/ui/pressable';
import { useRouter } from 'expo-router';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';

export const CategoryList = [
  {
    id: 1,
    poster_path: require('@/assets/images/common/category1.png'),
    category: 'Animated Movies',
  },
  {
    id: 2,
    poster_path: require('@/assets/images/common/category2.png'),
    category: 'Mythodology',
  },
  {
    id: 3,
    poster_path: require('@/assets/images/common/category3.png'),
    category: 'Marvel Movies',
  },
  {
    id: 4,
    poster_path: require('@/assets/images/common/category4.png'),
    category: 'Crime Thriller',
  },
  {
    id: 5,
    poster_path: require('@/assets/images/common/category5.png'),
    category: 'Sci-Fi',
  },
  {
    id: 6,
    poster_path: require('@/assets/images/common/category6.png'),
    category: 'Action',
  },
  {
    id: 7,
    poster_path: require('@/assets/images/common/category7.png'),
    category: 'Comedy',
  },
  {
    id: 8,
    poster_path: require('@/assets/images/common/category8.png'),
    category: 'Coming of Age',
  },
  {
    id: 9,
    poster_path: require('@/assets/images/common/category9.png'),
    category: 'Horror',
  },
  {
    id: 10,
    poster_path: require('@/assets/images/common/category10.png'),
    category: 'Psychological',
  },
  {
    id: 11,
    poster_path: require('@/assets/images/common/category11.png'),
    category: 'Musicals',
  },
  {
    id: 12,
    poster_path: require('@/assets/images/common/category12.png'),
    category: 'Anime',
  },
];

export const trendingClips = [
  {
    id: 1,
    title: 'Clip 1',
    poster: require('@/assets/images/screens/clips/clip11.jpeg'),
  },
  {
    id: 2,
    title: 'Clip 2',
    poster: require('@/assets/images/screens/clips/clip10.jpeg'),
  },
  {
    id: 3,
    title: 'Clip 3',
    poster: require('@/assets/images/screens/clips/clip9.jpeg'),
  },
];

export const movieReviewClips = [
  {
    id: 1,
    title: 'Clip 1',
    poster: require('@/assets/images/screens/clips/clip8.jpeg'),
  },
  {
    id: 2,
    title: 'Clip 2',
    poster: require('@/assets/images/screens/clips/clip7.jpeg'),
  },
  {
    id: 3,
    title: 'Clip 3',
    poster: require('@/assets/images/screens/clips/clip6.jpeg'),
  },
];

export const youMightLikeClips = [
  {
    id: 1,
    title: 'Clip 1',
    poster: require('@/assets/images/screens/clips/clip5.jpeg'),
  },
  {
    id: 2,
    title: 'Clip 2',
    poster: require('@/assets/images/screens/clips/clip4.jpeg'),
  },
  {
    id: 3,
    title: 'Clip 3',
    poster: require('@/assets/images/screens/clips/clip3.jpeg'),
  },
];

export const popularInIndiaClips = [
  {
    id: 1,
    title: 'Clip 1',
    poster: require('@/assets/images/screens/clips/clip2.jpeg'),
  },
  {
    id: 2,
    title: 'Clip 3',
    poster: require('@/assets/images/screens/clips/clip1.jpeg'),
  },
  {
    id: 3,
    title: 'Clip 3',
    poster: require('@/assets/images/screens/clips/clip10.jpeg'),
  },
];

export const oscarWinningClips = [
  {
    id: 1,
    title: 'Clip 1',
    poster: require('@/assets/images/screens/clips/clip6.jpeg'),
  },
  {
    id: 2,
    title: 'Clip 2',
    poster: require('@/assets/images/screens/clips/clip5.jpeg'),
  },
  {
    id: 3,
    title: 'Clip 3',
    poster: require('@/assets/images/screens/clips/clip9.jpeg'),
  },
];

export const categories = [
  {
    id: 1,
    title: 'Action',
  },
  {
    id: 2,
    title: 'Crime',
  },
  {
    id: 3,
    title: 'For Kids',
  },
  {
    id: 4,
    title: 'Anime',
  },
  {
    id: 5,
    title: 'Drama',
  },
  {
    id: 6,
    title: 'Thriller',
  },
];

export const comedy = [
  {
    id: 1,
    title: 'category1',
    poster: require('@/assets/images/common/category1.png'),
    tags: ['Slick', 'Witty', 'Drama', 'Comedy'],
  },
  {
    id: 2,
    title: 'category2',
    poster: require('@/assets/images/common/category2.png'),
    tags: ['Action', 'Adventure', 'Drama', 'Comedy'],
  },
  {
    id: 3,
    title: 'category3',
    poster: require('@/assets/images/common/category3.png'),
    tags: ['Action', 'Psychological', 'Drama', 'Comedy'],
  },
  {
    id: 4,
    title: 'category4',
    poster: require('@/assets/images/common/category4.png'),
    tags: ['Action', 'Adventure', 'Drama', 'Comedy'],
  },
];

export const familiar = [
  {
    id: 1,
    title: 'category1',
    poster: require('@/assets/images/common/category1.png'),
  },
  {
    id: 2,
    title: 'category2',
    poster: require('@/assets/images/common/category2.png'),
  },
  {
    id: 3,
    title: 'category3',
    poster: require('@/assets/images/common/category3.png'),
  },
];

export const keepWatching = [
  {
    id: 1,
    title: 'category1',
    poster: require('@/assets/images/common/category10.png'),
    tags: ['Slick', 'Witty', 'Drama', 'Comedy'],
  },
  {
    id: 2,
    title: 'category2',
    poster: require('@/assets/images/common/category2.png'),
    tags: ['Action', 'Adventure', 'Drama', 'Comedy'],
  },
  {
    id: 3,
    title: 'category3',
    poster: require('@/assets/images/common/category3.png'),
    tags: ['Action', 'Psychological', 'Drama', 'Comedy'],
  },
  {
    id: 4,
    title: 'category4',
    poster: require('@/assets/images/common/category4.png'),
    tags: ['Action', 'Adventure', 'Drama', 'Comedy'],
  },
  {
    id: 5,
    title: 'category5',
    poster: require('@/assets/images/common/category5.png'),
    tags: ['Action', 'Adventure', 'Drama', 'Comedy'],
  },
  {
    id: 6,
    title: 'category6',
    poster: require('@/assets/images/common/category6.png'),
    tags: ['Action', 'Adventure', 'Drama', 'Comedy'],
  },
  {
    id: 7,
    title: 'category7',
    poster: require('@/assets/images/common/category7.png'),
    tags: ['Action', 'Adventure', 'Drama', 'Comedy'],
  },
  {
    id: 8,
    title: 'category8',
    poster: require('@/assets/images/common/category8.png'),
    tags: ['Action', 'Adventure', 'Drama', 'Comedy'],
  },
  {
    id: 9,
    title: 'category9',
    poster: require('@/assets/images/common/category9.png'),
    tags: ['Action', 'Adventure', 'Drama', 'Comedy'],
  },
  {
    id: 10,
    title: 'category10',
    poster: require('@/assets/images/common/category1.png'),
    tags: ['Action', 'Adventure', 'Drama', 'Comedy'],
  },
];

export const recommended = [
  {
    id: 1,
    title: 'category1',
    poster: require('@/assets/images/common/category3.png'),
  },
  {
    id: 2,
    title: 'category2',
    poster: require('@/assets/images/common/category4.png'),
  },
  {
    id: 3,
    title: 'category3',
    poster: require('@/assets/images/common/category5.png'),
  },
  {
    id: 4,
    title: 'category4',
    poster: require('@/assets/images/common/category6.png'),
  },
];

export const top10 = [
  {
    id: 1,
    title: 'category1',
    poster: require('@/assets/images/common/category7.png'),
    release: 'New',
  },
  {
    id: 2,
    title: 'category2',
    poster: require('@/assets/images/common/category8.png'),
    release: 'New',
  },
  {
    id: 3,
    title: 'category3',
    poster: require('@/assets/images/common/category9.png'),
    release: 'New Season',
  },
  {
    id: 4,
    title: 'category4',
    poster: require('@/assets/images/common/category10.png'),
  },
  {
    id: 5,
    title: 'category5',
    poster: require('@/assets/images/common/category1.png'),
  },
  {
    id: 6,
    title: 'category6',
    poster: require('@/assets/images/common/category2.png'),
  },
  {
    id: 7,
    title: 'category7',
    poster: require('@/assets/images/common/category3.png'),
    release: 'New',
  },
  {
    id: 8,
    title: 'category8',
    poster: require('@/assets/images/common/category4.png'),
  },
  {
    id: 9,
    title: 'category9',
    poster: require('@/assets/images/common/category5.png'),
    release: 'New Season',
  },
  {
    id: 10,
    title: 'category10',
    poster: require('@/assets/images/common/category6.png'),
  },
];

export const savedInYourList = [
  {
    id: 1,
    title: 'category1',
    poster: require('@/assets/images/common/category3.png'),
  },
  {
    id: 2,
    title: 'category2',
    poster: require('@/assets/images/common/category4.png'),
  },
  {
    id: 3,
    title: 'category3',
    poster: require('@/assets/images/common/category5.png'),
  },
  {
    id: 4,
    title: 'category4',
    poster: require('@/assets/images/common/category6.png'),
  },
];
export const moviesYouLiked = [
  {
    id: 1,
    title: 'category1',
    poster: require('@/assets/images/common/category11.png'),
  },
  {
    id: 2,
    title: 'category2',
    poster: require('@/assets/images/common/category9.png'),
  },
  {
    id: 3,
    title: 'category3',
    poster: require('@/assets/images/common/category7.png'),
  },
  {
    id: 4,
    title: 'category4',
    poster: require('@/assets/images/common/category8.png'),
  },
];

export const continueWatching = [
  {
    id: 1,
    title: 'category1',
    poster: require('@/assets/images/common/category10.png'),
  },
  {
    id: 2,
    title: 'category2',
    poster: require('@/assets/images/common/category9.png'),
  },
  {
    id: 3,
    title: 'category3',
    poster: require('@/assets/images/common/category5.png'),
  },
];

export const movies = [
  {
    id: 1,
    title: 'Pilot',
    description:
      'Using a crack team of doctors and his wits, an antisocial maverick doctor solves cases.',
    image: require('@/assets/images/screens/player/episode1.jpeg'),
    duration: '1h 23m',
  },
  {
    id: 2,
    title: 'Second Episode',
    description:
      'Using a crack team of doctors and his wits, an antisocial maverick doctor solves cases.',
    image: require('@/assets/images/screens/player/episode2.jpeg'),
    duration: '1h 23m',
  },
  {
    id: 3,
    title: 'Third Episode',
    description:
      'Using a crack team of doctors and his wits, an antisocial maverick doctor solves cases.',
    image: require('@/assets/images/screens/player/episode3.jpeg'),
    duration: '1h 23m',
  },
  {
    id: 4,
    title: 'Fourth Episode',
    description:
      'Using a crack team of doctors and his wits, an antisocial maverick doctor solves cases.',
    image: require('@/assets/images/screens/player/episode4.jpeg'),
    duration: '1h 23m',
  },
  {
    id: 5,
    title: 'Fifth Episode',
    description:
      'Using a crack team of doctors and his wits, an antisocial maverick doctor solves cases.',
    image: require('@/assets/images/screens/player/episode5.jpeg'),
    duration: '1h 23m',
  },
];

export const shows = [
  {
    id: 1,
    title: 'Show 1',
    poster: require('@/assets/images/common/category1.png'),
    release: 'New',
  },
  {
    id: 2,
    title: 'Show 2',
    poster: require('@/assets/images/common/category2.png'),
  },
  {
    id: 3,
    title: 'Show 3',
    poster: require('@/assets/images/common/category3.png'),
    release: 'New Season',
  },
  {
    id: 4,
    title: 'Show 4',
    poster: require('@/assets/images/common/category4.png'),
  },
  {
    id: 5,
    title: 'Show 5',
    poster: require('@/assets/images/common/category5.png'),
  },
  {
    id: 6,
    title: 'Show 6',
    poster: require('@/assets/images/common/category6.png'),
  },
  {
    id: 7,
    title: 'Show 7',
    poster: require('@/assets/images/common/category7.png'),
  },
  {
    id: 8,
    title: 'Show 8',
    poster: require('@/assets/images/common/category8.png'),
    release: 'New',
  },
  {
    id: 9,
    title: 'Show 9',
    poster: require('@/assets/images/common/category9.png'),
  },
];

const Home = () => {
  return (
    <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
      <VStack className="gap-6">
        <HStack className="gap-3 mx-5 mt-12 justify-between items-center">
          <SearchBar placeholder="What do you want to watch today?" />
          <Icon as={Cast} size="xl" className="text-background-850" />
        </HStack>
        <CustomCarousel data={keepWatching} autoplayInterval={3000} />
        <CardsList
          movies={keepWatching.map((movie) => movie)}
          title="Keep watching"
        />
        <CardsList
          movies={recommended.map((movie) => movie)}
          title="Recommended for you"
        />
        <CardsList movies={top10.map((movie) => movie)} title="Top 10 Movies" />
        <CardsList
          movies={recommended.map((movie) => movie)}
          title="Endless Binge"
        />
        <CardsList
          movies={keepWatching.map((movie) => movie)}
          title="Best of World Cinema"
        />
      </VStack>
    </ScrollView>
  );
};

export default Home;



const SearchBar = ({ placeholder }: { placeholder: string }) => {
  return (
    <Input
      className="rounded-lg bg-background-100 data-[focus=true]:border-0 border-0 flex-1 text-typography-400"

    >
      <InputField
        placeholder={placeholder}
        className="text-typography-800 font-normal font-roboto text-lg"
      />
      <InputSlot className="p-3">
        <InputIcon as={SearchIcon} className="text-background-800" />
      </InputSlot>
    </Input>
  );
};



const CardsList = ({ movies, title }: { movies: any[]; title: string }) => {
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

export const HomeIcon = createIcon({
  viewBox: '0 0 28 28',
  path: (
    <>
      <Path
        fill="#52629E"
        d="M12.308 2.954a2.625 2.625 0 0 1 3.384 0l7.875 6.64c.592.5.933 1.234.933 2.008v10.861a2.042 2.042 0 0 1-2.042 2.042h-4.083a2.042 2.042 0 0 1-2.042-2.042v-5.842a.292.292 0 0 0-.291-.291h-4.084a.292.292 0 0 0-.291.291v5.842a2.042 2.042 0 0 1-2.042 2.042H5.542A2.042 2.042 0 0 1 3.5 22.463V11.601c0-.773.341-1.508.933-2.006l7.875-6.641Zm2.256 1.338a.875.875 0 0 0-1.128 0l-7.875 6.64a.875.875 0 0 0-.311.67v10.861c0 .161.13.292.292.292h4.083c.161 0 .292-.13.292-.292v-5.842c0-1.127.914-2.041 2.041-2.041h4.084c1.127 0 2.041.914 2.041 2.041v5.842c0 .161.13.292.292.292h4.083c.161 0 .292-.13.292-.292V11.601a.875.875 0 0 0-.31-.668l-7.876-6.641Z"
      />
    </>
  ),
});
const PlayIcon = createIcon({
  viewBox: '0 0 26 27',
  path: (
    <>
      <Rect
        width={25}
        height={25}
        x={0.5}
        y={1.069}
        fill="#000"
        fillOpacity={0.5}
        rx={12.5}
      />
      <Rect
        width={25}
        height={25}
        x={0.5}
        y={1.069}
        stroke="#F3F3F3"
        rx={12.5}
      />
      <Path
        fill="#EBEFFF"
        d="m10.286 7.682 9.182 4.777a1.222 1.222 0 0 1 0 2.169l-9.182 4.777A1.222 1.222 0 0 1 8.5 18.322V8.766a1.222 1.222 0 0 1 1.71-1.12l.076.036Z"
      />
    </>
  ),
});

export const ProfileIcon = createIcon({
  viewBox: '0 0 28 28',
  path: (
    <>
      <Path
        fill="#52629E"
        d="M20.713 16.333a2.624 2.624 0 0 1 2.624 2.624v.671a4.375 4.375 0 0 1-1.051 2.845c-1.831 2.14-4.616 3.195-8.286 3.195s-6.454-1.056-8.281-3.196a4.375 4.375 0 0 1-1.048-2.841v-.674a2.624 2.624 0 0 1 2.624-2.624h13.418Zm0 1.75H7.295a.874.874 0 0 0-.874.874v.674c0 .625.223 1.23.629 1.705 1.462 1.712 3.755 2.582 6.95 2.582 3.195 0 5.49-.87 6.956-2.583.407-.475.631-1.08.631-1.707v-.67a.874.874 0 0 0-.874-.875ZM14 2.34a5.833 5.833 0 1 1 0 11.667 5.833 5.833 0 0 1 0-11.667Zm0 1.75a4.083 4.083 0 1 0 0 8.167 4.083 4.083 0 0 0 0-8.167Z"
      />
    </>
  ),
});

export const ExploreIcon = createIcon({
  viewBox: '0 0 28 28',
  path: (
    <>
      <Path
        fill="#52629E"
        d="m23.017 4.57.06.186L23.718 7a.875.875 0 0 1-.488 1.042l-.111.04-12.515 3.588 13.019.001c.443 0 .809.33.867.756l.008.12v9.913a3.209 3.209 0 0 1-3.013 3.203l-.196.006H6.708a3.208 3.208 0 0 1-3.202-3.013l-.006-.196v-9.79l-.609-2.125a3.208 3.208 0 0 1 2.014-3.909l.186-.06 14.017-4.018a3.209 3.209 0 0 1 3.909 2.013Zm-.27 8.849H5.25v9.04c0 .705.5 1.293 1.164 1.43l.145.021.15.008H21.29c.756 0 1.377-.574 1.451-1.31l.008-.149-.001-9.04ZM7.319 7.758l-1.745.5A1.459 1.459 0 0 0 4.54 9.916l.034.146.402 1.4.344-.098 2-3.606Zm5.55-1.591-3.171.909-2 3.606 3.171-.91 2-3.605Zm5.55-1.592-3.171.91-1.999 3.605 3.17-.908 2-3.607Zm2.155-.272-1.775 3.196 2.997-.86-.4-1.4a1.455 1.455 0 0 0-.822-.936Z"
      />
    </>
  ),
});

export const ClipIcon = createIcon({
  viewBox: '0 0 28 28',
  path: (
    <>
      <Path
        fill="#52629E"
        d="M8.877 5.384a.875.875 0 0 0-1.294.769v15.694a.875.875 0 0 0 1.294.769l14.421-7.847a.875.875 0 0 0 0-1.537L8.877 5.384Zm-3.044.769c0-1.991 2.13-3.258 3.88-2.306l14.422 7.847c1.827.994 1.827 3.618 0 4.612L9.713 24.153c-1.75.952-3.88-.314-3.88-2.306V6.153Z"
      />
    </>
  ),
});

export const LikeIcon = createIcon({
  viewBox: '0 0 28 28',
  path: (
    <>
      <Path
        fill="#DBDBDC"
        d="M19.25 6.07c0-2.85-1.33-4.899-3.508-4.899-1.197 0-1.608.702-2.037 2.333-.088.337-.13.501-.176.663-.118.418-.323 1.131-.615 2.136a.29.29 0 0 1-.034.076l-3.345 5.233a6.866 6.866 0 0 1-3.33 2.714l-.552.212a3.208 3.208 0 0 0-2.003 3.607l.472 2.434a3.792 3.792 0 0 0 2.82 2.96l8.899 2.182a5.542 5.542 0 0 0 6.689-4.014l1.65-6.474a3.792 3.792 0 0 0-3.674-4.728H18.38c.579-1.905.87-3.375.87-4.435ZM5.368 17.812a1.458 1.458 0 0 1 .91-1.64l.553-.211a8.615 8.615 0 0 0 4.178-3.407l3.345-5.233a2.04 2.04 0 0 0 .24-.53c.294-1.01.5-1.726.62-2.15.05-.179.097-.36.183-.692.222-.842.33-1.028.345-1.028 1.012 0 1.758 1.148 1.758 3.149 0 1.032-.38 2.724-1.148 5.034a.875.875 0 0 0 .83 1.151h3.324a2.042 2.042 0 0 1 1.978 2.546l-1.65 6.474a3.792 3.792 0 0 1-4.577 2.746L7.358 21.84a2.042 2.042 0 0 1-1.518-1.595l-.472-2.433Z"
      />
    </>
  ),
});

export const ShareIcon = createIcon({
  viewBox: '0 0 28 28',
  path: (
    <>
      <Path
        fill="#DBDBDC"
        d="M6.643 14 2.683 3.817c-.276-.708.415-1.386 1.099-1.145l.107.045 21 10.5a.875.875 0 0 1 .114 1.498l-.114.068-21 10.5c-.68.34-1.419-.286-1.242-.989l.036-.111L6.643 14 2.683 3.817 6.643 14ZM5.136 5.297l3.044 7.827 7.732.001c.443 0 .809.33.867.756l.008.12c0 .442-.33.808-.756.866l-.12.008H8.18l-3.044 7.828L22.54 14 5.136 5.297Z"
      />
    </>
  ),
});

export const WifiIcon = createIcon({
  viewBox: '0 0 24 25',
  path: (
    <>
      <Path
        fill="#C2CBEC"
        d="M19.971 9.78c.478.478.929 1.024 1.322 1.594a.583.583 0 0 1-.96.662 10.393 10.393 0 0 0-1.187-1.43c-3.924-3.924-10.285-3.924-14.209 0-.406.406-.808.897-1.174 1.426a.583.583 0 0 1-.959-.665A11.67 11.67 0 0 1 4.113 9.78c4.379-4.38 11.479-4.38 15.858 0Zm-2.608 2.303a7.742 7.742 0 0 1 1.392 1.932.583.583 0 1 1-1.038.531 6.58 6.58 0 0 0-1.18-1.638A6.358 6.358 0 0 0 6.37 14.529a.583.583 0 0 1-1.041-.526 7.525 7.525 0 0 1 12.034-1.92Zm-1.994 2.913c.413.414.754.922.99 1.463a.583.583 0 0 1-1.068.468 3.66 3.66 0 0 0-.747-1.106 3.538 3.538 0 0 0-5.004 0 3.56 3.56 0 0 0-.737 1.094.583.583 0 1 1-1.069-.468 4.723 4.723 0 0 1 .98-1.45 4.705 4.705 0 0 1 6.655 0Zm-2.246 2.255a1.515 1.515 0 1 1-2.142 2.142 1.515 1.515 0 0 1 2.142-2.142Z"
      />
    </>
  ),
});




const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH * 0.7;
const SPACING = 0;
const SIDE_SPACING = (SCREEN_WIDTH - ITEM_WIDTH) / 2;

// Create animated FlatList
const AnimatedFlatList = Animated.createAnimatedComponent(Animated.FlatList);

interface CarouselItem {
  id: number;
  title: string;
  poster: any;
  tags: string[];
}

interface CustomCarouselProps {
  data: CarouselItem[];
  autoplayInterval?: number;
}

// Create a memoized CarouselItem component
const CarouselItemComponent = memo(
  ({
    item,
    index,
    scrollX,
    ITEM_WIDTH,
    SPACING,
  }: {
    item: CarouselItem;
    index: number;
    scrollX: Animated.Value;
    ITEM_WIDTH: number;
    SPACING: number;
  }) => {
    const inputRange = [
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={{
          transform: [{ scale }],
          opacity,
          width: ITEM_WIDTH,
          marginHorizontal: SPACING / 2,
        }}
      >
        <Card className="p-0">
          <Image
            source={item.poster}
            alt={item.title}
            className="w-full h-[46vh] rounded-xl"
          />
          <LinearGradient
            colors={[
              'rgba(0, 6, 15, 1)',
              'rgba(0, 6, 15, 0.56)',
              'rgba(0, 6, 15, 0)',
            ]}
            start={{ x: 0, y: 0.95 }}
            end={{ x: 0, y: 0.6 }}
            className="absolute z-0 h-[100%] bottom-0 w-full"
          />
          <Box className="absolute z-10 bottom-0 w-full gap-3 py-5">
            <HStack className="gap-2 justify-center items-center">
              {item.tags.map((tag, index) => (
                <Text
                  key={index}
                  className="text-md text-typography-600 font-proximaNova"
                >
                  • {tag}
                </Text>
              ))}
            </HStack>
            <HStack className="justify-center items-center gap-2">
              <Button className="" size="sm">
                <ButtonIcon
                  as={PlayIcon}
                  className="text-typography-800 fill-white"
                />
                <ButtonText className="text-typography-800 text-sm font-satoshi font-bold">
                  Play
                </ButtonText>
              </Button>
              <Button className="" size="sm">
                <ButtonIcon
                  as={Bookmark}
                  className="text-typography-800 fill-white"
                />
                <ButtonText className="text-typography-800 text-sm font-satoshi font-bold">
                  My List
                </ButtonText>
              </Button>
            </HStack>
          </Box>
        </Card>
      </Animated.View>
    );
  }
);

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  data,
  autoplayInterval = 3000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<any>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timerId = setInterval(() => {
      if (activeIndex === data.length - 1) {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, autoplayInterval);

    return () => clearInterval(timerId);
  }, [activeIndex, data.length, autoplayInterval]);

  const getCircularIndex = (index: number) => {
    const length = data.length;
    return ((index % length) + length) % length;
  };

  // Memoize the renderItem function
  const renderItem = useCallback(
    ({ item, index }: { item: CarouselItem; index: number }) => {
      return (
        <CarouselItemComponent
          item={item}
          index={index}
          scrollX={scrollX}
          ITEM_WIDTH={ITEM_WIDTH}
          SPACING={SPACING}
        />
      );
    },
    [scrollX]
  );

  const renderDots = () => {
    return (
      <HStack className="justify-center items-center mt-4 gap-2">
        {data.map((_, index) => {
          const backgroundColor = index === activeIndex ? '#FF3850' : '#52629E';

          return (
            <Animated.View
              key={index}
              className="h-1.5 w-3 rounded-md bg-secondary-500"
              style={{
                backgroundColor,
              }}
            />
          );
        })}
      </HStack>
    );
  };
  return (
    <>
      <AnimatedFlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem as any}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + SPACING}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: SIDE_SPACING,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / (ITEM_WIDTH + SPACING)
          );
          setActiveIndex(getCircularIndex(newIndex));
        }}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH + SPACING,
          offset: (ITEM_WIDTH + SPACING) * index,
          index,
        })}
        initialScrollIndex={1}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        windowSize={3}
      />
      {renderDots()}
    </>
  );
};

