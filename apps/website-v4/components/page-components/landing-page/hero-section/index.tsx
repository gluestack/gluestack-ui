import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { ArrowUpRight, Terminal } from 'lucide-react-native';
import AwardBadge from '../AwardBadge';
import CopySnippetButton from '../copy-snippet-button';

const HeroSection = () => {
  return (
    <Box className="w-full h-full">
      <VStack className="md:w-1/2 md:pl-[120px] h-[calc(100vh-80px)] justify-center gap-5">
        <Box className="">
          <AwardBadge />
        </Box>
        <Box className="gap-3">
          <Heading size="4xl" className="tracking-[0.2px] leading-[120%]">
            React & React Native UI Components & Patterns
          </Heading>
          <Text className="font-roboto text-sm">
            Comprehensive React and React Native component library for building
            modern, high-performance web and mobile apps. Copy-paste UI
            components library & patterns crafted with Tailwind CSS (NativeWind)
          </Text>
        </Box>
        <Box className="gap-4 flex flex-col lg:flex-row">
          <Button className="rounded-full" size="xl">
            <ButtonText size="md">Get Started</ButtonText>
            <Icon as={ArrowUpRight} className="text-primary-0" />
          </Button>
          <HStack className="gap-3 border border-outline-50 rounded-full items-center py-3 px-6">
            <Icon as={Terminal} className="text-primary-100" />
            <Text className="font-geist-mono">npm create gluestack@latest</Text>
            <CopySnippetButton />
          </HStack>
        </Box>
      </VStack>
      <Box className="hidden md:block md:w-1/2"></Box>
    </Box>
  );
};

export default HeroSection;
