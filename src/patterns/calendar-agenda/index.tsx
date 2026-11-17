import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { ChevronLeft, ChevronRight, MapPin, Plus, Video } from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarGroup, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type Event = {
  id: string;
  title: string;
  start: string;
  end: string;
  place: string;
  online?: boolean;
  color: { bar: string; bg: string; dot: string };
  people?: string[];
};

const VIOLET = { bar: 'bg-violet-500', bg: 'bg-violet-500/10', dot: 'bg-violet-500' };
const EMERALD = { bar: 'bg-emerald-500', bg: 'bg-emerald-500/10', dot: 'bg-emerald-500' };
const AMBER = { bar: 'bg-amber-500', bg: 'bg-amber-500/10', dot: 'bg-amber-500' };
const SKY = { bar: 'bg-sky-500', bg: 'bg-sky-500/10', dot: 'bg-sky-500' };

const P1 = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80';
const P2 = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80';
const P3 = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80';
const P4 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80';

const WEEK = [
  { day: 'Mon', date: 16 },
  { day: 'Tue', date: 17 },
  { day: 'Wed', date: 18 },
  { day: 'Thu', date: 19 },
  { day: 'Fri', date: 20 },
  { day: 'Sat', date: 21 },
  { day: 'Sun', date: 22 },
];

const EVENTS: Record<number, Event[]> = {
  16: [
    { id: 'a', title: 'Weekly planning', start: '9:00', end: '9:45', place: 'Room 4B', color: SKY, people: [P2, P3] },
  ],
  17: [
    { id: 'b', title: 'Design review: checkout flow', start: '9:30', end: '10:30', place: 'Studio, 3rd floor', color: VIOLET, people: [P1, P2, P4] },
    { id: 'c', title: '1:1 with Daniel', start: '11:00', end: '11:30', place: 'Video call', online: true, color: SKY, people: [P4] },
    { id: 'd', title: 'Lunch with Priya', start: '12:30', end: '13:30', place: 'Olive & Thyme, Market St', color: EMERALD },
    { id: 'e', title: 'Sprint demo', start: '15:00', end: '16:00', place: 'Video call', online: true, color: AMBER, people: [P1, P3, P2, P4] },
  ],
  19: [
    { id: 'f', title: 'Customer interviews', start: '10:00', end: '12:00', place: 'Video call', online: true, color: VIOLET, people: [P3] },
    { id: 'g', title: 'Yoga class', start: '18:30', end: '19:30', place: 'Mission Yoga', color: EMERALD },
  ],
  20: [
    { id: 'h', title: 'Quarterly all-hands', start: '16:00', end: '17:00', place: 'Main hall', color: AMBER },
  ],
};

function EventCard({ event }: { event: Event }) {
  return (
    <HStack className={`flex-1 overflow-hidden rounded-2xl ${event.color.bg}`}>
      <View className={`w-1 ${event.color.bar}`} />
      <VStack className="flex-1 gap-2 p-4">
        <Text className="text-base font-semibold text-foreground">{event.title}</Text>
        <Text className="text-sm text-muted-foreground">
          {event.start} – {event.end}
        </Text>
        <HStack className="items-center justify-between">
          <HStack className="flex-1 items-center gap-1.5">
            <Icon as={event.online ? Video : MapPin} className="h-3.5 w-3.5 text-muted-foreground" />
            <Text className="text-xs text-muted-foreground" numberOfLines={1}>
              {event.place}
            </Text>
          </HStack>
          {event.people ? (
            <AvatarGroup>
              {event.people.slice(0, 3).map((uri) => (
                <Avatar key={uri} size="sm" className="h-6 w-6 border-2 border-background">
                  <AvatarFallbackText>Guest</AvatarFallbackText>
                  <AvatarImage source={{ uri }} />
                </Avatar>
              ))}
            </AvatarGroup>
          ) : null}
        </HStack>
      </VStack>
    </HStack>
  );
}

export default function CalendarAgendaScreen() {
  const [selected, setSelected] = useState(17);
  const events = EVENTS[selected] ?? [];
  const selectedDay = WEEK.find((d) => d.date === selected);

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="gap-6 px-5 pb-32 pt-6">
        <HStack className="items-center justify-between">
          <VStack>
            <Text className="text-sm text-muted-foreground">Week 47</Text>
            <Heading className="text-3xl font-bold text-foreground">November</Heading>
          </VStack>
          <HStack className="gap-2">
            <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
              <Icon as={ChevronLeft} className="h-5 w-5 text-foreground" />
            </Pressable>
            <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
              <Icon as={ChevronRight} className="h-5 w-5 text-foreground" />
            </Pressable>
          </HStack>
        </HStack>

        <HStack className="justify-between">
          {WEEK.map(({ day, date }) => {
            const active = date === selected;
            const dots = (EVENTS[date] ?? []).slice(0, 3);
            return (
              <Pressable
                key={date}
                onPress={() => setSelected(date)}
                className={`w-12 items-center gap-1.5 rounded-2xl py-3 ${
                  active ? 'bg-primary' : 'bg-transparent'
                }`}
              >
                <Text
                  className={`text-xs font-medium ${
                    active ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}
                >
                  {day}
                </Text>
                <Text
                  className={`text-lg font-bold ${
                    active ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {date}
                </Text>
                <HStack className="h-1.5 gap-0.5">
                  {dots.map((e) => (
                    <View
                      key={e.id}
                      className={`h-1.5 w-1.5 rounded-full ${
                        active ? 'bg-primary-foreground' : e.color.dot
                      }`}
                    />
                  ))}
                </HStack>
              </Pressable>
            );
          })}
        </HStack>

        <HStack className="items-center justify-between">
          <Text className="text-lg font-semibold text-foreground">
            {selected === 17 ? 'Today' : `${selectedDay?.day}, Nov ${selected}`}
          </Text>
          <Text className="text-sm text-muted-foreground">
            {events.length} {events.length === 1 ? 'event' : 'events'}
          </Text>
        </HStack>

        {events.length === 0 ? (
          <VStack className="items-center gap-1 rounded-2xl border border-dashed border-border py-10">
            <Text className="text-base font-medium text-foreground">Nothing scheduled</Text>
            <Text className="text-sm text-muted-foreground">Enjoy the free time.</Text>
          </VStack>
        ) : (
          <VStack className="gap-4">
            {events.map((event) => (
              <HStack key={event.id} className="gap-3">
                <Text className="w-12 pt-4 text-right text-xs font-medium text-muted-foreground">
                  {event.start}
                </Text>
                <EventCard event={event} />
              </HStack>
            ))}
          </VStack>
        )}
      </ScrollView>

      <Pressable
        aria-label="New event"
        className="absolute bottom-8 right-5 h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg data-[active=true]:opacity-80"
      >
        <Icon as={Plus} className="h-6 w-6 text-primary-foreground" />
      </Pressable>
    </View>
  );
}
