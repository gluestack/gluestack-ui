import { Dimensions, SafeAreaView, View, Text } from 'react-native';
import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
} from 'react-native-reanimated';
import { Button, ButtonText } from '../components/ui/button';

const buttonVariants = [
  {
    variant: 'default' as const,
    size: 'default' as const,
    title: 'Default Button',
    id: 1,
  },
  {
    variant: 'destructive' as const,
    size: 'default' as const,
    title: 'Destructive Button',
    id: 2,
  },
  {
    variant: 'outline' as const,
    size: 'lg' as const,
    title: 'Outline Button',
    id: 3,
  },
  {
    variant: 'secondary' as const,
    size: 'default' as const,
    title: 'Secondary Button',
    id: 4,
  },
  {
    variant: 'ghost' as const,
    size: 'default' as const,
    title: 'Ghost Button',
    id: 5,
  },
  {
    variant: 'link' as const,
    size: 'lg' as const,
    title: 'Link Button',
    id: 6,
  },
];

interface ButtonVariantData {
  variant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size: 'default' | 'sm' | 'lg' | 'icon';
  title: string;
  id: number;
}

interface ButtonComponentProps {
  data: ButtonVariantData;
  scrollX: Animated.SharedValue<number>;
  index: number;
}

const { width, height } = Dimensions.get('window');

const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = height * 0.5;
const SPACING = 20;

const ButtonComponent = ({ data, scrollX, index }: ButtonComponentProps) => {
  const animation = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * (ITEM_WIDTH + SPACING),
      index * (ITEM_WIDTH + SPACING),
      (index + 1) * (ITEM_WIDTH + SPACING),
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.7, 1, 0.7],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          marginHorizontal: SPACING / 2,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        },
        animation,
      ]}
    >
      <Button variant={data.variant} size={data.size}>
        <ButtonText>{data.title}</ButtonText>
      </Button>
    </Animated.View>
  );
};

const Indicator = ({
  scrollX,
  index,
}: {
  scrollX: Animated.SharedValue<number>;
  index: number;
}) => {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 1) * (ITEM_WIDTH + SPACING),
      index * (ITEM_WIDTH + SPACING),
      (index + 1) * (ITEM_WIDTH + SPACING),
    ];

    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.8, 1.3, 0.8],
      Extrapolation.CLAMP
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.4, 1, 0.4],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        {
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#fff',
          marginHorizontal: 5,
        },
        animatedStyle,
      ]}
    />
  );
};

const Index = () => {
  const scrollX = useSharedValue<number>(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  const currentIndex = useDerivedValue(() => {
    return Math.round(scrollX.value / (ITEM_WIDTH + SPACING));
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const index = Math.round(scrollX.value / (ITEM_WIDTH + SPACING));
      setActiveIndex(index);
    }, 100);
    return () => clearInterval(interval);
  }, [scrollX]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', width: width }}>
        {/* Current Variant Label */}
        <View
          style={{
            position: 'absolute',
            top: 50,
            alignSelf: 'center',
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 20,
            zIndex: 10,
          }}
        >
          <Text
          className='text-typography-950'
            style={{
            
              fontSize: 18,
              fontWeight: 'bold',
              textTransform: 'capitalize',
            }}
          >
            {buttonVariants[activeIndex]?.variant || 'Default'} Variant
          </Text>
        </View>

        <Animated.FlatList
          data={buttonVariants}
          renderItem={({ item, index }) => (
            <ButtonComponent
              key={item.id}
              index={index}
              data={item}
              scrollX={scrollX}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          snapToInterval={ITEM_WIDTH + SPACING}
          decelerationRate="fast"
          contentContainerStyle={{
            paddingHorizontal: (width - ITEM_WIDTH) / 2 - SPACING / 2,
          }}
        />

        {/* Dot Indicators */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}
        >
          {buttonVariants.map((_, index) => (
            <Indicator key={index} scrollX={scrollX} index={index} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Index;
