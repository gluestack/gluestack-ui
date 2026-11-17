import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Calendar, Check, Clock, Flag, Plus } from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Checkbox, CheckboxIcon, CheckboxIndicator } from '@/components/ui/checkbox';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Pressable } from '@/components/ui/pressable';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type Priority = 'high' | 'medium' | 'low';
type Task = {
  id: string;
  title: string;
  time: string;
  list: 'Work' | 'Personal' | 'Errands';
  priority: Priority;
  done: boolean;
};

const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Review Q4 roadmap with design', time: '9:30 AM', list: 'Work', priority: 'high', done: true },
  { id: '2', title: 'Reply to Marcus on the API spec', time: '10:15 AM', list: 'Work', priority: 'high', done: false },
  { id: '3', title: 'Ship onboarding copy updates', time: '11:00 AM', list: 'Work', priority: 'medium', done: false },
  { id: '4', title: 'Pick up dry cleaning', time: '1:00 PM', list: 'Errands', priority: 'low', done: true },
  { id: '5', title: 'Book dentist appointment', time: '2:30 PM', list: 'Personal', priority: 'medium', done: false },
  { id: '6', title: '30 min run along the river', time: '6:00 PM', list: 'Personal', priority: 'low', done: false },
  { id: '7', title: 'Prep slides for Thursday standup', time: '4:00 PM', list: 'Work', priority: 'medium', done: true },
];

const FILTERS = ['All', 'Work', 'Personal', 'Errands'] as const;
type Filter = (typeof FILTERS)[number];

const PRIORITY_STYLE: Record<Priority, { label: string; text: string; bg: string }> = {
  high: { label: 'High', text: 'text-rose-500', bg: 'bg-rose-500/10' },
  medium: { label: 'Medium', text: 'text-amber-500', bg: 'bg-amber-500/10' },
  low: { label: 'Low', text: 'text-sky-500', bg: 'bg-sky-500/10' },
};

function TaskRow({ task, onToggle }: { task: Task; onToggle: () => void }) {
  const priority = PRIORITY_STYLE[task.priority];
  return (
    <HStack className="items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5">
      <Checkbox value={task.id} isChecked={task.done} onChange={onToggle} aria-label={task.title}>
        <CheckboxIndicator className="h-6 w-6 rounded-full border-2 border-muted-foreground/40">
          <CheckboxIcon as={Check} className="h-4 w-4" />
        </CheckboxIndicator>
      </Checkbox>
      <VStack className="flex-1 gap-1.5">
        <Text
          className={`text-base font-medium ${
            task.done ? 'text-muted-foreground line-through' : 'text-foreground'
          }`}
          numberOfLines={1}
        >
          {task.title}
        </Text>
        <HStack className="items-center gap-3">
          <HStack className="items-center gap-1">
            <Icon as={Clock} className="h-3.5 w-3.5 text-muted-foreground" />
            <Text className="text-xs text-muted-foreground">{task.time}</Text>
          </HStack>
          <Text className="text-xs text-muted-foreground">{task.list}</Text>
          {!task.done ? (
            <HStack className={`items-center gap-1 rounded-full px-2 py-0.5 ${priority.bg}`}>
              <Icon as={Flag} className={`h-3 w-3 ${priority.text}`} />
              <Text className={`text-xs font-semibold ${priority.text}`}>{priority.label}</Text>
            </HStack>
          ) : null}
        </HStack>
      </VStack>
    </HStack>
  );
}

export default function TaskListScreen() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [filter, setFilter] = useState<Filter>('All');

  const toggle = (id: string) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const doneCount = tasks.filter((t) => t.done).length;
  const percent = Math.round((doneCount / tasks.length) * 100);
  const visible = tasks.filter((t) => filter === 'All' || t.list === filter);
  const open = visible.filter((t) => !t.done);
  const completed = visible.filter((t) => t.done);

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="gap-6 px-5 pb-32 pt-6">
        <HStack className="items-center justify-between">
          <VStack className="gap-1">
            <HStack className="items-center gap-1.5">
              <Icon as={Calendar} className="h-4 w-4 text-muted-foreground" />
              <Text className="text-sm text-muted-foreground">Tuesday, November 17</Text>
            </HStack>
            <Heading className="text-3xl font-bold text-foreground">Today</Heading>
          </VStack>
          <Avatar size="md">
            <AvatarFallbackText>Maya Chen</AvatarFallbackText>
            <AvatarImage
              source={{
                uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
              }}
            />
          </Avatar>
        </HStack>

        <VStack className="gap-4 rounded-3xl bg-primary p-5">
          <HStack className="items-end justify-between">
            <VStack className="gap-1">
              <Text className="text-sm text-primary-foreground/70">Daily progress</Text>
              <Text className="text-2xl font-bold text-primary-foreground">
                {doneCount} of {tasks.length} tasks done
              </Text>
            </VStack>
            <Text className="text-3xl font-bold text-primary-foreground">{percent}%</Text>
          </HStack>
          <Progress value={percent} className="h-2.5 bg-primary-foreground/20">
            <ProgressFilledTrack className="rounded-full bg-primary-foreground" />
          </Progress>
        </VStack>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-2">
          {FILTERS.map((f) => {
            const active = f === filter;
            return (
              <Pressable
                key={f}
                onPress={() => setFilter(f)}
                className={`rounded-full px-4 py-2 ${
                  active ? 'bg-foreground' : 'border border-border bg-card'
                }`}
              >
                <Text
                  className={`text-sm font-medium ${active ? 'text-background' : 'text-foreground'}`}
                >
                  {f}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <VStack className="gap-3">
          <HStack className="items-center justify-between">
            <Text className="text-lg font-semibold text-foreground">To do</Text>
            <Text className="text-sm text-muted-foreground">{open.length} left</Text>
          </HStack>
          {open.map((task) => (
            <TaskRow key={task.id} task={task} onToggle={() => toggle(task.id)} />
          ))}
        </VStack>

        {completed.length > 0 ? (
          <VStack className="gap-3">
            <Text className="text-lg font-semibold text-foreground">Completed</Text>
            {completed.map((task) => (
              <TaskRow key={task.id} task={task} onToggle={() => toggle(task.id)} />
            ))}
          </VStack>
        ) : null}
      </ScrollView>

      <Pressable
        aria-label="Add task"
        className="absolute bottom-8 right-5 h-14 w-14 items-center justify-center rounded-full bg-primary shadow-lg data-[active=true]:opacity-80"
      >
        <Icon as={Plus} className="h-6 w-6 text-primary-foreground" />
      </Pressable>
    </View>
  );
}
