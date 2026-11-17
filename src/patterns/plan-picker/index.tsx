import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Check, Minus } from 'lucide-react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type Billing = 'monthly' | 'yearly';
type TierId = 'free' | 'plus' | 'team';

const TIERS: { id: TierId; name: string; tagline: string; monthly: number; yearly: number }[] = [
  { id: 'free', name: 'Free', tagline: 'For trying things out', monthly: 0, yearly: 0 },
  { id: 'plus', name: 'Plus', tagline: 'For focused individuals', monthly: 9, yearly: 7 },
  { id: 'team', name: 'Team', tagline: 'For teams up to 25', monthly: 24, yearly: 19 },
];

type Cell = boolean | string;
const FEATURES: { label: string; values: Record<TierId, Cell> }[] = [
  { label: 'Projects', values: { free: '3', plus: '∞', team: '∞' } },
  { label: 'Focus sessions', values: { free: '5/day', plus: '∞', team: '∞' } },
  { label: 'AI day planner', values: { free: false, plus: true, team: true } },
  { label: 'Calendar sync', values: { free: true, plus: true, team: true } },
  { label: 'History', values: { free: '7 days', plus: 'Full', team: 'Full' } },
  { label: 'Shared projects', values: { free: false, plus: false, team: true } },
  { label: 'Admin & SSO', values: { free: false, plus: false, team: true } },
];

function TierCard({
  tier,
  billing,
  selected,
  onPress,
}: {
  tier: (typeof TIERS)[number];
  billing: Billing;
  selected: boolean;
  onPress: () => void;
}) {
  const price = billing === 'yearly' ? tier.yearly : tier.monthly;
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center gap-4 rounded-2xl border-2 p-4 ${
        selected ? 'border-foreground bg-card' : 'border-border bg-card'
      }`}
    >
      <View
        className={`h-5 w-5 items-center justify-center rounded-full border-2 ${
          selected ? 'border-foreground' : 'border-border'
        }`}
      >
        {selected ? <View className="h-2.5 w-2.5 rounded-full bg-foreground" /> : null}
      </View>
      <VStack className="flex-1 gap-0.5">
        <HStack className="items-center gap-2">
          <Text className="text-base font-semibold text-foreground">{tier.name}</Text>
          {tier.id === 'plus' ? (
            <View className="rounded-full bg-violet-500/15 px-2 py-0.5">
              <Text className="text-[11px] font-semibold text-violet-500">Most popular</Text>
            </View>
          ) : null}
        </HStack>
        <Text className="text-sm text-muted-foreground">{tier.tagline}</Text>
      </VStack>
      <VStack className="items-end">
        <Text className="text-xl font-bold text-foreground">${price}</Text>
        <Text className="text-xs text-muted-foreground">{price ? 'per user/mo' : 'forever'}</Text>
      </VStack>
    </Pressable>
  );
}

function CellValue({ value, active }: { value: Cell; active: boolean }) {
  if (typeof value === 'string') {
    return (
      <Text
        className={`text-sm ${active ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
      >
        {value}
      </Text>
    );
  }
  return value ? (
    <Icon
      as={Check}
      className={`h-4 w-4 ${active ? 'text-emerald-500' : 'text-muted-foreground'}`}
    />
  ) : (
    <Icon as={Minus} className="h-4 w-4 text-muted-foreground/50" />
  );
}

export default function PlanPickerScreen() {
  const [billing, setBilling] = useState<Billing>('yearly');
  const [tier, setTier] = useState<TierId>('plus');
  const selectedTier = TIERS.find((t) => t.id === tier) ?? TIERS[0];

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="px-5 pb-40 pt-6">
        <Heading className="text-3xl font-bold text-foreground">Choose your plan</Heading>
        <Text className="mt-2 text-base text-muted-foreground">
          Switch or cancel anytime. Prices in USD.
        </Text>

        <HStack className="mt-6 rounded-full bg-muted p-1">
          {(['monthly', 'yearly'] as const).map((b) => (
            <Pressable
              key={b}
              onPress={() => setBilling(b)}
              className={`h-10 flex-1 flex-row items-center justify-center gap-1.5 rounded-full ${
                billing === b ? 'bg-background shadow-sm' : ''
              }`}
            >
              <Text
                className={`text-sm font-semibold ${
                  billing === b ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {b === 'monthly' ? 'Monthly' : 'Yearly'}
              </Text>
              {b === 'yearly' ? (
                <Text className="text-xs font-semibold text-emerald-500">-20%</Text>
              ) : null}
            </Pressable>
          ))}
        </HStack>

        <VStack className="mt-5 gap-3">
          {TIERS.map((t) => (
            <TierCard
              key={t.id}
              tier={t}
              billing={billing}
              selected={tier === t.id}
              onPress={() => setTier(t.id)}
            />
          ))}
        </VStack>

        <Text className="mb-3 mt-8 text-lg font-semibold text-foreground">Compare plans</Text>
        <View className="overflow-hidden rounded-2xl border border-border bg-card">
          <HStack className="border-b border-border bg-muted/50 px-4 py-3">
            <Text className="flex-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Feature
            </Text>
            {TIERS.map((t) => (
              <Text
                key={t.id}
                className={`w-16 text-center text-xs font-semibold uppercase tracking-wider ${
                  tier === t.id ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {t.name}
              </Text>
            ))}
          </HStack>
          {FEATURES.map((f, i) => (
            <HStack
              key={f.label}
              className={`items-center px-4 py-3 ${i < FEATURES.length - 1 ? 'border-b border-border' : ''}`}
            >
              <Text className="flex-1 text-sm text-foreground">{f.label}</Text>
              {TIERS.map((t) => (
                <View key={t.id} className="w-16 items-center">
                  <CellValue value={f.values[t.id]} active={tier === t.id} />
                </View>
              ))}
            </HStack>
          ))}
        </View>
      </ScrollView>

      <VStack className="absolute bottom-0 left-0 right-0 gap-2 border-t border-border bg-background px-5 pb-8 pt-4">
        <Button size="lg" className="h-12 rounded-xl">
          <ButtonText className="text-base">
            {tier === 'free' ? 'Continue with Free' : `Continue with ${selectedTier.name}`}
          </ButtonText>
        </Button>
        <Text className="text-center text-xs text-muted-foreground">
          {tier === 'free'
            ? 'No card required.'
            : billing === 'yearly'
              ? `Billed $${selectedTier.yearly * 12} per user yearly.`
              : `Billed $${selectedTier.monthly} per user monthly.`}
        </Text>
      </VStack>
    </View>
  );
}
