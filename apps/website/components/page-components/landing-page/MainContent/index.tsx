// @ts-nocheck

'use client';
import {
  AddIcon,
  AlertCircleIcon,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  BellIcon,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  CircleIcon,
  Divider,
  EditIcon,
  EyeIcon,
  EyeOffIcon,
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  Link,
  LinkText,
  MailIcon,
  MenuIcon,
  OpenInNewIcon,
  Pressable,
  Progress,
  ProgressFilledTrack,
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
  SearchIcon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  StarIcon,
  Switch,
  Text,
  VStack,
} from '@/components/ui';
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Users,
  Type,
  CircleDollarSign,
  Cloud,
  CloudUpload,
  X,
} from 'lucide-react-native';
import NextImage from 'next/image';
import React from 'react';
import { Resizable } from 're-resizable';
import { Expand } from '../Expand';
import PositiveThinking from '@/public/images/PositiveThinking.jpg';
import ClickImage from '@/public/images/click.jpeg';
import GoogleIcon from '@/public/svg/GoogleIcon.svg';
import ShadCNUI from '@/public/svg/shadcnui.svg';
import TwitterIcon from '@/public/svg/Twitter.svg';
import GithubIcon from '@/public/svg/Github.svg';
import QRCode from '@/public/assets/QRCode.png';
import RadixUI from '@/public/images/radix.png';
import Headless from '@/public/images/headless.png';
import ChakraUI from '@/public/images/chakra.png';
import NB from '@/public/images/NativeBase.png';

//function to detect if the user is on a web browser
function checkPlatform() {
  if (/android/i.test(navigator.userAgent)) {
    window.location.href = `exp://u.expo.dev/update/${kitchensink.updateIds.android}`;
  } else if (/iPad|iPhone|iPod/i.test(navigator.userAgent)) {
    window.location.href = `exp://u.expo.dev/update/${kitchensink.updateIds.ios}`;
  } else if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    window.open('https://ui-example-nativewind.vercel.app/');
  }
}
const kitchensink = {
  updateIds: {
    android: '35105a6c-6f64-4a6b-ac54-561ab285b72a',
    ios: '6b45fcd3-25e7-4b88-afab-327a9cb5de0d',
  },
};

const MainContent = () => {
  const [values, setValues] = React.useState('Eng');
  const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => {
      return !showState;
    });
  };
  const resizableRef = React.useRef<any>(null);
  const [isMobile, setIsMobile] = React.useState(true);
  return (
    <VStack className="gap-[120px]">
      {/* <Fold1/> */}
      <VStack className="mx-auto gap-5 max-w-[950px] pt-[140px] w-full my-0 items-center justify-center self-center">
        <Text className="text-center text-typography-800 text-[72px] font-semibold leading-normal items-center">
          React & React Native Components & Patterns
        </Text>
        <Text className="text-center text-typography-700 text-4xl font-normal">
          Import from library & copy-paste styles all the way to victory
        </Text>
        <HStack className="gap-2.5 px-2.5 justify-center mb-12 pt-20">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* <rect width="100%" height="100%" fill="#CCCCCC" /> */}
            <circle
              id="Ellipse 1744"
              cx="9.5"
              cy="9.5"
              r="9.5"
              fill="#101010"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <circle cx="9.5" cy="9.5" r="9.5" fill="#D946EF" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <circle cx="9.5" cy="9.5" r="9.5" fill="#0EA5E9" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <circle cx="9.5" cy="9.5" r="9.5" fill="#10B981" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
          >
            <circle cx="9.5" cy="9.5" r="9.5" fill="#8B5CF6" />
          </svg>
          <Icon className="w-4 h-4 text-background-800" as={AddIcon} />
        </HStack>
      </VStack>
      {/*  */}
      {/* fold 3 */}

      <HStack className="gap-6 ">
        <VStack className="gap-6 ">
          <HStack className="gap-6 w-full">
            {/* 1st */}
            <VStack className="gap-6 w-[50%]">
              <VStack className="rounded-xl border-outline-200 border p-5 gap-6">
                <Image
                  alt="dark mode"
                  className="w-auto h-[256px]"
                  src={PositiveThinking}
                />
                <VStack className="self-start">
                  <Text className="text-sm font-normal leading-[21px] text-typography-700">
                    May 15, 2023
                  </Text>
                  <Heading className="mt-2 self-start text-base font-bold leading-normal text-typography-900">
                    The Power of Positive Thinking
                  </Heading>
                  <Text className="mt-1.5 self-start text-sm font-normal leading-[21px] text-typography-700">
                    Discover how the power of positive thinking can transform
                    your life, boost your confidence, and help you overcome
                    challenges. Explore practical tips and techniques to
                    cultivate a positive mindset for greater happiness and
                    success.
                  </Text>
                </VStack>

                <HStack className="self-start" space="md">
                  <Avatar className="w-12 h-12">
                    <AvatarFallbackText>JS</AvatarFallbackText>
                    <AvatarImage
                      source={{
                        uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                      }}
                    />
                  </Avatar>
                  <VStack>
                    <Heading className="text-sm font-bold leading-normal text-typography-900">
                      John Smith
                    </Heading>
                    <Text
                      className="text-sm font-normal leading-[21px] text-typography-700"
                      size="sm"
                    >
                      Motivational Speaker
                    </Text>
                  </VStack>
                </HStack>
              </VStack>

              <VStack className="rounded-xl border-outline-200 p-5 border">
                <Text className="self-stretch text-base font-semibold">
                  Share gluestack-ui with friends
                </Text>
                <Text className="self-stretch text-sm font-normal mt-2.5">
                  Email friends who have never tried gluestack-ui
                </Text>
                <Text className="mt-6 text-sm font-normal text-typography-900 mb-1.5">
                  Send an invite
                </Text>
                <HStack className="gap-4">
                  <FormControl className="gap-1.5">
                    <Input className="border-outline-300  py-0 rounded-md">
                      <InputField
                        placeholder="abc@gmail.com"
                        className="text-sm font-normal leading-[21px] text-typography-600 h-full"
                      />
                    </Input>
                  </FormControl>
                  <Button className="px-4 py-2 bg-primary-500">
                    <ButtonText className="text-sm text-[#FCFCFC] font-semibold leading-[20px]">
                      Send
                    </ButtonText>
                  </Button>
                </HStack>
              </VStack>
            </VStack>

            {/* 2 */}
            <VStack className="gap-6">
              <Box className="border border-outline-200 rounded-lg overflow-hidden">
                <Table className="w-full">
                  <TableHeader className="">
                    <TableRow className="h-[70px]">
                      <TableHead className="h-[70px] w-[70px]">
                        <Checkbox
                          size="sm"
                          isInvalid={false}
                          isDisabled={false}
                          value={''}
                        >
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                        </Checkbox>
                      </TableHead>
                      <TableHead className="px-6 py-5 text-sm font-bold leading-normal my-5 mx-6">
                        Name
                      </TableHead>
                      <TableHead className="px-6 py-5 text-sm font-bold leading-normal text-start">
                        Phone Number
                      </TableHead>
                      <TableHead>
                        <Icon className="w-4 h-4" as={MenuIcon} />
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="h-[60px]">
                      <TableData>
                        <Checkbox
                          size="sm"
                          isInvalid={false}
                          isDisabled={false}
                          value={''}
                        >
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                        </Checkbox>
                      </TableData>
                      <TableData className="px-6 py-5 text-sm leading-4 font-[Roboto] font-normal text-typography-900">
                        John Doe
                      </TableData>
                      <TableData className="px-6 py-5 text-sm leading-4 font-[Roboto] font-normal text-typography-900">
                        +01 1234567890
                      </TableData>
                      <TableData className="px-6 py-5 shrink-0">
                        <Icon className="w-4 h-4" as={MenuIcon} />
                      </TableData>
                    </TableRow>
                    <TableRow>
                      <TableData>
                        <Checkbox
                          size="sm"
                          isInvalid={false}
                          isDisabled={false}
                          value={''}
                        >
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                        </Checkbox>
                      </TableData>
                      <TableData className="px-6 py-5 text-sm leading-4 font-[Roboto] font-normal text-typography-900">
                        Michael K
                      </TableData>
                      <TableData className="px-6 py-5 text-sm leading-4 font-[Roboto] font-normal text-typography-900">
                        +01 1234567890
                      </TableData>
                      <TableData className="px-6 py-5 text-sm">
                        <Icon className="w-4 h-4" as={MenuIcon} />
                      </TableData>
                    </TableRow>
                    <TableRow className="border-b-0">
                      <TableData>
                        <Checkbox
                          size="sm"
                          isInvalid={false}
                          isDisabled={false}
                          value={''}
                        >
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                        </Checkbox>
                      </TableData>
                      <TableData className="px-6 py-5 text-sm leading-4 font-[Roboto] font-normal text-typography-900">
                        Martine D.
                      </TableData>
                      <TableData className="px-6 py-5 text-sm leading-4 font-[Roboto] font-normal text-typography-900">
                        +01 1234567890
                      </TableData>
                      <TableData className="px-6 py-5 text-sm">
                        <Icon className="w-4 h-4" as={MenuIcon} />
                      </TableData>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
              <Image
                alt="dark mode"
                className="w-full h-[261px]"
                size="md"
                src={ClickImage}
              />
              <HStack className="gap-4">
                <HStack className="bg-background-950 p-5 rounded-lg flex-1">
                  <VStack>
                    <Text className="text-sm font-medium leading-normal text-typography-50">
                      Weekly Views
                    </Text>
                    <Text className="text-typography-50 text-2xl font-bold leading-normal">
                      10,0000
                    </Text>
                    <Text className="text-typography-400">
                      +1.5% from last week
                    </Text>
                  </VStack>
                  <Icon className="h-4 w-4 p-[10px]" as={EyeIcon} color="red" />
                </HStack>
                <HStack className="bg-background-50 p-5 rounded-lg flex-1">
                  <VStack>
                    <Text className="text-sm font-medium leading-normal text-typography-900">
                      Weekly Followers
                    </Text>
                    <Text className="text-typography-900 text-2xl font-bold leading-normal">
                      15790
                    </Text>
                    <Text className="text-typography-700">
                      +11.5% from last week
                    </Text>
                  </VStack>
                  <Icon className="h-4 w-4 p-[10px] bg-slate-50" as={Users} />
                </HStack>
              </HStack>
              <HStack className="justify-between items-center">
                <Button variant="link" className="px-3 gap-1 h-8">
                  <ButtonIcon className="h-4 w-4" as={ChevronLeftIcon} />
                  <ButtonText className="text-xs font-bold text-typography-900">
                    Prev
                  </ButtonText>
                </Button>
                <HStack className="gap-4">
                  <Button className="w-[36px] h-8">
                    <ButtonText className="text-typography-100 text-xs leading-normal font-bold px-[11px] py-0">
                      01
                    </ButtonText>
                  </Button>
                  <Button className="w-9 h-8" variant="link">
                    <ButtonText className="text-typography-900 text-xs leading-normal font-bold">
                      02
                    </ButtonText>
                  </Button>
                  <Button className="w-9 h-8" variant="link">
                    <ButtonText className="text-typography-900 text-xs leading-normal font-bold">
                      03
                    </ButtonText>
                  </Button>
                  <Button className="w-9 h-8" variant="link">
                    <ButtonText className="text-typography-900 text-xs leading-normal font-bold">
                      04
                    </ButtonText>
                  </Button>
                  <Button className="w-9 h-8" variant="link">
                    <ButtonIcon className="h-4 w-4" as={MenuIcon} />
                  </Button>
                </HStack>
                <Button variant="link" className="px-3 gap-1 h-8">
                  <ButtonText className="text-xs font-bold text-typography-900">
                    Next
                  </ButtonText>
                  <ButtonIcon className="h-4 w-4" as={ChevronRightIcon} />
                </Button>
              </HStack>
            </VStack>
          </HStack>
          {/* 3 */}
          <HStack className="justify-between p-5 border border-outline-200 rounded-lg">
            <VStack>
              <Text className="text-typography-900 text-lg font-bold leading-normal">
                Updates Available
              </Text>
              <Text className="text-sm font-normal leading-[21px] text-typography-700">
                A new version is available. Please upgrade for the best
                experience.
              </Text>
            </VStack>
            <HStack className="gap-3">
              <Button
                size="sm"
                className="border-secondary-300"
                variant="outline"
              >
                <ButtonText>Skip</ButtonText>
              </Button>
              <Button size="sm" className="bg-secondary-900">
                <ButtonText>Download</ButtonText>
              </Button>
            </HStack>
          </HStack>
        </VStack>
        {/* 4 */}
        <VStack className="gap-6 w-[30%]">
          <VStack className="rounded-xl border-outline-200 border p-5 gap-8">
            <VStack className="gap-1">
              <Text className="text-typography-900 text-2xl font-bold leading-normal">
                Login to your account
              </Text>
              <HStack className="gap-1.5">
                <Text className="font-normal text-sm text-typography-700">
                  Don’t have an account?
                </Text>
                <Text className="font-medium text-sm text-typography-700">
                  Sign up
                </Text>
              </HStack>
            </VStack>
            <VStack className="gap-5">
              <FormControl className="gap-1.5">
                <FormControlLabel>
                  <FormControlLabelText className="text-sm font-medium leading-normal text-typography-900">
                    Email
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="border-outline-300  py-0 rounded-md">
                  <InputField
                    placeholder="abc@gmail.com"
                    className="text-sm font-normal leading-[21px] text-typography-600 h-full"
                  />
                </Input>
              </FormControl>
              <FormControl className="gap-1.5">
                <FormControlLabel>
                  <FormControlLabelText className="text-sm font-medium leading-normal text-typography-900">
                    Password
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="border-outline-300 py-0 rounded-md">
                  <InputField
                    placeholder="Enter password"
                    className="text-sm font-normal leading-[21px] text-typography-600"
                  />
                </Input>
              </FormControl>
              <HStack className="justify-between">
                <Checkbox size="sm" value="Remember me">
                  <CheckboxIndicator className="mr-2">
                    <CheckboxIcon>
                      <CheckIcon />
                    </CheckboxIcon>
                  </CheckboxIndicator>
                  <CheckboxLabel className="text-sm font-normal leading-[21px] text-typography-900">
                    Remember me
                  </CheckboxLabel>
                </Checkbox>
                <Link>
                  <LinkText className="text-right text-xs font-medium leading-normal text-typography-700 no-underline">
                    Forgot Password?
                  </LinkText>
                </Link>
              </HStack>
            </VStack>
            <Button size="sm" className="w-full bg-secondary-900">
              <ButtonText className="text-sm font-semibold leading-normal text-typography-0">
                Login
              </ButtonText>
            </Button>
            <HStack className="justify-center flex-1 items-center">
              <Divider className="h-0 flex-1 border-background-200 border" />
              <Text className="text-typography-600 text-center text-xs font-normal leading-normal px-2">
                OR CONTINUE WITH
              </Text>
              <Divider className="h-0 flex-1  border-background-200 border" />
            </HStack>
            <HStack className="gap-3 items-start self-stretch">
              <Button variant="outline" className="px-5 flex-1 rounded-md h-10">
                <Image
                  alt="dark mode"
                  className="w-[15px] h-[15px]"
                  size="md"
                  src={GoogleIcon}
                />
              </Button>
              <Button variant="outline" className="px-5 flex-1 rounded-md h-10">
                <Image
                  alt="dark mode"
                  className="w-[15px] h-[15px]"
                  size="md"
                  src={TwitterIcon}
                />
              </Button>
              <Button variant="outline" className="px-5 flex-1 rounded-md h-10">
                <Image
                  alt="dark mode"
                  className="w-[15px] h-[15px]"
                  size="md"
                  src={GithubIcon}
                />
              </Button>
            </HStack>
          </VStack>

          <VStack className="border flex-1 rounded-xl border-outline-200 bg-white justify-center p-5">
            <Text className="text-typography-900 text-2xl font-bold leading-7">
              Buttons
            </Text>
            <HStack className="justify-between p-3">
              <Text className="text-black text-sm font-medium leading-4 text-center">
                Solid
              </Text>
              <Text className="text-black text-sm font-medium leading-4 self-center">
                Outline
              </Text>
              <Text className="text-black text-sm font-medium leading-4 self-center">
                Link
              </Text>
            </HStack>
            <HStack className="justify-between mb-0">
              <VStack className="gap-3">
                <Button size="sm">
                  <ButtonText>Default</ButtonText>
                </Button>
                <Button size="sm">
                  <ButtonText>Hover</ButtonText>
                </Button>
                <Button>
                  <ButtonText>Active</ButtonText>
                </Button>
                <Button size="sm" disabled>
                  <ButtonText>Disabled</ButtonText>
                </Button>
              </VStack>
              <Divider
                orientation="vertical"
                className="mx-2.5 h-auto w-[0.954px] bg-outline-200"
              />
              <VStack className="gap-3">
                <Button size="sm" variant="outline">
                  <ButtonText>Default</ButtonText>
                </Button>
                <Button size="sm" variant="outline">
                  <ButtonText>Hover</ButtonText>
                </Button>
                <Button size="sm" variant="outline">
                  <ButtonText>Active</ButtonText>
                </Button>
                <Button size="sm" disabled variant="outline">
                  <ButtonText>Disabled</ButtonText>
                </Button>
              </VStack>
              <Divider
                orientation="vertical"
                className="mx-2.5 h-auto w-[0.954px] bg-outline-200"
              />
              <VStack className="gap-3">
                <Button size="sm" variant="link">
                  <ButtonText>Default</ButtonText>
                </Button>
                <Button size="sm" variant="link">
                  <ButtonText>Hover</ButtonText>
                </Button>
                <Button size="sm" variant="link">
                  <ButtonText>Active</ButtonText>
                </Button>
                <Button size="sm" disabled variant="link">
                  <ButtonText>Disabled</ButtonText>
                </Button>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </HStack>

      {/*  */}

      <VStack className="gap-20 flex-1">
        <VStack className="self-center gap-3">
          <Heading className="text-5xl -tracking-[0.96px]">
            Copy-paste components, patterns & screens
          </Heading>
          {/* <Text numberOfLines={3}> */}
          <Text>
            Lorem ipsum dolor sit amet consectetur. Pretium mauris maecenas
            lobortis libero orci orci pellentesque. Hendrerit penatibus mauris
            adipiscing egestas. Nec risus malesuada habitant diam fermentum.
            Enim et penatibus netus eu aliquet non pretium. Elementum semper
            aenean odio auctor vel maecenas.
          </Text>
          <Link>
            <LinkText className="text-lg font-bold no-underline">
              Learn more
            </LinkText>
          </Link>
        </VStack>
        <HStack className="justify-between">
          <VStack className="flex-1 w-[25%]">
            <HStack className="gap-6">
              <Icon as={EditIcon} className="h-6 w-6 self-center" />
              <VStack className="flex-1">
                <Link>
                  <LinkText className="text-base font-bold no-underline">
                    Forms
                  </LinkText>
                </Link>
                <Text>
                  Button, Checkbox, FormControl, Input, Radio, +10 components.
                </Text>
              </VStack>
            </HStack>
            <Divider
              orientation="vertical"
              className="mx-2.5 h-[78px] w-0.5 bg-outline-300"
            />
            <HStack className="gap-6">
              <Icon as={StarIcon} className="h-6 w-6 self-center" />
              <VStack className="flex-1">
                <Text>Navigation & Feedback</Text>
                <Text>
                  Tabs, Pagination, Bottom Navigation, Fab, Header +5
                  components.
                </Text>
              </VStack>
            </HStack>
            <Divider
              orientation="vertical"
              className="mx-2.5 h-[78px] w-0.5 bg-outline-300"
            />
            <HStack className="gap-6">
              <Icon as={BellIcon} className="h-6 w-6 self-center" />
              <VStack className="flex-1">
                <Text>Cards & Notification</Text>
                <Text>Banners, Cards, Toasts, Banners +8 components.</Text>
              </VStack>
            </HStack>
          </VStack>
          <HStack className="gap-6 w-[75%]">
            <VStack className="p-6 gap-8 border border-dashed rounded-md border-outline-300 flex-1">
              <FormControl className="gap-1.5">
                <FormControlLabel>
                  <FormControlLabelText className="text-sm font-medium leading-normal text-typography-900">
                    Text Input
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="border-outline-300 py-0 rounded-md">
                  <InputField
                    placeholder="Placeholder Text"
                    className="text-sm font-normal leading-[21px] text-typography-600 h-full"
                  />
                </Input>
              </FormControl>

              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={false}
              >
                <FormControlLabel className="mb-1">
                  <FormControlLabelText className="text-typography-900 text-base">
                    Password
                  </FormControlLabelText>
                </FormControlLabel>
                <Input className="text-center">
                  <InputField
                    placeholder="xxxxx"
                    className="text-sm font-normal leading-[21px] text-typography-600 h-full"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <InputSlot className="pr-3" onPress={handleState}>
                    {/* EyeIcon, EyeOffIcon are both imported from 'lucide-react-native' */}
                    <InputIcon
                      as={showPassword ? EyeIcon : EyeOffIcon}
                      className="text-darkBlue-500 w-4 h-4"
                    />
                  </InputSlot>
                </Input>

                <FormControlError>
                  <FormControlErrorIcon size={10} as={AlertCircleIcon} />
                  <FormControlErrorText>
                    At least 6 characters are required.
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>

              <FormControl isRequired isInvalid>
                <FormControlLabel>
                  <FormControlLabelText className="text-typography-900 text-base">
                    Choose your favorite color
                  </FormControlLabelText>
                </FormControlLabel>
                <Select>
                  <SelectTrigger>
                    <SelectInput placeholder="Select option" />
                    <SelectIcon
                      className="mr-3 w-3.5 h-3.5"
                      as={ChevronDownIcon}
                    />
                  </SelectTrigger>
                  <SelectPortal>
                    <SelectBackdrop />
                    <SelectContent>
                      <SelectDragIndicatorWrapper>
                        <SelectDragIndicator />
                      </SelectDragIndicatorWrapper>
                      <SelectItem label="Red" value="red" />
                      <SelectItem label="Blue" value="blue" />
                      <SelectItem label="Black" value="black" />
                      <SelectItem label="Pink" value="pink" isDisabled={true} />
                      <SelectItem label="Green" value="green" />
                    </SelectContent>
                  </SelectPortal>
                </Select>
                <FormControlHelper>
                  <FormControlHelperText className="text-sm font-normal text-typography-500">
                    You can only select one option
                  </FormControlHelperText>
                </FormControlHelper>
              </FormControl>

              <Input className="text-center border-outline-300 rounded-s">
                <InputField
                  className="text-sm font-normal leading-[21px] text-typography-600 h-full"
                  placeholder="Search for employee"
                />
                <InputSlot className="pr-3">
                  <InputIcon
                    as={SearchIcon}
                    className="text-background-400 w-4 h-4"
                  />
                </InputSlot>
              </Input>
            </VStack>
            <VStack className="gap-6 flex-1">
              <HStack className="gap-6 ">
                <Box className="p-6 gap-8 border border-dashed rounded-md border-outline-300">
                  <RadioGroup
                    className="gap-6"
                    value={values}
                    onChange={setValues}
                  >
                    <Radio className="gap-2" value="Eng">
                      <RadioIndicator>
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                      <VStack>
                        <RadioLabel className="text-sm font-normal text-typography-900">
                          Extended coverage
                        </RadioLabel>
                        <RadioLabel className="text-sm text-typography-500 font-normal">
                          Extra serivices included
                        </RadioLabel>
                      </VStack>
                    </Radio>
                    <Radio className="gap-2" value="Fre">
                      <RadioIndicator>
                        <RadioIcon as={CircleIcon} />
                      </RadioIndicator>
                      <VStack>
                        <RadioLabel className="text-sm font-normal text-typography-900">
                          Basic coverage
                        </RadioLabel>
                        <RadioLabel className="text-sm text-typography-500 font-normal">
                          Nothing extra included
                        </RadioLabel>
                      </VStack>
                    </Radio>
                  </RadioGroup>
                </Box>

                <VStack className="p-6 flex-1 gap-[15px] border border-dashed rounded-md border-outline-300">
                  <Text className="text-typography-900 text-base font-normal">
                    Select Toppings
                  </Text>
                  <VStack className="gap-3">
                    <HStack>
                      <Checkbox
                        isChecked={true}
                        size="md"
                        className="gap-2"
                        isInvalid={false}
                        isDisabled={false}
                        value={''}
                      >
                        <CheckboxIndicator>
                          <CheckboxIcon as={CheckIcon} />
                        </CheckboxIndicator>
                        <CheckboxLabel className="text-sm font-normal leading-[21px] text-typography-900">
                          Pepperoni
                        </CheckboxLabel>
                      </Checkbox>
                      <Text className="text-sm font-normal text-typography-900">
                        $0.5
                      </Text>
                    </HStack>
                    <HStack>
                      <Checkbox
                        size="md"
                        className="gap-2"
                        isInvalid={false}
                        isDisabled={false}
                        value={''}
                      >
                        <CheckboxIndicator>
                          <CheckboxIcon as={CheckIcon} />
                        </CheckboxIndicator>
                        <CheckboxLabel className="text-sm font-normal leading-[21px] text-typography-900">
                          Mushrooms
                        </CheckboxLabel>
                      </Checkbox>
                      <Text className="text-sm font-normal text-typography-900">
                        $1.0
                      </Text>
                    </HStack>
                    <HStack>
                      <Checkbox
                        size="md"
                        className="gap-2"
                        isInvalid={false}
                        isDisabled={false}
                        value={''}
                      >
                        <CheckboxIndicator>
                          <CheckboxIcon as={CheckIcon} />
                        </CheckboxIndicator>
                        <CheckboxLabel className="text-sm font-normal leading-[21px] text-typography-900">
                          Bacon
                        </CheckboxLabel>
                      </Checkbox>
                      <Text className="text-sm font-normal text-typography-900">
                        $2.0
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
              </HStack>
              <HStack />
              <VStack className="gap-5 rounded-lg bg-background-50 p-5 flex-1">
                <HStack className="gap-3 flex-1">
                  <Icon
                    as={ChevronUpIcon}
                    className="h-6 w-6 text-background-800"
                  />
                  <VStack className="flex-1">
                    <Text className="text-lg font-bold text-typography-900">
                      What payment methods do you accept?
                    </Text>
                    <Text className="text-lg font-normal text-typography-700">
                      We accept all major credit cards, including Visa,
                      Mastercard, and American Express.
                    </Text>
                  </VStack>
                </HStack>
              </VStack>
            </VStack>
          </HStack>
        </HStack>
      </VStack>

      {/*  */}
      <VStack className="gap-20 flex-1">
        <VStack className="gap-3">
          <Heading className="text-5xl">Same code for Next.js and Expo</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Pretium mauris maecenas
            lobortis libero orci orci pellentesque. Hendrerit penatibus mauris
            adipiscing egestas. Nec risus malesuada habitant diam fermentum.
            Enim et penatibus netus eu aliquet non pretium. Elementum semper
            aenean odio auctor vel maecenas.
          </Text>
          <Link>
            <LinkText className="text-lg font-bold no-underline">
              Learn more
            </LinkText>
          </Link>
        </VStack>
        <Resizable
          onResize={() =>
            setIsMobile(
              resizableRef.current?.resizable?.offsetWidth &&
                resizableRef.current?.resizable?.offsetWidth < 400
            )
          }
          ref={resizableRef}
          defaultSize={{
            width: 200,
            height: 680,
          }}
          bounds="parent"
          handleClasses={{
            right: 'right-handler',
          }}
          handleStyles={{
            right: {
              right: 0,
              width: 20,
              height: '10px',
              top: '40%',
              bottom: '50%',
            },
          }}
          handleComponent={{
            right: (
              <Box className="hidden md:flex">
                <Expand />
              </Box>
            ),
          }}
          minWidth="300px"
          maxWidth="100%"
          enable={{
            top: false,
            right: true,
            bottom: false,
            left: false,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        >
          <Box
            className={`flex-row items-center bg-background-950 py-1.5 rounded-tl-2xl rounded-tr-2xl hidden sm:${
              isMobile ? 'hidden' : 'flex'
            }`}
          >
            <NextImage
              src="/images/menu.svg"
              alt="menu-options"
              width={40}
              height={10}
              style={{
                marginRight: 20,
                marginLeft: 27,
              }}
            />
            <Box className="flex-row">
              <Text className="mr-5 text-xs font-normal text-white">
                Homestay
              </Text>

              <Text className="mr-5 text-xs font-normal text-white">File</Text>

              <Text className="mr-5 text-xs font-normal text-white">Edit</Text>

              <Text className="mr-5 text-xs font-normal text-white">View</Text>
            </Box>
          </Box>

          {/* <Box
            className={`flex ${
              isMobile ? 'flex' : 'hidden'
            } flex-row justify-between items-center rounded-tl-2xl rounded-tr-2xl bg-pink-800 py-1.5`}
          >
            <Text className="ml-5 text-xs font-bold text-typography-400">
              8:15
            </Text>

            <NextImage
              src="/images/statusicons.svg"
              alt="menu-options"
              width={56}
              height={15}
              style={{
                marginRight: 24,
              }}
            />
          </Box> */}

          <Box
            className={`flex ${
              isMobile ? 'flex' : 'hidden'
            } flex-row justify-between items-center rounded-tl-2xl rounded-tr-2xl bg-pink-800 py-1.5`}
            className={`h-full w-full overflow-hidden ${
              isMobile ? 'rounded-tl-2xl' : 'rounded-none'
            }
            
            ${isMobile ? 'rounded-tr-2xl' : 'rounded-none'}
            `}
          >
            <iframe
              src="https://ui-example-nativewind.vercel.app/"
              title="NativeBase v3 Dashboard Example"
              style={{
                transformOrigin: '0px 0px',
                transform: 'scale(0.8)',
                width: '125%',
                height: '125%',
                border: 'none',
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
              }}
              loading="lazy"
            />
          </Box>
        </Resizable>

        <Box className="-mt-12 rounded-lg border border-outline-200 p-4 w-auto self-start md:flex-row">
          <Box>
            <Text className="text-typography-800 text-xl font-bold ">
              Give it a shot!
            </Text>

            <HStack className="hidden md:flex flex-1 justify-center items-center">
              <Text>Try it in your browser or scan the QR code with the </Text>
              <NextImage
                src="/icon/expo-icon.svg"
                alt="expo-icon"
                width={18}
                height={24}
                // style={{
                //   verticalAlign: 'middle',
                // }}
              />
              <Text> Expo app on your phone.</Text>
            </HStack>

            <Text className="flex font-normal leading-6 mt-2 md:hidden md:max-w-[319px]">
              Try on Expo app. It&apos;s the perfect way to dive right in and
              explore.
            </Text>

            <Pressable
              className="hidden py-1 px-3 mt-5 rounded-sm border bg-transparent flex-row items-center w-auto self-start md:flex"
              // sx={{
              //   _web: {
              //     ':focus': {
              //       boxShadow: '#004282 0px 0px 0px 2px',
              //       _dark: {
              //         boxShadow: '#004282 0px 0px 0px 2px',
              //       },
              //     },
              //   },
              // }}
              onPress={checkPlatform}
            >
              <OpenInNewIcon className="h-[18px] w-[18px]" />
              <Text className="ml-2.5 text-sm font-normal leading-[22px]">
                Open in new tab
              </Text>
            </Pressable>

            <Pressable
              className="flex py-1 px-3 mt-5 rounded-sm border bg-transparent flex-row items-center w-auto self-start md:hidden"
              // sx={{
              //   _web: {
              //     ':focus': {
              //       boxShadow: '#004282 0px 0px 0px 2px',
              //       _dark: {
              //         boxShadow: '#004282 0px 0px 0px 2px',
              //       },
              //     },
              //   },
              // }}
              // onPress={checkPlatform}
            >
              <NextImage
                src="/icon/expo-icon.svg"
                alt="expo-icon"
                width={17}
                height={16}
              />
              <Text className="ml-2.5 text-sm font-normal leading-[22px]">
                Open in Expo
              </Text>
            </Pressable>
          </Box>

          <Box className="justify-center items-center flex-row ml-10  my-6 hidden md:flex">
            <Box className="justify-center items-center">
              <Image
                alt="dark mode"
                className="w-[84px] h-[84px]"
                src={QRCode}
              />

              {/* <Box className="flex-row items-center mt-2">
                <NextImage
                  alt="ios-icon"
                  src="/icon/android-icon.svg"
                  width={16}
                  height={16}
                />
                <Text className="ml-1 text-sm font-normal">Android</Text>
              </Box> */}
            </Box>
          </Box>
        </Box>
      </VStack>

      {/*  */}
      <VStack className="gap-20 flex-1">
        <VStack className="gap-3">
          <Heading className="text-5xl">
            Customize all the way, don’t lose control!
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur. Pretium mauris maecenas
            lobortis libero orci orci pellentesque. Hendrerit penatibus mauris
            adipiscing egestas. Nec risus malesuada habitant diam fermentum.
            Enim et penatibus netus eu aliquet non pretium. Elementum semper
            aenean odio auctor vel maecenas.
          </Text>
          <Link>
            <LinkText className="text-lg font-bold no-underline">
              Learn more
            </LinkText>
          </Link>
        </VStack>
        <HStack className="gap-6 flex-1">
          <VStack className="gap-6 flex-1">
            <HStack className="gap-6 flex-1 w-full">
              {/* 1st */}
              <VStack className="gap-6 flex-1 w-[50%]">
                <VStack className="rounded-xl border-outline-200 border p-5 gap-6">
                  <Image
                    alt="dark mode"
                    className="w-auto h-[256px]"
                    src={PositiveThinking}
                  />
                  <VStack className="self-start">
                    <Text className="text-sm font-normal leading-[21px] text-typography-700">
                      May 15, 2023
                    </Text>
                    <Heading className="mt-2 self-start text-base font-bold leading-normal text-typography-900">
                      The Power of Positive Thinking
                    </Heading>
                    <Text className="mt-1.5 self-start text-sm font-normal leading-[21px] text-typography-700">
                      Discover how the power of positive thinking can transform
                      your life, boost your confidence, and help you overcome
                      challenges. Explore practical tips and techniques to
                      cultivate a positive mindset for greater happiness and
                      success.
                    </Text>
                  </VStack>

                  <HStack className="self-start" space="md">
                    <Avatar className="w-12 h-12">
                      <AvatarFallbackText>JS</AvatarFallbackText>
                      <AvatarImage
                        source={{
                          uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                        }}
                      />
                    </Avatar>
                    <VStack>
                      <Heading className="text-sm font-bold leading-normal text-typography-900">
                        John Smith
                      </Heading>
                      <Text
                        className="text-sm font-normal leading-[21px] text-typography-700"
                        size="sm"
                      >
                        Motivational Speaker
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>

                <VStack className="rounded-xl border-outline-200 p-5 border">
                  <Text className="self-stretch text-base font-semibold">
                    Share gluestack-ui with friends
                  </Text>
                  <Text className="self-stretch text-sm font-normal mt-2.5">
                    Email friends who have never tried gluestack-ui
                  </Text>
                  <Text className="mt-6 text-sm font-normal text-typography-900 mb-1.5">
                    Send an invite
                  </Text>
                  <HStack className="gap-4">
                    <FormControl className="gap-1.5">
                      <Input className="border-outline-300  py-0 rounded-md">
                        <InputField
                          placeholder="abc@gmail.com"
                          className="text-sm font-normal leading-[21px] text-typography-600 h-full"
                        />
                      </Input>
                    </FormControl>
                    <Button className="px-4 py-2 bg-primary-500">
                      <ButtonText className="text-sm text-[#FCFCFC] font-semibold leading-[20px]">
                        Send
                      </ButtonText>
                    </Button>
                  </HStack>
                </VStack>
              </VStack>

              {/* 2 */}
              <VStack className="gap-6">
                <Box className="border border-outline-200 rounded-lg py-7 px-6">
                  <Text className="text-lg font-bold text-typography-900">
                    Notification Settings
                  </Text>
                  <Text className="text-sm font-normal text-typography-700">
                    Receive notifications about gluestack-ui updates.
                  </Text>
                  <VStack className="gap-5 mt-8">
                    <HStack className="gap-5 items-center">
                      <Box className="p-3 bg-background-50 roun">
                        <Icon size="xl" as={MailIcon} />
                      </Box>
                      <HStack className="border-b flex-1 pb-0.5">
                        <VStack className="flex-1">
                          <Text className="text-sm font-bold text-typography-900">
                            Email
                          </Text>
                          <Text className="text-sm font-light text-typography-700">
                            Receive email updates on comments you followed
                          </Text>
                        </VStack>

                        <Switch
                          size="md"
                          defaultValue={true}
                          className=""
                          // isDisabled={false}
                          // trackColor={{
                          //   false: colors.gray[300],
                          //   true: colors.gray[500],
                          // }}
                          // thumbColor={colors.gray[50]}
                          // activeThumbColor={colors.gray[50]}
                          // ios_backgroundColor={colors.gray[300]}
                        />
                      </HStack>
                    </HStack>
                    <HStack className="gap-5 items-center">
                      <Box className="p-3 bg-background-50 roun">
                        <Icon size="xl" as={Type} />
                      </Box>
                      <HStack className="border-b flex-1 pb-0.5">
                        <VStack className="flex-1">
                          <Text className="text-sm font-bold text-typography-900">
                            Text messages
                          </Text>
                          <Text className="text-sm font-light text-typography-700">
                            Receive updates by SMS
                          </Text>
                        </VStack>
                        <Switch
                          size="md"
                          defaultValue={true}
                          // isDisabled={false}
                          // trackColor={{
                          //   false: colors.gray[300],
                          //   true: colors.gray[500],
                          // }}
                          // thumbColor={colors.gray[50]}
                          // activeThumbColor={colors.gray[50]}
                          // ios_backgroundColor={colors.gray[300]}
                        />
                      </HStack>
                    </HStack>
                    <HStack className="gap-5 items-center">
                      <Box className="p-3 bg-background-50 roun">
                        <Icon size="xl" as={CircleDollarSign} />
                      </Box>

                      <VStack className="flex-1">
                        <Text className="text-sm font-bold text-typography-900">
                          Automatically Delete items
                        </Text>
                        <Text className="text-sm font-light text-typography-700">
                          Delete activities older than 3 months
                        </Text>
                      </VStack>
                      <Switch
                        size="md"
                        // isDisabled={false}
                        // trackColor={{
                        //   false: colors.gray[300],
                        //   true: colors.gray[500],
                        // }}
                        // thumbColor={colors.gray[50]}
                        // activeThumbColor={colors.gray[50]}
                        // ios_backgroundColor={colors.gray[300]}
                      />
                    </HStack>
                  </VStack>
                </Box>
                <Box className="flex-1 border rounded-lg border-outline-200 p-6 ">
                  <Text className="text-lg font-bold leading-normal text-typography-900">
                    Upload Your Files
                  </Text>
                  <Text className="text-sm font-normal mt-1.5">
                    JPG, PNG, PDF, MP4, GIFs supported
                  </Text>
                  <Box className="bg-background-50 mt-5 mb-6 border-dashed border justify-center items-center py-6 px-[70px] rounded-xl flex-1">
                    <Icon className="h-[62px] w-[62px]" as={CloudUpload} />
                    <Text className="text-typography-700 text-sm font-normal">
                      Drag & drop your file here
                    </Text>
                    <Text className="text-xs text-typography-700 font-normal">
                      or
                    </Text>
                    <Text className="text-xs font-normal px-2 py-1 bg-[#E7E8E7]">
                      Browse Files
                    </Text>
                  </Box>
                  <Text className="text-typography-900 text-sm font-bold">
                    Uploading 1 file
                  </Text>
                  <HStack className="gap-5 mt-3.5">
                    <Image
                      alt="dark mode"
                      className="w-6 h-6"
                      size="md"
                      src={require('@/public/svg/bxs_file-gif.svg')}
                    />
                    <VStack className="flex-1">
                      <HStack className="justify-between">
                        <Text className="text-sm font-normal">
                          Document_1.gif (200mb)
                        </Text>
                        <Text className="text-xs font-normal">25s left</Text>
                      </HStack>

                      <Progress className="h-1" value={40} w={300} size="md">
                        <ProgressFilledTrack />
                      </Progress>
                    </VStack>
                    <Icon className="h-5 w-5" as={X} />
                  </HStack>
                </Box>
              </VStack>
            </HStack>
            {/* 3 */}
            <HStack className="justify-between p-5 border border-outline-200 rounded-lg">
              <VStack>
                <Text className="text-typography-900 text-lg font-bold leading-normal">
                  Updates Available
                </Text>
                <Text className="text-sm font-normal leading-[21px] text-typography-700">
                  A new version is available. Please upgrade for the best
                  experience.
                </Text>
              </VStack>
              <HStack className="gap-3">
                <Button
                  size="sm"
                  className="border-secondary-300"
                  variant="outline"
                >
                  <ButtonText>Skip</ButtonText>
                </Button>
                <Button size="sm" className="bg-secondary-900">
                  <ButtonText>Download</ButtonText>
                </Button>
              </HStack>
            </HStack>
          </VStack>
          {/* 4 */}
          <VStack className="gap-6 w-[30%]">
            <VStack className="rounded-xl border-outline-200 border p-5 gap-8">
              <VStack className="gap-1">
                <Text className="text-typography-900 text-2xl font-bold leading-normal">
                  Login to your account
                </Text>
                <HStack className="gap-1.5">
                  <Text className="font-normal text-sm text-typography-700">
                    Don’t have an account?
                  </Text>
                  <Text className="font-medium text-sm text-typography-700">
                    Sign up
                  </Text>
                </HStack>
              </VStack>
              <VStack className="gap-5">
                <FormControl className="gap-1.5">
                  <FormControlLabel>
                    <FormControlLabelText className="text-sm font-medium leading-normal text-typography-900">
                      Email
                    </FormControlLabelText>
                  </FormControlLabel>
                  <Input className="border-outline-300  py-0 rounded-md">
                    <InputField
                      placeholder="abc@gmail.com"
                      className="text-sm font-normal leading-[21px] text-typography-600 h-full"
                    />
                  </Input>
                </FormControl>
                <FormControl className="gap-1.5">
                  <FormControlLabel>
                    <FormControlLabelText className="text-sm font-medium leading-normal text-typography-900">
                      Password
                    </FormControlLabelText>
                  </FormControlLabel>
                  <Input className="border-outline-300 py-0 rounded-md">
                    <InputField
                      placeholder="Enter password"
                      className="text-sm font-normal leading-[21px] text-typography-600"
                    />
                  </Input>
                </FormControl>
                <HStack className="justify-between">
                  <Checkbox size="sm" value="Remember me">
                    <CheckboxIndicator className="mr-2">
                      <CheckboxIcon>
                        <CheckIcon />
                      </CheckboxIcon>
                    </CheckboxIndicator>
                    <CheckboxLabel className="text-sm font-normal leading-[21px] text-typography-900">
                      Remember me
                    </CheckboxLabel>
                  </Checkbox>
                  <Link>
                    <LinkText className="text-right text-xs font-medium leading-normal text-typography-700 no-underline">
                      Forgot Password?
                    </LinkText>
                  </Link>
                </HStack>
              </VStack>
              <Button size="sm" className="w-full bg-secondary-900">
                <ButtonText className="text-sm font-semibold leading-normal text-typography-0">
                  Login
                </ButtonText>
              </Button>
              <HStack className="justify-center flex-1 items-center">
                <Divider className="h-0 flex-1 border-background-200 border" />
                <Text className="text-typography-600 text-center text-xs font-normal leading-normal px-2">
                  OR CONTINUE WITH
                </Text>
                <Divider className="h-0 flex-1  border-background-200 border" />
              </HStack>
              <HStack className="gap-3 items-start self-stretch">
                <Button
                  variant="outline"
                  className="px-5 flex-1 rounded-md h-10"
                >
                  <Image
                    alt="dark mode"
                    className="w-[15px] h-[15px]"
                    size="md"
                    src={GoogleIcon}
                  />
                </Button>
                <Button
                  variant="outline"
                  className="px-5 flex-1 rounded-md h-10"
                >
                  <Image
                    alt="dark mode"
                    className="w-[15px] h-[15px]"
                    size="md"
                    src={TwitterIcon}
                  />
                </Button>
                <Button
                  variant="outline"
                  className="px-5 flex-1 rounded-md h-10"
                >
                  <Image
                    alt="dark mode"
                    className="w-[15px] h-[15px]"
                    size="md"
                    src={GithubIcon}
                  />
                </Button>
              </HStack>
            </VStack>

            <VStack className="border flex-1 justify-center rounded-xl p-6 border-outline-200 bg-white">
              {/* <VStack className="justify-between"> */}
              <VStack space="md">
                <Avatar className="w-[74px] h-[74px] self-center">
                  <AvatarFallbackText>SS</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                    }}
                  />
                </Avatar>
                <VStack>
                  <Heading className="text-typography-900 text-lg font-bold leading-normal self-center text-center">
                    John Smith
                  </Heading>
                  <Text className="text-typography-700 text-sm font-normal leading-[21px] self-center text-center">
                    john@example.com
                  </Text>
                </VStack>
              </VStack>
              <Text className="text-typography-700 text-center self-center text-sm font-normal leading-5">
                Pushing the boundaries of reality with XR design wizardry ✨🚀
                #XRDesigner
              </Text>
              <HStack className="justify-center">
                <VStack className="items-center flex-1">
                  <Text>32</Text>
                  <Text>posts</Text>
                </VStack>
                <Divider
                  orientation="vertical"
                  className="mx-2.5 h-auto w-[0.954px] bg-outline-200"
                />
                <VStack className="items-center flex-1">
                  <Text>8,396</Text>
                  <Text>followers</Text>
                </VStack>
                <Divider
                  orientation="vertical"
                  className="mx-2.5 h-auto w-[0.954px] bg-outline-200"
                />
                <VStack className="items-center flex-1">
                  <Text>720</Text>
                  <Text>follwing</Text>
                </VStack>
              </HStack>
              {/* </VStack> */}
            </VStack>
          </VStack>
        </HStack>
      </VStack>
      {/*  */}
      <VStack>
        <Heading className="text-5xl font-bold leading-[54px] mb-3 text-typography-900">
          The Power of Tailwind with NativeWind
        </Heading>
        <Text className="text-typography-700 text-xl font-normal leading-[30px]">
          Lorem ipsum dolor sit amet consectetur. Pretium mauris maecenas
          lobortis libero orci orci pellentesque. Hendrerit penatibus mauris
          adipiscing egestas. Nec risus malesuada habitant diam fermentum. Enim
          et penatibus netus eu aliquet non pretium. Elementum semper aenean
          odio auctor vel maecenas.
        </Text>
        <Link className="mt-3">
          <LinkText className="text-lg font-bold no-underline">
            Learn more
          </LinkText>
        </Link>
      </VStack>
      {/*  */}
      <VStack>
        <Heading className="text-5xl font-bold leading-[54px] mb-3 text-typography-900">
          Inspiration
        </Heading>
        <Text>
          This project wouldn't have been possible without the great work by
          community members and inspiration from these libraries.
        </Text>
        <VStack className="gap-4 mt-20">
          <HStack className="gap-4">
            <Box className="bg-[#EBEBEB] w-[300px] h-[164px] justify-center items-center self-center rounded-xl">
              <Image
                alt="dark mode"
                className="w-[228.469px] h-[51.126px]"
                src={ShadCNUI}
              />
            </Box>

            <Image
              alt="dark mode"
              className="rounded-xl w-[300px] h-[164px]"
              src={RadixUI}
            />

            <Image
              alt="dark mode"
              className="rounded-xl w-[300px] h-[164px]"
              src={Headless}
            />
          </HStack>
          <HStack className="gap-4">
            <Image
              alt="dark mode"
              className="rounded-xl w-[300px] h-[164px]"
              src={ChakraUI}
            />

            <Box className="bg-[#0F1F2A] w-[300px] h-[164px] justify-center items-center self-center rounded-xl">
              <Image alt="dark mode" className="w-[177px] h-12" src={NB} />
            </Box>
            <Box className="bg-[#2C2E33] w-[300px] h-[164px] justify-center items-center self-center rounded-xl">
              <Image
                alt="dark mode"
                className="w-[137.595px] h-9"
                height={36}
                width={138}
                src={require('@/public/svg/mantine.svg')}
              />
            </Box>
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default MainContent;
