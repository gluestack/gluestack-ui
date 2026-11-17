import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  BadgeCheck,
  ChevronLeft,
  Grid3x3,
  Link2,
  MapPin,
  MessageCircle,
  MoreHorizontal,
  Bookmark,
  Heart,
  type LucideIcon,
} from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const photo = (id: string, w = 400) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

const STATS = [
  { label: 'Posts', value: '248' },
  { label: 'Followers', value: '18.4k' },
  { label: 'Following', value: '312' },
];

const TABS: { key: string; icon: LucideIcon }[] = [
  { key: 'posts', icon: Grid3x3 },
  { key: 'liked', icon: Heart },
  { key: 'saved', icon: Bookmark },
];

const GRID = [
  '1506905925346-21bda4d32df4',
  '1534528741775-53994a69daeb',
  '1546069901-ba9599a7e63c',
  '1500648767791-00dcc994a43e',
  '1523275335684-37898b6baf30',
  '1438761681033-6461ffad8d80',
  '1505740420928-5e560c06d30e',
  '1507003211169-0a1dd7228f2d',
  '1506794778202-cad84cf45f1d',
];

function CircleButton({ icon }: { icon: LucideIcon }) {
  return (
    <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-black/35">
      <Icon as={icon} className="h-5 w-5 text-white" />
    </Pressable>
  );
}

export default function UserProfileScreen() {
  const [following, setFollowing] = useState(false);
  const [tab, setTab] = useState('posts');

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="pb-12">
      <View>
        <Image
          source={{ uri: photo('1506905925346-21bda4d32df4', 900) }}
          alt="Mountain range at sunrise"
          size="none"
          className="h-44 w-full"
        />
        <HStack className="absolute left-0 right-0 top-0 justify-between px-5 pt-6">
          <CircleButton icon={ChevronLeft} />
          <CircleButton icon={MoreHorizontal} />
        </HStack>
      </View>

      <VStack className="gap-4 px-5">
        <HStack className="-mt-12 items-end justify-between">
          <View className="rounded-full bg-background p-1">
            <Avatar size="lg" className="h-24 w-24">
              <AvatarFallbackText>Sofia Martinez</AvatarFallbackText>
              <AvatarImage source={{ uri: photo('1494790108377-be9c29b29330', 300) }} />
            </Avatar>
          </View>
          <HStack className="gap-2 pb-1">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
              <ButtonIcon as={MessageCircle} className="h-[18px] w-[18px]" />
            </Button>
            <Button
              variant={following ? 'outline' : 'default'}
              onPress={() => setFollowing((v) => !v)}
              className="h-10 rounded-full px-6"
            >
              <ButtonText className="text-sm font-semibold">
                {following ? 'Following' : 'Follow'}
              </ButtonText>
            </Button>
          </HStack>
        </HStack>

        <VStack className="gap-1.5">
          <HStack className="items-center gap-1.5">
            <Heading className="text-2xl font-bold text-foreground">Sofia Martinez</Heading>
            <Icon as={BadgeCheck} className="h-5 w-5 text-sky-500" />
          </HStack>
          <Text className="text-sm text-muted-foreground">@sofiaoutdoors</Text>
          <Text className="mt-1 text-[15px] leading-6 text-foreground">
            Photographer chasing first light and honest portraits. Workshops every spring in the Alps.
          </Text>
          <HStack className="mt-1 flex-wrap gap-x-4 gap-y-1">
            <HStack className="items-center gap-1">
              <Icon as={MapPin} className="h-3.5 w-3.5 text-muted-foreground" />
              <Text className="text-sm text-muted-foreground">Lisbon, Portugal</Text>
            </HStack>
            <HStack className="items-center gap-1">
              <Icon as={Link2} className="h-3.5 w-3.5 text-muted-foreground" />
              <Text className="text-sm font-medium text-sky-500">sofiamartinez.photo</Text>
            </HStack>
          </HStack>
        </VStack>

        <HStack className="rounded-2xl border border-border bg-card py-3">
          {STATS.map((s, i) => (
            <VStack
              key={s.label}
              className={`flex-1 items-center ${i > 0 ? 'border-l border-border' : ''}`}
            >
              <Text className="text-lg font-bold text-foreground">{s.value}</Text>
              <Text className="text-xs text-muted-foreground">{s.label}</Text>
            </VStack>
          ))}
        </HStack>
      </VStack>

      <HStack className="mt-5 border-b border-border">
        {TABS.map((t) => (
          <Pressable
            key={t.key}
            onPress={() => setTab(t.key)}
            className={`flex-1 items-center border-b-2 py-3 ${
              tab === t.key ? 'border-foreground' : 'border-transparent'
            }`}
          >
            <Icon
              as={t.icon}
              className={`h-5 w-5 ${tab === t.key ? 'text-foreground' : 'text-muted-foreground'}`}
            />
          </Pressable>
        ))}
      </HStack>

      <View className="flex-row flex-wrap">
        {GRID.map((id) => (
          <Pressable key={id} className="w-1/3 p-px">
            <Image source={{ uri: photo(id) }} alt="Post" size="none" className="aspect-square w-full" />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
