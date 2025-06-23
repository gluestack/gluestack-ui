import { Box } from '@/components/ui/box';
import { Alert, AlertIcon, AlertText } from '@/components/ui/alert';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Icon, AlertCircleIcon } from '@/components/ui/icon';
import { Divider } from '@/components/ui/divider';
import { Button, ButtonText } from '@/components/ui/button';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';

import { X } from 'lucide-react-native';

const CardsContent = ({ show }: { show: boolean }) => {
  return (
    <Box
      className={`md:flex-row flex-col gap-6 w-full  ${show ? '' : 'hidden'}`}
    >
      <VStack className="gap-6 w-full">
        <HStack className="border border-outline-100 p-[16px] justify-between rounded-lg items-center">
          <HStack className="gap-4">
            <Avatar className="h-9 w-9">
              <AvatarFallbackText>Heading</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}
              />
            </Avatar>
            <VStack>
              <Heading className="text-base">Heading</Heading>
              <Text className="sm:text-sm text-xs ">This is a sub text.</Text>
            </VStack>
          </HStack>
          <HStack className="items-center gap-4">
            <Button size="sm">
              <ButtonText>Button</ButtonText>
            </Button>
            <Icon as={X} className="w-[16px] h-[16px] text-typography-500" />
          </HStack>
        </HStack>
        <VStack className="rounded-lg border border-outline-100 p-6 gap-6">
          <HStack className="mt-6" space="md">
            <Avatar className="h-9 w-9">
              <AvatarFallbackText>Biddie Loe</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
                }}
              />
            </Avatar>
            <VStack>
              <Heading className="text-base">Biddie Loe</Heading>
              <Text size="sm">biddieloe@sample.com</Text>
            </VStack>
          </HStack>
          <Text className="text-sm">
            Pushing the boundaries of reality with XR design wizardry ✨🚀
            #XRDesigner
          </Text>
          <HStack className="justify-center mt-7">
            <VStack className="items-center flex-1 gap-1">
              <Text className="text-sm font-bold leading-[18px] -tracking-[0.2px] text-typography-900">
                32
              </Text>
              <Text className="text-xs text-typography-900 font-normal leading-[18px]">
                posts
              </Text>
            </VStack>
            <Divider
              orientation="vertical"
              className="mx-2.5 h-auto w-[0.954px] bg-outline-100"
            />
            <VStack className="items-center flex-1 gap-1">
              <Text className="text-sm font-bold leading-[18px] -tracking-[0.2px] text-typography-900">
                8,396
              </Text>
              <Text className="text-xs text-typography-900 font-normal leading-[18px]">
                followers
              </Text>
            </VStack>
            <Divider
              orientation="vertical"
              className="mx-2.5 h-auto w-[0.954px] bg-outline-100"
            />
            <VStack className="items-center flex-1 gap-1">
              <Text className="text-sm font-bold leading-[18px] -tracking-[0.2px] text-typography-900">
                720
              </Text>
              <Text className="text-xs text-typography-900 font-normal leading-[18px]">
                follwing
              </Text>
            </VStack>
          </HStack>
        </VStack>

        <Alert
          className="bg-info-0 gap-2 items-center justify-center"
          action="info"
          variant="solid"
        >
          <AlertIcon as={AlertCircleIcon} />
          <AlertText className="text-info-800 text-base font-medium leading-normal flex-none">
            No internet connection
          </AlertText>
        </Alert>
      </VStack>
      <VStack className="gap-6 w-full">
        <VStack className="p-5 rounded-lg bg-background-50 shadow-[0_0_30px_0_rgba(38,38,38,0.20)]">
          <Text className="text-sm font-normal text-typography-700">
            May 15, 2023
          </Text>
          <Text className="text-lg font-bold text-typography-900 mt-2">
            The Power of Positive Thinking
          </Text>
          <Text className="text-sm font-normal text-typography-700 mt-[16px]">
            Discover how the power of positive thinking can transform your life,
            boost your confidence, and help you overcome challenges. Explore
            practical tips and techniques to cultivate a positive mindset for
            greater happiness and success.
          </Text>
          <HStack className="mt-6" space="md">
            <Avatar className="h-9 w-9">
              <AvatarFallbackText>Ronald Richards</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                }}
              />
            </Avatar>
            <VStack>
              <Heading size="sm">Ronald Richards</Heading>
              <Text size="sm">Nursing Assistant</Text>
            </VStack>
          </HStack>
        </VStack>

        <VStack className="py-3 px-4 gap-3 bg-background-50 rounded-lg">
          <Text className="text-sm font-normal leading-[21px] text-typography-700">
            This two-line notification can only be dismissed by interacting with
            the action buttons below.
          </Text>

          <HStack className="gap-2">
            <Button variant="outline" size="sm">
              <ButtonText>Deny</ButtonText>
            </Button>
            <Button variant="solid" action="primary" size="sm">
              <ButtonText>Accept all</ButtonText>
            </Button>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default CardsContent;
