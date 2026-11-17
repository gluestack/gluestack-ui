import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  ArrowDownLeft,
  Briefcase,
  Car,
  Coffee,
  Download,
  Film,
  Plane,
  Search,
  ShoppingBag,
  Utensils,
  Zap,
  type LucideIcon,
} from 'lucide-react-native';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type Filter = 'All' | 'Income' | 'Expenses';

type Transaction = {
  id: string;
  date: string;
  merchant: string;
  category: string;
  time: string;
  amount: number;
  icon: LucideIcon;
};

const FILTERS: Filter[] = ['All', 'Income', 'Expenses'];

const TRANSACTIONS: Transaction[] = [
  { id: '1', date: 'Today', merchant: 'Northwind Studio', category: 'Salary', time: '9:00 AM', amount: 4250, icon: Briefcase },
  { id: '2', date: 'Today', merchant: 'Blue Door Café', category: 'Food & drink', time: '8:14 AM', amount: -6.4, icon: Coffee },
  { id: '3', date: 'Yesterday', merchant: 'Metro Rideshare', category: 'Transport', time: '11:42 PM', amount: -18.75, icon: Car },
  { id: '4', date: 'Yesterday', merchant: 'Osteria Lucca', category: 'Restaurants', time: '8:30 PM', amount: -92.4, icon: Utensils },
  { id: '5', date: 'Yesterday', merchant: 'Daniel Okafor', category: 'Transfer in', time: '10:05 AM', amount: 48.5, icon: ArrowDownLeft },
  { id: '6', date: 'Sat, Nov 15', merchant: 'Harbor Lights Cinema', category: 'Entertainment', time: '7:10 PM', amount: -31, icon: Film },
  { id: '7', date: 'Sat, Nov 15', merchant: 'Linen & Loom', category: 'Shopping', time: '2:48 PM', amount: -128.99, icon: ShoppingBag },
  { id: '8', date: 'Sat, Nov 15', merchant: 'Bay Power & Light', category: 'Utilities', time: '9:00 AM', amount: -74.2, icon: Zap },
  { id: '9', date: 'Thu, Nov 13', merchant: 'Skyline Air', category: 'Travel', time: '6:22 PM', amount: -412.6, icon: Plane },
  { id: '10', date: 'Thu, Nov 13', merchant: 'Tax refund', category: 'Transfer in', time: '12:00 PM', amount: 320, icon: ArrowDownLeft },
];

const money = (n: number) =>
  `${n > 0 ? '+' : '-'}$${Math.abs(n).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

function TransactionRow({ tx }: { tx: Transaction }) {
  const income = tx.amount > 0;
  return (
    <HStack className="items-center gap-3 px-4 py-3">
      <View
        className={`h-11 w-11 items-center justify-center rounded-2xl ${
          income ? 'bg-emerald-500/15' : 'bg-muted'
        }`}
      >
        <Icon as={tx.icon} className={`h-5 w-5 ${income ? 'text-emerald-500' : 'text-foreground'}`} />
      </View>
      <VStack className="flex-1">
        <Text className="text-[15px] font-medium text-foreground" numberOfLines={1}>
          {tx.merchant}
        </Text>
        <Text className="text-xs text-muted-foreground">
          {tx.category} · {tx.time}
        </Text>
      </VStack>
      <Text className={`text-[15px] font-semibold ${income ? 'text-emerald-500' : 'text-foreground'}`}>
        {money(tx.amount)}
      </Text>
    </HStack>
  );
}

export default function TransactionHistoryScreen() {
  const [filter, setFilter] = useState<Filter>('All');
  const [query, setQuery] = useState('');

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const visible = TRANSACTIONS.filter(
      (t) =>
        (filter === 'All' || (filter === 'Income' ? t.amount > 0 : t.amount < 0)) &&
        (t.merchant.toLowerCase().includes(q) || t.category.toLowerCase().includes(q))
    );
    const byDate = new Map<string, Transaction[]>();
    visible.forEach((t) => byDate.set(t.date, [...(byDate.get(t.date) ?? []), t]));
    return Array.from(byDate.entries());
  }, [filter, query]);

  const income = TRANSACTIONS.filter((t) => t.amount > 0).reduce((s, t) => s + t.amount, 0);
  const spent = TRANSACTIONS.filter((t) => t.amount < 0).reduce((s, t) => s - t.amount, 0);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-5 px-5 pb-12 pt-6">
      <HStack className="items-center justify-between">
        <Heading className="text-3xl font-bold text-foreground">Activity</Heading>
        <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border">
          <Icon as={Download} className="h-[18px] w-[18px] text-foreground" />
        </Pressable>
      </HStack>

      <HStack className="gap-3">
        <VStack className="flex-1 gap-1 rounded-2xl bg-emerald-500/10 p-4">
          <Text className="text-xs font-medium text-emerald-500">Money in · Nov</Text>
          <Text className="text-xl font-bold text-foreground">{money(income)}</Text>
        </VStack>
        <VStack className="flex-1 gap-1 rounded-2xl bg-muted p-4">
          <Text className="text-xs font-medium text-muted-foreground">Money out · Nov</Text>
          <Text className="text-xl font-bold text-foreground">{money(-spent)}</Text>
        </VStack>
      </HStack>

      <Input className="h-12 rounded-2xl bg-muted">
        <InputSlot className="pl-1">
          <InputIcon as={Search} className="h-5 w-5 text-muted-foreground" />
        </InputSlot>
        <InputField
          placeholder="Search merchants or categories"
          value={query}
          onChangeText={setQuery}
          className="text-base"
        />
      </Input>

      <HStack className="rounded-2xl bg-muted p-1">
        {FILTERS.map((f) => (
          <Pressable
            key={f}
            onPress={() => setFilter(f)}
            className={`flex-1 items-center rounded-xl py-2 ${f === filter ? 'bg-background' : ''}`}
          >
            <Text
              className={`text-sm font-medium ${
                f === filter ? 'text-foreground' : 'text-muted-foreground'
              }`}
            >
              {f}
            </Text>
          </Pressable>
        ))}
      </HStack>

      {groups.map(([date, items]) => {
        const net = items.reduce((s, t) => s + t.amount, 0);
        return (
          <VStack key={date} className="gap-2">
            <HStack className="justify-between px-1">
              <Text className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {date}
              </Text>
              <Text className="text-xs font-medium text-muted-foreground">{money(net)}</Text>
            </HStack>
            <View className="overflow-hidden rounded-2xl border border-border bg-card">
              {items.map((tx, i) => (
                <View key={tx.id}>
                  {i > 0 ? <View className="ml-[72px] h-px bg-border" /> : null}
                  <TransactionRow tx={tx} />
                </View>
              ))}
            </View>
          </VStack>
        );
      })}

      {groups.length === 0 ? (
        <Text className="py-10 text-center text-sm text-muted-foreground">
          No transactions match your filters.
        </Text>
      ) : null}
    </ScrollView>
  );
}
