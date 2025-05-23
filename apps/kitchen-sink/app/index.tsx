import React, { useContext } from "react";
import { Pressable, SafeAreaView, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { Box } from "@/components/ui/box";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { getAllComponents } from "@/utils/getComponents";
import { HStack } from "@/components/ui/hstack";
import { Image } from "@/components/ui/image";
import { ColorModeContext } from "./_layout";

const components = getAllComponents();
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
                colorMode === "light"
                  ? "https://i.imgur.com/9bvua6C.png"
                  : "https://i.imgur.com/EUqtUMu.png",
            }}
            alt="logo_image"
            className="h-5 w-5 rounded-sm lg:h-6 lg:w-6 xl:h-7 xl:w-7"
          />
          <Text className="font-medium text-sm lg:text-base xl:text-lg text-typography-900">
            Powered by gluestack-ui v2
          </Text>
        </HStack>
        <Heading className="mb-2 xl:mb-[18px] text-4xl lg:text-5xl xl:text-[56px]">
          Kitchensink app
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
              colorMode === "light"
                ? "https://i.imgur.com/sxY9qxx.png"
                : "https://i.imgur.com/icZHMep.png",
          }}
          alt="header_image"
          className="h-full w-full"
        />
      </VStack>
    </HStack>
  );
}
export default function ComponentList() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background-0">
      <ScrollView className="flex-1">
        <Header />
        <VStack space="lg">
        {components.map((category) => (
          <Box key={category.category}>
            <Heading size="lg" className="text-typography-900 mb-4">
              {category.category}
            </Heading>
            <VStack space="sm">
              {category.components.map((component) => (
                <Pressable
                  key={component.name}
                  onPress={() => router.push(`components/${component.path}`)}
                >
                  <Box className="p-3 rounded-lg bg-background-50">
                    <Text className="text-typography-900">
                      {component.name}
                    </Text>
                  </Box>
                </Pressable>
              ))}
            </VStack>
          </Box>
          ))}
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}
