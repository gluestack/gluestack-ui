import { useState } from 'react';
import { View } from 'react-native';
import { Inbox, Mail, Plus, Search, Sparkles, Star } from 'lucide-react-native';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const FOLDERS = ['Inbox', 'Starred', 'Sent'] as const;

function Illustration() {
  return (
    <View className="h-56 w-64 items-center justify-center">
      <View className="absolute h-52 w-52 rounded-full bg-violet-500/10" />
      <View className="absolute h-36 w-36 rounded-full bg-violet-500/15" />

      <View className="absolute left-6 top-8 h-11 w-11 -rotate-12 items-center justify-center rounded-2xl border border-border bg-card">
        <Icon as={Mail} className="h-5 w-5 text-sky-500" />
      </View>
      <View className="absolute right-5 top-14 h-10 w-10 rotate-12 items-center justify-center rounded-2xl border border-border bg-card">
        <Icon as={Star} className="h-5 w-5 fill-amber-400 text-amber-400" />
      </View>
      <View className="absolute bottom-6 right-10 h-3 w-3 rounded-full bg-rose-400" />
      <View className="absolute bottom-10 left-10 h-2 w-2 rounded-full bg-emerald-400" />
      <View className="absolute right-16 top-3">
        <Icon as={Sparkles} className="h-5 w-5 text-violet-500" />
      </View>

      <View className="h-24 w-28 items-center justify-center rounded-3xl border border-border bg-card">
        <View className="h-14 w-14 items-center justify-center rounded-2xl bg-violet-500">
          <Icon as={Inbox} className="h-7 w-7 text-white" />
        </View>
      </View>
    </View>
  );
}

export default function EmptyStateScreen() {
  const [folder, setFolder] = useState<(typeof FOLDERS)[number]>('Inbox');

  return (
    <View className="flex-1 bg-background px-5 pt-6">
      <HStack className="items-center justify-between">
        <Heading className="text-3xl font-bold text-foreground">Mail</Heading>
        <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-muted">
          <Icon as={Search} className="h-5 w-5 text-foreground" />
        </Pressable>
      </HStack>

      <HStack className="mt-5 gap-1 rounded-xl bg-muted p-1">
        {FOLDERS.map((f) => (
          <Pressable
            key={f}
            onPress={() => setFolder(f)}
            className={`flex-1 items-center rounded-lg py-2 ${f === folder ? 'bg-background' : ''}`}
          >
            <Text
              className={`text-sm font-medium ${f === folder ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              {f}
            </Text>
          </Pressable>
        ))}
      </HStack>

      <VStack className="flex-1 items-center justify-center gap-6 pb-24">
        <Illustration />
        <VStack className="items-center gap-2 px-4">
          <Heading className="text-center text-2xl font-bold text-foreground">
            {folder === 'Inbox' ? 'Inbox zero, nice work' : `Nothing in ${folder} yet`}
          </Heading>
          <Text className="text-center text-base leading-6 text-muted-foreground">
            {folder === 'Inbox'
              ? 'You have read every message. New mail will show up here as soon as it lands.'
              : 'Messages you mark or send will appear here so they are easy to find later.'}
          </Text>
        </VStack>
        <VStack className="w-full gap-3 px-6">
          <Button size="lg" className="h-12 rounded-xl">
            <ButtonIcon as={Plus} />
            <ButtonText className="text-base">Write a message</ButtonText>
          </Button>
          <Button variant="ghost" size="lg" className="h-11 rounded-xl">
            <ButtonText className="text-base text-muted-foreground">Check again</ButtonText>
          </Button>
        </VStack>
      </VStack>
    </View>
  );
}
