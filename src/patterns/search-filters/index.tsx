import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ArrowUpDown, Clock, Search, SlidersHorizontal, Star, X } from 'lucide-react-native';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type Result = {
  id: string;
  name: string;
  maker: string;
  price: number;
  rating: number;
  reviews: number;
  tags: string[];
  image: string;
};

const RESULTS: Result[] = [
  { id: '1', name: 'Stride Knit Runner', maker: 'Northfield Athletics', price: 89, rating: 4.8, reviews: 1204, tags: ['Running', 'Under $100'], image: 'photo-1491553895911-0055eca6402d' },
  { id: '2', name: 'Coral Air Trainer', maker: 'Pace & Co.', price: 124, rating: 4.6, reviews: 842, tags: ['Running'], image: 'photo-1600185365483-26d7a4cc7519' },
  { id: '3', name: 'Crimson Court Low', maker: 'Pace & Co.', price: 95, rating: 4.5, reviews: 516, tags: ['Casual', 'Under $100'], image: 'photo-1491553895911-0055eca6402d' },
  { id: '4', name: 'Sage Suede Derby', maker: 'Oak & Ember', price: 148, rating: 4.9, reviews: 203, tags: ['Casual'], image: 'photo-1560343090-f0409e92791a' },
];

const FILTERS = ['All', 'Running', 'Casual', 'Under $100'] as const;
type Filter = (typeof FILTERS)[number];

function ResultRow({ item }: { item: Result }) {
  return (
    <Pressable className="flex-row items-center gap-4 rounded-2xl border border-border bg-card p-3 data-[active=true]:bg-muted">
      <Image
        size="none"
        className="h-20 w-20 rounded-xl bg-muted"
        source={{ uri: `https://images.unsplash.com/${item.image}?w=300&q=80` }}
        alt={item.name}
      />
      <VStack className="flex-1 gap-1">
        <Text className="text-base font-semibold text-foreground" numberOfLines={1}>
          {item.name}
        </Text>
        <Text className="text-sm text-muted-foreground">{item.maker}</Text>
        <HStack className="items-center justify-between">
          <HStack className="items-center gap-1">
            <Icon as={Star} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <Text className="text-xs font-medium text-foreground">{item.rating}</Text>
            <Text className="text-xs text-muted-foreground">({item.reviews.toLocaleString()})</Text>
          </HStack>
          <Text className="text-base font-bold text-foreground">${item.price}</Text>
        </HStack>
      </VStack>
    </Pressable>
  );
}

export default function SearchFiltersScreen() {
  const [query, setQuery] = useState('sneakers');
  const [recent, setRecent] = useState(['white sneakers', 'trail runners', 'leather boots']);
  const [filter, setFilter] = useState<Filter>('All');

  const results = RESULTS.filter((r) => filter === 'All' || r.tags.includes(filter));

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-5 px-5 pb-12 pt-6">
      <HStack className="items-center gap-3">
        <Input className="h-12 flex-1 rounded-xl bg-muted">
          <InputSlot className="pl-1">
            <InputIcon as={Search} className="h-5 w-5 text-muted-foreground" />
          </InputSlot>
          <InputField
            placeholder="Search products"
            value={query}
            onChangeText={setQuery}
            returnKeyType="search"
            className="text-base"
          />
          {query ? (
            <InputSlot className="pr-1" onPress={() => setQuery('')}>
              <View className="h-5 w-5 items-center justify-center rounded-full bg-muted-foreground/30">
                <InputIcon as={X} className="h-3 w-3 text-foreground" />
              </View>
            </InputSlot>
          ) : null}
        </Input>
        <Pressable
          aria-label="Filters"
          className="h-12 w-12 items-center justify-center rounded-xl bg-primary"
        >
          <Icon as={SlidersHorizontal} className="h-5 w-5 text-primary-foreground" />
        </Pressable>
      </HStack>

      {recent.length > 0 ? (
        <VStack className="gap-3">
          <HStack className="items-center justify-between">
            <Text className="text-sm font-semibold text-foreground">Recent searches</Text>
            <Pressable onPress={() => setRecent([])}>
              <Text className="text-sm text-muted-foreground">Clear</Text>
            </Pressable>
          </HStack>
          <View className="flex-row flex-wrap gap-2">
            {recent.map((term) => (
              <HStack
                key={term}
                className="items-center gap-2 rounded-full bg-muted py-1.5 pl-3 pr-2"
              >
                <Icon as={Clock} className="h-3.5 w-3.5 text-muted-foreground" />
                <Pressable onPress={() => setQuery(term)}>
                  <Text className="text-sm text-foreground">{term}</Text>
                </Pressable>
                <Pressable
                  aria-label={`Remove ${term}`}
                  onPress={() => setRecent((prev) => prev.filter((t) => t !== term))}
                  className="h-5 w-5 items-center justify-center rounded-full"
                >
                  <Icon as={X} className="h-3.5 w-3.5 text-muted-foreground" />
                </Pressable>
              </HStack>
            ))}
          </View>
        </VStack>
      ) : null}

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <Pressable
              key={f}
              onPress={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 ${
                active ? 'border-foreground bg-foreground' : 'border-border bg-card'
              }`}
            >
              <Text className={`text-sm font-medium ${active ? 'text-background' : 'text-foreground'}`}>
                {f}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <HStack className="items-center justify-between">
        <Text className="text-sm text-muted-foreground">
          <Text className="text-sm font-semibold text-foreground">{results.length} results</Text>
          {` for “${query || 'everything'}”`}
        </Text>
        <Pressable className="flex-row items-center gap-1">
          <Icon as={ArrowUpDown} className="h-3.5 w-3.5 text-foreground" />
          <Text className="text-sm font-medium text-foreground">Top rated</Text>
        </Pressable>
      </HStack>

      <VStack className="gap-3">
        {results.map((item) => (
          <ResultRow key={item.id} item={item} />
        ))}
      </VStack>
    </ScrollView>
  );
}
