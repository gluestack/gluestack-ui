import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { ArrowUp, ChevronDown, Heart, X } from 'lucide-react-native';
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Input, InputField } from '@/components/ui/input';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

const photo = (id: string) => `https://images.unsplash.com/photo-${id}?w=200&q=80`;

type Comment = {
  id: string;
  author: string;
  avatar: string;
  time: string;
  body: string;
  likes: number;
  isAuthor?: boolean;
  replies?: Comment[];
};

const COMMENTS: Comment[] = [
  {
    id: 'c1',
    author: 'James Carter',
    avatar: photo('1500648767791-00dcc994a43e'),
    time: '1h',
    body: 'That ridge line is unreal. Which trail did you take up there?',
    likes: 48,
    replies: [
      {
        id: 'c1r1',
        author: 'Sofia Martinez',
        avatar: photo('1494790108377-be9c29b29330'),
        time: '52m',
        body: 'Sentiero 9 from the hut, about 90 minutes in the dark with a headlamp.',
        likes: 21,
        isAuthor: true,
      },
      {
        id: 'c1r2',
        author: 'Priya Nair',
        avatar: photo('1438761681033-6461ffad8d80'),
        time: '40m',
        body: 'Saving this for September!',
        likes: 6,
      },
    ],
  },
  {
    id: 'c2',
    author: 'Daniel Okafor',
    avatar: photo('1507003211169-0a1dd7228f2d'),
    time: '3h',
    body: 'The colour grading here is perfect. Shot on film or digital?',
    likes: 12,
  },
  {
    id: 'c3',
    author: 'Emma Lindqvist',
    avatar: photo('1534528741775-53994a69daeb'),
    time: '5h',
    body: 'Okay, I am booking the workshop. No more excuses.',
    likes: 9,
  },
  {
    id: 'c4',
    author: 'Liam Becker',
    avatar: photo('1506794778202-cad84cf45f1d'),
    time: '6h',
    body: 'Cloud inversions like this are so rare. Great timing.',
    likes: 4,
  },
];

function CommentItem({
  comment,
  nested,
  onReply,
}: {
  comment: Comment;
  nested?: boolean;
  onReply: (name: string) => void;
}) {
  const [liked, setLiked] = useState(false);
  const [showReplies, setShowReplies] = useState(true);

  return (
    <VStack className="gap-3">
      <HStack className="gap-3">
        <Avatar size="sm" className={nested ? 'h-7 w-7' : ''}>
          <AvatarFallbackText>{comment.author}</AvatarFallbackText>
          <AvatarImage source={{ uri: comment.avatar }} />
        </Avatar>
        <VStack className="flex-1 gap-1">
          <HStack className="items-center gap-1.5">
            <Text className="text-sm font-semibold text-foreground">{comment.author}</Text>
            {comment.isAuthor ? (
              <View className="rounded bg-primary px-1.5 py-px">
                <Text className="text-[10px] font-bold text-primary-foreground">AUTHOR</Text>
              </View>
            ) : null}
            <Text className="text-xs text-muted-foreground">{comment.time}</Text>
          </HStack>
          <Text className="text-[15px] leading-[21px] text-foreground">{comment.body}</Text>
          <HStack className="mt-0.5 gap-4">
            <Pressable onPress={() => onReply(comment.author.split(' ')[0])}>
              <Text className="text-xs font-semibold text-muted-foreground">Reply</Text>
            </Pressable>
            {comment.replies && comment.replies.length > 0 ? (
              <Pressable
                onPress={() => setShowReplies((v) => !v)}
                className="flex-row items-center gap-0.5"
              >
                <Text className="text-xs font-semibold text-muted-foreground">
                  {showReplies ? 'Hide' : 'View'} {comment.replies.length} replies
                </Text>
                <Icon
                  as={ChevronDown}
                  className={`h-3.5 w-3.5 text-muted-foreground ${showReplies ? 'rotate-180' : ''}`}
                />
              </Pressable>
            ) : null}
          </HStack>
        </VStack>
        <Pressable onPress={() => setLiked((v) => !v)} className="items-center gap-0.5 pt-1">
          <Icon
            as={Heart}
            className={`h-4 w-4 ${liked ? 'fill-rose-500 text-rose-500' : 'text-muted-foreground'}`}
          />
          <Text className="text-[11px] text-muted-foreground">{comment.likes + (liked ? 1 : 0)}</Text>
        </Pressable>
      </HStack>

      {showReplies && comment.replies ? (
        <VStack className="ml-4 gap-4 border-l-2 border-border pl-7">
          {comment.replies.map((r) => (
            <CommentItem key={r.id} comment={r} nested onReply={onReply} />
          ))}
        </VStack>
      ) : null}
    </VStack>
  );
}

export default function CommentsThreadScreen() {
  const [text, setText] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>('James');

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <HStack className="items-center justify-between border-b border-border px-5 pb-3 pt-6">
        <View className="w-6" />
        <VStack className="items-center">
          <Text className="text-base font-semibold text-foreground">Comments</Text>
          <Text className="text-xs text-muted-foreground">86 comments</Text>
        </VStack>
        <Pressable>
          <Icon as={X} className="h-6 w-6 text-foreground" />
        </Pressable>
      </HStack>

      <ScrollView className="flex-1" contentContainerClassName="gap-6 px-5 pb-6 pt-5">
        {COMMENTS.map((c) => (
          <CommentItem key={c.id} comment={c} onReply={setReplyTo} />
        ))}
      </ScrollView>

      <VStack className="border-t border-border bg-background px-4 pb-8 pt-2">
        {replyTo ? (
          <HStack className="items-center justify-between px-1 pb-2">
            <Text className="text-xs text-muted-foreground">
              Replying to <Text className="text-xs font-semibold text-foreground">{replyTo}</Text>
            </Text>
            <Pressable onPress={() => setReplyTo(null)}>
              <Icon as={X} className="h-3.5 w-3.5 text-muted-foreground" />
            </Pressable>
          </HStack>
        ) : null}
        <HStack className="items-center gap-3">
          <Avatar size="sm">
            <AvatarFallbackText>Maya Chen</AvatarFallbackText>
            <AvatarImage source={{ uri: photo('1534528741775-53994a69daeb') }} />
          </Avatar>
          <Input className="h-11 flex-1 rounded-full bg-muted px-4 dark:bg-muted">
            <InputField
              placeholder="Add a comment..."
              value={text}
              onChangeText={setText}
              className="text-[15px]"
            />
            {text.trim() ? (
              <Pressable
                onPress={() => setText('')}
                className="-mr-2 h-8 w-8 items-center justify-center rounded-full bg-primary"
              >
                <Icon as={ArrowUp} className="h-4 w-4 text-primary-foreground" />
              </Pressable>
            ) : null}
          </Input>
        </HStack>
      </VStack>
    </KeyboardAvoidingView>
  );
}
