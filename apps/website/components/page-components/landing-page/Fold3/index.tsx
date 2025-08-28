import React, { useContext } from 'react';
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import { Box } from '@/components/ui/box';
import { Switch } from '@/components/ui/switch';
import { Progress, ProgressFilledTrack } from '@/components/ui/progress';
import { Divider } from '@/components/ui/divider';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import { Button, ButtonText } from '@/components/ui/button';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Icon, CheckIcon, MailIcon } from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Link, LinkText } from '@/components/ui/link';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';

import {
  Type,
  CircleDollarSign,
  CloudUpload,
  X,
  EyeIcon,
  EyeOffIcon,
} from 'lucide-react-native';
import NextImage from 'next/image';
import { ThemeContext } from '@/utils/context/theme-context';
import {
  LocalThemeProvider,
  useLocalTheme,
} from '@/utils/context/local-theme-context';

const getBorderStyle = (activeButton: string, elementType: string) => {
  switch (activeButton) {
    case 'Sharp':
      return 'rounded-none';
    case 'Subtle':
      return 'rounded-lg';
    case 'Rounded':
      return elementType === 'button' || elementType === 'input'
        ? 'rounded-full'
        : 'rounded-2xl';
    default:
      return ''; // Default to subtle if no match
  }
};

const ButtonMap = [
  { mode: 'default', bg: 'bg-typography-950' },
  { mode: 'violet', bg: 'bg-[#8B5CF6]' },
  { mode: 'cyan', bg: 'bg-[#06B6D4]' },
  { mode: 'rose', bg: 'bg-[#F43F5E]' },
  { mode: 'bluegray', bg: 'bg-[#64748B]' },
];

const Fold3Content = () => {
  const [activeButton, setActiveButton] = React.useState('Subtle');
  const { themeMode, setThemeMode } = useLocalTheme();

  const handleClick = (buttonName: React.SetStateAction<string>) => {
    setActiveButton(buttonName);
  };
  const { colorMode } = useContext(ThemeContext);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => !showState);
  };

  return (
    <VStack className="gap-10 sm:gap-20 flex-1 mt-[60px] sm:mt-[120px] max-w-[1440px] mx-auto">
      <VStack className="gap-3 w-full">
        <Heading
          size="2xl"
          className="text-2xl sm:text-3xl font-bold sm:leading-[54px] leading-9 mb-3 text-typography-900 lg:text-4xl"
        >
          Customize all the way, don't lose control!
        </Heading>
        <Text className="text-typography-700 text-base sm:text-lg font-normal leading-[28px] sm:leading-[30px] lg:w-[75%]">
          Take full control of your code with copy-paste components for
          unlimited customization. Customize every UI component and element
          precisely, from aesthetics to interactive behaviours.
        </Text>
        <Link
          className="w-fit inline-block"
          href="/ui/docs/home/overview/introduction"
        >
          <LinkText className="text-base sm:text-lg font-bold underline underline-offset-4 group-hover/link:underline">
            Learn more
          </LinkText>
        </Link>
      </VStack>
      <VStack className="gap-6 w-full">
        <HStack className="justify-between flex-col sm:flex-row gap-4 sm:gap-0 w-full">
          <Box className="gap-1 justify-center flex flex-row flex-wrap">
            {ButtonMap.map(({ mode, bg }) => {
              return (
                <Button
                  key={mode}
                  isHovered={mode === themeMode}
                  onPress={() => {
                    setThemeMode(mode as any);
                  }}
                  aria-label="Theme Change"
                  variant="outline"
                  className="rounded-lg p-0 h-auto py-[9px] px-[10px] border-0"
                >
                  <Box className={`p-2.5 ${bg} rounded-full`} />
                </Button>
              );
            })}
          </Box>
          <HStack className="bg-background-50 rounded-lg p-1 gap-1.5 items-center w-full sm:w-auto min-w-[200px]">
            {['Sharp', 'Subtle', 'Rounded'].map((buttonName) => (
              <Pressable
                key={buttonName}
                onPress={() => handleClick(buttonName)}
                className={`flex-1 gap-1.5 cursor-pointer ${
                  activeButton === buttonName ? 'bg-background-0' : ''
                } rounded-lg px-2 sm:px-3.5 py-2 items-center`}
              >
                <Text
                  className={`text-xs sm:text-sm whitespace-nowrap ${
                    activeButton === buttonName
                      ? 'text-typography-900 font-semibold'
                      : 'text-typography-700 font-normal'
                  } `}
                >
                  {buttonName}
                </Text>
              </Pressable>
            ))}
          </HStack>
        </HStack>
        <HStack className="gap-6  w-full flex-col lg:flex-row">
          <VStack className="gap-6 w-full lg:w-2/3">
            <HStack className="gap-6 flex-col lg:flex-row w-full">
              <VStack className="gap-6 hidden lg:flex lg:w-[45%]">
                <VStack
                  className={`${getBorderStyle(
                    activeButton,
                    ''
                  )} border-outline-100 border p-5 gap-6`}
                >
                  <Box className="w-full h-[230px] relative">
                    <NextImage
                      alt="dark mode"
                      layout="fill"
                      objectFit="cover"
                      src="/images/customizeAllTheWay.png"
                      className="rounded-lg"
                    />
                  </Box>
                  <VStack className="w-full">
                    <Text className="text-sm font-normal leading-[21px] text-primary-700">
                      May 15, 2023
                    </Text>
                    <Heading className="mt-2 text-base font-bold leading-normal text-typography-900">
                      The Power of Positive Thinking
                    </Heading>
                    <Text className="mt-1.5 text-sm font-normal leading-[21px] text-typography-700">
                      Discover how the power of positive thinking can transform
                      your life, boost your confidence, and help you overcome
                      challenges. Explore practical tips and techniques to
                      cultivate a positive mindset for greater happiness and
                      success.
                    </Text>
                  </VStack>

                  <HStack className="w-full items-center" space="md">
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

                <VStack
                  className={`${getBorderStyle(
                    activeButton,
                    ''
                  )} border-outline-100 p-5 border`}
                >
                  <Text className="self-stretch text-base font-semibold">
                    Share gluestack-ui with friends
                  </Text>
                  <Text className="self-stretch text-sm font-normal mt-2.5">
                    Email friends who have never tried gluestack-ui
                  </Text>
                  <Text className="mt-6 text-sm font-normal text-typography-900 mb-1.5">
                    Send an invite
                  </Text>
                  <Box className="gap-3 md:flex-row flex-col md:items-center">
                    <FormControl className="gap-1.5 flex-1">
                      <Input
                        className={`py-0 ${getBorderStyle(
                          activeButton,
                          'input'
                        )}`}
                      >
                        <InputField
                          aria-label="abc@gmail.com"
                          placeholder="abc@gmail.com"
                          className="text-sm font-normal leading-[21px] text-typography-600 h-full"
                        />
                      </Input>
                    </FormControl>
                    <Button
                      className={`${getBorderStyle(activeButton, 'input')}`}
                      size="sm"
                    >
                      <ButtonText>Send</ButtonText>
                    </Button>
                  </Box>
                </VStack>
              </VStack>

              <VStack className="gap-6 w-full lg:w-[55%]">
                <Box
                  className={`border border-outline-100 ${getBorderStyle(
                    activeButton,
                    ''
                  )} py-7 px-6`}
                >
                  <Text className="text-lg font-bold text-typography-900">
                    Notification Settings
                  </Text>
                  <Text className="text-sm font-normal text-typography-700">
                    Receive notifications about gluestack-ui updates.
                  </Text>
                  <VStack className="gap-5 mt-8">
                    <HStack className="gap-5 items-center">
                      <Box
                        className={`p-3 md:flex hidden bg-primary-600/10 ${getBorderStyle(
                          activeButton,
                          ''
                        )}`}
                      >
                        <Icon
                          size="xl"
                          as={MailIcon}
                          className="text-primary-700"
                        />
                      </Box>
                      <HStack className="border-b border-outline-100 pb-2 items-center flex-1">
                        <VStack className="flex-1">
                          <Text className="text-sm font-bold text-typography-900">
                            Email
                          </Text>
                          <Text className="md:text-sm mr-4 font-light text-typography-700 text-xs">
                            Receive email updates on comments you followed
                          </Text>
                        </VStack>

                        <Switch
                          size="md"
                          defaultValue={true}
                          // isDisabled={false}
                          aria-label="Switch"
                        />
                      </HStack>
                    </HStack>
                    <HStack className="gap-5 items-center">
                      <Box
                        className={`p-3 md:flex hidden bg-primary-600/10 ${getBorderStyle(
                          activeButton,
                          ''
                        )}`}
                      >
                        <Icon
                          size="xl"
                          as={Type}
                          className="text-primary-700"
                        />
                      </Box>
                      <HStack className="border-b border-outline-100 pb-2  items-center flex-1">
                        <VStack className=" flex-1">
                          <Text className="text-sm font-bold text-typography-900">
                            Text messages
                          </Text>
                          <Text className="md:text-sm mr-4 font-light text-typography-700 text-xs">
                            Receive updates by SMS
                          </Text>
                        </VStack>
                        <Switch
                          size="md"
                          defaultValue={true}
                          // isDisabled={false}
                          aria-label="Switch"
                        />
                      </HStack>
                    </HStack>
                    <HStack className="gap-5 items-center">
                      <Box
                        className={`p-3 md:flex hidden bg-primary-600/10 ${getBorderStyle(
                          activeButton,
                          ''
                        )}`}
                      >
                        <Icon
                          size="xl"
                          as={CircleDollarSign}
                          className="text-primary-700"
                        />
                      </Box>
                      <HStack className="border-b border-outline-100 pb-2 items-center flex-1">
                        <VStack className="flex-1">
                          <Text className="text-sm font-bold text-typography-900">
                            Automatically Delete items
                          </Text>
                          <Text className="md:text-sm mr-4 font-light text-typography-700 text-xs">
                            Delete activities older than 3 months
                          </Text>
                        </VStack>
                        <Switch size="md" aria-label="Switch" />
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
                <Box
                  className={`border ${getBorderStyle(
                    activeButton,
                    ''
                  )} border-outline-100 p-6`}
                >
                  <Text className="text-lg font-bold leading-normal text-typography-900">
                    Upload Your Files
                  </Text>
                  <Text className="text-sm font-normal mt-1.5">
                    JPG, PNG, PDF, MP4, GIFs supported
                  </Text>
                  <Box
                    className={`bg-background-50 mt-5 mb-6 border-dashed border border-outline-100 justify-center items-center py-6  ${getBorderStyle(
                      activeButton,
                      ''
                    )}`}
                  >
                    <Icon
                      className="md:h-[62px] md:w-[62px] w-14 h-14 text-background-900"
                      as={CloudUpload}
                    />
                    <Text className="text-typography-700 text-sm font-normal text-center">
                      Drag & drop your file here
                    </Text>
                    <Text className="text-xs text-typography-700 font-normal mt-1.5">
                      or
                    </Text>
                    <Box
                      className={`bg-primary-600/10 px-2 py-1 mt-1.5 ${getBorderStyle(
                        activeButton,
                        'button'
                      )}`}
                    >
                      <Text className="text-xs font-normal text-center text-primary-600">
                        Browse Files
                      </Text>
                    </Box>
                  </Box>
                  <Text className="text-typography-900 text-sm font-bold">
                    Uploading 1 file
                  </Text>
                  <HStack className="gap-5 mt-3.5 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2ZM11.333 17.772C10.8975 17.9161 10.4426 17.993 9.984 18C9.247 18 8.713 17.814 8.34 17.454C7.969 17.106 7.765 16.579 7.771 15.985C7.777 14.641 8.754 13.874 10.08 13.874C10.601 13.874 11.004 13.977 11.201 14.072L11.01 14.803C10.788 14.707 10.512 14.629 10.069 14.629C9.307 14.629 8.731 15.061 8.731 15.937C8.731 16.77 9.253 17.262 10.002 17.262C10.212 17.262 10.38 17.238 10.452 17.201V16.355H9.828V15.642H11.333V17.772ZM12.967 17.958H12.049V13.916H12.967V17.958ZM16.229 14.666H14.676V15.589H16.127V16.333H14.676V17.958H13.758V13.916H16.229V14.666ZM14 9H13V4L18 9H14Z"
                        fill={colorMode === 'light' ? '#272625' : '#F6F6F6'}
                      />
                    </svg>
                    <VStack className="w-full gap-1">
                      <HStack className="justify-between">
                        <Text className="md:text-sm text-xs font-normal">
                          Document_1.gif (200mb)
                        </Text>
                        <Text className="text-sm font-normal">25s left</Text>
                      </HStack>

                      <Progress
                        aria-label="progress bar"
                        className="h-1"
                        value={40}
                        size="md"
                      >
                        <ProgressFilledTrack />
                      </Progress>
                    </VStack>
                    <Box>
                      <Icon className="h-5 w-5 text-background-600" as={X} />
                    </Box>
                  </HStack>
                </Box>
              </VStack>
            </HStack>
            <Box
              className={`items-start lg:items-center flex-col lg:flex-row justify-between p-4 sm:p-5 border border-outline-100 ${getBorderStyle(
                activeButton,
                ''
              )} w-full`}
            >
              <VStack className="gap-1.5 w-full">
                <Text className="text-typography-900 text-base font-bold leading-normal">
                  Updates Available
                </Text>
                <Text className="text-sm font-normal leading-[21px] text-typography-700">
                  A new version is available. Please upgrade for the best
                  experience.
                </Text>
              </VStack>
              <HStack className="gap-3 lg:pt-0 pt-4 w-full lg:w-auto justify-start lg:justify-end">
                <Button
                  className={`${getBorderStyle(activeButton, 'button')}`}
                  size="sm"
                  action="secondary"
                  variant="outline"
                >
                  <ButtonText>Skip</ButtonText>
                </Button>
                <Button
                  className={`${getBorderStyle(activeButton, 'button')}`}
                  size="sm"
                >
                  <ButtonText>Download</ButtonText>
                </Button>
              </HStack>
            </Box>
          </VStack>

          <Box className="gap-6 w-full lg:w-1/3">
            <VStack
              className={`${getBorderStyle(
                activeButton,
                ''
              )} border-outline-100 border p-4 sm:p-5 gap-6 sm:gap-8 w-full`}
            >
              <VStack className="gap-1">
                <Text className="text-typography-900 text-2xl font-bold leading-normal">
                  Login to your account
                </Text>
                <HStack className="gap-1.5">
                  <Text className="font-normal text-sm text-typography-700">
                    Don't have an account?
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
                  <Input
                    className={`py-0 ${getBorderStyle(activeButton, 'input')}`}
                  >
                    <InputField
                      aria-label="abc@gmail.com"
                      placeholder="abc@gmail.com"
                      className="text-sm font-normal leading-[21px] text-typography-600 h-full"
                    />
                  </Input>
                </FormControl>
                <FormControl
                  className="gap-1.5"
                  size="md"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                  isRequired={false}
                >
                  <FormControlLabel className="mb-1">
                    <FormControlLabelText className="text-typography-900 text-sm">
                      Password
                    </FormControlLabelText>
                  </FormControlLabel>
                  <Input className={`${getBorderStyle(activeButton, 'input')}`}>
                    <InputField
                      aria-label="password"
                      placeholder="Enter password"
                      className="text-sm font-normal leading-[21px] text-typography-600 h-full"
                      type={showPassword ? 'text' : 'password'}
                    />
                    <InputSlot className="pr-3" onPress={handleState}>
                      <InputIcon
                        as={showPassword ? EyeIcon : EyeOffIcon}
                        className="text-darkBlue-500 w-4 h-4"
                      />
                    </InputSlot>
                  </Input>
                </FormControl>
                <HStack className="justify-between">
                  <Checkbox size="sm" value="Remember me">
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel className="text-sm font-normal leading-[21px] text-typography-900">
                      Remember me
                    </CheckboxLabel>
                  </Checkbox>
                  <Link>
                    <LinkText className="self-end text-xs font-normal leading-[21px] text-primary-700 no-underline">
                      Forgot Password?
                    </LinkText>
                  </Link>
                </HStack>
              </VStack>
              <Button
                className={`${getBorderStyle(activeButton, 'button')} w-full`}
                size="sm"
                action="primary"
              >
                <ButtonText className="text-sm font-semibold leading-normal text-typography-0">
                  Login
                </ButtonText>
              </Button>
              <HStack className="justify-center flex-1 items-center">
                <Divider className="h-0 flex-1 border-outline-100 border" />
                <Text className="text-typography-600 text-center text-xs font-normal leading-normal px-2">
                  OR CONTINUE WITH
                </Text>
                <Divider className="h-0 flex-1  border-outline-100 border" />
              </HStack>
              <HStack className="gap-3 items-start self-stretch">
                <Button
                  className={`${getBorderStyle(activeButton, 'button')} flex-1`}
                  variant="outline"
                  action="secondary"
                  aria-label="Google"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M15.6875 6.53112H15.0833V6.5H8.33334V9.5H12.572C11.9536 11.2464 10.292 12.5 8.33334 12.5C5.84822 12.5 3.83334 10.4851 3.83334 8C3.83334 5.51487 5.84822 3.5 8.33334 3.5C9.48047 3.5 10.5241 3.93275 11.3187 4.63962L13.4401 2.51825C12.1006 1.26987 10.3088 0.5 8.33334 0.5C4.19147 0.5 0.833344 3.85812 0.833344 8C0.833344 12.1419 4.19147 15.5 8.33334 15.5C12.4752 15.5 15.8333 12.1419 15.8333 8C15.8333 7.49712 15.7816 7.00625 15.6875 6.53112Z"
                      fill={colorMode === 'light' ? 'black' : 'white'}
                    />
                    <path
                      d="M1.69809 4.50912L4.16221 6.31625C4.82896 4.6655 6.44372 3.5 8.33334 3.5C9.48047 3.5 10.5241 3.93275 11.3187 4.63962L13.4401 2.51825C12.1006 1.26987 10.3088 0.5 8.33334 0.5C5.45259 0.5 2.95434 2.12637 1.69809 4.50912Z"
                      fill={colorMode === 'light' ? 'black' : 'white'}
                    />
                    <path
                      d="M8.33346 15.4993C10.2707 15.4993 12.031 14.7579 13.3618 13.5523L11.0406 11.588C10.2876 12.1584 9.35159 12.4993 8.33346 12.4993C6.38271 12.4993 4.72634 11.2554 4.10234 9.51953L1.65659 11.4039C2.89784 13.8328 5.41859 15.4993 8.33346 15.4993Z"
                      fill={colorMode === 'light' ? 'black' : 'white'}
                    />
                    <path
                      d="M15.6875 6.53113H15.0833V6.5H8.33334V9.5H12.572C12.275 10.3389 11.7353 11.0622 11.0393 11.5891L11.0405 11.5884L13.3617 13.5526C13.1975 13.7019 15.8333 11.75 15.8333 8C15.8333 7.49713 15.7816 7.00625 15.6875 6.53113Z"
                      fill={colorMode === 'light' ? 'black' : 'white'}
                    />
                  </svg>
                </Button>
                <Button
                  className={`${getBorderStyle(activeButton, 'button')} flex-1`}
                  variant="outline"
                  action="secondary"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M5.66064 16.3131C12.4531 16.3131 16.1683 10.6856 16.1683 5.80539C16.1683 5.64555 16.1683 5.48643 16.1575 5.32803C16.8803 4.80525 17.5042 4.15794 18 3.41643C17.326 3.71523 16.611 3.9111 15.8789 3.99747C16.6499 3.53599 17.2269 2.81006 17.5025 1.95483C16.7776 2.38504 15.9845 2.6882 15.1574 2.85123C14.6006 2.25916 13.8642 1.86711 13.0621 1.73574C12.2601 1.60438 11.4371 1.74102 10.7205 2.12452C10.0039 2.50802 9.43367 3.11701 9.09806 3.85724C8.76245 4.59747 8.68016 5.42768 8.86392 6.21939C7.39567 6.14574 5.95932 5.76416 4.64809 5.09943C3.33686 4.4347 2.18007 3.50168 1.2528 2.36091C0.780546 3.17391 0.635904 4.13633 0.848325 5.05223C1.06075 5.96812 1.61426 6.76863 2.39616 7.29075C1.80842 7.27353 1.23349 7.11498 0.72 6.82851V6.87531C0.720233 7.72795 1.01539 8.55426 1.5554 9.21409C2.09542 9.87391 2.84705 10.3266 3.6828 10.4955C3.13911 10.6438 2.56866 10.6654 2.01528 10.5588C2.25136 11.2926 2.71082 11.9342 3.32943 12.394C3.94804 12.8539 4.69487 13.1089 5.46552 13.1235C4.69983 13.7253 3.82299 14.1703 2.88516 14.433C1.94733 14.6956 0.966911 14.7708 0 14.6542C1.68887 15.738 3.65394 16.3128 5.66064 16.3102"
                      fill={colorMode === 'light' ? 'black' : 'white'}
                    />
                  </svg>
                </Button>
                <Button
                  className={`${getBorderStyle(activeButton, 'button')} flex-1`}
                  variant="outline"
                  action="secondary"
                  aria-label="Github"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_848_3858)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.66686 0.375C7.53028 0.376109 5.46375 1.13284 3.83681 2.50989C2.20986 3.88694 1.12858 5.79451 0.786315 7.8915C0.444046 9.98849 0.863102 12.1382 1.96856 13.9561C3.07402 15.7741 4.79379 17.1418 6.82035 17.8147C7.26745 17.8977 7.43585 17.6206 7.43585 17.385C7.43585 17.1494 7.42691 16.4663 7.42393 15.7194C4.9202 16.2603 4.39115 14.6629 4.39115 14.6629C3.9828 13.6256 3.39263 13.3529 3.39263 13.3529C2.57594 12.7987 3.45374 12.8091 3.45374 12.8091C4.35836 12.8728 4.83377 13.7323 4.83377 13.7323C5.63556 15.1 6.93958 14.7044 7.45224 14.4732C7.53272 13.8938 7.7667 13.4996 8.02453 13.2759C6.02453 13.0506 3.92319 12.283 3.92319 8.85407C3.91079 7.96478 4.24267 7.10479 4.85016 6.45201C4.75776 6.22677 4.44927 5.31692 4.93809 4.08107C4.93809 4.08107 5.69368 3.84102 7.4135 4.99833C8.88866 4.59722 10.4451 4.59722 11.9202 4.99833C13.6385 3.84102 14.3926 4.08107 14.3926 4.08107C14.8829 5.31396 14.5745 6.22381 14.4821 6.45201C15.0915 7.10489 15.424 7.96639 15.4105 8.85703C15.4105 12.2934 13.3047 13.0506 11.3017 13.2714C11.6236 13.55 11.9113 14.0938 11.9113 14.9296C11.9113 16.1269 11.9008 17.0901 11.9008 17.385C11.9008 17.6236 12.0633 17.9022 12.5193 17.8147C14.5461 17.1417 16.2661 15.7738 17.3715 13.9555C18.4769 12.1372 18.8958 9.98722 18.5531 7.89004C18.2105 5.79285 17.1286 3.88527 15.5012 2.50845C13.8737 1.13164 11.8067 0.375406 9.66983 0.375H9.66686Z"
                        fill={colorMode === 'light' ? 'black' : 'white'}
                      />
                      <path
                        d="M4.07504 13.224C4.05567 13.2684 3.98414 13.2818 3.92601 13.2506C3.86789 13.2195 3.82468 13.1617 3.84554 13.1158C3.8664 13.0699 3.93645 13.058 3.99457 13.0891C4.05269 13.1202 4.0974 13.1795 4.07504 13.224Z"
                        fill={colorMode === 'light' ? 'black' : 'white'}
                      />
                      <path
                        d="M4.44017 13.6286C4.40931 13.6441 4.374 13.6484 4.34028 13.6408C4.30657 13.6332 4.27656 13.6143 4.25537 13.5871C4.19725 13.5249 4.18532 13.4389 4.23003 13.4004C4.27474 13.3619 4.35522 13.3797 4.41335 13.4419C4.47147 13.5041 4.48488 13.5901 4.44017 13.6286Z"
                        fill={colorMode === 'light' ? 'black' : 'white'}
                      />
                      <path
                        d="M4.7949 14.1427C4.73976 14.1812 4.64586 14.1427 4.5937 14.0657C4.57928 14.0518 4.56781 14.0353 4.55998 14.0169C4.55214 13.9986 4.5481 13.9789 4.5481 13.959C4.5481 13.939 4.55214 13.9193 4.55998 13.901C4.56781 13.8827 4.57928 13.8661 4.5937 13.8523C4.64885 13.8152 4.74274 13.8523 4.7949 13.9278C4.84706 14.0034 4.84855 14.1042 4.7949 14.1427Z"
                        fill={colorMode === 'light' ? 'black' : 'white'}
                      />
                      <path
                        d="M5.27621 14.6407C5.22703 14.6955 5.12718 14.6807 5.04522 14.6066C4.96325 14.5325 4.94387 14.4317 4.99305 14.3784C5.04223 14.3251 5.14208 14.3399 5.22703 14.4125C5.31198 14.4851 5.32837 14.5873 5.27621 14.6407Z"
                        fill={colorMode === 'light' ? 'black' : 'white'}
                      />
                      <path
                        d="M5.95132 14.931C5.92896 15.0007 5.82762 15.0318 5.72628 15.0022C5.62494 14.9725 5.55787 14.8896 5.57725 14.8184C5.59662 14.7473 5.69945 14.7147 5.80229 14.7473C5.90512 14.7799 5.97069 14.8584 5.95132 14.931Z"
                        fill={colorMode === 'light' ? 'black' : 'white'}
                      />
                      <path
                        d="M6.68756 14.9815C6.68756 15.0541 6.60411 15.1164 6.49681 15.1178C6.3895 15.1193 6.30157 15.06 6.30157 14.9874C6.30157 14.9148 6.38503 14.8526 6.49233 14.8511C6.59963 14.8496 6.68756 14.9074 6.68756 14.9815Z"
                        fill={colorMode === 'light' ? 'black' : 'white'}
                      />
                      <path
                        d="M7.37311 14.8673C7.38652 14.9399 7.31201 15.0155 7.2047 15.0333C7.0974 15.0511 7.00351 15.0081 6.9901 14.937C6.97668 14.8658 7.05418 14.7888 7.1585 14.7695C7.26283 14.7503 7.3597 14.7947 7.37311 14.8673Z"
                        fill={colorMode === 'light' ? 'black' : 'white'}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_848_3858">
                        <rect
                          width="18"
                          height="18"
                          fill="white"
                          transform="translate(0.666687)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </HStack>
            </VStack>

            <VStack
              className={`border flex-1 justify-center ${getBorderStyle(
                activeButton,
                ''
              )} p-4 sm:p-6 border-outline-100 w-full`}
            >
              <VStack space="md">
                <Avatar className="w-[74px] h-[74px] self-center">
                  <AvatarFallbackText>SS</AvatarFallbackText>
                  <AvatarImage
                    source={{
                      uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
                    }}
                  />
                </Avatar>
                <VStack className="gap-0.5">
                  <Heading className="text-typography-900 text-lg font-bold leading-normal self-center text-center">
                    John Smith
                  </Heading>
                  <Text className="text-primary-700 text-sm font-normal leading-[21px] self-center text-center">
                    john@example.com
                  </Text>
                </VStack>
              </VStack>
              <Text className="text-typography-700 text-center self-center text-sm font-normal leading-5 mt-4">
                Pushing the boundaries of reality with XR design wizardry ✨🚀
                #XRDesigner
              </Text>
              <HStack className="justify-center mt-7">
                <VStack className="items-center flex-1 gap-1">
                  <Text className="text-sm font-bold leading-[18px] text-typography-900">
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
                  <Text className="text-sm font-bold leading-[18px] text-typography-900">
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
                  <Text className="text-sm font-bold leading-[18px] text-typography-900">
                    720
                  </Text>
                  <Text className="text-xs text-typography-900 font-normal leading-[18px]">
                    follwing
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </VStack>
    </VStack>
  );
};

const Fold3 = () => {
  return (
    <LocalThemeProvider>
      <Fold3Content />
    </LocalThemeProvider>
  );
};

export default Fold3;
