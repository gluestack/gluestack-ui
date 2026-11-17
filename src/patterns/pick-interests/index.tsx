import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  ArrowLeft,
  Bike,
  BookOpen,
  Camera,
  Check,
  ChefHat,
  Code,
  Dumbbell,
  Film,
  Gamepad2,
  Leaf,
  Music,
  Palette,
  PawPrint,
  Plane,
  Rocket,
  Shirt,
  Sprout,
  TrendingUp,
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

const MIN_PICKS = 3;

const INTERESTS: { id: string; label: string; icon: LucideIcon }[] = [
  { id: 'design', label: 'Design', icon: Palette },
  { id: 'travel', label: 'Travel', icon: Plane },
  { id: 'cooking', label: 'Cooking', icon: ChefHat },
  { id: 'fitness', label: 'Fitness', icon: Dumbbell },
  { id: 'photo', label: 'Photography', icon: Camera },
  { id: 'music', label: 'Music', icon: Music },
  { id: 'books', label: 'Books', icon: BookOpen },
  { id: 'tech', label: 'Programming', icon: Code },
  { id: 'film', label: 'Film', icon: Film },
  { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
  { id: 'cycling', label: 'Cycling', icon: Bike },
  { id: 'startups', label: 'Startups', icon: Rocket },
  { id: 'investing', label: 'Investing', icon: TrendingUp },
  { id: 'fashion', label: 'Fashion', icon: Shirt },
  { id: 'gardening', label: 'Gardening', icon: Sprout },
  { id: 'pets', label: 'Pets', icon: PawPrint },
  { id: 'outdoors', label: 'Outdoors', icon: Leaf },
];

function InterestChip({
  label,
  icon,
  selected,
  onPress,
}: {
  label: string;
  icon: LucideIcon;
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      className={`flex-row items-center gap-2 rounded-full border px-4 py-2.5 ${
        selected ? 'border-primary bg-primary' : 'border-border bg-card'
      }`}
    >
      <Icon
        as={selected ? Check : icon}
        className={`h-4 w-4 ${selected ? 'text-primary-foreground' : 'text-foreground'}`}
      />
      <Text
        className={`text-sm font-medium ${
          selected ? 'text-primary-foreground' : 'text-foreground'
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export default function PickInterestsScreen() {
  const [selected, setSelected] = useState<string[]>(['design', 'travel', 'photo', 'music']);

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const remaining = Math.max(0, MIN_PICKS - selected.length);
  const ready = remaining === 0;

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="px-5 pb-40 pt-6">
        <HStack className="items-center gap-4">
          <Pressable className="h-10 w-10 items-center justify-center rounded-full border border-border bg-card">
            <Icon as={ArrowLeft} className="h-5 w-5 text-foreground" />
          </Pressable>
          <Progress value={66} className="h-1.5 flex-1 bg-muted">
            <ProgressFilledTrack />
          </Progress>
          <Text className="text-sm font-medium text-muted-foreground">2/3</Text>
        </HStack>

        <VStack className="mt-8 gap-2">
          <Heading className="text-3xl font-bold leading-tight text-foreground">
            What are you into?
          </Heading>
          <Text className="text-base leading-6 text-muted-foreground">
            Pick at least {MIN_PICKS} topics and we'll tailor your feed. You can change these later.
          </Text>
        </VStack>

        <View className="mt-7 flex-row flex-wrap gap-2.5">
          {INTERESTS.map((item) => (
            <InterestChip
              key={item.id}
              label={item.label}
              icon={item.icon}
              selected={selected.includes(item.id)}
              onPress={() => toggle(item.id)}
            />
          ))}
        </View>
      </ScrollView>

      <VStack className="absolute bottom-0 left-0 right-0 gap-3 border-t border-border bg-background px-5 pb-8 pt-4">
        <HStack className="items-center justify-between">
          <Text className="text-sm text-muted-foreground">
            <Text className="text-sm font-semibold text-foreground">{selected.length}</Text>{' '}
            selected
          </Text>
          <HStack className="gap-1">
            {Array.from({ length: MIN_PICKS }, (_, i) => (
              <View
                key={i}
                className={`h-1.5 w-5 rounded-full ${
                  i < selected.length ? 'bg-emerald-500' : 'bg-muted'
                }`}
              />
            ))}
          </HStack>
        </HStack>
        <Button size="lg" className="h-12 rounded-xl" isDisabled={!ready}>
          <ButtonText className="text-base">
            {ready ? 'Continue' : `Pick ${remaining} more`}
          </ButtonText>
        </Button>
      </VStack>
    </View>
  );
}
