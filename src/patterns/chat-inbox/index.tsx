import { useMemo, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { CheckCheck, PenSquare, Pin, Search, X } from 'lucide-react-native';
import { Avatar, AvatarBadge, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const photo = (id: string) => `https://images.unsplash.com/photo-${id}?w=200&q=80`;

type Conversation = {
  id: string;
  name: string;
  avatar?: string;
  preview: string;
  time: string;
  unread: number;
  online: boolean;
  pinned?: boolean;
  typing?: boolean;
  sentByMe?: boolean;
};

const CONVERSATIONS: Conversation[] = [
  { id: '1', name: 'Sofia Martinez', avatar: photo('1494790108377-be9c29b29330'), preview: 'Running 5 min late, grab us a table?', time: '9:41', unread: 2, online: true, pinned: true },
  { id: '2', name: 'Weekend hike crew', preview: 'Liam: Trailhead at 7, bring layers', time: '9:12', unread: 14, online: false, pinned: true },
  { id: '3', name: 'James Carter', avatar: photo('1500648767791-00dcc994a43e'), preview: 'typing...', time: '8:55', unread: 0, online: true, typing: true },
  { id: '4', name: 'Priya Nair', avatar: photo('1438761681033-6461ffad8d80'), preview: 'Sent you the slides for Thursday', time: 'Yesterday', unread: 1, online: false },
  { id: '5', name: 'Daniel Okafor', avatar: photo('1507003211169-0a1dd7228f2d'), preview: 'Perfect, see you then', time: 'Yesterday', unread: 0, online: true, sentByMe: true },
  { id: '6', name: 'Emma Lindqvist', avatar: photo('1534528741775-53994a69daeb'), preview: 'Haha that is exactly what I said', time: 'Sat', unread: 0, online: false, sentByMe: true },
];

const FILTERS = ['All', 'Unread', 'Groups'] as const;

function ConversationRow({ c }: { c: Conversation }) {
  const unread = c.unread > 0;
  return (
    <Pressable className="flex-row items-center gap-3 rounded-2xl px-2 py-3 data-[active=true]:bg-muted">
      <Avatar size="md">
        <AvatarFallbackText className="text-sm">{c.name}</AvatarFallbackText>
        {c.avatar ? <AvatarImage source={{ uri: c.avatar }} /> : null}
        {c.online ? <AvatarBadge /> : null}
      </Avatar>
      <VStack className="flex-1 gap-1">
        <HStack className="items-center justify-between gap-2">
          <HStack className="flex-1 items-center gap-1.5">
            <Text className="shrink text-base font-semibold text-foreground" numberOfLines={1}>
              {c.name}
            </Text>
            {c.pinned ? <Icon as={Pin} className="h-3 w-3 text-muted-foreground" /> : null}
          </HStack>
          <Text className={`text-xs ${unread ? 'font-semibold text-primary' : 'text-muted-foreground'}`}>
            {c.time}
          </Text>
        </HStack>
        <HStack className="items-center gap-2">
          {c.sentByMe ? <Icon as={CheckCheck} className="h-4 w-4 text-sky-500" /> : null}
          <Text
            numberOfLines={1}
            className={`flex-1 text-sm ${
              c.typing
                ? 'italic text-emerald-500'
                : unread
                  ? 'font-medium text-foreground'
                  : 'text-muted-foreground'
            }`}
          >
            {c.preview}
          </Text>
          {unread ? (
            <View className="h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5">
              <Text className="text-[11px] font-bold text-primary-foreground">{c.unread}</Text>
            </View>
          ) : null}
        </HStack>
      </VStack>
    </Pressable>
  );
}

export default function ChatInboxScreen() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All');

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CONVERSATIONS.filter((c) => {
      if (filter === 'Unread' && c.unread === 0) return false;
      if (filter === 'Groups' && c.avatar) return false;
      return !q || c.name.toLowerCase().includes(q) || c.preview.toLowerCase().includes(q);
    });
  }, [query, filter]);

  const people = CONVERSATIONS.filter((c) => c.avatar);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-5 px-5 pb-12 pt-6">
      <HStack className="items-center justify-between">
        <Heading className="text-3xl font-bold text-foreground">Messages</Heading>
        <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-primary">
          <Icon as={PenSquare} className="h-[18px] w-[18px] text-primary-foreground" />
        </Pressable>
      </HStack>

      <Input className="h-11 rounded-xl border-0 bg-muted dark:bg-muted">
        <InputSlot className="pl-1">
          <InputIcon as={Search} className="h-[18px] w-[18px] text-muted-foreground" />
        </InputSlot>
        <InputField placeholder="Search messages" value={query} onChangeText={setQuery} className="text-base" />
        {query ? (
          <InputSlot onPress={() => setQuery('')}>
            <InputIcon as={X} className="text-muted-foreground" />
          </InputSlot>
        ) : null}
      </Input>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-4">
        {people.map((c) => (
          <Pressable key={c.id} className="w-16 items-center gap-1.5">
            <Avatar size="lg">
              <AvatarFallbackText>{c.name}</AvatarFallbackText>
              <AvatarImage source={{ uri: c.avatar }} />
              {c.online ? <AvatarBadge /> : null}
            </Avatar>
            <Text className="text-xs text-foreground" numberOfLines={1}>
              {c.name.split(' ')[0]}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <HStack className="gap-2">
        {FILTERS.map((f) => (
          <Pressable
            key={f}
            onPress={() => setFilter(f)}
            className={`rounded-full px-4 py-1.5 ${f === filter ? 'bg-primary' : 'bg-muted'}`}
          >
            <Text
              className={`text-sm font-medium ${f === filter ? 'text-primary-foreground' : 'text-foreground'}`}
            >
              {f}
            </Text>
          </Pressable>
        ))}
      </HStack>

      <VStack className="-mx-2">
        {visible.map((c) => (
          <ConversationRow key={c.id} c={c} />
        ))}
        {visible.length === 0 ? (
          <Text className="py-10 text-center text-sm text-muted-foreground">
            No conversations match "{query}"
          </Text>
        ) : null}
      </VStack>
    </ScrollView>
  );
}
