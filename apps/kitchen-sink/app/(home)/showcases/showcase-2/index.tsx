import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { ChevronLeftIcon, Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Input, InputField, InputSlot } from '@/components/ui/input';
import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from '@/components/ui/slider';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useRouter } from 'expo-router';
import { Share2Icon } from 'lucide-react-native';
import React, { useRef, useState } from 'react';
import { Animated, ImageBackground, Pressable } from 'react-native';

// Emoji data with their corresponding expressions
const emojis = [
  { value: 0, emoji: '😣', label: 'Very Dissatisfied' },
  { value: 25, emoji: '😔', label: 'Dissatisfied' },
  { value: 50, emoji: '😐', label: 'Neutral' },
  { value: 75, emoji: '😊', label: 'Satisfied' },
  { value: 100, emoji: '😍', label: 'Very Satisfied' },
];

function Showcase2() {
  const router = useRouter();
  const [sliderValue, setSliderValue] = useState(100);
  const [activeEmojiIndex, setActiveEmojiIndex] = useState(4);

  // Animation values for each emoji
  const scaleAnims = useRef(emojis.map(() => new Animated.Value(1))).current;

  // Get the current active emoji based on slider value
  const getCurrentEmojiIndex = (value: number) => {
    if (value <= 12.5) return 0;
    if (value <= 37.5) return 1;
    if (value <= 62.5) return 2;
    if (value <= 87.5) return 3;
    return 4;
  };

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    const newIndex = getCurrentEmojiIndex(value);

    if (newIndex !== activeEmojiIndex) {
      // Animate out the previous emoji
      Animated.sequence([
        Animated.timing(scaleAnims[activeEmojiIndex], {
          toValue: 1,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start();

      // Animate in the new emoji
      Animated.sequence([
        Animated.spring(scaleAnims[newIndex], {
          toValue: 1.4,
          friction: 4,
          tension: 100,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnims[newIndex], {
          toValue: 1.2,
          friction: 4,
          tension: 100,
          useNativeDriver: true,
        }),
      ]).start();

      setActiveEmojiIndex(newIndex);
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1695728213930-93ced4114eb0?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }}
      alt="Showcase 2 Background"
      className="flex-1 pt-safe"
      resizeMode="cover"
    >
        <HStack className="items-center justify-start px-6 py-2">
          <Pressable hitSlop={10} className="active:opacity-60" onPress={() => router.back()}>
            <Icon as={ChevronLeftIcon} size="xl" className="text-white" />
          </Pressable>
        </HStack>
      {/* Top Badge with Chevron */}
      <Box className="items-center py-6">
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/120183344?s=200&v=4',
          }}
          className="w-16 h-16 rounded-full"
          alt="Showcase 2 Avatar"
        />
      </Box>

      {/* Title Section */}
      <VStack className="items-center gap-3 px-6 mb-8">
        <Text className="text-white font-bold text-center text-3xl leading-[38px]">
          Share Your{' '}
          <Text className="font-bold text-[#D5EFFF] text-3xl tracking-[-1px]">
            Experience
          </Text>
        </Text>
        <Text className="text-gray-400 text-center font-normal text-sm leading-5">
          We values your feedback about the experience{'\n'}that you had with
          ours.
        </Text>
      </VStack>

      {/* Form Section */}
      <VStack className="px-6 gap-4 mb-8">
        {/* Name Input */}
        <Input className="rounded-2xl bg-white/5 border border-white/10 h-14">
          <InputField
            placeholder="Name"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            className="text-white text-base px-4 h-14"
          />
        </Input>

        {/* Email Input */}
        <Input className="rounded-2xl bg-white/5 border border-white/10 h-14">
          <InputField
            placeholder="Mail Address"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            keyboardType="email-address"
            className="text-white text-base px-4 h-14"
          />
          {/* <Box className="absolute right-4 top-0 h-full justify-center"> */}
          <InputSlot className="pr-2">
            <Text className="text-gray-400 text-sm">@gmail.com</Text>
          </InputSlot>
          {/* </Box> */}
        </Input>

        {/* Profession Input */}
        <Input className="rounded-2xl bg-white/5 border border-white/10 h-14">
          <InputField
            placeholder="Profession"
            placeholderTextColor="rgba(255, 255, 255, 0.4)"
            className="text-white text-base px-4 h-14"
          />
        </Input>
      </VStack>

      {/* Emoji Rating Section */}
      <VStack className="px-6 gap-6 mt-10">
        {/* Emojis Row */}
        <HStack className="justify-between items-center px-2">
          {emojis.map((item, index) => (
            <Animated.View
              key={index}
              style={{
                transform: [{ scale: scaleAnims[index] }],
              }}
            >
              <Pressable
                onPress={() => {
                  setSliderValue(item.value);
                  handleSliderChange(item.value);
                }}
                className="items-center justify-center active:opacity-80"
              >
                <Text
                  style={{
                    fontSize: activeEmojiIndex === index ? 40 : 36,
                    opacity: activeEmojiIndex === index ? 1 : 0.3,
                  }}
                  className="leading-tight"
                >
                  {item.emoji}
                </Text>
              </Pressable>
            </Animated.View>
          ))}
        </HStack>

        {/* Slider */}
        <Slider
          value={sliderValue}
          onChange={handleSliderChange}
          minValue={0}
          maxValue={100}
          step={1}
          className="w-full"
        >
          <SliderTrack className="h-2 bg-white/10" hitSlop={20}>
            <SliderFilledTrack className="bg-white" />
          </SliderTrack>
          <SliderThumb className="w-7 h-7 bg-white rounded-full shadow-md" />
        </Slider>
      </VStack>

      {/* Bottom Text */}
      <Box className="absolute bottom-8 left-0 right-0 px-6">
        <Text className="text-gray-500 text-center text-xs leading-[18px]">
          We values your feedback about the experience that you had with ours
        </Text>
      </Box>
    </ImageBackground>
  );
}

Showcase2.displayName = 'Showcase2';

export default Showcase2;
