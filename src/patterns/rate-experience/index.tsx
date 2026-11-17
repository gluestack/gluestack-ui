import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Check, Star, X } from 'lucide-react-native';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { VStack } from '@/components/ui/vstack';

const LABELS = ['Tap a star to rate', 'Terrible', 'Not great', 'It was okay', 'Really good', 'Loved it!'];

const POSITIVE_TAGS = ['Tasty food', 'Fast delivery', 'Hot & fresh', 'Great portions', 'Nice packaging', 'Friendly courier'];
const NEGATIVE_TAGS = ['Arrived cold', 'Late delivery', 'Missing items', 'Small portions', 'Spilled packaging', 'Wrong order'];

export default function RateExperienceScreen() {
  const [rating, setRating] = useState(4);
  const [tags, setTags] = useState<string[]>(['Tasty food', 'Hot & fresh']);
  const [comment, setComment] = useState('');

  const options = rating >= 4 || rating === 0 ? POSITIVE_TAGS : NEGATIVE_TAGS;

  const rate = (value: number) => {
    const wasPositive = rating >= 4;
    setRating(value);
    if (wasPositive !== value >= 4) setTags([]);
  };

  const toggleTag = (tag: string) =>
    setTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));

  return (
    <KeyboardAvoidingView
      className="flex-1 bg-background"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerClassName="gap-7 px-5 pb-36 pt-6">
        <HStack className="items-center justify-between">
          <Text className="text-sm font-medium text-muted-foreground">Order #4821 · Delivered 7:42 PM</Text>
          <Pressable
            aria-label="Close"
            className="h-9 w-9 items-center justify-center rounded-full bg-muted"
          >
            <Icon as={X} className="h-4 w-4 text-foreground" />
          </Pressable>
        </HStack>

        <VStack className="items-center gap-4">
          <View>
            <Image
              size="none"
              className="h-28 w-28 rounded-3xl bg-muted"
              source={{ uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80' }}
              alt="Harvest grain bowl"
            />
            <View className="absolute -bottom-2 -right-2 h-9 w-9 items-center justify-center rounded-full border-4 border-background bg-emerald-500">
              <Icon as={Check} className="h-4 w-4 text-white" />
            </View>
          </View>
          <VStack className="items-center gap-1">
            <Heading className="text-center text-2xl font-bold text-foreground">
              How was your order?
            </Heading>
            <Text className="text-center text-base text-muted-foreground">
              Green Fork Kitchen · 2 items · $28.40
            </Text>
          </VStack>
        </VStack>

        <VStack className="items-center gap-3 rounded-3xl border border-border bg-card py-6">
          <HStack className="gap-3">
            {[1, 2, 3, 4, 5].map((value) => {
              const filled = value <= rating;
              return (
                <Pressable key={value} aria-label={`${value} stars`} onPress={() => rate(value)}>
                  <Icon
                    as={Star}
                    className={`h-10 w-10 ${
                      filled ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground/40'
                    }`}
                  />
                </Pressable>
              );
            })}
          </HStack>
          <Text className="text-base font-semibold text-foreground">{LABELS[rating]}</Text>
        </VStack>

        <VStack className="gap-3">
          <Text className="text-base font-semibold text-foreground">
            {rating >= 4 ? 'What did you like?' : 'What went wrong?'}
          </Text>
          <View className="flex-row flex-wrap gap-2">
            {options.map((tag) => {
              const active = tags.includes(tag);
              return (
                <Pressable
                  key={tag}
                  onPress={() => toggleTag(tag)}
                  className={`rounded-full border px-4 py-2 ${
                    active ? 'border-primary bg-primary' : 'border-border bg-card'
                  }`}
                >
                  <Text
                    className={`text-sm font-medium ${active ? 'text-primary-foreground' : 'text-foreground'}`}
                  >
                    {tag}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </VStack>

        <VStack className="gap-3">
          <Text className="text-base font-semibold text-foreground">Anything else?</Text>
          <Textarea className="h-28 rounded-2xl">
            <TextareaInput
              value={comment}
              onChangeText={setComment}
              placeholder="Tell the restaurant what stood out (optional)"
              multiline
              textAlignVertical="top"
              className="px-4 py-3 text-base"
            />
          </Textarea>
        </VStack>
      </ScrollView>

      <VStack className="absolute bottom-0 left-0 right-0 gap-2 border-t border-border bg-background px-5 pb-8 pt-4">
        <Button size="lg" className="h-12 rounded-xl" isDisabled={rating === 0}>
          <ButtonText className="text-base">Submit review</ButtonText>
        </Button>
      </VStack>
    </KeyboardAvoidingView>
  );
}
