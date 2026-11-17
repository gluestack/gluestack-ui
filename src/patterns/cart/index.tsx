import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ArrowRight, ChevronLeft, Minus, Plus, Tag, Trash2, Truck } from 'lucide-react-native';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type LineItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
};

const INITIAL_ITEMS: LineItem[] = [
  {
    id: 'derby',
    name: 'Suede Derby',
    variant: 'Sage · EU 42',
    price: 159,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300&q=80',
  },
  {
    id: 'hoodie',
    name: 'Heavyweight Hoodie',
    variant: 'Heather grey · M',
    price: 72,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&q=80',
  },
  {
    id: 'pack',
    name: 'Canvas Day Pack',
    variant: 'Navy · 22 L',
    price: 89,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&q=80',
  },
];

const FREE_SHIPPING_AT = 450;
const PROMO = { code: 'WINTER15', rate: 0.15 };

const money = (n: number) => `$${n.toFixed(2)}`;

function SummaryRow({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <HStack className="justify-between">
      <Text className="text-sm text-muted-foreground">{label}</Text>
      <Text className={`text-sm font-medium ${accent ? 'text-emerald-500' : 'text-foreground'}`}>
        {value}
      </Text>
    </HStack>
  );
}

export default function CartScreen() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [code, setCode] = useState('');
  const [applied, setApplied] = useState(false);

  const updateQuantity = (id: string, delta: number) =>
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i))
    );
  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discount = applied ? subtotal * PROMO.rate : 0;
  const shipping = subtotal >= FREE_SHIPPING_AT || subtotal === 0 ? 0 : 9.95;
  const total = subtotal - discount + shipping;
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="gap-5 px-5 pb-40 pt-6">
        <HStack className="items-center justify-between">
          <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border">
            <Icon as={ChevronLeft} className="h-5 w-5 text-foreground" />
          </Pressable>
          <Heading className="text-lg font-semibold text-foreground">My cart</Heading>
          <View className="h-10 w-10 items-center justify-center rounded-full bg-muted">
            <Text className="text-sm font-semibold text-foreground">{count}</Text>
          </View>
        </HStack>

        <VStack className="gap-2 rounded-2xl bg-muted p-4">
          <HStack className="items-center gap-2">
            <Icon as={Truck} className="h-4 w-4 text-foreground" />
            <Text className="text-sm text-foreground">
              {shipping === 0
                ? 'You’ve unlocked free shipping'
                : `Add ${money(FREE_SHIPPING_AT - subtotal)} for free shipping`}
            </Text>
          </HStack>
          <Progress value={Math.min(100, (subtotal / FREE_SHIPPING_AT) * 100)} className="h-1.5">
            <ProgressFilledTrack className="bg-emerald-500" />
          </Progress>
        </VStack>

        <VStack className="gap-4">
          {items.map((item) => (
            <HStack key={item.id} className="gap-4 rounded-3xl border border-border bg-card p-3">
              <Image
                source={{ uri: item.image }}
                alt={item.name}
                size="none"
                className="h-24 w-24 rounded-2xl bg-muted"
              />
              <VStack className="flex-1 justify-between py-1">
                <HStack className="items-start justify-between gap-2">
                  <VStack className="flex-1">
                    <Text className="text-base font-semibold text-foreground" numberOfLines={1}>
                      {item.name}
                    </Text>
                    <Text className="text-xs text-muted-foreground">{item.variant}</Text>
                  </VStack>
                  <Pressable onPress={() => removeItem(item.id)} hitSlop={8}>
                    <Icon as={Trash2} className="h-4 w-4 text-muted-foreground" />
                  </Pressable>
                </HStack>
                <HStack className="items-center justify-between">
                  <Text className="text-base font-bold text-foreground">
                    {money(item.price * item.quantity)}
                  </Text>
                  <HStack className="items-center gap-3 rounded-full bg-muted p-1">
                    <Pressable
                      onPress={() => updateQuantity(item.id, -1)}
                      className="h-7 w-7 items-center justify-center rounded-full bg-background"
                    >
                      <Icon as={Minus} className="h-3.5 w-3.5 text-foreground" />
                    </Pressable>
                    <Text className="text-sm font-semibold text-foreground">{item.quantity}</Text>
                    <Pressable
                      onPress={() => updateQuantity(item.id, 1)}
                      className="h-7 w-7 items-center justify-center rounded-full bg-primary"
                    >
                      <Icon as={Plus} className="h-3.5 w-3.5 text-primary-foreground" />
                    </Pressable>
                  </HStack>
                </HStack>
              </VStack>
            </HStack>
          ))}
        </VStack>

        <HStack className="items-center gap-2">
          <Input className="h-12 flex-1 rounded-2xl">
            <InputSlot className="pl-1">
              <InputIcon as={Tag} className="text-muted-foreground" />
            </InputSlot>
            <InputField
              placeholder="Promo code"
              autoCapitalize="characters"
              value={code}
              onChangeText={setCode}
            />
          </Input>
          <Button
            variant={applied ? 'secondary' : 'default'}
            className="h-12 rounded-2xl px-5"
            onPress={() => setApplied(code.trim().toUpperCase() === PROMO.code)}
          >
            <ButtonText>{applied ? 'Applied' : 'Apply'}</ButtonText>
          </Button>
        </HStack>
        {!applied ? (
          <Text className="-mt-3 px-1 text-xs text-muted-foreground">
            Try {PROMO.code} for 15% off this order.
          </Text>
        ) : null}

        <VStack className="gap-3 rounded-3xl border border-border bg-card p-4">
          <SummaryRow label={`Subtotal (${count} items)`} value={money(subtotal)} />
          {applied ? (
            <SummaryRow label={`Promo ${PROMO.code}`} value={`-${money(discount)}`} accent />
          ) : null}
          <SummaryRow label="Shipping" value={shipping === 0 ? 'Free' : money(shipping)} />
          <SummaryRow label="Estimated tax" value="Calculated at checkout" />
          <Divider />
          <HStack className="justify-between">
            <Text className="text-base font-semibold text-foreground">Total</Text>
            <Text className="text-base font-bold text-foreground">{money(total)}</Text>
          </HStack>
        </VStack>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 border-t border-border bg-background px-5 pb-8 pt-4">
        <Button size="lg" className="h-14 rounded-2xl" disabled={items.length === 0}>
          <ButtonText className="text-base">Checkout · {money(total)}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>
      </View>
    </View>
  );
}
