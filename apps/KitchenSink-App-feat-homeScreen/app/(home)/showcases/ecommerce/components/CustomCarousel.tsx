import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import { Dimensions, Animated } from 'react-native';
import { Card } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { LinearGradient } from 'expo-linear-gradient';
import { Box } from '@/components/ui/box';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Bookmark } from 'lucide-react-native';
import { PlayIcon } from '../icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH * 0.7;
const SPACING = 0;
const SIDE_SPACING = (SCREEN_WIDTH - ITEM_WIDTH) / 2;

const AnimatedFlatList = Animated.createAnimatedComponent(Animated.FlatList);

interface CarouselItem {
  id: number;
  title: string;
  poster: any;
  tags: string[];
}

interface CustomCarouselProps {
  data: CarouselItem[];
  autoplayInterval?: number;
}

const CarouselItemComponent = memo(
  ({
    item,
    index,
    scrollX,
    ITEM_WIDTH,
    SPACING,
  }: {
    item: CarouselItem;
    index: number;
    scrollX: Animated.Value;
    ITEM_WIDTH: number;
    SPACING: number;
  }) => {
    const inputRange = [
      (index - 1) * ITEM_WIDTH,
      index * ITEM_WIDTH,
      (index + 1) * ITEM_WIDTH,
    ];

    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View
        style={{
          transform: [{ scale }],
          opacity,
          width: ITEM_WIDTH,
          marginHorizontal: SPACING / 2,
        }}
      >
        <Card className="p-0">
          <Image
            source={item.poster}
            alt={item.title}
            className="w-full h-[46vh] rounded-xl"
          />
          <LinearGradient
            colors={[
              'rgba(0, 6, 15, 1)',
              'rgba(0, 6, 15, 0.56)',
              'rgba(0, 6, 15, 0)',
            ]}
            start={{ x: 0, y: 0.95 }}
            end={{ x: 0, y: 0.6 }}
            className="absolute z-0 h-[100%] bottom-0 w-full"
          />
          <Box className="absolute z-10 bottom-0 w-full gap-3 py-5">
            <HStack className="gap-2 justify-center items-center">
              {item.tags.map((tag, index) => (
                <Text
                  key={index}
                  className="text-md text-typography-600 font-proximaNova"
                >
                  • {tag}
                </Text>
              ))}
            </HStack>
            <HStack className="justify-center items-center gap-2">
              <Button className="" size="sm">
                <ButtonIcon
                  as={PlayIcon}
                  className="text-typography-800 fill-white"
                />
                <ButtonText className="text-typography-800 text-sm font-satoshi font-bold">
                  Play
                </ButtonText>
              </Button>
              <Button className="" size="sm">
                <ButtonIcon
                  as={Bookmark}
                  className="text-typography-800 fill-white"
                />
                <ButtonText className="text-typography-800 text-sm font-satoshi font-bold">
                  My List
                </ButtonText>
              </Button>
            </HStack>
          </Box>
        </Card>
      </Animated.View>
    );
  }
);

export const CustomCarousel: React.FC<CustomCarouselProps> = ({
  data,
  autoplayInterval = 3000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<any>(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timerId = setInterval(() => {
      if (activeIndex === data.length - 1) {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, autoplayInterval);

    return () => clearInterval(timerId);
  }, [activeIndex, data.length, autoplayInterval]);

  const getCircularIndex = (index: number) => {
    const length = data.length;
    return ((index % length) + length) % length;
  };

  const renderItem = useCallback(
    ({ item, index }: { item: CarouselItem; index: number }) => {
      return (
        <CarouselItemComponent
          item={item}
          index={index}
          scrollX={scrollX}
          ITEM_WIDTH={ITEM_WIDTH}
          SPACING={SPACING}
        />
      );
    },
    [scrollX]
  );

  const renderDots = () => {
    return (
      <HStack className="justify-center items-center mt-4 gap-2">
        {data.map((_, index) => {
          const backgroundColor = index === activeIndex ? '#FF3850' : '#52629E';

          return (
            <Animated.View
              key={index}
              className="h-1.5 w-3 rounded-md bg-secondary-500"
              style={{
                backgroundColor,
              }}
            />
          );
        })}
      </HStack>
    );
  };

  return (
    <>
      <AnimatedFlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem as any}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + SPACING}
        decelerationRate="fast"
        contentContainerStyle={{
          paddingHorizontal: SIDE_SPACING,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(
            event.nativeEvent.contentOffset.x / (ITEM_WIDTH + SPACING)
          );
          setActiveIndex(getCircularIndex(newIndex));
        }}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH + SPACING,
          offset: (ITEM_WIDTH + SPACING) * index,
          index,
        })}
        initialScrollIndex={1}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        windowSize={3}
      />
      {renderDots()}
    </>
  );
};

