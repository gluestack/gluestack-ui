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

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const ITEM_WIDTH = SCREEN_WIDTH * 0.7;
const SPACING = 0;
const SIDE_SPACING = (SCREEN_WIDTH - ITEM_WIDTH) / 2;
const GRADIENT_HEIGHT = SCREEN_HEIGHT * 0.2; // 20vh

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
        <Card className="p-0 relative h-[46vh]">
          {/* <Image
            source={item.poster}
            alt={item.title}
            className="w-full  h-full rounded-xl"
          /> */}
          {/* <Box className="absolute z-0 h-[20vh] bottom-0 w-full bg-red-500"></Box> */}
          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={{
              position: 'absolute',
              zIndex: 30,
              height: GRADIENT_HEIGHT,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
          <Box className="absolute z-[50] bottom-0 w-full gap-3 py-5">
            <HStack className="gap-2 justify-center items-center">
              {item.tags.map((tag, index) => (
                <Text key={index} className="text-md text-foreground font-body">
                  • {tag}
                </Text>
              ))}
            </HStack>
            <HStack className="justify-center items-center gap-2">
              <Button className="bg-[rgb(65,1,255)]">
                <ButtonIcon
                  as={PlayIcon}
                  className="stroke-primary-foreground fill-none"
                />
                <ButtonText className=" text-sm font-body font-bold">
                  Play
                </ButtonText>
              </Button>
              <Button className="bg-[rgb(65,1,255)]" size="sm">
                <ButtonIcon
                  as={Bookmark}
                  className="stroke-primary-foreground fill-none"
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
