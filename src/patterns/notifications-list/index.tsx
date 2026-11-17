import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  AtSign,
  CheckCheck,
  Heart,
  MessageCircle,
  Package,
  Settings,
  UserPlus,
  type LucideIcon,
} from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const photo = (id: string) => `https://images.unsplash.com/photo-${id}?w=200&q=80`;

type Kind = 'like' | 'comment' | 'follow' | 'mention' | 'order';

const KIND: Record<Kind, { icon: LucideIcon; bg: string }> = {
  like: { icon: Heart, bg: 'bg-rose-500' },
  comment: { icon: MessageCircle, bg: 'bg-sky-500' },
  follow: { icon: UserPlus, bg: 'bg-violet-500' },
  mention: { icon: AtSign, bg: 'bg-amber-500' },
  order: { icon: Package, bg: 'bg-emerald-500' },
};

type Notification = {
  id: string;
  kind: Kind;
  actor: string;
  avatar?: string;
  text: string;
  time: string;
  thumb?: string;
  group: 'Today' | 'Earlier';
  read: boolean;
};

const INITIAL: Notification[] = [
  { id: '1', kind: 'like', actor: 'Sofia Martinez', avatar: photo('1494790108377-be9c29b29330'), text: 'and 24 others liked your photo', time: '4m', thumb: photo('1506905925346-21bda4d32df4'), group: 'Today', read: false },
  { id: '2', kind: 'follow', actor: 'James Carter', avatar: photo('1500648767791-00dcc994a43e'), text: 'started following you', time: '32m', group: 'Today', read: false },
  { id: '3', kind: 'comment', actor: 'Priya Nair', avatar: photo('1438761681033-6461ffad8d80'), text: 'commented: "Saving this for September!"', time: '1h', thumb: photo('1506905925346-21bda4d32df4'), group: 'Today', read: false },
  { id: '4', kind: 'order', actor: 'Order #4821', text: 'is out for delivery and arrives by 6 pm', time: '3h', group: 'Today', read: true },
  { id: '5', kind: 'mention', actor: 'Daniel Okafor', avatar: photo('1507003211169-0a1dd7228f2d'), text: 'mentioned you in Weekend hike crew', time: 'Mon', group: 'Earlier', read: true },
  { id: '6', kind: 'like', actor: 'Emma Lindqvist', avatar: photo('1534528741775-53994a69daeb'), text: 'liked your comment', time: 'Sun', thumb: photo('1546069901-ba9599a7e63c'), group: 'Earlier', read: true },
];

function NotificationRow({ n, onPress }: { n: Notification; onPress: () => void }) {
  const kind = KIND[n.kind];
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center gap-3 rounded-2xl px-3 py-3 data-[active=true]:bg-muted ${
        n.read ? '' : 'bg-primary/5'
      }`}
    >
      <View>
        {n.avatar ? (
          <Avatar size="md">
            <AvatarFallbackText>{n.actor}</AvatarFallbackText>
            <AvatarImage source={{ uri: n.avatar }} />
          </Avatar>
        ) : (
          <View className="h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Icon as={Package} className="h-5 w-5 text-foreground" />
          </View>
        )}
        <View
          className={`absolute -bottom-0.5 -right-0.5 h-5 w-5 items-center justify-center rounded-full border-2 border-background ${kind.bg}`}
        >
          <Icon as={kind.icon} className="h-2.5 w-2.5 text-white" />
        </View>
      </View>
      <VStack className="flex-1 gap-0.5">
        <Text className="text-sm leading-5 text-foreground" numberOfLines={2}>
          <Text className="text-sm font-semibold text-foreground">{n.actor} </Text>
          {n.text}
        </Text>
        <Text className="text-xs text-muted-foreground">{n.time}</Text>
      </VStack>
      {n.kind === 'follow' ? (
        <Button size="sm" className="h-8 rounded-full px-4">
          <ButtonText className="text-xs font-semibold">Follow back</ButtonText>
        </Button>
      ) : n.thumb ? (
        <Image source={{ uri: n.thumb }} alt="" size="none" className="h-11 w-11 rounded-lg" />
      ) : null}
      {!n.read ? <View className="h-2 w-2 rounded-full bg-sky-500" /> : null}
    </Pressable>
  );
}

export default function NotificationsListScreen() {
  const [items, setItems] = useState(INITIAL);
  const unread = items.filter((n) => !n.read).length;

  const markRead = (id: string) =>
    setItems((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-5 px-5 pb-12 pt-6">
      <HStack className="items-center justify-between">
        <HStack className="items-center gap-2">
          <Heading className="text-3xl font-bold text-foreground">Notifications</Heading>
          {unread > 0 ? (
            <View className="h-6 min-w-6 items-center justify-center rounded-full bg-rose-500 px-1.5">
              <Text className="text-xs font-bold text-white">{unread}</Text>
            </View>
          ) : null}
        </HStack>
        <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-muted">
          <Icon as={Settings} className="h-5 w-5 text-foreground" />
        </Pressable>
      </HStack>

      <Pressable
        disabled={unread === 0}
        onPress={() => setItems((prev) => prev.map((n) => ({ ...n, read: true })))}
        className="flex-row items-center gap-1.5 self-start data-[disabled=true]:opacity-40"
      >
        <Icon as={CheckCheck} className="h-4 w-4 text-sky-500" />
        <Text className="text-sm font-medium text-sky-500">Mark all as read</Text>
      </Pressable>

      {(['Today', 'Earlier'] as const).map((group) => (
        <VStack key={group} className="gap-1">
          <Text className="pb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {group}
          </Text>
          <VStack className="-mx-3 gap-1">
            {items
              .filter((n) => n.group === group)
              .map((n) => (
                <NotificationRow key={n.id} n={n} onPress={() => markRead(n.id)} />
              ))}
          </VStack>
        </VStack>
      ))}
    </ScrollView>
  );
}
