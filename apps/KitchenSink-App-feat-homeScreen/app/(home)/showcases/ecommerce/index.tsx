import React from 'react';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Cast } from 'lucide-react-native';
import { ScrollView } from '@/components/ui/scroll-view';
import { VStack } from '@/components/ui/vstack';
import { SearchBar } from './components/SearchBar';
import { CustomCarousel } from './components/CustomCarousel';
import { CardsList } from './components/CardsList';
import { Box } from '@/components/ui/box';
import { keepWatching, recommended, top10 } from './data/movies';

const Home = () => {
  return (
    <Box className="flex-1 bg-background">
    <ScrollView className="flex-1 bg-background" showsVerticalScrollIndicator={false}>
      <VStack className="gap-6">
        <HStack className="gap-3 mx-5 mt-12 justify-between items-center">
          <SearchBar placeholder="What do you want to watch today?" />
          <Icon as={Cast} size="xl" className="text-foreground" />
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
    </Box>
  );
};

export default Home;
