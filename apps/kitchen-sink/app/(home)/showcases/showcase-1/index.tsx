import React from 'react';
import { ScrollView, Pressable, Dimensions } from 'react-native';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Image } from '@/components/ui/image';
import { Icon, ChevronLeftIcon, createIcon } from '@/components/ui/icon';
import { Path } from 'react-native-svg';

// Create custom Camera Icon
const CameraIcon = createIcon({
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        stroke="#FEFEFE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.5}
        d="M16 22h2a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v2.85"
      />
      <Path
        stroke="#FEFEFE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.5}
        d="M14 2v5a1 1 0 0 0 1 1h5M8 14v2.2l1.6 1"
      />
      <Path
        stroke="#FEFEFE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.5}
        d="M8 22a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
      />
    </>
  ),
});

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = 223;
const CARD_SPACING = 24;

function Showcase1() {
  const cards = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1616530940355-351fabd9524b?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      brand: 'ZEES',
      brandLogo:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1740663753529-f627e0818750?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      brand: 'ZEES',
      brandLogo:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1611787640592-ebf78080d96e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      brand: 'ZEES',
      brandLogo:
        'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg',
    },
  ];

  const partnerBrands = [
    {
      name: 'Flipkart',
      color: '#2874F0',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Flipkart_Logo_as_of_2025.png',
    },
    {
      name: 'Zomato',
      color: '#E23744',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png',
    },
    {
      name: 'Swiggy',
      color: '#FC8019',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png',
    },
    {
      name: 'Ajio',
      color: '#FFFFFF',
      logo: 'https://static.wikia.nocookie.net/logopedia/images/d/dc/Ajio-Logo.png/revision/latest?cb=20240316175725',
    },
  ];

  return (
    <Box className="flex-1 bg-black">
      {/* Header */}
      <HStack className="items-center justify-between px-6 pt-16 pb-8">
        <Pressable hitSlop={10} className="active:opacity-60">
          <Icon as={ChevronLeftIcon} size="xl" className="text-white" />
        </Pressable>

        <HStack className="items-center gap-4">
          {/* Coin Balance */}
          <Box
            className="border border-white/15 rounded-full px-4 py-2.5 bg-white/5"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 3,
            }}
          >
            <HStack className="items-center gap-2.5">
              {/* Coin Icon */}
              <Box
                className="w-6 h-6 rounded-full items-center justify-center"
                style={{
                  backgroundColor: '#FFD700',
                  borderWidth: 2,
                  borderColor: '#FFA500',
                }}
              >
                <Text
                  className="text-[#8B4513] text-[10px] font-black"
                  style={{ marginTop: -1 }}
                >
                  ₹
                </Text>
              </Box>
              <Text className="text-white text-[14px] font-semibold tracking-wide">
                2,82,281
              </Text>
            </HStack>
          </Box>

          {/* Camera Button */}
          <Pressable hitSlop={10} className="active:opacity-60">
            <Box
              className="w-11 h-11 border border-white/15 rounded-xl items-center justify-center bg-white/5"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 3,
              }}
            >
              <Icon as={CameraIcon} size="md" className="text-white" />
            </Box>
          </Pressable>
        </HStack>
      </HStack>

      {/* Title */}
      <VStack className="px-5 mb-6">
        <Text className="text-white text-3xl font-sans font-bold text-center leading-[32px]">
          rewards
        </Text>
        <Text className="text-white text-3xl text-center font-sans font-bold leading-[32px]">
          unlocked
        </Text>
      </VStack>

      {/* Horizontal Scrollable Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 2,
          gap: CARD_SPACING,
        }}
        snapToInterval={CARD_WIDTH + CARD_SPACING}
        decelerationRate="fast"
        className="mb-4 max-h-[320px] overflow-hidden"
      >
        {cards.map((card) => (
          <Pressable key={card.id} className="active:opacity-90 max-h-[300px]">
            <Box className=" aspect-[3/4]  border-[2.5px] border-[#C1FC15] rounded-lg p-3">
              <Image
                source={{ uri: card.image }}
                alt="Reward Card"
                className="h-full w-full"
                style={{ resizeMode: 'cover' }}
              />

              {/* Gradient Overlay - using opacity for subtle darkening */}
              <Box className="absolute bottom-0 left-0 right-0 h-32 bg-black/20" />

              {/* Brand Badge */}
              <Box className="absolute bottom-8 left-8">
                <Box
                  className="w-[72px] h-[72px] rounded-full bg-white items-center justify-center"
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.4,
                    shadowRadius: 10,
                    elevation: 10,
                  }}
                >
                  <Box className="w-14 h-14 rounded-ful items-center justify-center">
                    <Image
                      source={{ uri: card.brandLogo }}
                      alt={card.brand}
                      className="w-full h-full rounded-full"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Pressable>
        ))}
      </ScrollView>

      {/* Partner Brands Section */}
      <VStack className="gap-5">
        <VStack>
          <Text className="text-[#C1FC15] text-xl font-semibold text-center leading-[20px]">
            meet our partner brands
          </Text>

          <Text className="text-muted-foreground text-2xs text-center leading-[16px] font-medium">
            Scan a QR code & pay via UPI at any of these{'\n'}brands to win
            rewards.
          </Text>
        </VStack>
        {/* Brand Logos */}
        <HStack className="justify-center gap-5">
          {partnerBrands.map((brand, index) => (
            <Pressable key={index} className="active:opacity-70">
              <Box
                className="w-[68px] h-[64px] rounded-full items-center justify-center shadow-xl"
                style={{
                  backgroundColor: brand.color,
                  borderWidth: 4,
                  borderColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 8,
                  elevation: 8,
                }}
              >
                <Image
                  source={{ uri: brand.logo }}
                  alt={brand.name}
                  className="w-full h-full rounded-full"
                />
              </Box>
            </Pressable>
          ))}
        </HStack>

        {/* View All Button */}
        <Box className="items-center mt-6">
          <Pressable
            className="bg-[#FFEB35] px-5 py-4 active:opacity-90 shadow-lg"
            style={{
              shadowColor: '#FFD700',
              shadowOffset: { width: 6, height: 4 },
              shadowOpacity: 0.6,
              shadowRadius: 2,
              elevation: 6,
            }}
          >
            <HStack className="items-center gap-3">
              <Text className="text-black text-base font-bold tracking-wide">
                View all
              </Text>
              <Text className="text-black text-base font-bold">→</Text>
            </HStack>
            </Pressable>
            
        </Box>
      </VStack>
    </Box>
  );
}

Showcase1.displayName = 'Showcase1';

export default Showcase1;
