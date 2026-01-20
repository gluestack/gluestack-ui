import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { useRouter } from 'expo-router';
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  MinusIcon,
  PlusIcon,
  Share2Icon,
} from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Pressable, ScrollView } from 'react-native';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface TopRatedItem {
  id: number;
  name: string;
  image: string;
}

function Showcase3() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Prawn mix salad',
      price: 6.88,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'BBQ Chicken',
      price: 11.98,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Prawn Yellow Rice',
      price: 7.98,
      quantity: 1,
      image:
        'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=400&fit=crop',
    },
  ]);

  const topRatedItems: TopRatedItem[] = [
    {
      id: 1,
      name: 'Yakisoba Noodles',
      image:
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Thai Fried Noodles',
      image:
        'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Prawn Noodles',
      image:
        'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=400&fit=crop',
    },
  ];

  const scaleAnims = useRef(
    cartItems.reduce(
      (acc, item) => {
        acc[item.id] = {
          plus: new Animated.Value(1),
          minus: new Animated.Value(1),
        };
        return acc;
      },
      {} as Record<number, { plus: Animated.Value; minus: Animated.Value }>
    )
  ).current;

  const fadeAnims = useRef(cartItems.map(() => new Animated.Value(0))).current;

  const slideAnims = useRef(
    cartItems.map(() => new Animated.Value(20))
  ).current;

  const checkoutButtonScale = useRef(new Animated.Value(1)).current;
  const addMoreButtonScale = useRef(new Animated.Value(1)).current;
  const topRatedScales = useRef(
    topRatedItems.map(() => new Animated.Value(1))
  ).current;

  // Fade in cart items on mount
  useEffect(() => {
    const animations = cartItems.map((_, index) =>
      Animated.parallel([
        Animated.timing(fadeAnims[index], {
          toValue: 1,
          duration: 400,
          delay: index * 100,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(slideAnims[index], {
          toValue: 0,
          duration: 400,
          delay: index * 100,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ])
    );
    Animated.stagger(50, animations).start();
  }, []);

  const animateButton = (id: number, type: 'plus' | 'minus') => {
    const anim = scaleAnims[id]?.[type];
    if (anim) {
      Animated.sequence([
        Animated.timing(anim, {
          toValue: 0.75,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.spring(anim, {
          toValue: 1,
          friction: 4,
          tension: 120,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };

  const animateCheckoutButton = (pressed: boolean) => {
    Animated.spring(checkoutButtonScale, {
      toValue: pressed ? 0.96 : 1,
      friction: 4,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const animateAddMoreButton = (pressed: boolean) => {
    Animated.spring(addMoreButtonScale, {
      toValue: pressed ? 0.97 : 1,
      friction: 4,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const animateTopRatedItem = (index: number, pressed: boolean) => {
    Animated.spring(topRatedScales[index], {
      toValue: pressed ? 0.95 : 1,
      friction: 4,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 2.0;
  const discount = 0.0;
  const total = subtotal + deliveryFee - discount;

  return (
    <Box className="flex-1 bg-black">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <HStack className="items-center justify-between px-6 pt-16 pb-6">
          <Pressable hitSlop={10} className="active:opacity-60" onPress={() => router.back()}>
            <Icon as={ChevronLeftIcon} size="xl" className="text-white" />
          </Pressable>

          <Text className="text-white text-xl font-semibold">My Cart</Text>

          <Pressable hitSlop={10} className="active:opacity-60">
            <Icon as={Share2Icon} size="md" className="text-white" />
          </Pressable>
        </HStack>

        {/* Cart Items */}
        <VStack className="px-6 gap-4 mb-4">
          {cartItems.map((item, index) => (
            <Animated.View
              key={item.id}
              style={{
                opacity: fadeAnims[index],
                transform: [{ translateY: slideAnims[index] }],
              }}
            >
              <Box
                className="bg-[#1C1C1C] rounded-3xl p-4 flex-row items-center gap-4"
                style={{
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                  elevation: 5,
                }}
              >
                {/* Food Image */}
                <Box className="w-20 h-20 rounded-2xl overflow-hidden bg-[#2A2A2A]">
                  <Image
                    source={{ uri: item.image }}
                    alt={item.name}
                    className="w-full h-full"
                    style={{ resizeMode: 'cover' }}
                  />
                </Box>

                {/* Item Details */}
                <VStack className="flex-1 gap-1">
                  <Text className="text-white text-base font-medium">
                    {item.name}
                  </Text>
                  <Text className="text-[#4ADE80] text-base font-semibold">
                    ${item.price.toFixed(2)}
                  </Text>
                </VStack>

                {/* Quantity Controls */}
                <HStack className="items-center gap-3">
                  <Animated.View
                    style={{
                      transform: [{ scale: scaleAnims[item.id]?.plus || 1 }],
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        animateButton(item.id, 'plus');
                        updateQuantity(item.id, 1);
                      }}
                      className="w-8 h-8 bg-[#2A2A2A] rounded-lg items-center justify-center active:bg-[#3A3A3A]"
                    >
                      <Icon as={PlusIcon} size="sm" className="text-white" />
                    </Pressable>
                  </Animated.View>

                  <Text className="text-white text-base font-medium min-w-[20px] text-center">
                    {item.quantity}
                  </Text>

                  <Animated.View
                    style={{
                      transform: [{ scale: scaleAnims[item.id]?.minus || 1 }],
                    }}
                  >
                    <Pressable
                      onPress={() => {
                        animateButton(item.id, 'minus');
                        updateQuantity(item.id, -1);
                      }}
                      className="w-8 h-8 bg-[#2A2A2A] rounded-lg items-center justify-center active:bg-[#3A3A3A]"
                    >
                      <Icon as={MinusIcon} size="sm" className="text-white" />
                    </Pressable>
                  </Animated.View>
                </HStack>
              </Box>
            </Animated.View>
          ))}
        </VStack>

        {/* Add More Items Button */}
        <Box className="px-6 mb-6">
          <Animated.View
            style={{
              transform: [{ scale: addMoreButtonScale }],
            }}
          >
            <Pressable
              onPressIn={() => animateAddMoreButton(true)}
              onPressOut={() => animateAddMoreButton(false)}
              className="border border-white/10 rounded-2xl py-4 items-center active:bg-white/5"
            >
              <HStack className="items-center gap-2">
                <Icon as={PlusIcon} size="md" className="text-white" />
                <Text className="text-white text-base font-medium">
                  Add more items
                </Text>
              </HStack>
            </Pressable>
          </Animated.View>
        </Box>

        {/* Try Our Top Rated Items */}
        <VStack className="mb-6">
          <HStack className="items-center justify-between px-6 mb-4">
            <Text className="text-white text-base font-medium">
              Try our top rated items
            </Text>
            <Pressable className="active:opacity-60">
              <Icon as={ChevronDownIcon} size="md" className="text-white/60" />
            </Pressable>
          </HStack>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 24,
              gap: 16,
            }}
          >
            {topRatedItems.map((item, index) => (
              <Animated.View
                key={item.id}
                style={{
                  transform: [{ scale: topRatedScales[index] }],
                }}
              >
                <Pressable
                  onPressIn={() => animateTopRatedItem(index, true)}
                  onPressOut={() => animateTopRatedItem(index, false)}
                >
                  <VStack className="gap-2">
                    <Box
                      className="w-32 h-32 rounded-2xl overflow-hidden bg-[#2A2A2A]"
                      style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 6,
                        elevation: 3,
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        alt={item.name}
                        className="w-full h-full"
                        style={{ resizeMode: 'cover' }}
                      />
                    </Box>
                    <Text
                      className="text-white text-xs font-medium text-center"
                      numberOfLines={1}
                    >
                      {item.name}
                    </Text>
                  </VStack>
                </Pressable>
              </Animated.View>
            ))}
          </ScrollView>
        </VStack>

        {/* Summary Section */}
        <VStack className="px-6 gap-3 mb-6">
          <HStack className="items-center justify-between">
            <Text className="text-white/60 text-base">Delivery Fee</Text>
            <Text className="text-white text-base font-medium">
              ${deliveryFee.toFixed(2)}
            </Text>
          </HStack>

          <HStack className="items-center justify-between">
            <Text className="text-white/60 text-base">Discounts</Text>
            <Text className="text-white text-base font-medium">
              ${discount.toFixed(2)}
            </Text>
          </HStack>

          <HStack className="items-center justify-between pt-3 border-t border-white/10">
            <Text className="text-white text-lg font-semibold">Total</Text>
            <Text className="text-white text-xl font-bold">
              ${total.toFixed(2)}
            </Text>
          </HStack>
        </VStack>

        {/* Checkout Button */}
        <Box className="px-6 pb-10">
          <Animated.View
            style={{
              transform: [{ scale: checkoutButtonScale }],
            }}
          >
            <Pressable
              onPressIn={() => animateCheckoutButton(true)}
              onPressOut={() => animateCheckoutButton(false)}
              className="bg-[#16A34A] rounded-2xl py-5 items-center active:bg-[#15803D]"
              style={{
                shadowColor: '#16A34A',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.4,
                shadowRadius: 16,
                elevation: 8,
              }}
            >
              <Text className="text-white text-lg font-semibold">Checkout</Text>
            </Pressable>
          </Animated.View>
        </Box>
      </ScrollView>
    </Box>
  );
}

Showcase3.displayName = 'Showcase3';

export default Showcase3;
