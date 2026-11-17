import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Bell,
  Bookmark,
  Heart,
  Home,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Send,
  User,
} from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const photo = (id: string, w = 200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

const STORIES = [
  { name: 'Sofia', avatar: photo('1494790108377-be9c29b29330'), seen: false },
  { name: 'James', avatar: photo('1500648767791-00dcc994a43e'), seen: false },
  { name: 'Priya', avatar: photo('1438761681033-6461ffad8d80'), seen: false },
  { name: 'Daniel', avatar: photo('1507003211169-0a1dd7228f2d'), seen: true },
  { name: 'Emma', avatar: photo('1534528741775-53994a69daeb'), seen: true },
];

type Post = {
  id: string;
  author: string;
  avatar: string;
  place: string;
  time: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
};

const POSTS: Post[] = [
  {
    id: 'p1',
    author: 'Sofia Martinez',
    avatar: photo('1494790108377-be9c29b29330'),
    place: 'Dolomites, Italy',
    time: '2h',
    image: photo('1506905925346-21bda4d32df4', 900),
    caption: 'Woke up at 4am for this and would do it again tomorrow. The light up here is unreal.',
    likes: 1284,
    comments: 86,
    shares: 21,
  },
  {
    id: 'p2',
    author: 'James Carter',
    avatar: photo('1500648767791-00dcc994a43e'),
    place: 'Home kitchen',
    time: '5h',
    image: photo('1546069901-ba9599a7e63c', 900),
    caption: 'Sunday reset bowl: quinoa, roasted veg, avocado and a lemon tahini drizzle.',
    likes: 342,
    comments: 18,
    shares: 4,
  },
];

const formatCount = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(1)}k` : `${n}`);

function Story({ name, avatar, seen }: { name: string; avatar: string; seen: boolean }) {
  return (
    <Pressable className="w-[70px] items-center gap-1.5">
      <View
        className={`rounded-full p-[2.5px] ${seen ? 'bg-border' : 'bg-pink-500'}`}
      >
        <View className="rounded-full bg-background p-[2.5px]">
          <Avatar size="lg">
            <AvatarFallbackText>{name}</AvatarFallbackText>
            <AvatarImage source={{ uri: avatar }} />
          </Avatar>
        </View>
      </View>
      <Text className="text-xs text-foreground" numberOfLines={1}>
        {name}
      </Text>
    </Pressable>
  );
}

function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <VStack className="gap-3">
      <HStack className="items-center gap-3 px-5">
        <Avatar size="sm">
          <AvatarFallbackText>{post.author}</AvatarFallbackText>
          <AvatarImage source={{ uri: post.avatar }} />
        </Avatar>
        <VStack className="flex-1">
          <Text className="text-sm font-semibold text-foreground">{post.author}</Text>
          <Text className="text-xs text-muted-foreground">
            {post.place} · {post.time}
          </Text>
        </VStack>
        <Icon as={MoreHorizontal} className="h-5 w-5 text-muted-foreground" />
      </HStack>

      <View className="px-5">
        <Image
          source={{ uri: post.image }}
          alt={post.caption}
          size="none"
          className="aspect-[4/3] w-full rounded-2xl"
        />
      </View>

      <HStack className="items-center gap-5 px-5">
        <Pressable onPress={() => setLiked((v) => !v)} className="flex-row items-center gap-1.5">
          <Icon
            as={Heart}
            className={`h-6 w-6 ${liked ? 'fill-rose-500 text-rose-500' : 'text-foreground'}`}
          />
          <Text className="text-sm font-medium text-foreground">
            {formatCount(post.likes + (liked ? 1 : 0))}
          </Text>
        </Pressable>
        <Pressable className="flex-row items-center gap-1.5">
          <Icon as={MessageCircle} className="h-6 w-6 text-foreground" />
          <Text className="text-sm font-medium text-foreground">{post.comments}</Text>
        </Pressable>
        <Pressable className="flex-row items-center gap-1.5">
          <Icon as={Send} className="h-6 w-6 text-foreground" />
          <Text className="text-sm font-medium text-foreground">{post.shares}</Text>
        </Pressable>
        <Pressable onPress={() => setSaved((v) => !v)} className="ml-auto">
          <Icon
            as={Bookmark}
            className={`h-6 w-6 ${saved ? 'fill-foreground text-foreground' : 'text-foreground'}`}
          />
        </Pressable>
      </HStack>

      <Text className="px-5 text-sm leading-5 text-foreground">
        <Text className="text-sm font-semibold text-foreground">{post.author.split(' ')[0]} </Text>
        {post.caption}
      </Text>
    </VStack>
  );
}

const TABS = [Home, Search, Plus, Heart, User];

export default function SocialFeedScreen() {
  const [tab, setTab] = useState(0);

  return (
    <View className="flex-1 bg-background">
      <ScrollView contentContainerClassName="gap-6 pb-28 pt-6">
        <HStack className="items-center justify-between px-5">
          <Heading className="text-2xl font-bold text-foreground">Moments</Heading>
          <HStack className="gap-2">
            <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-muted">
              <Icon as={Bell} className="h-5 w-5 text-foreground" />
              <View className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500" />
            </Pressable>
            <Pressable className="h-10 w-10 items-center justify-center rounded-full bg-muted">
              <Icon as={Send} className="h-5 w-5 text-foreground" />
            </Pressable>
          </HStack>
        </HStack>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerClassName="gap-3 px-5">
          <Pressable className="w-[70px] items-center gap-1.5">
            <View className="h-[74px] w-[74px] items-center justify-center rounded-full border-2 border-dashed border-border">
              <Icon as={Plus} className="h-6 w-6 text-foreground" />
            </View>
            <Text className="text-xs text-muted-foreground">Your story</Text>
          </Pressable>
          {STORIES.map((s) => (
            <Story key={s.name} {...s} />
          ))}
        </ScrollView>

        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ScrollView>

      <HStack className="absolute bottom-0 left-0 right-0 items-center justify-around border-t border-border bg-background pb-8 pt-3">
        {TABS.map((tabIcon, i) => (
          <Pressable key={i} onPress={() => setTab(i)} className="h-10 w-12 items-center justify-center">
            {i === 2 ? (
              <View className="h-9 w-11 items-center justify-center rounded-xl bg-primary">
                <Icon as={tabIcon} className="h-5 w-5 text-primary-foreground" />
              </View>
            ) : (
              <Icon
                as={tabIcon}
                className={`h-6 w-6 ${tab === i ? 'text-foreground' : 'text-muted-foreground'}`}
              />
            )}
          </Pressable>
        ))}
      </HStack>
    </View>
  );
}
