import { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  CheckCircle2,
  Clock,
  Flame,
  Hourglass,
  Lock,
  Target,
  X,
  type LucideIcon,
} from 'lucide-react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

// 1 day, 14 hours, 32 minutes, 10 seconds left in the trial.
const INITIAL_SECONDS = 86400 + 14 * 3600 + 32 * 60 + 10;

const STATS: { icon: LucideIcon; value: string; label: string; tint: string; bg: string }[] = [
  {
    icon: Target,
    value: '48',
    label: 'Focus sessions',
    tint: 'text-violet-500',
    bg: 'bg-violet-500/15',
  },
  { icon: Clock, value: '31h', label: 'Deep work', tint: 'text-sky-500', bg: 'bg-sky-500/15' },
  {
    icon: CheckCircle2,
    value: '126',
    label: 'Tasks done',
    tint: 'text-emerald-500',
    bg: 'bg-emerald-500/15',
  },
  {
    icon: Flame,
    value: '9 days',
    label: 'Best streak',
    tint: 'text-amber-500',
    bg: 'bg-amber-500/15',
  },
];

const LOSING = ['AI day planner', 'Unlimited projects', 'History older than 7 days'];

function TimeBlock({ value, unit }: { value: number; unit: string }) {
  return (
    <VStack className="flex-1 items-center rounded-2xl bg-white/15 py-3">
      <Text className="text-3xl font-bold text-white">{String(value).padStart(2, '0')}</Text>
      <Text className="text-[11px] font-medium uppercase tracking-wider text-white/70">{unit}</Text>
    </VStack>
  );
}

export default function TrialEndingScreen() {
  const [left, setLeft] = useState(INITIAL_SECONDS);

  useEffect(() => {
    const id = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const days = Math.floor(left / 86400);
  const hours = Math.floor((left % 86400) / 3600);
  const minutes = Math.floor((left % 3600) / 60);
  const seconds = left % 60;

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="px-5 pb-44 pt-6">
        <HStack className="items-center justify-between">
          <HStack className="items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1.5">
            <Icon as={Hourglass} className="h-3.5 w-3.5 text-amber-500" />
            <Text className="text-xs font-semibold text-amber-600">Trial ends Thursday</Text>
          </HStack>
          <Pressable className="h-9 w-9 items-center justify-center rounded-full bg-muted">
            <Icon as={X} className="h-4 w-4 text-foreground" />
          </Pressable>
        </HStack>

        <View className="mt-5 overflow-hidden rounded-[28px] bg-rose-500 p-5">
          <View className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
          <Text className="text-sm font-medium text-white/80">Your Pro trial ends in</Text>
          <HStack className="mt-3 gap-2">
            <TimeBlock value={days} unit="days" />
            <TimeBlock value={hours} unit="hrs" />
            <TimeBlock value={minutes} unit="min" />
            <TimeBlock value={seconds} unit="sec" />
          </HStack>
          <VStack className="mt-4 gap-1.5">
            <Progress value={86} className="h-1.5 bg-white/20">
              <ProgressFilledTrack className="bg-white" />
            </Progress>
            <Text className="text-xs text-white/80">Day 12 of 14</Text>
          </VStack>
        </View>

        <Heading className="mt-7 text-2xl font-bold leading-tight text-foreground">
          Look what you did in 12 days
        </Heading>
        <View className="mt-4 flex-row flex-wrap justify-between gap-y-3">
          {STATS.map((s) => (
            <VStack
              key={s.label}
              className="w-[48.5%] gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <View className={`h-9 w-9 items-center justify-center rounded-xl ${s.bg}`}>
                <Icon as={s.icon} className={`h-[18px] w-[18px] ${s.tint}`} />
              </View>
              <VStack>
                <Text className="text-2xl font-bold text-foreground">{s.value}</Text>
                <Text className="text-sm text-muted-foreground">{s.label}</Text>
              </VStack>
            </VStack>
          ))}
        </View>

        <VStack className="mt-6 gap-3 rounded-2xl bg-muted p-4">
          <Text className="text-sm font-semibold text-foreground">On Free, you'll lose</Text>
          {LOSING.map((item) => (
            <HStack key={item} className="items-center gap-3">
              <Icon as={Lock} className="h-4 w-4 text-muted-foreground" />
              <Text className="text-sm text-muted-foreground">{item}</Text>
            </HStack>
          ))}
        </VStack>
      </ScrollView>

      <VStack className="absolute bottom-0 left-0 right-0 gap-2 border-t border-border bg-background px-5 pb-8 pt-4">
        <HStack className="items-baseline justify-center gap-2">
          <Text className="text-sm text-muted-foreground line-through">$64.99</Text>
          <Text className="text-sm font-semibold text-foreground">$44.99 for your first year</Text>
          <View className="rounded-full bg-emerald-500/15 px-2 py-0.5">
            <Text className="text-[11px] font-bold text-emerald-500">-30%</Text>
          </View>
        </HStack>
        <Button size="lg" className="h-12 rounded-xl">
          <ButtonText className="text-base">Keep Pro</ButtonText>
        </Button>
        <Button variant="ghost" size="lg" className="h-11 rounded-xl">
          <ButtonText className="text-sm text-muted-foreground">Remind me tomorrow</ButtonText>
        </Button>
      </VStack>
    </View>
  );
}
