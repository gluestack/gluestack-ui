import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  BarChart3,
  Check,
  Cloud,
  Crown,
  Infinity as InfinityIcon,
  Sparkles,
  Star,
  X,
  type LucideIcon,
} from 'lucide-react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type PlanId = 'yearly' | 'monthly';

const BENEFITS: { icon: LucideIcon; label: string }[] = [
  { icon: InfinityIcon, label: 'Unlimited projects and focus sessions' },
  { icon: Sparkles, label: 'AI planner that fits around meetings' },
  { icon: BarChart3, label: 'Weekly insights and full history' },
  { icon: Cloud, label: 'Sync across phone, tablet and web' },
];

const PLANS: Record<
  PlanId,
  { title: string; price: string; detail: string; cta: string; footnote: string }
> = {
  yearly: {
    title: 'Yearly',
    price: '$64.99/yr',
    detail: '$5.42/mo · 7-day free trial',
    cta: 'Start 7-day free trial',
    footnote: 'Free for 7 days, then $64.99 per year. Cancel anytime.',
  },
  monthly: {
    title: 'Monthly',
    price: '$8.99/mo',
    detail: 'Billed monthly',
    cta: 'Subscribe for $8.99/mo',
    footnote: 'Renews every month at $8.99. Cancel anytime.',
  },
};

function PlanCard({
  id,
  selected,
  onPress,
}: {
  id: PlanId;
  selected: boolean;
  onPress: () => void;
}) {
  const plan = PLANS[id];
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center gap-4 rounded-2xl border-2 p-4 ${
        selected ? 'border-violet-500 bg-violet-500/10' : 'border-border bg-card'
      }`}
    >
      <View
        className={`h-6 w-6 items-center justify-center rounded-full ${
          selected ? 'bg-violet-500' : 'border-2 border-border'
        }`}
      >
        {selected ? <Icon as={Check} className="h-3.5 w-3.5 text-white" /> : null}
      </View>
      <VStack className="flex-1">
        <Text className="text-base font-semibold text-foreground">{plan.title}</Text>
        <Text className="text-sm text-muted-foreground">{plan.detail}</Text>
      </VStack>
      <Text className="text-base font-bold text-foreground">{plan.price}</Text>
      {id === 'yearly' ? (
        <View className="absolute -top-3 right-4 rounded-full bg-emerald-500 px-2.5 py-1">
          <Text className="text-[11px] font-bold uppercase tracking-wide text-white">Save 40%</Text>
        </View>
      ) : null}
    </Pressable>
  );
}

export default function PaywallSubscriptionScreen() {
  const [plan, setPlan] = useState<PlanId>('yearly');

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="px-5 pb-56 pt-6">
        <View className="overflow-hidden rounded-[32px] bg-violet-600 px-6 pb-6 pt-6">
          <View className="absolute -right-12 -top-16 h-52 w-52 rounded-full bg-white/10" />
          <View className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-fuchsia-400/30" />
          <Pressable className="absolute right-4 top-4 h-9 w-9 items-center justify-center rounded-full bg-black/20">
            <Icon as={X} className="h-4 w-4 text-white" />
          </Pressable>
          <View className="h-14 w-14 items-center justify-center rounded-[20px] bg-white shadow-lg">
            <Icon as={Crown} className="h-7 w-7 text-violet-600" />
          </View>
          <Heading className="mt-4 text-3xl font-bold leading-tight text-white">
            Get more done with Lumen Pro
          </Heading>
          <HStack className="mt-3 items-center gap-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Icon key={i} as={Star} className="h-3.5 w-3.5 fill-amber-300 text-amber-300" />
            ))}
            <Text className="ml-1 text-sm text-white/80">4.8 · 12,400 ratings</Text>
          </HStack>
        </View>

        <VStack className="mt-6 gap-3">
          {BENEFITS.map((b) => (
            <HStack key={b.label} className="items-center gap-3">
              <View className="h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15">
                <Icon as={b.icon} className="h-[18px] w-[18px] text-violet-500" />
              </View>
              <Text className="flex-1 text-base text-foreground">{b.label}</Text>
            </HStack>
          ))}
        </VStack>

        <VStack className="mt-7 gap-4">
          <PlanCard id="yearly" selected={plan === 'yearly'} onPress={() => setPlan('yearly')} />
          <PlanCard id="monthly" selected={plan === 'monthly'} onPress={() => setPlan('monthly')} />
        </VStack>
      </ScrollView>

      <VStack className="absolute bottom-0 left-0 right-0 gap-3 border-t border-border bg-background px-5 pb-8 pt-4">
        <Button
          size="lg"
          className="h-14 rounded-2xl bg-violet-600 data-[active=true]:bg-violet-700"
        >
          <ButtonText className="text-base font-semibold text-white">{PLANS[plan].cta}</ButtonText>
        </Button>
        <Text className="text-center text-xs text-muted-foreground">{PLANS[plan].footnote}</Text>
        <HStack className="items-center justify-center gap-4">
          <Pressable>
            <Text className="text-xs font-semibold text-foreground">Restore purchases</Text>
          </Pressable>
          <Text className="text-xs text-muted-foreground">·</Text>
          <Pressable>
            <Text className="text-xs text-muted-foreground">Terms</Text>
          </Pressable>
          <Text className="text-xs text-muted-foreground">·</Text>
          <Pressable>
            <Text className="text-xs text-muted-foreground">Privacy</Text>
          </Pressable>
        </HStack>
      </VStack>
    </View>
  );
}
