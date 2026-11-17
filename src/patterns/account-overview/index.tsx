import { ScrollView, View } from 'react-native';
import {
  Bell,
  ChevronRight,
  Crown,
  Gift,
  HelpCircle,
  Home,
  Heart,
  LogOut,
  MapPin,
  Package,
  Pencil,
  Search,
  ShoppingBag,
  User,
  Wallet,
  type LucideIcon,
} from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const STATS = [
  { label: 'Orders', value: '38' },
  { label: 'Wishlist', value: '12' },
  { label: 'Reviews', value: '9' },
];

const MENU: { icon: LucideIcon; label: string; value?: string; badge?: string }[] = [
  { icon: Package, label: 'My orders', badge: '2 on the way' },
  { icon: Wallet, label: 'Payment methods', value: 'Visa •• 4242' },
  { icon: MapPin, label: 'Addresses', value: '2 saved' },
  { icon: Gift, label: 'Refer a friend', value: 'Get $20' },
  { icon: Bell, label: 'Notifications' },
  { icon: HelpCircle, label: 'Help & support' },
];

const TABS: { icon: LucideIcon; label: string }[] = [
  { icon: Home, label: 'Home' },
  { icon: Search, label: 'Explore' },
  { icon: ShoppingBag, label: 'Bag' },
  { icon: Heart, label: 'Saved' },
  { icon: User, label: 'Account' },
];

function MenuRow({ item }: { item: (typeof MENU)[number] }) {
  return (
    <Pressable className="flex-row items-center gap-3 px-4 py-3.5 data-[active=true]:bg-muted">
      <View className="h-9 w-9 items-center justify-center rounded-xl bg-muted">
        <Icon as={item.icon} className="h-[18px] w-[18px] text-foreground" />
      </View>
      <Text className="flex-1 text-base text-foreground">{item.label}</Text>
      {item.badge ? (
        <View className="rounded-full bg-emerald-500/15 px-2 py-0.5">
          <Text className="text-xs font-semibold text-emerald-600">{item.badge}</Text>
        </View>
      ) : null}
      {item.value ? <Text className="text-sm text-muted-foreground">{item.value}</Text> : null}
      <Icon as={ChevronRight} className="h-4 w-4 text-muted-foreground" />
    </Pressable>
  );
}

export default function AccountOverviewScreen() {
  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="gap-6 px-5 pb-32 pt-6">
        <HStack className="items-center justify-between">
          <Heading className="text-3xl font-bold text-foreground">Account</Heading>
          <Pressable
            aria-label="Notifications"
            className="h-10 w-10 items-center justify-center rounded-full border border-border bg-card"
          >
            <Icon as={Bell} className="h-5 w-5 text-foreground" />
            <View className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500" />
          </Pressable>
        </HStack>

        <VStack className="gap-5">
          <HStack className="items-center gap-4">
            <Avatar size="lg" className="h-20 w-20">
              <AvatarFallbackText className="text-lg">Claire Bennett</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
                }}
              />
            </Avatar>
            <VStack className="flex-1 gap-0.5">
              <Text className="text-xl font-bold text-foreground">Claire Bennett</Text>
              <Text className="text-sm text-muted-foreground">claire.bennett@example.com</Text>
              <Text className="text-xs text-muted-foreground">Member since March 2023</Text>
            </VStack>
            <Pressable
              aria-label="Edit profile"
              className="h-9 w-9 items-center justify-center rounded-full bg-muted"
            >
              <Icon as={Pencil} className="h-4 w-4 text-foreground" />
            </Pressable>
          </HStack>

          <HStack className="rounded-2xl border border-border bg-card py-4">
            {STATS.map((s, i) => (
              <VStack
                key={s.label}
                className={`flex-1 items-center gap-0.5 ${i > 0 ? 'border-l border-border' : ''}`}
              >
                <Text className="text-xl font-bold text-foreground">{s.value}</Text>
                <Text className="text-xs text-muted-foreground">{s.label}</Text>
              </VStack>
            ))}
          </HStack>
        </VStack>

        <VStack className="gap-4 overflow-hidden rounded-3xl bg-zinc-900 p-5 dark:bg-zinc-800">
          <View className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-400/10" />
          <View className="absolute -bottom-16 right-12 h-32 w-32 rounded-full bg-amber-400/5" />
          <HStack className="items-center justify-between">
            <HStack className="items-center gap-2">
              <View className="h-8 w-8 items-center justify-center rounded-full bg-amber-400">
                <Icon as={Crown} className="h-4 w-4 text-zinc-900" />
              </View>
              <Text className="text-base font-semibold text-white">Gold member</Text>
            </HStack>
            <Text className="text-xs font-medium text-white/60">Renews Mar 2027</Text>
          </HStack>
          <VStack className="gap-1">
            <Text className="text-3xl font-bold text-white">
              2,480 <Text className="text-base font-medium text-white/60">points</Text>
            </Text>
            <Text className="text-sm text-white/60">520 points to Platinum · free express shipping</Text>
          </VStack>
          <Progress value={83} className="h-2 bg-white/15">
            <ProgressFilledTrack className="rounded-full bg-amber-400" />
          </Progress>
        </VStack>

        <View className="overflow-hidden rounded-2xl border border-border bg-card">
          {MENU.map((item, i) => (
            <View key={item.label}>
              {i > 0 ? <View className="ml-16 h-px bg-border" /> : null}
              <MenuRow item={item} />
            </View>
          ))}
        </View>

        <Pressable className="flex-row items-center justify-center gap-2 rounded-2xl bg-destructive/10 py-3.5">
          <Icon as={LogOut} className="h-4 w-4 text-destructive" />
          <Text className="text-base font-semibold text-destructive">Sign out</Text>
        </Pressable>
      </ScrollView>

      <HStack className="absolute bottom-0 left-0 right-0 justify-around border-t border-border bg-background px-2 pb-8 pt-3">
        {TABS.map((tab) => {
          const active = tab.label === 'Account';
          return (
            <Pressable key={tab.label} className="items-center gap-1 px-3">
              <Icon
                as={tab.icon}
                className={`h-6 w-6 ${active ? 'text-foreground' : 'text-muted-foreground'}`}
              />
              <Text
                className={`text-[11px] ${active ? 'font-semibold text-foreground' : 'text-muted-foreground'}`}
              >
                {tab.label}
              </Text>
            </Pressable>
          );
        })}
      </HStack>
    </View>
  );
}
