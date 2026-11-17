import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Bell,
  BellRing,
  CalendarClock,
  Check,
  Flame,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react-native';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const PREVIEWS = [
  { title: 'Focus block in 5 min', body: 'Write launch notes · 11:30', time: 'now', tilt: '' },
  { title: 'Priya replied', body: '"Looks great, ship it!"', time: '2m', tilt: 'mx-3 opacity-80' },
  {
    title: '9-day streak',
    body: 'One session keeps it alive',
    time: '1h',
    tilt: 'mx-6 opacity-50',
  },
];

const BENEFITS: { icon: LucideIcon; title: string; body: string; bg: string; fg: string }[] = [
  {
    icon: CalendarClock,
    title: 'Reminders right on time',
    body: 'A nudge before each focus block, never during one.',
    bg: 'bg-sky-500/15',
    fg: 'text-sky-500',
  },
  {
    icon: MessageCircle,
    title: 'Replies from your team',
    body: 'Only direct mentions. Channels stay in the app.',
    bg: 'bg-violet-500/15',
    fg: 'text-violet-500',
  },
  {
    icon: Flame,
    title: 'Streak saves',
    body: 'One heads-up in the evening if your streak is at risk.',
    bg: 'bg-amber-500/15',
    fg: 'text-amber-500',
  },
];

function NotificationPreview({ title, body, time, tilt }: (typeof PREVIEWS)[number]) {
  return (
    <HStack
      className={`items-center gap-3 rounded-2xl border border-border bg-card p-3 shadow-md ${tilt}`}
    >
      <View className="h-9 w-9 items-center justify-center rounded-xl bg-primary">
        <Icon as={Bell} className="h-4 w-4 text-primary-foreground" />
      </View>
      <VStack className="flex-1">
        <Text className="text-sm font-semibold text-foreground">{title}</Text>
        <Text className="text-xs text-muted-foreground" numberOfLines={1}>
          {body}
        </Text>
      </VStack>
      <Text className="self-start text-[11px] text-muted-foreground">{time}</Text>
    </HStack>
  );
}

export default function NotificationPermissionScreen() {
  const [enabled, setEnabled] = useState(false);

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="px-5 pb-48 pt-6">
        <View className="overflow-hidden rounded-[32px] bg-sky-500/10 px-5 pb-6 pt-8">
          <View className="mb-6 h-16 w-16 items-center justify-center self-center rounded-[22px] bg-sky-500 shadow-lg">
            <Icon as={BellRing} className="h-8 w-8 text-white" />
            <View className="absolute -right-1 -top-1 h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-red-500">
              <Text className="text-[10px] font-bold text-white">3</Text>
            </View>
          </View>
          <VStack className="gap-2">
            {PREVIEWS.map((p) => (
              <NotificationPreview key={p.title} {...p} />
            ))}
          </VStack>
        </View>

        <VStack className="mt-7 gap-2">
          <Heading className="text-3xl font-bold leading-tight text-foreground">
            Stay in the loop, not on your phone
          </Heading>
          <Text className="text-base leading-6 text-muted-foreground">
            Lumen only notifies you about things you'd want to know. Here's what to expect:
          </Text>
        </VStack>

        <VStack className="mt-6 gap-5">
          {BENEFITS.map((b) => (
            <HStack key={b.title} className="items-start gap-4">
              <View className={`h-10 w-10 items-center justify-center rounded-xl ${b.bg}`}>
                <Icon as={b.icon} className={`h-5 w-5 ${b.fg}`} />
              </View>
              <VStack className="flex-1 gap-0.5">
                <Text className="text-base font-semibold text-foreground">{b.title}</Text>
                <Text className="text-sm leading-5 text-muted-foreground">{b.body}</Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
      </ScrollView>

      <VStack className="absolute bottom-0 left-0 right-0 gap-2 border-t border-border bg-background px-5 pb-8 pt-4">
        <Button size="lg" className="h-12 rounded-xl" onPress={() => setEnabled(true)}>
          {enabled ? <ButtonIcon as={Check} /> : null}
          <ButtonText className="text-base">
            {enabled ? 'Notifications on' : 'Turn on notifications'}
          </ButtonText>
        </Button>
        <Button variant="ghost" size="lg" className="h-12 rounded-xl">
          <ButtonText className="text-base text-muted-foreground">Not now</ButtonText>
        </Button>
        <Text className="text-center text-xs text-muted-foreground">
          You can change this anytime in Settings.
        </Text>
      </VStack>
    </View>
  );
}
