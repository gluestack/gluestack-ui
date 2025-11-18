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
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { Animated, FlatList, Pressable } from 'react-native';
import { ColorModeContext } from './_layout';

const components = getAllComponents();

// Memoized ComponentCard to prevent unnecessary re-renders
const ComponentCard = React.memo(({ component, onPress }: any) => {
  const { colorMode }: any = useContext(ColorModeContext);
  return (
    <Pressable
      className={`flex-1 rounded-xl border border-outline-100 dark:border-outline-200/50 p-4 w-full h-full sm:gap-2 gap-1 flex flex-col lg:p-4 ${
        colorMode === 'light'
          ? 'lg:shadow-[0px_0px_4.374px_0px_rgba(38,38,38,0.10)] data-[hover=true]:lg:border data-[hover=true]:border-outline-100'
          : 'lg:shadow-soft-1 lg:border border-outline-50 data-[hover=true]:border-outline-200'
      }`}
      onPress={onPress}
    >
      <Box className="rounded-lg  px-3 lg:px-6 py-[14px] lg:py-7 aspect-[17/12]">
        <Image
          source={{
            uri: colorMode === 'light' ? component.url : component.darkUrl,
          }}
          alt={`${component.title} image`}
          className={`w-full h-full rounded lg:rounded-md shadow-[0px_0px_1.998px_0px_rgba(38,38,38,0.10)]`}
        />
      </Box>
      <HStack className="justify-between px-1.5 mt-1">
        <Text className="text-typography-900 font-medium sm:text-base text-sm ">
          {component.name}
        </Text>
        <Icon
          as={ChevronRightIcon}
          size="sm"
          className="text-background-400 lg:hidden"
        />
      </HStack>
    </Pressable>
  );
});

// Animated wrapper for category items
const AnimatedCategoryItem = React.memo(
  ({ category, handleComponentPress, index }: any) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(30)).current;

    useEffect(() => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          delay: index * 100,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 600,
          delay: index * 100,
          useNativeDriver: true,
        }),
      ]).start();
    }, []);

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY }],
        }}
      >
        <Box className="pb-8 px-5 md:px-20 gap-1">
          <Heading size="lg" className="text-typography-900 mb-4">
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

// Memoized Header to prevent unnecessary re-renders
const Header = React.memo(() => {
  const { colorMode }: any = useContext(ColorModeContext);
  return (
    <HStack className="bg-background-50 w-full mx-auto justify-between mb-5 rounded-b-[44px]     web:rounded-b-3xl">
      <VStack className="w-full  md:max-w-[630px] lg:max-w-[400px] xl:max-w-[480px] mx-5 md:ml-8 mb-8 mt-2 lg:my-[44px] xl:ml-[80px] flex-1">
        <Box className="rounded-full border border-outline-100 dark:border-outline-200/50 py-4 px-5 mb-7 md:mb-9 lg:mb-[80px] xl:mb-[132px] items-center native:max-w-[250px] w-fit flex-row gap-2">
          <Image
            source={{
              uri:
                colorMode === 'light'
                  ? 'https://i.imgur.com/9bvua6C.png'
                  : 'https://i.imgur.com/EUqtUMu.png',
            }}
            alt="logo_image"
            className="h-5 w-5 rounded-sm lg:h-6 lg:w-6 xl:h-7 xl:w-7"
          />
          <Text className="font-medium text-sm lg:text-base xl:text-lg text-typography-900">
            Powered by gluestack-ui v3
          </Text>
        </Box>
        <Heading className="mb-2 xl:mb-[18px] text-4xl lg:text-5xl xl:text-[56px]">
          Kitchensink app
        </Heading>
        <Text className="text-sm lg:text-base xl:text-lg text-typography-500 mb-4">
          Kitchensink is a comprehensive demo app showcasing all the gluestack
          components in action. It includes buttons, forms, icons and much more!
        </Text>
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
  );
});
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

  return (
    <Box className="flex-1 bg-background-0 py-safe">
      <FlatList
        data={filteredComponents}
        renderItem={renderCategoryItem}
        ListHeaderComponent={<Header />}
        keyExtractor={(item) => item.category}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={3}
        updateCellsBatchingPeriod={50}
        initialNumToRender={2}
        windowSize={5}
        contentContainerClassName="gap-5"
      />
    </Box>
  );
}
