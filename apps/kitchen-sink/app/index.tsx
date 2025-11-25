import { Box } from '@/components/ui/box';
import { Grid, GridItem } from '@/components/ui/grid';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { ChevronRightIcon, Icon } from '@/components/ui/icon';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { getAllComponents } from '@/utils/getComponents';
import { usePathname, useRouter } from 'expo-router';
import React, { useCallback, useContext, useMemo } from 'react';
import { FlatList, Platform, Pressable } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { ColorModeContext } from './_layout';
import { BlurView } from 'expo-blur';

const components = getAllComponents();
const AnimatedHeading = Animated.createAnimatedComponent(Heading);
const AnimatedText = Animated.createAnimatedComponent(Text);

// Memoized ComponentCard to prevent unnecessary re-renders
const ComponentCard = React.memo(({ component, onPress }: any) => {
  const { colorMode }: any = useContext(ColorModeContext);
  const gradientColors =
    colorMode === 'light'
      ? ['#A765FD00', '#A765FD1A']
      : ['#F2E8FF00', '#A765FD1A'];

  return (
    <Pressable
      className={`flex-1 rounded-xl border-[#A765FD26] dark:border-[#F2F1F114] border-[0.5px] w-full h-full ${
        colorMode === 'light'
          ? 'lg:shadow-[0px_0px_4.374px_0px_rgba(38,38,38,0.10)] data-[hover=true]:lg:border data-[hover=true]:border-outline-100'
          : 'lg:shadow-soft-1 lg:border border-outline-50 data-[hover=true]:border-outline-200'
      }`}
      onPress={onPress}
    >
      <Box className="rounded-xl p-4 aspect-[17/12]">
        <Image
          source={{
            uri: colorMode === 'light' ? component.url : component.darkUrl,
          }}
          alt={`${component.title} image`}
          className={`w-full h-full rounded-xl shadow-[0px_0px_1.998px_0px_rgba(38,38,38,0.10)]`}
          resizeMode="cover"
          // Android-specific optimizations
          fadeDuration={0}
        />
      </Box>
      <LinearGradient
        colors={gradientColors as any}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ borderRadius: 12 }}
      >
        <HStack className="justify-between p-4 mt-1">
          <Text className="text-typography-700 font-medium sm:text-base text-sm ">
            {component.name}
          </Text>
          <Icon
            as={ChevronRightIcon}
            size="sm"
            className="text-background-400 lg:hidden"
          />
        </HStack>
      </LinearGradient>
    </Pressable>
  );
});
ComponentCard.displayName = 'ComponentCard';

// Animated wrapper for category items
const AnimatedCategoryItem = React.memo(
  ({ category, handleComponentPress, index }: any) => {
    return (
      <Animated.View
        entering={FadeInDown.duration(500).delay((index + 5) * 100)}
      >
        <Box className="pb-8 px-5 md:px-20 gap-1 mt-6">
          <Heading size="md" className="text-typography-800 mb-4">
            {category.category}
          </Heading>
          <Grid
            className="gap-5"
            _extra={{
              className: 'grid-cols-2 md:grid-cols-4 xl:grid-cols-6',
            }}
          >
            {category.components.map((component: any) => (
              <GridItem
                _extra={{
                  className: 'col-span-1',
                }}
                key={component.name}
              >
                <ComponentCard
                  component={component}
                  onPress={() => handleComponentPress(component.path!)}
                />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Animated.View>
    );
  }
);
AnimatedCategoryItem.displayName = 'AnimatedCategoryItem';

// Memoized Header to prevent unnecessary re-renders
const Header = React.memo(() => {
  const { colorMode }: any = useContext(ColorModeContext);
  const gradientColors =
    colorMode === 'light'
      ? ['#A765FD00', '#A765FD1A']
      : ['#A765FD1A', '#A765FD1A'];

  return (
    <LinearGradient
      colors={gradientColors as any}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ width: '100%', borderRadius: 28, overflow: 'hidden' }}
    >
      <BlurView
        intensity={70}
        tint={colorMode === 'light' ? 'light' : 'dark'}
        experimentalBlurMethod="dimezisBlurView"
      >
        <HStack className="w-full mx-auto justify-between web:rounded-b-3xl rounded-b-[28px] pt-safe mb-1">
          <VStack className="w-full  md:max-w-[630px] lg:max-w-[400px] xl:max-w-[480px] mx-4 md:ml-8 mt-8 lg:my-[44px] xl:ml-[80px] flex-1 px-1">
            <AnimatedHeading
              entering={FadeInDown.duration(300)}
              className="mb-2 xl:mb-[18px] text-3xl lg:text-5xl xl:text-[56px]"
            >
              Kitchensink app
            </AnimatedHeading>
            <AnimatedText
              entering={FadeInDown.duration(300).delay(200)}
              className="text-sm lg:text-base xl:text-lg text-typography-500 mb-4"
            >
              Kitchensink is a comprehensive demo app showcasing all the
              gluestack components in action. It includes buttons, forms, icons
              and much more!
            </AnimatedText>
          </VStack>
          <VStack className="hidden lg:flex flex-1 max-h-[510px] h-full aspect-[1075/510]">
            <Image
              source={
                colorMode === 'light'
                  ? require('../assets/images/header-light.webp')
                  : require('../assets/images/header-dark.webp')
              }
              alt="header_image"
              className="h-full w-full"
            />
          </VStack>
        </HStack>
      </BlurView>
    </LinearGradient>
  );
});
Header.displayName = 'Header';
export default function ComponentList() {
  const router = useRouter();
  const pathname = usePathname();

  // Memoize handleComponentPress to prevent unnecessary re-creations
  const handleComponentPress = useCallback(
    (componentPath: string) => {
      // Use Expo Router's built-in navigation state check
      const targetPath = `components/${componentPath}`;

      // Prevent navigation if we're already on the target path or if navigation is in progress
      if (pathname.includes(targetPath)) {
        return;
      }

      // Use replace instead of push to prevent stack accumulation on rapid clicks
      router.push(`/components/${componentPath}` as any);
    },
    [pathname, router]
  );

  // Filter out bottomsheet components and components without paths
  const filteredComponents = useMemo(
    () =>
      components
        .map((category) => ({
          ...category,
          components: category.components.filter(
            (component) =>
              component.path &&
              !component.name.toLowerCase().includes('bottomsheet') &&
              !component.path.toLowerCase().includes('bottomsheet')
          ),
        }))
        .filter((category) => category.components.length > 0),
    []
  );

  // Memoize renderCategoryItem to prevent unnecessary re-creations
  const renderCategoryItem = useCallback(
    ({ item: category, index }: any) => (
      <AnimatedCategoryItem
        category={category}
        handleComponentPress={handleComponentPress}
        index={index}
      />
    ),
    [handleComponentPress]
  );

  // Stable keyExtractor to ensure consistent list keys
  const keyExtractor = useCallback(
    (item: any) => `category-${item.category}`,
    []
  );

  return (
    <Box className="flex-1 bg-background-0 pb-safe">
      <FlatList
        data={filteredComponents}
        renderItem={renderCategoryItem}
        ListHeaderComponent={<Header />}
        stickyHeaderIndices={Platform.OS != 'web' ? [0] : []}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        // Android-specific optimizations (keeping animations intact)
        removeClippedSubviews={Platform.OS === 'android'}
        maxToRenderPerBatch={Platform.OS === 'android' ? 2 : 3}
        updateCellsBatchingPeriod={Platform.OS === 'android' ? 100 : 50}
        initialNumToRender={Platform.OS === 'android' ? 1 : 2}
        windowSize={Platform.OS === 'android' ? 3 : 5}
        contentContainerClassName="gap-6"
      />
    </Box>
  );
}
