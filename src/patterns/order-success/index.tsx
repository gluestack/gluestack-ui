import { ScrollView, View } from 'react-native';
import { Check, Mail, MapPin, Package, Truck, type LucideIcon } from 'lucide-react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const photo = (id: string) => `https://images.unsplash.com/photo-${id}?w=200&q=80`;

const ITEMS = [
  { name: 'Aurora wireless headphones', variant: 'Matte black', qty: 1, price: 149, image: photo('1505740420928-5e560c06d30e') },
  { name: 'Classic chrono watch', variant: 'Silver / 40 mm', qty: 1, price: 89, image: photo('1523275335684-37898b6baf30') },
];

const NEXT_STEPS: { icon: LucideIcon; title: string; body: string; done?: boolean }[] = [
  { icon: Mail, title: 'Receipt sent', body: 'Check maya.chen@example.com', done: true },
  { icon: Package, title: 'Packing your order', body: 'Usually within 24 hours' },
  { icon: Truck, title: 'Arrives Thu, Nov 20', body: 'Standard delivery, tracking to follow' },
];

const subtotal = ITEMS.reduce((sum, i) => sum + i.price * i.qty, 0);
const shipping = 0;
const tax = 19.04;
const total = subtotal + shipping + tax;
const money = (n: number) => `$${n.toFixed(2)}`;

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <HStack className="items-center justify-between">
      <Text className={strong ? 'text-base font-semibold text-foreground' : 'text-sm text-muted-foreground'}>
        {label}
      </Text>
      <Text className={strong ? 'text-base font-bold text-foreground' : 'text-sm text-foreground'}>
        {value}
      </Text>
    </HStack>
  );
}

export default function OrderSuccessScreen() {
  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="gap-6 px-5 pb-44 pt-10">
        <VStack className="items-center gap-4">
          <View className="h-24 w-24 items-center justify-center rounded-full bg-emerald-500/15">
            <View className="h-16 w-16 items-center justify-center rounded-full bg-emerald-500">
              <Icon as={Check} className="h-8 w-8 text-white" />
            </View>
          </View>
          <VStack className="items-center gap-1.5">
            <Heading className="text-center text-3xl font-bold text-foreground">
              Order confirmed
            </Heading>
            <Text className="text-center text-base text-muted-foreground">
              Thanks, Maya. Order #4821 is confirmed and we will email you when it ships.
            </Text>
          </VStack>
        </VStack>

        <VStack className="gap-4 rounded-2xl border border-border bg-card p-4">
          {ITEMS.map((item) => (
            <HStack key={item.name} className="items-center gap-3">
              <Image source={{ uri: item.image }} alt={item.name} size="none" className="h-14 w-14 rounded-xl" />
              <VStack className="flex-1">
                <Text className="text-sm font-semibold text-foreground" numberOfLines={1}>
                  {item.name}
                </Text>
                <Text className="text-xs text-muted-foreground">
                  {item.variant} · Qty {item.qty}
                </Text>
              </VStack>
              <Text className="text-sm font-semibold text-foreground">{money(item.price)}</Text>
            </HStack>
          ))}
          <View className="h-px bg-border" />
          <VStack className="gap-2">
            <Row label="Subtotal" value={money(subtotal)} />
            <Row label="Shipping" value={shipping === 0 ? 'Free' : money(shipping)} />
            <Row label="Tax" value={money(tax)} />
          </VStack>
          <View className="h-px bg-border" />
          <Row label="Paid with card •• 4242" value={money(total)} strong />
          <HStack className="items-start gap-2 rounded-xl bg-muted p-3">
            <Icon as={MapPin} className="mt-0.5 h-4 w-4 text-muted-foreground" />
            <Text className="flex-1 text-sm leading-5 text-foreground">
              Maya Chen, 214 Alder Street, Apt 5B, Portland, OR 97205
            </Text>
          </HStack>
        </VStack>

        <VStack className="gap-3">
          <Text className="text-lg font-semibold text-foreground">What happens next</Text>
          {NEXT_STEPS.map((step, i) => (
            <HStack key={step.title} className="gap-3">
              <VStack className="items-center">
                <View
                  className={`h-9 w-9 items-center justify-center rounded-full ${
                    step.done ? 'bg-emerald-500' : 'bg-muted'
                  }`}
                >
                  <Icon
                    as={step.done ? Check : step.icon}
                    className={`h-4 w-4 ${step.done ? 'text-white' : 'text-foreground'}`}
                  />
                </View>
                {i < NEXT_STEPS.length - 1 ? <View className="w-px flex-1 bg-border" /> : null}
              </VStack>
              <VStack className="flex-1 pb-4 pt-1.5">
                <Text className="text-sm font-semibold text-foreground">{step.title}</Text>
                <Text className="text-sm text-muted-foreground">{step.body}</Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </ScrollView>

      <VStack className="absolute bottom-0 left-0 right-0 gap-2 border-t border-border bg-background px-5 pb-8 pt-4">
        <Button size="lg" className="h-12 rounded-xl">
          <ButtonText className="text-base">Track order</ButtonText>
        </Button>
        <Button variant="ghost" size="lg" className="h-11 rounded-xl">
          <ButtonText className="text-base">Continue shopping</ButtonText>
        </Button>
      </VStack>
    </View>
  );
}
