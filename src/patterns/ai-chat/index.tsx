import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import {
  ArrowUp,
  Check,
  ChevronLeft,
  Copy,
  MoreHorizontal,
  Paperclip,
  RotateCcw,
  Sparkles,
  ThumbsUp,
  type LucideIcon,
} from 'lucide-react-native';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Input, InputField } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const STEPS = [
  { title: 'Sun, 6:30 am', body: 'Coastal loop, 8 km easy' },
  { title: 'Tue, 7:00 pm', body: 'Hill repeats, 6 x 400 m' },
  { title: 'Thu, 6:30 am', body: 'Tempo run, 5 km at race pace' },
];

const SNIPPET = `const pace = (min, km) =>
  (min / km).toFixed(2);

pace(42, 8); // "5.25" min/km`;

const FOLLOW_UPS = ['Add a rest day', 'Make it 10 km ready', 'Export to calendar'];

function AssistantAvatar() {
  return (
    <View className="h-8 w-8 items-center justify-center rounded-full bg-violet-500">
      <Icon as={Sparkles} className="h-4 w-4 text-white" />
    </View>
  );
}

function UserBubble({ children }: { children: string }) {
  return (
    <View className="max-w-[82%] self-end rounded-3xl rounded-br-md bg-primary px-4 py-3">
      <Text className="text-[15px] leading-6 text-primary-foreground">{children}</Text>
    </View>
  );
}

function ActionIcon({ icon }: { icon: LucideIcon }) {
  return (
    <Pressable className="h-8 w-8 items-center justify-center rounded-full data-[active=true]:bg-muted">
      <Icon as={icon} className="h-4 w-4 text-muted-foreground" />
    </Pressable>
  );
}

export default function AiChatScreen() {
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <HStack className="items-center justify-between border-b border-border px-4 pb-3 pt-6">
        <Pressable className="h-9 w-9 items-center justify-center rounded-full bg-muted">
          <Icon as={ChevronLeft} className="h-5 w-5 text-foreground" />
        </Pressable>
        <VStack className="items-center">
          <Text className="text-base font-semibold text-foreground">Running coach</Text>
          <HStack className="items-center gap-1.5">
            <View className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <Text className="text-xs text-muted-foreground">Nova 2 · thinking fast</Text>
          </HStack>
        </VStack>
        <Pressable className="h-9 w-9 items-center justify-center rounded-full bg-muted">
          <Icon as={MoreHorizontal} className="h-5 w-5 text-foreground" />
        </Pressable>
      </HStack>

      <ScrollView className="flex-1" contentContainerClassName="gap-5 px-5 pb-6 pt-5">
        <UserBubble>
          I want to run three times a week before work. Can you plan my week?
        </UserBubble>

        <HStack className="gap-3">
          <AssistantAvatar />
          <VStack className="flex-1 gap-3">
            <Text className="text-[15px] leading-6 text-foreground">
              Here is a balanced week that builds speed without wearing you out:
            </Text>
            <View className="overflow-hidden rounded-2xl border border-border bg-card">
              {STEPS.map((step, i) => (
                <HStack
                  key={step.title}
                  className={`items-center gap-3 px-3.5 py-3 ${i > 0 ? 'border-t border-border' : ''}`}
                >
                  <View className="h-6 w-6 items-center justify-center rounded-full bg-violet-500/15">
                    <Text className="text-xs font-bold text-violet-500">{i + 1}</Text>
                  </View>
                  <VStack className="flex-1">
                    <Text className="text-sm font-semibold text-foreground">{step.title}</Text>
                    <Text className="text-sm text-muted-foreground">{step.body}</Text>
                  </VStack>
                </HStack>
              ))}
            </View>
            <Text className="text-[15px] leading-6 text-foreground">
              Track your pace with this helper:
            </Text>
            <View className="overflow-hidden rounded-2xl bg-zinc-900">
              <HStack className="items-center justify-between border-b border-white/10 px-3.5 py-2">
                <Text className="text-xs font-medium text-zinc-400">javascript</Text>
                <Pressable onPress={() => setCopied(true)}>
                  <HStack className="items-center gap-1">
                    <Icon as={copied ? Check : Copy} className="h-3.5 w-3.5 text-zinc-400" />
                    <Text className="text-xs text-zinc-400">{copied ? 'Copied' : 'Copy'}</Text>
                  </HStack>
                </Pressable>
              </HStack>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Text className="px-3.5 py-3 font-mono text-[13px] leading-5 text-zinc-100">
                  {SNIPPET}
                </Text>
              </ScrollView>
            </View>
            <HStack className="-ml-2 gap-0.5">
              <ActionIcon icon={Copy} />
              <ActionIcon icon={ThumbsUp} />
              <ActionIcon icon={RotateCcw} />
            </HStack>
          </VStack>
        </HStack>

      </ScrollView>

      <View className="gap-3 border-t border-border bg-background pb-8 pt-3">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerClassName="gap-2 px-4"
        >
          {FOLLOW_UPS.map((label) => (
            <Pressable
              key={label}
              onPress={() => setMessage(label)}
              className="flex-row items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 data-[active=true]:bg-muted"
            >
              <Icon as={Sparkles} className="h-3.5 w-3.5 text-violet-500" />
              <Text className="text-sm text-foreground">{label}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <HStack className="mx-4 items-center gap-1 rounded-3xl border border-border bg-card p-1.5">
          <Pressable className="h-10 w-10 items-center justify-center rounded-full data-[active=true]:bg-muted">
            <Icon as={Paperclip} className="h-5 w-5 text-muted-foreground" />
          </Pressable>
          <Input className="h-10 flex-1 border-0 bg-transparent px-1 shadow-none dark:bg-transparent">
            <InputField
              placeholder="Ask your coach anything"
              value={message}
              onChangeText={setMessage}
              className="text-[15px]"
            />
          </Input>
          <Pressable
            disabled={!message.trim()}
            onPress={() => setMessage('')}
            className={`h-10 w-10 items-center justify-center rounded-full ${
              message.trim() ? 'bg-primary' : 'bg-muted'
            }`}
          >
            <Icon
              as={ArrowUp}
              className={`h-5 w-5 ${message.trim() ? 'text-primary-foreground' : 'text-muted-foreground'}`}
            />
          </Pressable>
        </HStack>
      </View>
    </KeyboardAvoidingView>
  );
}
