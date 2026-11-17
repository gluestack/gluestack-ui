import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  ChevronLeft,
  CreditCard,
  Lock,
  MapPin,
  Plus,
  Smartphone,
  Wallet,
  type LucideIcon,
} from 'lucide-react-native';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { CircleIcon, Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Pressable } from '@/components/ui/pressable';
import { Radio, RadioGroup, RadioIcon, RadioIndicator } from '@/components/ui/radio';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const DELIVERY = [
  { id: 'standard', label: 'Standard', eta: 'Thu, Nov 27 – Mon, Dec 1', price: 0 },
  { id: 'express', label: 'Express', eta: 'Fri, Nov 21', price: 12 },
  { id: 'same-day', label: 'Same day', eta: 'Today by 9 pm', price: 24 },
];

const PAYMENT: { id: string; label: string; detail: string; icon: LucideIcon }[] = [
  { id: 'apple', label: 'Apple Pay', detail: 'Pay with Face ID', icon: Smartphone },
  { id: 'card', label: 'Card ending 4242', detail: 'Expires 08/28', icon: CreditCard },
  { id: 'balance', label: 'Store credit', detail: '$38.50 available', icon: Wallet },
];

const ITEMS = [
  { id: '1', name: 'Suede Derby', qty: 1, price: 159, image: 'photo-1560343090-f0409e92791a' },
  { id: '2', name: 'Heavyweight Hoodie', qty: 2, price: 144, image: 'photo-1556821840-3a63f95609a7' },
  { id: '3', name: 'Canvas Day Pack', qty: 1, price: 89, image: 'photo-1553062407-98eeb64c6a62' },
];

const SUBTOTAL = ITEMS.reduce((sum, i) => sum + i.price, 0);
const money = (n: number) => `$${n.toFixed(2)}`;

function Section({ title, action, children }: { title: string; action?: string; children: React.ReactNode }) {
  return (
    <VStack className="gap-3">
      <HStack className="items-center justify-between">
        <Text className="text-base font-semibold text-foreground">{title}</Text>
        {action ? (
          <Pressable>
            <Text className="text-sm font-medium text-muted-foreground">{action}</Text>
          </Pressable>
        ) : null}
      </HStack>
      {children}
    </VStack>
  );
}

function OptionCard({ value, selected, children }: { value: string; selected: boolean; children: React.ReactNode }) {
  return (
    <Radio
      value={value}
      className={`gap-3 rounded-2xl border p-4 ${
        selected ? 'border-primary bg-accent' : 'border-border bg-card'
      }`}
    >
      <RadioIndicator className={selected ? 'border-primary' : 'border-muted-foreground/40'}>
        <RadioIcon as={CircleIcon} />
      </RadioIndicator>
      {children}
    </Radio>
  );
}

export default function CheckoutScreen() {
  const [delivery, setDelivery] = useState('express');
  const [payment, setPayment] = useState('apple');

  const shipping = DELIVERY.find((d) => d.id === delivery)?.price ?? 0;
  const tax = SUBTOTAL * 0.0825;
  const total = SUBTOTAL + shipping + tax;

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="gap-6 px-5 pb-40 pt-6">
        <HStack className="items-center gap-3">
          <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border">
            <Icon as={ChevronLeft} className="h-5 w-5 text-foreground" />
          </Pressable>
          <Heading className="text-2xl font-bold text-foreground">Checkout</Heading>
        </HStack>

        <Section title="Shipping address" action="Change">
          <HStack className="items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <View className="h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15">
              <Icon as={MapPin} className="h-5 w-5 text-violet-500" />
            </View>
            <VStack className="flex-1">
              <Text className="text-sm font-semibold text-foreground">Maya Patel · Home</Text>
              <Text className="text-sm text-muted-foreground">
                1428 Larkin St, Apt 3B, San Francisco, CA 94109
              </Text>
            </VStack>
          </HStack>
        </Section>

        <Section title="Delivery">
          <RadioGroup value={delivery} onChange={setDelivery} className="gap-2.5">
            {DELIVERY.map((d) => (
              <OptionCard key={d.id} value={d.id} selected={delivery === d.id}>
                <VStack className="flex-1">
                  <Text className="text-sm font-semibold text-foreground">{d.label}</Text>
                  <Text className="text-xs text-muted-foreground">{d.eta}</Text>
                </VStack>
                <Text className="text-sm font-semibold text-foreground">
                  {d.price === 0 ? 'Free' : money(d.price)}
                </Text>
              </OptionCard>
            ))}
          </RadioGroup>
        </Section>

        <Section title="Payment method">
          <RadioGroup value={payment} onChange={setPayment} className="gap-2.5">
            {PAYMENT.map((p) => (
              <OptionCard key={p.id} value={p.id} selected={payment === p.id}>
                <View className="h-9 w-9 items-center justify-center rounded-lg bg-muted">
                  <Icon as={p.icon} className="h-[18px] w-[18px] text-foreground" />
                </View>
                <VStack className="flex-1">
                  <Text className="text-sm font-semibold text-foreground">{p.label}</Text>
                  <Text className="text-xs text-muted-foreground">{p.detail}</Text>
                </VStack>
              </OptionCard>
            ))}
          </RadioGroup>
          <Pressable className="flex-row items-center gap-2 px-1">
            <Icon as={Plus} className="h-4 w-4 text-muted-foreground" />
            <Text className="text-sm font-medium text-muted-foreground">Add a new card</Text>
          </Pressable>
        </Section>

        <Section title="Order summary">
          <VStack className="gap-4 rounded-2xl border border-border bg-card p-4">
            {ITEMS.map((item) => (
              <HStack key={item.id} className="items-center gap-3">
                <Image
                  source={{ uri: `https://images.unsplash.com/${item.image}?w=160&q=80` }}
                  alt={item.name}
                  size="none"
                  className="h-12 w-12 rounded-xl bg-muted"
                />
                <VStack className="flex-1">
                  <Text className="text-sm font-medium text-foreground">{item.name}</Text>
                  <Text className="text-xs text-muted-foreground">Qty {item.qty}</Text>
                </VStack>
                <Text className="text-sm font-medium text-foreground">{money(item.price)}</Text>
              </HStack>
            ))}
            <Divider />
            <VStack className="gap-2">
              <HStack className="justify-between">
                <Text className="text-sm text-muted-foreground">Subtotal</Text>
                <Text className="text-sm text-foreground">{money(SUBTOTAL)}</Text>
              </HStack>
              <HStack className="justify-between">
                <Text className="text-sm text-muted-foreground">Delivery</Text>
                <Text className="text-sm text-foreground">
                  {shipping === 0 ? 'Free' : money(shipping)}
                </Text>
              </HStack>
              <HStack className="justify-between">
                <Text className="text-sm text-muted-foreground">Tax (8.25%)</Text>
                <Text className="text-sm text-foreground">{money(tax)}</Text>
              </HStack>
            </VStack>
            <Divider />
            <HStack className="justify-between">
              <Text className="text-base font-semibold text-foreground">Total</Text>
              <Text className="text-base font-bold text-foreground">{money(total)}</Text>
            </HStack>
          </VStack>
        </Section>
      </ScrollView>

      <VStack className="absolute bottom-0 left-0 right-0 gap-2 border-t border-border bg-background px-5 pb-8 pt-4">
        <Button size="lg" className="h-14 rounded-2xl">
          <ButtonIcon as={Lock} />
          <ButtonText className="text-base">Place order · {money(total)}</ButtonText>
        </Button>
        <Text className="text-center text-xs text-muted-foreground">
          Payments are encrypted and processed securely.
        </Text>
      </VStack>
    </View>
  );
}
