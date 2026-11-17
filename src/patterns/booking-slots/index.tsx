import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ArrowLeft, Clock, Heart, MapPin, Star, Sun, Sunset } from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const DATES = [
  { day: 'Tue', date: 17, slots: 6 },
  { day: 'Wed', date: 18, slots: 9 },
  { day: 'Thu', date: 19, slots: 2 },
  { day: 'Fri', date: 20, slots: 7 },
  { day: 'Sat', date: 21, slots: 4 },
  { day: 'Sun', date: 22, slots: 0 },
  { day: 'Mon', date: 23, slots: 8 },
];

const MORNING = ['8:30', '9:00', '9:45', '10:30', '11:15', '11:45'];
const AFTERNOON = ['12:30', '1:15', '2:00', '2:45', '3:30', '4:15'];
const BOOKED = new Set(['9:45', '1:15', '3:30']);

function SlotGroup({
  title,
  icon,
  slots,
  selected,
  onSelect,
}: {
  title: string;
  icon: typeof Sun;
  slots: string[];
  selected: string | null;
  onSelect: (slot: string) => void;
}) {
  return (
    <VStack className="gap-3">
      <HStack className="items-center gap-2">
        <Icon as={icon} className="h-4 w-4 text-muted-foreground" />
        <Text className="text-sm font-medium text-muted-foreground">{title}</Text>
      </HStack>
      <View className="flex-row flex-wrap gap-2">
        {slots.map((slot) => {
          const booked = BOOKED.has(slot);
          const active = slot === selected;
          return (
            <Pressable
              key={slot}
              disabled={booked}
              onPress={() => onSelect(slot)}
              className={`w-[31.5%] items-center rounded-xl border py-3 ${
                active
                  ? 'border-primary bg-primary'
                  : booked
                    ? 'border-border bg-muted'
                    : 'border-border bg-card'
              }`}
            >
              <Text
                className={`text-sm font-semibold ${
                  active
                    ? 'text-primary-foreground'
                    : booked
                      ? 'text-muted-foreground line-through'
                      : 'text-foreground'
                }`}
              >
                {slot}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </VStack>
  );
}

export default function BookingSlotsScreen() {
  const [date, setDate] = useState(18);
  const [slot, setSlot] = useState<string | null>('10:30');
  const selectedDay = DATES.find((d) => d.date === date)?.day ?? '';

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="gap-6 px-5 pb-40 pt-6">
        <HStack className="items-center justify-between">
          <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
            <Icon as={ArrowLeft} className="h-5 w-5 text-foreground" />
          </Pressable>
          <Text className="text-base font-semibold text-foreground">Book appointment</Text>
          <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
            <Icon as={Heart} className="h-5 w-5 text-foreground" />
          </Pressable>
        </HStack>

        <VStack className="gap-4 rounded-3xl border border-border bg-card p-4">
          <HStack className="items-center gap-4">
            <Avatar size="lg" className="rounded-2xl">
              <AvatarFallbackText>Sofia Ramirez</AvatarFallbackText>
              <AvatarImage
                className="rounded-2xl"
                source={{
                  uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
                }}
              />
            </Avatar>
            <VStack className="flex-1 gap-0.5">
              <Text className="text-lg font-semibold text-foreground">Sofia Ramirez</Text>
              <Text className="text-sm text-muted-foreground">Senior stylist · Lumen Studio</Text>
              <HStack className="mt-1 items-center gap-1">
                <Icon as={Star} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <Text className="text-sm font-semibold text-foreground">4.9</Text>
                <Text className="text-sm text-muted-foreground">(312 reviews)</Text>
              </HStack>
            </VStack>
          </HStack>
          <View className="h-px bg-border" />
          <HStack className="items-center justify-between">
            <VStack className="gap-1">
              <Text className="text-base font-semibold text-foreground">Cut & blow-dry</Text>
              <HStack className="items-center gap-3">
                <HStack className="items-center gap-1">
                  <Icon as={Clock} className="h-3.5 w-3.5 text-muted-foreground" />
                  <Text className="text-xs text-muted-foreground">45 min</Text>
                </HStack>
                <HStack className="items-center gap-1">
                  <Icon as={MapPin} className="h-3.5 w-3.5 text-muted-foreground" />
                  <Text className="text-xs text-muted-foreground">212 Valencia St</Text>
                </HStack>
              </HStack>
            </VStack>
            <Text className="text-xl font-bold text-foreground">$65</Text>
          </HStack>
        </VStack>

        <VStack className="gap-3">
          <HStack className="items-center justify-between">
            <Heading className="text-lg font-semibold text-foreground">Pick a date</Heading>
            <Text className="text-sm text-muted-foreground">November 2026</Text>
          </HStack>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2">
            {DATES.map((d) => {
              const active = d.date === date;
              const full = d.slots === 0;
              return (
                <Pressable
                  key={d.date}
                  disabled={full}
                  onPress={() => {
                    setDate(d.date);
                    setSlot(null);
                  }}
                  className={`w-16 items-center gap-1 rounded-2xl border py-3 ${
                    active ? 'border-primary bg-primary' : 'border-border bg-card'
                  } ${full ? 'opacity-40' : ''}`}
                >
                  <Text
                    className={`text-xs ${active ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}
                  >
                    {d.day}
                  </Text>
                  <Text
                    className={`text-xl font-bold ${active ? 'text-primary-foreground' : 'text-foreground'}`}
                  >
                    {d.date}
                  </Text>
                  <Text
                    className={`text-[10px] font-medium ${
                      active ? 'text-primary-foreground/70' : full ? 'text-muted-foreground' : 'text-emerald-500'
                    }`}
                  >
                    {full ? 'Full' : `${d.slots} open`}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>
        </VStack>

        <VStack className="gap-5">
          <Heading className="text-lg font-semibold text-foreground">Available times</Heading>
          <SlotGroup title="Morning" icon={Sun} slots={MORNING} selected={slot} onSelect={setSlot} />
          <SlotGroup title="Afternoon" icon={Sunset} slots={AFTERNOON} selected={slot} onSelect={setSlot} />
        </VStack>
      </ScrollView>

      <HStack className="absolute bottom-0 left-0 right-0 items-center gap-4 border-t border-border bg-background px-5 pb-8 pt-4">
        <VStack className="flex-1">
          <Text className="text-xs text-muted-foreground">{selectedDay}, Nov {date}</Text>
          <Text className="text-base font-semibold text-foreground">
            {slot ? `${slot} · 45 min` : 'Choose a time'}
          </Text>
        </VStack>
        <Button size="lg" className="h-12 rounded-xl px-8" isDisabled={!slot}>
          <ButtonText className="text-base">Confirm</ButtonText>
        </Button>
      </HStack>
    </View>
  );
}
