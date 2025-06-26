import React, { useContext } from 'react';
import { Pressable, SafeAreaView, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { getAllComponents } from '@/utils/getComponents';
import { HStack } from '@/components/ui/hstack';
import { Image } from '@/components/ui/image';
import { ColorModeContext } from './_layout';
import { ChevronRightIcon } from '@/components/ui/icon';
import { Icon } from '@/components/ui/icon';
import { Grid, GridItem } from '@/components/ui/grid';

const components = getAllComponents();
const ComponentCard = ({ component, onPress }: any) => {
  const { colorMode }: any = useContext(ColorModeContext);
  return (
    <Pressable
      className={`flex-1 rounded-xl bg-background-0 w-full h-full sm:gap-2 gap-1 flex flex-col lg:p-4 ${
        colorMode === 'light'
          ? 'lg:shadow-[0px_0px_4.374px_0px_rgba(38,38,38,0.10)] data-[hover=true]:lg:border data-[hover=true]:border-outline-100'
          : 'lg:shadow-soft-1 lg:border border-outline-50 data-[hover=true]:border-outline-200'
      }`}
      onPress={onPress}
    >
      <Box className="rounded-lg bg-background-50 px-3 lg:px-6 py-[14px] lg:py-7 aspect-[17/12]">
        <Image
          source={{
            uri: colorMode === 'light' ? component.url : component.darkUrl,
          }}
          alt={`${component.title} image`}
          className={`w-full h-full rounded lg:rounded-md shadow-[0px_0px_1.998px_0px_rgba(38,38,38,0.10)]`}
        />
      </Box>
      <HStack className="justify-between px-1.5 mt-1">
        <Text className="text-typography-900 font-medium sm:text-base text-sm lg:text-xl">
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
};
const Header = () => {
  const { colorMode }: any = useContext(ColorModeContext);
  return (
    <HStack className="flex-1 bg-background-50 max-w-[1730px] w-full mx-auto justify-between">
      <VStack className="w-full  md:max-w-[630px] lg:max-w-[400px] xl:max-w-[480px] mx-5 md:ml-8 mb-8 mt-10 lg:my-[44px] xl:ml-[80px] flex-1">
        <HStack
          className="rounded-full bg-background-0 py-4 px-5 mb-7 md:mb-9 lg:mb-[80px] xl:mb-[132px] items-center native:max-w-[250px] w-fit"
          space="sm"
        >
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
            Powered by gluestack-ui v2
          </Text>
        </HStack>
        <Heading className="mb-2 xl:mb-[18px] text-4xl lg:text-5xl xl:text-[56px]">
          Kitchensink app latest
        </Heading>
        <Text className="text-sm lg:text-base xl:text-lg">
          Kitchensink is a comprehensive demo app showcasing all the gluestack
          components in action. It includes buttons, forms, icons and much more!
        </Text>
      </VStack>
      <VStack className="hidden lg:flex flex-1 max-h-[510px] h-full aspect-[1075/510]">
        <Image
          source={{
            uri:
              colorMode === 'light'
                ? 'https://i.imgur.com/sxY9qxx.png'
                : 'https://i.imgur.com/icZHMep.png',
          }}
          alt="header_image"
          className="h-full w-full"
        />
      </VStack>
    </HStack>
  );
};
export default function ComponentList() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <ScrollView className="flex-1">
        <Header />
        <VStack className="p-5">
          {components.map((category) => (
            <Box
              key={category.category}
              className="mt-4 border-b border-outline-100 pb-8"
            >
              <Heading size="lg" className="text-typography-900 mb-4">
                {category.category}
              </Heading>
              <Grid
                className="gap-5"
                _extra={{
                  className: 'grid-cols-2 md:grid-cols-4',
                }}
              >
                {category.components.map((component) => (
                  <GridItem
                    _extra={{
                      className: 'col-span-1',
                    }}
                    key={component.name}
                  >
                    <ComponentCard
                      component={component}
                      onPress={() =>
                        router.push(`components/${component.path}` as any)
                      }
                    />
                  </GridItem>
                ))}
              </Grid>
            </Box>
          ))}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
