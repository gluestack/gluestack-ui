import React from 'react';
import Gradient from '@/assets/icons/Gradient';
import DocumentData from '@/assets/icons/DocumentData';
import LightBulbPerson from '@/assets/icons/LightbulbPerson';
import Rocket from '@/assets/icons/Rocket';
import Logo from '@/assets/icons/Logo';
import { Box } from '@/components/ui/box';
import { ScrollView } from 'react-native';
import { Text } from '@/components/ui/text';

import { Button, ButtonText } from '@/components/ui/button';
import { useRouter } from 'expo-router';

const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
  return (
    <Box
      className="flex-column border border-w-1 border-gray-700 md:flex-1 m-2 p-4 rounded"
      key={name}
    >
      <Box className="items-center flex flex-row">
        <Text>
          <IconSvg />
        </Text>
        <Text className="text-white font-medium ml-2 text-xl">{name}</Text>
      </Box>
      <Text className="text-gray-400 mt-2">{desc}</Text>
    </Box>
  );
};

export default function Home() {
  const router = useRouter();
  return (
    <Box className="flex-1 bg-black h-[100vh]">
      <ScrollView
        style={{ height: '100%' }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Box className="absolute h-[500px] w-[500px] lg:w-[700px] lg:h-[700px]">
          <Gradient />
        </Box>
        <Box className="flex flex-1 items-center mx-5 lg:my-24 lg:mx-32">
          <Box className="gap-10 base:flex-col sm:flex-row justify-between sm:w-[80%] md:flex-1">
            <Box className="bg-background-template py-2 px-6 rounded-full items-center flex-column md:flex-row md:self-start">
              <Text className="text-white font-normal">
                Get started by editing
              </Text>
              <Text className="text-white font-medium ml-2">./App.tsx</Text>
            </Box>
            <Button
              size="md"
              className="bg-background-0 px-6 py-2 rounded-full"
              onPress={() => {
                router.push('/tabs');
              }}
            >
              <ButtonText className="text-black">Explore Tab Navigation</ButtonText>
            </Button>
          </Box>
          <Box className="flex-1 justify-center items-center h-[20px] w-[300px] lg:h-[160px] lg:w-[400px]">
            <Logo />
          </Box>

          <Box className="flex-column md:flex-row">
            <FeatureCard
              iconSvg={DocumentData}
              name="Docs"
              desc="Find in-depth information about gluestack features and API."
            />
            <FeatureCard
              iconSvg={LightBulbPerson}
              name="Learn"
              desc="Learn about gluestack in an interactive course with quizzes!"
            />
            <FeatureCard
              iconSvg={Rocket}
              name="Deploy"
              desc="Instantly drop your gluestack site to a shareable URL with vercel."
            />
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
