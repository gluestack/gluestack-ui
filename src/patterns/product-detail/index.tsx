import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  ChevronLeft,
  Heart,
  Minus,
  Plus,
  RotateCcw,
  Share2,
  ShoppingBag,
  Star,
  Truck,
} from 'lucide-react-native';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const COLOURS = [
  { name: 'Sage', swatch: 'bg-emerald-700' },
  { name: 'Tan', swatch: 'bg-amber-600' },
  { name: 'Espresso', swatch: 'bg-stone-800' },
];

const SIZES = [
  { label: '40', inStock: true },
  { label: '41', inStock: true },
  { label: '42', inStock: true },
  { label: '43', inStock: false },
  { label: '44', inStock: true },
  { label: '45', inStock: true },
];

const PRICE = 159;

function RoundButton({ icon, onPress, active }: { icon: typeof Heart; onPress?: () => void; active?: boolean }) {
  return (
    <Pressable
      onPress={onPress}
      className="h-11 w-11 items-center justify-center rounded-full bg-background/90"
    >
      <Icon
        as={icon}
        className={`h-5 w-5 ${active ? 'fill-rose-500 text-rose-500' : 'text-foreground'}`}
      />
    </Pressable>
  );
}

export default function ProductDetailScreen() {
  const [colour, setColour] = useState(COLOURS[0].name);
  const [size, setSize] = useState('42');
  const [quantity, setQuantity] = useState(1);
  const [favourite, setFavourite] = useState(false);

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="pb-36">
        <View className="h-[400px] bg-muted">
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=900&q=80',
            }}
            alt="Sage suede derby shoe"
            size="none"
            className="h-full w-full"
          />
          <HStack className="absolute left-5 right-5 top-6 justify-between">
            <RoundButton icon={ChevronLeft} />
            <HStack className="gap-2">
              <RoundButton icon={Share2} />
              <RoundButton
                icon={Heart}
                active={favourite}
                onPress={() => setFavourite((v) => !v)}
              />
            </HStack>
          </HStack>
          <HStack className="absolute bottom-8 self-center gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <View
                key={i}
                className={`h-1.5 rounded-full ${i === 0 ? 'w-5 bg-white' : 'w-1.5 bg-white/60'}`}
              />
            ))}
          </HStack>
        </View>

        <VStack className="-mt-5 gap-6 rounded-t-3xl bg-background px-5 pt-6">
          <VStack className="gap-2">
            <HStack className="items-center justify-between">
              <Text className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Hartley & Co. · Footwear
              </Text>
              <HStack className="items-center gap-1">
                <Icon as={Star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                <Text className="text-sm font-semibold text-foreground">4.8</Text>
                <Text className="text-sm text-muted-foreground">(212 reviews)</Text>
              </HStack>
            </HStack>
            <Heading className="text-2xl font-bold text-foreground">Suede Derby</Heading>
            <HStack className="items-baseline gap-2">
              <Text className="text-2xl font-bold text-foreground">${PRICE}</Text>
              <Text className="text-base text-muted-foreground line-through">$199</Text>
              <View className="rounded-full bg-emerald-500/15 px-2 py-0.5">
                <Text className="text-xs font-semibold text-emerald-600">-20%</Text>
              </View>
            </HStack>
          </VStack>

          <VStack className="gap-3">
            <Text className="text-sm font-semibold text-foreground">
              Colour <Text className="font-normal text-muted-foreground">· {colour}</Text>
            </Text>
            <HStack className="gap-3">
              {COLOURS.map((c) => (
                <Pressable
                  key={c.name}
                  onPress={() => setColour(c.name)}
                  className={`h-11 w-11 items-center justify-center rounded-full border-2 ${
                    colour === c.name ? 'border-foreground' : 'border-transparent'
                  }`}
                >
                  <View className={`h-8 w-8 rounded-full ${c.swatch}`} />
                </Pressable>
              ))}
            </HStack>
          </VStack>

          <VStack className="gap-3">
            <HStack className="items-center justify-between">
              <Text className="text-sm font-semibold text-foreground">Size (EU)</Text>
              <Pressable>
                <Text className="text-sm text-muted-foreground underline">Size guide</Text>
              </Pressable>
            </HStack>
            <HStack className="gap-2">
              {SIZES.map((s) => {
                const active = s.label === size;
                return (
                  <Pressable
                    key={s.label}
                    disabled={!s.inStock}
                    onPress={() => setSize(s.label)}
                    className={`h-12 flex-1 items-center justify-center rounded-xl border ${
                      active ? 'border-primary bg-primary' : 'border-border bg-card'
                    } ${s.inStock ? '' : 'opacity-40'}`}
                  >
                    <Text
                      className={`text-sm font-semibold ${
                        active ? 'text-primary-foreground' : 'text-foreground'
                      } ${s.inStock ? '' : 'line-through'}`}
                    >
                      {s.label}
                    </Text>
                  </Pressable>
                );
              })}
            </HStack>
          </VStack>

          <VStack className="gap-2">
            <Text className="text-sm font-semibold text-foreground">Description</Text>
            <Text className="text-sm leading-6 text-muted-foreground">
              Hand-finished Italian suede on a cushioned crepe sole. Unlined for a soft, broken-in
              feel from day one, with waxed cotton laces and a leather heel tab.
            </Text>
          </VStack>

          <HStack className="gap-3">
            <HStack className="flex-1 items-center gap-3 rounded-2xl bg-muted p-3">
              <Icon as={Truck} className="h-5 w-5 text-foreground" />
              <VStack>
                <Text className="text-xs font-semibold text-foreground">Free delivery</Text>
                <Text className="text-xs text-muted-foreground">Arrives Fri, Nov 21</Text>
              </VStack>
            </HStack>
            <HStack className="flex-1 items-center gap-3 rounded-2xl bg-muted p-3">
              <Icon as={RotateCcw} className="h-5 w-5 text-foreground" />
              <VStack>
                <Text className="text-xs font-semibold text-foreground">30-day returns</Text>
                <Text className="text-xs text-muted-foreground">Free and easy</Text>
              </VStack>
            </HStack>
          </HStack>
        </VStack>
      </ScrollView>

      <HStack className="absolute bottom-0 left-0 right-0 items-center gap-3 border-t border-border bg-background px-5 pb-8 pt-4">
        <HStack className="h-14 items-center gap-1 rounded-2xl border border-border px-1">
          <Pressable
            onPress={() => setQuantity((q) => Math.max(1, q - 1))}
            className="h-10 w-10 items-center justify-center"
          >
            <Icon as={Minus} className="h-4 w-4 text-foreground" />
          </Pressable>
          <Text className="w-5 text-center text-base font-semibold text-foreground">{quantity}</Text>
          <Pressable
            onPress={() => setQuantity((q) => q + 1)}
            className="h-10 w-10 items-center justify-center"
          >
            <Icon as={Plus} className="h-4 w-4 text-foreground" />
          </Pressable>
        </HStack>
        <Button size="lg" className="h-14 flex-1 rounded-2xl px-4">
          <ButtonIcon as={ShoppingBag} />
          <ButtonText className="text-base">Add to cart · ${PRICE * quantity}</ButtonText>
        </Button>
      </HStack>
    </View>
  );
}
