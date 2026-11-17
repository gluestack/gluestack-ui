import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Bell, Heart, Search, SlidersHorizontal, Star } from 'lucide-react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type Category = 'All' | 'Shoes' | 'Apparel' | 'Bags' | 'Accessories';

type Product = {
  id: string;
  name: string;
  category: Exclude<Category, 'All'>;
  price: number;
  rating: number;
  reviews: number;
  image: string;
};

const CATEGORIES: Category[] = ['All', 'Shoes', 'Apparel', 'Bags', 'Accessories'];

const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=400&q=80`;

const PRODUCTS: Product[] = [
  { id: '1', name: 'Aero Knit Runner', category: 'Shoes', price: 129, rating: 4.8, reviews: 412, image: img('1491553895911-0055eca6402d') },
  { id: '2', name: 'Studio Headphones', category: 'Accessories', price: 189, rating: 4.7, reviews: 238, image: img('1505740420928-5e560c06d30e') },
  { id: '3', name: 'Moto Leather Jacket', category: 'Apparel', price: 349, rating: 4.9, reviews: 96, image: img('1551028719-00167b16eac5') },
  { id: '4', name: 'Canvas Day Pack', category: 'Bags', price: 89, rating: 4.6, reviews: 531, image: img('1553062407-98eeb64c6a62') },
  { id: '5', name: 'Field Chronograph', category: 'Accessories', price: 245, rating: 4.8, reviews: 174, image: img('1523275335684-37898b6baf30') },
  { id: '6', name: 'Sage Suede Derby', category: 'Shoes', price: 159, rating: 4.5, reviews: 88, image: img('1560343090-f0409e92791a') },
  { id: '7', name: 'Heavyweight Hoodie', category: 'Apparel', price: 72, rating: 4.7, reviews: 642, image: img('1556821840-3a63f95609a7') },
  { id: '8', name: 'Wayfarer Shades', category: 'Accessories', price: 65, rating: 4.4, reviews: 309, image: img('1572635196237-14b3f281503f') },
];

function ProductCard({
  product,
  favourite,
  onToggleFavourite,
}: {
  product: Product;
  favourite: boolean;
  onToggleFavourite: () => void;
}) {
  return (
    <Pressable className="w-[48%] gap-2.5">
      <View className="aspect-square overflow-hidden rounded-3xl bg-muted">
        <Image
          source={{ uri: product.image }}
          alt={product.name}
          size="none"
          className="h-full w-full"
        />
        <Pressable
          onPress={onToggleFavourite}
          className="absolute right-2.5 top-2.5 h-9 w-9 items-center justify-center rounded-full bg-background/90"
        >
          <Icon
            as={Heart}
            className={`h-[18px] w-[18px] ${
              favourite ? 'fill-rose-500 text-rose-500' : 'text-foreground'
            }`}
          />
        </Pressable>
      </View>
      <VStack className="gap-1 px-1">
        <Text className="text-sm font-medium text-foreground" numberOfLines={1}>
          {product.name}
        </Text>
        <HStack className="items-center justify-between">
          <Text className="text-base font-bold text-foreground">${product.price}</Text>
          <HStack className="items-center gap-1">
            <Icon as={Star} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <Text className="text-xs font-medium text-foreground">{product.rating}</Text>
            <Text className="text-xs text-muted-foreground">({product.reviews})</Text>
          </HStack>
        </HStack>
      </VStack>
    </Pressable>
  );
}

export default function ProductGridScreen() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('All');
  const [favourites, setFavourites] = useState<string[]>(['3']);

  const visible = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          (category === 'All' || p.category === category) &&
          p.name.toLowerCase().includes(query.trim().toLowerCase())
      ),
    [category, query]
  );

  const toggleFavourite = (id: string) =>
    setFavourites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-5 pb-12 pt-6">
      <HStack className="items-center justify-between px-5">
        <VStack>
          <Text className="text-sm text-muted-foreground">Good morning, Maya</Text>
          <Heading className="text-2xl font-bold text-foreground">Discover</Heading>
        </VStack>
        <Pressable className="h-11 w-11 items-center justify-center rounded-full border border-border">
          <Icon as={Bell} className="h-5 w-5 text-foreground" />
          <View className="absolute right-3 top-2.5 h-2 w-2 rounded-full bg-rose-500" />
        </Pressable>
      </HStack>

      <HStack className="items-center gap-3 px-5">
        <Input className="h-12 flex-1 rounded-2xl bg-muted">
          <InputSlot className="pl-1">
            <InputIcon as={Search} className="h-5 w-5 text-muted-foreground" />
          </InputSlot>
          <InputField
            placeholder="Search products"
            value={query}
            onChangeText={setQuery}
            className="text-base"
          />
        </Input>
        <Pressable className="h-12 w-12 items-center justify-center rounded-2xl bg-primary">
          <Icon as={SlidersHorizontal} className="h-5 w-5 text-primary-foreground" />
        </Pressable>
      </HStack>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="gap-2 px-5"
      >
        {CATEGORIES.map((c) => {
          const active = c === category;
          return (
            <Pressable
              key={c}
              onPress={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 ${
                active ? 'border-primary bg-primary' : 'border-border bg-card'
              }`}
            >
              <Text
                className={`text-sm font-medium ${
                  active ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {c}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <View className="mx-5 flex-row items-center overflow-hidden rounded-3xl bg-violet-600 p-5">
        <View className="absolute -right-8 -top-10 h-40 w-40 rounded-full bg-white/10" />
        <View className="absolute -bottom-16 right-16 h-32 w-32 rounded-full bg-white/10" />
        <VStack className="flex-1 gap-1">
          <Text className="text-xs font-semibold uppercase tracking-wider text-violet-200">
            Winter drop
          </Text>
          <Text className="text-xl font-bold text-white">Up to 40% off outerwear</Text>
          <Button size="sm" className="mt-2 self-start rounded-full bg-white px-4">
            <ButtonText className="text-xs font-semibold text-violet-700">Shop now</ButtonText>
          </Button>
        </VStack>
        <Image
          source={{ uri: img('1591047139829-d91aecb6caea') }}
          alt="Bomber jacket"
          size="none"
          className="h-24 w-24 rounded-2xl"
        />
      </View>

      <HStack className="items-center justify-between px-5">
        <Text className="text-lg font-semibold text-foreground">Popular now</Text>
        <Pressable>
          <Text className="text-sm text-muted-foreground">See all</Text>
        </Pressable>
      </HStack>

      <View className="flex-row flex-wrap justify-between gap-y-5 px-5">
        {visible.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            favourite={favourites.includes(p.id)}
            onToggleFavourite={() => toggleFavourite(p.id)}
          />
        ))}
        {visible.length === 0 ? (
          <Text className="w-full py-10 text-center text-sm text-muted-foreground">
            No products match “{query}”.
          </Text>
        ) : null}
      </View>
    </ScrollView>
  );
}
