import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  ArrowUp,
  ChevronRight,
  FileText,
  Image as ImageIcon,
  Languages,
  Lightbulb,
  Menu,
  MessageSquare,
  Mic,
  Plus,
  type LucideIcon,
} from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { VStack } from '@/components/ui/vstack';

type QuickAction = { icon: LucideIcon; title: string; hint: string; tint: string; color: string };

const QUICK_ACTIONS: QuickAction[] = [
  { icon: FileText, title: 'Summarize', hint: 'a PDF or long article', tint: 'bg-sky-500/15', color: 'text-sky-500' },
  { icon: Lightbulb, title: 'Brainstorm', hint: 'names for my bakery', tint: 'bg-amber-500/15', color: 'text-amber-500' },
  { icon: ImageIcon, title: 'Describe', hint: 'what is in a photo', tint: 'bg-rose-500/15', color: 'text-rose-500' },
  { icon: Languages, title: 'Translate', hint: 'a menu into Spanish', tint: 'bg-emerald-500/15', color: 'text-emerald-500' },
];

const RECENT = [
  { title: 'Weekly meal prep under $60', time: '2h ago' },
  { title: 'Cover letter for product designer role', time: 'Yesterday' },
  { title: 'Explain compound interest simply', time: 'Mon' },
];

function QuickActionCard({ action, onPress }: { action: QuickAction; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      className="w-[48%] gap-3 rounded-2xl border border-border bg-card p-4 data-[active=true]:bg-muted"
    >
      <View className={`h-10 w-10 items-center justify-center rounded-xl ${action.tint}`}>
        <Icon as={action.icon} className={`h-5 w-5 ${action.color}`} />
      </View>
      <VStack className="gap-0.5">
        <Text className="text-base font-semibold text-foreground">{action.title}</Text>
        <Text className="text-sm leading-5 text-muted-foreground">{action.hint}</Text>
      </VStack>
    </Pressable>
  );
}

export default function AiAssistantHomeScreen() {
  const [prompt, setPrompt] = useState('');
  const canSend = prompt.trim().length > 0;

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-7 px-5 pb-12 pt-6">
      <HStack className="items-center justify-between">
        <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-muted">
          <Icon as={Menu} className="h-5 w-5 text-foreground" />
        </Pressable>
        <Pressable className="flex-row items-center gap-1.5 rounded-full bg-violet-500/15 px-3 py-1.5">
          <View className="h-1.5 w-1.5 rounded-full bg-violet-500" />
          <Text className="text-xs font-semibold text-violet-500">Pro · 412 credits</Text>
        </Pressable>
        <Avatar size="sm">
          <AvatarFallbackText>Maya Chen</AvatarFallbackText>
          <AvatarImage
            source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80' }}
          />
        </Avatar>
      </HStack>

      <VStack className="gap-1">
        <Text className="text-lg text-muted-foreground">Good morning, Maya</Text>
        <Heading className="text-3xl font-bold leading-tight text-foreground">
          What can I help you with today?
        </Heading>
      </VStack>

      <View className="gap-3 rounded-3xl border border-border bg-card p-3">
        <Textarea className="h-20 border-0 bg-transparent shadow-none dark:bg-transparent">
          <TextareaInput
            placeholder="Ask anything, or describe a task"
            value={prompt}
            onChangeText={setPrompt}
            className="text-base"
          />
        </Textarea>
        <HStack className="items-center justify-between">
          <HStack className="gap-2">
            <Pressable className="h-9 w-9 items-center justify-center rounded-full border border-border">
              <Icon as={Plus} className="h-4 w-4 text-foreground" />
            </Pressable>
            <Pressable className="flex-row items-center gap-1.5 rounded-full border border-border px-3">
              <Icon as={Lightbulb} className="h-4 w-4 text-foreground" />
              <Text className="text-sm text-foreground">Think deeper</Text>
            </Pressable>
          </HStack>
          <Pressable
            onPress={() => setPrompt('')}
            className={`h-9 w-9 items-center justify-center rounded-full ${canSend ? 'bg-primary' : 'bg-muted'}`}
          >
            <Icon
              as={canSend ? ArrowUp : Mic}
              className={`h-4 w-4 ${canSend ? 'text-primary-foreground' : 'text-foreground'}`}
            />
          </Pressable>
        </HStack>
      </View>

      <HStack className="flex-wrap justify-between gap-y-3">
        {QUICK_ACTIONS.map((action) => (
          <QuickActionCard
            key={action.title}
            action={action}
            onPress={() => setPrompt(`${action.title} ${action.hint}`)}
          />
        ))}
      </HStack>

      <VStack className="gap-3">
        <HStack className="items-center justify-between">
          <Text className="text-lg font-semibold text-foreground">Recent chats</Text>
          <Pressable>
            <Text className="text-sm font-medium text-muted-foreground">See all</Text>
          </Pressable>
        </HStack>
        <View className="overflow-hidden rounded-2xl border border-border bg-card">
          {RECENT.map((chat, i) => (
            <Pressable
              key={chat.title}
              className={`flex-row items-center gap-3 px-4 py-3.5 data-[active=true]:bg-muted ${
                i > 0 ? 'border-t border-border' : ''
              }`}
            >
              <Icon as={MessageSquare} className="h-[18px] w-[18px] text-muted-foreground" />
              <VStack className="flex-1">
                <Text className="text-[15px] text-foreground" numberOfLines={1}>
                  {chat.title}
                </Text>
                <Text className="text-xs text-muted-foreground">{chat.time}</Text>
              </VStack>
              <Icon as={ChevronRight} className="h-4 w-4 text-muted-foreground" />
            </Pressable>
          ))}
        </View>
      </VStack>
    </ScrollView>
  );
}
