import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Bike,
  ChevronRight,
  Dumbbell,
  Flame,
  Footprints,
  HeartPulse,
  Moon,
  Timer,
  type LucideIcon,
} from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const GOALS = [
  { label: 'Move', value: 486, goal: 600, unit: 'kcal', track: 'bg-rose-500/20', fill: 'bg-rose-500', text: 'text-rose-500' },
  { label: 'Exercise', value: 38, goal: 30, unit: 'min', track: 'bg-lime-500/20', fill: 'bg-lime-500', text: 'text-lime-500' },
  { label: 'Stand', value: 9, goal: 12, unit: 'hrs', track: 'bg-sky-500/20', fill: 'bg-sky-500', text: 'text-sky-500' },
];

const STATS: { label: string; value: string; icon: LucideIcon; tint: string }[] = [
  { label: 'Steps', value: '8,412', icon: Footprints, tint: 'text-violet-500' },
  { label: 'Heart rate', value: '72 bpm', icon: HeartPulse, tint: 'text-rose-500' },
  { label: 'Sleep', value: '7h 24m', icon: Moon, tint: 'text-sky-500' },
];

const WEEK = [
  { day: 'M', steps: 6200 },
  { day: 'T', steps: 9100 },
  { day: 'W', steps: 7400 },
  { day: 'T', steps: 11200 },
  { day: 'F', steps: 5300 },
  { day: 'S', steps: 12600 },
  { day: 'S', steps: 8412 },
];
const STEP_GOAL = 10000;

const WORKOUTS: { title: string; meta: string; kcal: number; icon: LucideIcon }[] = [
  { title: 'Morning ride', meta: '7:05 AM · 14.2 km · 38 min', kcal: 312, icon: Bike },
  { title: 'Upper body strength', meta: 'Yesterday · 45 min', kcal: 268, icon: Dumbbell },
];

export default function FitnessTodayScreen() {
  const [selectedDay, setSelectedDay] = useState(WEEK.length - 1);
  const maxSteps = Math.max(...WEEK.map((d) => d.steps), STEP_GOAL);

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="gap-5 px-5 pb-12 pt-6">
      <HStack className="items-center justify-between">
        <VStack>
          <Text className="text-sm text-muted-foreground">Monday, November 17</Text>
          <Heading className="text-2xl font-bold text-foreground">Today</Heading>
        </VStack>
        <Avatar size="md">
          <AvatarFallbackText>Liam Carter</AvatarFallbackText>
          <AvatarImage
            source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80' }}
          />
        </Avatar>
      </HStack>

      <VStack className="gap-5 rounded-3xl bg-zinc-900 p-5 dark:bg-card">
        <HStack className="items-center justify-between">
          <VStack>
            <Text className="text-sm text-zinc-400">Activity</Text>
            <HStack className="items-baseline gap-1">
              <Text className="text-4xl font-bold text-white">81</Text>
              <Text className="text-base font-semibold text-zinc-400">%</Text>
            </HStack>
          </VStack>
          <HStack className="items-center gap-1.5 rounded-full bg-orange-500/20 px-3 py-1.5">
            <Icon as={Flame} className="h-4 w-4 text-orange-400" />
            <Text className="text-xs font-semibold text-orange-400">12-day streak</Text>
          </HStack>
        </HStack>
        {GOALS.map((g) => (
          <VStack key={g.label} className="gap-2">
            <HStack className="items-baseline justify-between">
              <Text className={`text-sm font-semibold ${g.text}`}>{g.label}</Text>
              <Text className="text-sm text-zinc-400">
                <Text className="font-semibold text-white">{g.value}</Text> / {g.goal} {g.unit}
              </Text>
            </HStack>
            <Progress value={Math.min(100, (g.value / g.goal) * 100)} className={`h-3 ${g.track}`}>
              <ProgressFilledTrack className={`rounded-full ${g.fill}`} />
            </Progress>
          </VStack>
        ))}
      </VStack>

      <HStack className="gap-3">
        {STATS.map((s) => (
          <VStack key={s.label} className="flex-1 gap-2 rounded-2xl border border-border bg-card p-3.5">
            <Icon as={s.icon} className={`h-5 w-5 ${s.tint}`} />
            <VStack>
              <Text className="text-base font-bold text-foreground">{s.value}</Text>
              <Text className="text-xs text-muted-foreground">{s.label}</Text>
            </VStack>
          </VStack>
        ))}
      </HStack>

      <VStack className="gap-4 rounded-3xl border border-border bg-card p-5">
        <HStack className="items-start justify-between">
          <VStack>
            <Text className="text-base font-semibold text-foreground">Steps this week</Text>
            <Text className="text-xs text-muted-foreground">Goal 10,000 a day</Text>
          </VStack>
          <Text className="text-base font-semibold text-violet-500">
            {WEEK[selectedDay].steps.toLocaleString('en-US')}
          </Text>
        </HStack>
        <View className="h-32">
          <View
            className="absolute left-0 right-0 border-t border-dashed border-border"
            style={{ bottom: `${(STEP_GOAL / maxSteps) * 100}%` }}
          />
          <HStack className="h-full items-end gap-3">
            {WEEK.map((d, i) => {
              const hit = d.steps >= STEP_GOAL;
              const active = i === selectedDay;
              return (
                <Pressable key={i} onPress={() => setSelectedDay(i)} className="h-full flex-1 justify-end">
                  <View
                    style={{ height: `${(d.steps / maxSteps) * 100}%` }}
                    className={`w-full rounded-full ${
                      active ? 'bg-violet-500' : hit ? 'bg-violet-500/50' : 'bg-violet-500/15'
                    }`}
                  />
                </Pressable>
              );
            })}
          </HStack>
        </View>
        <HStack className="gap-3">
          {WEEK.map((d, i) => (
            <Text
              key={i}
              className={`flex-1 text-center text-xs ${
                i === selectedDay ? 'font-semibold text-foreground' : 'text-muted-foreground'
              }`}
            >
              {d.day}
            </Text>
          ))}
        </HStack>
      </VStack>

      <VStack className="gap-3">
        <HStack className="items-center justify-between">
          <Text className="text-lg font-semibold text-foreground">Workouts</Text>
          <Pressable>
            <Text className="text-sm text-muted-foreground">History</Text>
          </Pressable>
        </HStack>
        {WORKOUTS.map((w) => (
          <Pressable
            key={w.title}
            className="flex-row items-center gap-3 rounded-2xl border border-border bg-card p-4"
          >
            <View className="h-11 w-11 items-center justify-center rounded-xl bg-lime-500/15">
              <Icon as={w.icon} className="h-5 w-5 text-lime-600" />
            </View>
            <VStack className="flex-1">
              <Text className="text-base font-semibold text-foreground">{w.title}</Text>
              <HStack className="items-center gap-1">
                <Icon as={Timer} className="h-3 w-3 text-muted-foreground" />
                <Text className="text-xs text-muted-foreground">{w.meta}</Text>
              </HStack>
            </VStack>
            <Text className="text-sm font-semibold text-foreground">{w.kcal} kcal</Text>
            <Icon as={ChevronRight} className="h-4 w-4 text-muted-foreground" />
          </Pressable>
        ))}
      </VStack>
    </ScrollView>
  );
}
