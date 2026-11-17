import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Calendar,
  DollarSign,
  Percent,
  ShoppingBag,
  TrendingDown,
  TrendingUp,
  Users,
  type LucideIcon,
} from 'lucide-react-native';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type Period = '7D' | '30D' | '90D';

type Kpi = { label: string; value: string; delta: number; icon: LucideIcon };

const DATA: Record<Period, { kpis: Kpi[]; bars: { label: string; value: number }[] }> = {
  '7D': {
    kpis: [
      { label: 'Revenue', value: '$18.4k', delta: 12.5, icon: DollarSign },
      { label: 'Orders', value: '326', delta: 8.1, icon: ShoppingBag },
      { label: 'Visitors', value: '9,842', delta: -3.4, icon: Users },
      { label: 'Conversion', value: '3.31%', delta: 0.6, icon: Percent },
    ],
    bars: [
      { label: 'Mon', value: 2140 },
      { label: 'Tue', value: 2680 },
      { label: 'Wed', value: 2310 },
      { label: 'Thu', value: 3020 },
      { label: 'Fri', value: 3460 },
      { label: 'Sat', value: 2890 },
      { label: 'Sun', value: 1900 },
    ],
  },
  '30D': {
    kpis: [
      { label: 'Revenue', value: '$72.9k', delta: 9.2, icon: DollarSign },
      { label: 'Orders', value: '1,288', delta: 5.7, icon: ShoppingBag },
      { label: 'Visitors', value: '41.2k', delta: 4.1, icon: Users },
      { label: 'Conversion', value: '3.12%', delta: -0.3, icon: Percent },
    ],
    bars: [
      { label: 'W1', value: 15800 },
      { label: 'W2', value: 17250 },
      { label: 'W3', value: 19400 },
      { label: 'W4', value: 20450 },
    ],
  },
  '90D': {
    kpis: [
      { label: 'Revenue', value: '$204k', delta: 21.8, icon: DollarSign },
      { label: 'Orders', value: '3,904', delta: 14.3, icon: ShoppingBag },
      { label: 'Visitors', value: '118k', delta: 11.0, icon: Users },
      { label: 'Conversion', value: '3.30%', delta: 1.2, icon: Percent },
    ],
    bars: [
      { label: 'Sep', value: 58200 },
      { label: 'Oct', value: 69300 },
      { label: 'Nov', value: 76500 },
    ],
  },
};

const TOP_PRODUCTS = [
  { name: 'Suede Derby', sold: 412, revenue: '$65.5k', share: 82 },
  { name: 'Heavyweight Hoodie', sold: 368, revenue: '$26.5k', share: 64 },
  { name: 'Canvas Day Pack', sold: 251, revenue: '$22.3k', share: 47 },
  { name: 'Field Chronograph', sold: 88, revenue: '$21.6k', share: 30 },
];

const compact = (n: number) => (n >= 1000 ? `$${(n / 1000).toFixed(1)}k` : `$${n}`);

function KpiCard({ kpi }: { kpi: Kpi }) {
  const up = kpi.delta >= 0;
  return (
    <VStack className="w-[48%] gap-3 rounded-2xl border border-border bg-card p-4">
      <HStack className="items-center justify-between">
        <View className="h-8 w-8 items-center justify-center rounded-lg bg-muted">
          <Icon as={kpi.icon} className="h-4 w-4 text-foreground" />
        </View>
        <HStack
          className={`items-center gap-1 rounded-full px-2 py-0.5 ${
            up ? 'bg-emerald-500/15' : 'bg-rose-500/15'
          }`}
        >
          <Icon
            as={up ? TrendingUp : TrendingDown}
            className={`h-3 w-3 ${up ? 'text-emerald-500' : 'text-rose-500'}`}
          />
          <Text className={`text-xs font-semibold ${up ? 'text-emerald-500' : 'text-rose-500'}`}>
            {up ? '+' : ''}
            {kpi.delta}%
          </Text>
        </HStack>
      </HStack>
      <VStack>
        <Text className="text-xs text-muted-foreground">{kpi.label}</Text>
        <Text className="text-2xl font-bold text-foreground">{kpi.value}</Text>
      </VStack>
    </VStack>
  );
}

export default function AnalyticsDashboardScreen() {
  const [period, setPeriod] = useState<Period>('7D');
  const { kpis, bars } = DATA[period];
  const [selected, setSelected] = useState<number | null>(null);
  const max = Math.max(...bars.map((b) => b.value));
  const active = selected !== null && selected < bars.length ? selected : bars.findIndex((b) => b.value === max);
  const total = bars.reduce((s, b) => s + b.value, 0);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-5 px-5 pb-12 pt-6">
      <HStack className="items-center justify-between">
        <VStack>
          <Text className="text-sm text-muted-foreground">Store overview</Text>
          <Heading className="text-2xl font-bold text-foreground">Analytics</Heading>
        </VStack>
        <Pressable className="h-10 flex-row items-center gap-2 rounded-full border border-border px-3">
          <Icon as={Calendar} className="h-4 w-4 text-foreground" />
          <Text className="text-sm font-medium text-foreground">Nov 2026</Text>
        </Pressable>
      </HStack>

      <HStack className="rounded-2xl bg-muted p-1">
        {(Object.keys(DATA) as Period[]).map((p) => (
          <Pressable
            key={p}
            onPress={() => {
              setPeriod(p);
              setSelected(null);
            }}
            className={`flex-1 items-center rounded-xl py-2 ${p === period ? 'bg-background' : ''}`}
          >
            <Text
              className={`text-sm font-medium ${
                p === period ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {p}
            </Text>
          </Pressable>
        ))}
      </HStack>

      <View className="flex-row flex-wrap justify-between gap-y-3">
        {kpis.map((k) => (
          <KpiCard key={k.label} kpi={k} />
        ))}
      </View>

      <VStack className="gap-4 rounded-3xl border border-border bg-card p-5">
        <HStack className="items-start justify-between">
          <VStack>
            <Text className="text-sm text-muted-foreground">Revenue</Text>
            <Text className="text-2xl font-bold text-foreground">{compact(total)}</Text>
          </VStack>
          <VStack className="items-end">
            <Text className="text-xs text-muted-foreground">{bars[active].label}</Text>
            <Text className="text-base font-semibold text-violet-500">
              {compact(bars[active].value)}
            </Text>
          </VStack>
        </HStack>
        <HStack className="h-40 items-end gap-2">
          {bars.map((b, i) => (
            <Pressable key={b.label} onPress={() => setSelected(i)} className="h-full flex-1 justify-end gap-2">
              <View
                style={{ height: `${Math.max(8, (b.value / max) * 100)}%` }}
                className={`w-full rounded-lg ${i === active ? 'bg-violet-500' : 'bg-violet-500/25'}`}
              />
            </Pressable>
          ))}
        </HStack>
        <HStack className="gap-2">
          {bars.map((b, i) => (
            <Text
              key={b.label}
              className={`flex-1 text-center text-xs ${
                i === active ? 'font-semibold text-foreground' : 'text-muted-foreground'
              }`}
            >
              {b.label}
            </Text>
          ))}
        </HStack>
      </VStack>

      <VStack className="gap-4 rounded-3xl border border-border bg-card p-5">
        <HStack className="items-center justify-between">
          <Text className="text-base font-semibold text-foreground">Top products</Text>
          <Text className="text-xs text-muted-foreground">Units sold</Text>
        </HStack>
        {TOP_PRODUCTS.map((p, i) => (
          <VStack key={p.name} className="gap-2">
            <HStack className="items-center gap-3">
              <Text className="w-4 text-sm font-semibold text-muted-foreground">{i + 1}</Text>
              <Text className="flex-1 text-sm font-medium text-foreground">{p.name}</Text>
              <Text className="text-xs text-muted-foreground">{p.revenue}</Text>
              <Text className="w-10 text-right text-sm font-semibold text-foreground">{p.sold}</Text>
            </HStack>
            <Progress value={p.share} className="ml-7 h-1.5 w-auto bg-muted">
              <ProgressFilledTrack className="bg-violet-500" />
            </Progress>
          </VStack>
        ))}
      </VStack>
    </ScrollView>
  );
}
