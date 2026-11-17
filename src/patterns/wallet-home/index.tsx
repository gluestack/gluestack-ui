import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  Coffee,
  Eye,
  EyeOff,
  Plus,
  Repeat,
  ShoppingCart,
  Tv,
  type LucideIcon,
} from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type Transaction = {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  icon?: LucideIcon;
  iconBg?: string;
  iconColor?: string;
  avatar?: string;
};

const ACTIONS: { label: string; icon: LucideIcon }[] = [
  { label: 'Send', icon: ArrowUpRight },
  { label: 'Request', icon: ArrowDownLeft },
  { label: 'Top up', icon: Plus },
  { label: 'Exchange', icon: Repeat },
];

const TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    title: 'Daniel Okafor',
    subtitle: 'Dinner split · Today, 9:41 AM',
    amount: 48.5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
  },
  { id: '2', title: 'Fresh Market', subtitle: 'Groceries · Today, 8:12 AM', amount: -86.24, icon: ShoppingCart, iconBg: 'bg-emerald-500/15', iconColor: 'text-emerald-500' },
  { id: '3', title: 'Streamly Premium', subtitle: 'Subscription · Yesterday', amount: -15.99, icon: Tv, iconBg: 'bg-rose-500/15', iconColor: 'text-rose-500' },
  {
    id: '4',
    title: 'Sofia Martínez',
    subtitle: 'Rent share · Nov 15',
    amount: -650,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
  },
  { id: '5', title: 'Blue Door Café', subtitle: 'Coffee · Nov 15', amount: -6.4, icon: Coffee, iconBg: 'bg-amber-500/15', iconColor: 'text-amber-500' },
];

const formatAmount = (n: number) =>
  `${n > 0 ? '+' : '-'}$${Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;

function TransactionRow({ tx }: { tx: Transaction }) {
  return (
    <HStack className="items-center gap-3 py-3">
      {tx.avatar ? (
        <Avatar size="md">
          <AvatarFallbackText>{tx.title}</AvatarFallbackText>
          <AvatarImage source={{ uri: tx.avatar }} />
        </Avatar>
      ) : (
        <View className={`h-12 w-12 items-center justify-center rounded-full ${tx.iconBg ?? 'bg-muted'}`}>
          {tx.icon ? <Icon as={tx.icon} className={`h-5 w-5 ${tx.iconColor ?? 'text-foreground'}`} /> : null}
        </View>
      )}
      <VStack className="flex-1">
        <Text className="text-base font-medium text-foreground">{tx.title}</Text>
        <Text className="text-xs text-muted-foreground">{tx.subtitle}</Text>
      </VStack>
      <Text
        className={`text-base font-semibold ${tx.amount > 0 ? 'text-emerald-500' : 'text-foreground'}`}
      >
        {formatAmount(tx.amount)}
      </Text>
    </HStack>
  );
}

export default function WalletHomeScreen() {
  const [hidden, setHidden] = useState(false);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-6 px-5 pb-12 pt-6">
      <HStack className="items-center gap-3">
        <Avatar size="md">
          <AvatarFallbackText>Maya Patel</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
            }}
          />
        </Avatar>
        <VStack className="flex-1">
          <Text className="text-sm text-muted-foreground">Welcome back</Text>
          <Text className="text-lg font-semibold text-foreground">Maya Patel</Text>
        </VStack>
        <Pressable className="h-11 w-11 items-center justify-center rounded-full border border-border">
          <Icon as={Bell} className="h-5 w-5 text-foreground" />
          <View className="absolute right-3 top-2.5 h-2 w-2 rounded-full bg-rose-500" />
        </Pressable>
      </HStack>

      <View className="overflow-hidden rounded-3xl bg-violet-600 p-6">
        <View className="absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/10" />
        <View className="absolute -bottom-20 -left-10 h-44 w-44 rounded-full bg-fuchsia-400/30" />
        <HStack className="items-center justify-between">
          <Text className="text-sm font-medium text-violet-100">Total balance</Text>
          <Pressable onPress={() => setHidden((v) => !v)} hitSlop={8}>
            <Icon as={hidden ? EyeOff : Eye} className="h-5 w-5 text-violet-100" />
          </Pressable>
        </HStack>
        <Text className="mt-2 text-4xl font-bold text-white">
          {hidden ? '$ ••••••' : '$12,480.62'}
        </Text>
        <HStack className="mt-2 items-center gap-2">
          <View className="rounded-full bg-white/20 px-2 py-0.5">
            <Text className="text-xs font-semibold text-white">+3.2%</Text>
          </View>
          <Text className="text-xs text-violet-100">vs last month</Text>
        </HStack>
        <HStack className="mt-6 items-end justify-between">
          <VStack>
            <Text className="text-xs text-violet-200">Main account</Text>
            <Text className="text-sm font-medium tracking-widest text-white">•••• 4821</Text>
          </VStack>
          <HStack>
            <View className="h-7 w-7 rounded-full bg-white/40" />
            <View className="-ml-3 h-7 w-7 rounded-full bg-white/70" />
          </HStack>
        </HStack>
      </View>

      <HStack className="justify-between">
        {ACTIONS.map((a) => (
          <Pressable key={a.label} className="items-center gap-2">
            <View className="h-14 w-14 items-center justify-center rounded-2xl bg-muted">
              <Icon as={a.icon} className="h-6 w-6 text-foreground" />
            </View>
            <Text className="text-xs font-medium text-foreground">{a.label}</Text>
          </Pressable>
        ))}
      </HStack>

      <HStack className="gap-3">
        <VStack className="flex-1 gap-1 rounded-2xl border border-border bg-card p-4">
          <HStack className="items-center gap-1.5">
            <Icon as={ArrowDownLeft} className="h-4 w-4 text-emerald-500" />
            <Text className="text-xs text-muted-foreground">Income</Text>
          </HStack>
          <Text className="text-lg font-semibold text-foreground">$6,240.00</Text>
        </VStack>
        <VStack className="flex-1 gap-1 rounded-2xl border border-border bg-card p-4">
          <HStack className="items-center gap-1.5">
            <Icon as={ArrowUpRight} className="h-4 w-4 text-rose-500" />
            <Text className="text-xs text-muted-foreground">Spent</Text>
          </HStack>
          <Text className="text-lg font-semibold text-foreground">$2,918.37</Text>
        </VStack>
      </HStack>

      <VStack>
        <HStack className="items-center justify-between">
          <Text className="text-lg font-semibold text-foreground">Recent activity</Text>
          <Pressable>
            <Text className="text-sm text-muted-foreground">See all</Text>
          </Pressable>
        </HStack>
        {TRANSACTIONS.map((tx) => (
          <TransactionRow key={tx.id} tx={tx} />
        ))}
      </VStack>
    </ScrollView>
  );
}
