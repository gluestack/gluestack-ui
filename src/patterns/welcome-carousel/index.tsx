import { useRef, useState } from 'react';
import {
  ScrollView,
  View,
  type LayoutChangeEvent,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
} from 'react-native';
import {
  ArrowRight,
  CalendarDays,
  Check,
  Flame,
  Pause,
  Sparkles,
  TrendingUp,
} from 'lucide-react-native';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const PLAN = [
  { time: '09:00', title: 'Design review', done: true },
  { time: '11:30', title: 'Write launch notes', done: true },
  { time: '14:00', title: 'Call with Priya', done: false },
];

const WEEK = [40, 65, 52, 80, 70, 95, 60];

function PlanVisual() {
  return (
    <View className="flex-1 justify-center rounded-[32px] bg-violet-500/15 p-6">
      <View className="rounded-3xl border border-border bg-card p-4 shadow-lg">
        <HStack className="mb-3 items-center gap-2">
          <Icon as={CalendarDays} className="h-4 w-4 text-violet-500" />
          <Text className="text-sm font-semibold text-foreground">Today, Nov 17</Text>
        </HStack>
        <VStack className="gap-2.5">
          {PLAN.map((item) => (
            <HStack
              key={item.title}
              className="items-center gap-3 rounded-2xl bg-muted px-3 py-2.5"
            >
              <View
                className={`h-5 w-5 items-center justify-center rounded-full ${
                  item.done ? 'bg-violet-500' : 'border-2 border-border'
                }`}
              >
                {item.done ? <Icon as={Check} className="h-3 w-3 text-white" /> : null}
              </View>
              <Text className="flex-1 text-sm text-foreground">{item.title}</Text>
              <Text className="text-xs text-muted-foreground">{item.time}</Text>
            </HStack>
          ))}
        </VStack>
      </View>
      <View className="-mt-3 ml-auto mr-4 flex-row items-center gap-1.5 rounded-full bg-violet-500 px-3 py-1.5 shadow-md">
        <Icon as={Sparkles} className="h-3.5 w-3.5 text-white" />
        <Text className="text-xs font-semibold text-white">2 of 3 done</Text>
      </View>
    </View>
  );
}

function FocusVisual() {
  return (
    <View className="flex-1 items-center justify-center rounded-[32px] bg-emerald-500/15 p-6">
      <View className="h-52 w-52 items-center justify-center rounded-full border-[14px] border-emerald-500/25 bg-card shadow-lg">
        <View className="absolute -inset-[14px] rounded-full border-[14px] border-transparent border-r-emerald-500 border-t-emerald-500" />
        <Text className="text-4xl font-bold text-foreground">18:42</Text>
        <Text className="text-xs text-muted-foreground">Deep work</Text>
      </View>
      <HStack className="mt-6 items-center gap-3">
        <View className="rounded-full border border-border bg-card px-3 py-1.5">
          <Text className="text-xs font-medium text-foreground">Session 3 of 4</Text>
        </View>
        <View className="h-10 w-10 items-center justify-center rounded-full bg-emerald-500">
          <Icon as={Pause} className="h-4 w-4 text-white" />
        </View>
      </HStack>
    </View>
  );
}

function ProgressVisual() {
  return (
    <View className="flex-1 justify-center rounded-[32px] bg-amber-500/15 p-6">
      <View className="rounded-3xl border border-border bg-card p-5 shadow-lg">
        <HStack className="items-start justify-between">
          <VStack>
            <Text className="text-xs text-muted-foreground">Focused this week</Text>
            <Text className="text-3xl font-bold text-foreground">21h 40m</Text>
          </VStack>
          <HStack className="items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-1">
            <Icon as={TrendingUp} className="h-3 w-3 text-emerald-500" />
            <Text className="text-xs font-semibold text-emerald-500">18%</Text>
          </HStack>
        </HStack>
        <HStack className="mt-5 h-28 items-end gap-2">
          {WEEK.map((h, i) => (
            <VStack key={i} className="flex-1 items-center gap-1.5">
              <View
                style={{ height: h }}
                className={`w-full rounded-lg ${i === 5 ? 'bg-amber-500' : 'bg-amber-500/30'}`}
              />
              <Text className="text-[10px] text-muted-foreground">{'MTWTFSS'[i]}</Text>
            </VStack>
          ))}
        </HStack>
      </View>
      <View className="-mt-4 ml-4 flex-row items-center gap-1.5 self-start rounded-full bg-amber-500 px-3 py-1.5 shadow-md">
        <Icon as={Flame} className="h-3.5 w-3.5 text-white" />
        <Text className="text-xs font-semibold text-white">9-day streak</Text>
      </View>
    </View>
  );
}

const SLIDES = [
  {
    key: 'plan',
    Visual: PlanVisual,
    title: 'Plan your day in a minute',
    body: 'Drop in tasks and Lumen lays them out around your meetings, so the day has a shape.',
  },
  {
    key: 'focus',
    Visual: FocusVisual,
    title: 'Focus sessions that stick',
    body: 'Timed blocks with gentle breaks. Notifications stay quiet until you come up for air.',
  },
  {
    key: 'progress',
    Visual: ProgressVisual,
    title: 'Watch the habit grow',
    body: 'Weekly recaps and streaks show where your time really went, without the guilt.',
  },
];

export default function WelcomeCarouselScreen() {
  const [width, setWidth] = useState(0);
  const scrollRef = useRef<ScrollView>(null);
  const [index, setIndex] = useState(0);
  const isLast = index === SLIDES.length - 1;

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!width) return;
    const next = Math.round(e.nativeEvent.contentOffset.x / width);
    if (next !== index) setIndex(next);
  };

  const goTo = (i: number) => scrollRef.current?.scrollTo({ x: i * width, animated: true });

  return (
    <View className="flex-1 bg-background pt-6">
      <HStack className="items-center justify-between px-5">
        <HStack className="items-center gap-2">
          <View className="h-8 w-8 items-center justify-center rounded-xl bg-primary">
            <Icon as={Sparkles} className="h-4 w-4 text-primary-foreground" />
          </View>
          <Text className="text-lg font-bold text-foreground">Lumen</Text>
        </HStack>
        {!isLast ? (
          <Pressable onPress={() => goTo(SLIDES.length - 1)} className="px-2 py-1">
            <Text className="text-sm font-medium text-muted-foreground">Skip</Text>
          </Pressable>
        ) : null}
      </HStack>

      <View
        className="flex-1"
        onLayout={(e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width)}
      >
        {width > 0 ? (
          <ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
            className="flex-1"
          >
            {SLIDES.map(({ key, Visual, title, body }) => (
              <VStack key={key} style={{ width }} className="flex-1 gap-7 px-5 pt-6">
                <View className="max-h-[460px] flex-1">
                  <Visual />
                </View>
                <VStack className="gap-3 pb-2">
                  <Heading className="text-3xl font-bold leading-tight text-foreground">
                    {title}
                  </Heading>
                  <Text className="text-base leading-6 text-muted-foreground">{body}</Text>
                </VStack>
              </VStack>
            ))}
          </ScrollView>
        ) : null}
      </View>

      <HStack className="items-center justify-between px-5 pb-8 pt-4">
        <HStack className="items-center gap-2">
          {SLIDES.map((s, i) => (
            <Pressable
              key={s.key}
              onPress={() => goTo(i)}
              className={`h-2 rounded-full ${i === index ? 'w-6 bg-foreground' : 'w-2 bg-border'}`}
            />
          ))}
        </HStack>
        <Button
          size="lg"
          className="h-12 rounded-full px-6"
          onPress={() => (isLast ? undefined : goTo(index + 1))}
        >
          <ButtonText className="text-base">{isLast ? 'Get started' : 'Next'}</ButtonText>
          <ButtonIcon as={ArrowRight} />
        </Button>
      </HStack>
    </View>
  );
}
