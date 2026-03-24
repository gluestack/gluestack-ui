'use client';
import {
  Button,
  ButtonIcon,
  ButtonText,
  ButtonGroup,
} from '@/components/ui/button';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';
import { Divider } from '@/components/ui/divider';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control';
import {
  Checkbox,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxIcon,
} from '@/components/ui/checkbox';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import {
  Icon,
  CheckIcon,
  CloseIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@/components/ui/icon';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { Link, LinkText } from '@/components/ui/link';
import { VStack } from '@/components/ui/vstack';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  Table,
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  LocalThemeProvider,
  useLocalTheme,
} from '@/utils/context/local-theme-context';
import {
  UsersIcon,
  EyeIcon,
  MenuIcon,
  EyeOffIcon,
  DownloadCloudIcon,
  EllipsisIcon,
} from 'lucide-react-native';
import NextImage from 'next/image';
import React, { useContext, useState } from 'react';
// import { ThemeProvider } from "@/utils/context/theme-context/theme-provider";

const Fold1Content = () => {
  const ButtonMap = [
    { mode: 'default', bg: 'bg-typography-950' },
    { mode: 'orange', bg: 'bg-[#F97316]' },
    { mode: 'blue', bg: 'bg-[#0EA5E9]' },
    { mode: 'green', bg: 'bg-[#10B981]' },
    { mode: 'violet', bg: 'bg-[#8B5CF6]' },
  ];

  const { themeMode, setThemeMode } = useLocalTheme();
  type CheckboxKey = 'checkbox1' | 'checkbox2' | 'checkbox3';

  const [checkboxes, setCheckboxes] = useState<Record<CheckboxKey, boolean>>({
    checkbox1: true,
    checkbox2: false,
    checkbox3: false,
  });

  const [allChecked, setAllChecked] = useState(false);

  const handleAllCheckboxChange = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setCheckboxes({
      checkbox1: newCheckedState,
      checkbox2: newCheckedState,
      checkbox3: newCheckedState,
    });
  };

  const handleCheckboxChange = (checkbox: CheckboxKey) => {
    const newCheckboxes = {
      ...checkboxes,
      [checkbox]: !checkboxes[checkbox],
    };

    setCheckboxes(newCheckboxes);

    // Update the "Select All" checkbox state
    const allAreChecked = Object.values(newCheckboxes).every(Boolean);
    setAllChecked(allAreChecked);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleState = () => {
    setShowPassword((showState) => !showState);
  };

  return (
    <>
      <HStack className="gap-1 md:justify-center px-2.5 mt-12">
        {ButtonMap.map(({ mode, bg }, index) => {
          return (
            <Button
              key={mode + index}
              isHovered={mode === themeMode}
              onPress={() => {
                setThemeMode(mode as any);
              }}
              variant="outline"
              className="rounded-lg p-0 h-auto py-[9px] px-[10px] border-0"
              aria-label="Change theme"
            >
              <Box className={`p-2.5 ${bg} rounded-full`} />
            </Button>
          );
        })}
      </HStack>
      {/* <ThemeProvider mode={themeMode}> */}
      <HStack className="gap-6 mt-12 md:flex-row flex-col w-full">
        <VStack className="gap-6 lg:w-2/3">
          <HStack className="gap-6 md:flex-row flex-col w-full">
            {/* 1st */}
            <Box className="gap-6 w-full xl:flex hidden xl:w-[45%]">
              <VStack className="rounded-lg border-outline-100 border p-5 gap-6 h-full justify-between">
                <Box className="w-full h-[230px]">
                  <NextImage
                    alt="PositiveThinking image"
                    layout="fill"
                    objectFit="cover"
                    src="/images/PositiveThinking.jpg"
                    sizes="100vw"
                  />
                </Box>
                <VStack className="">
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

                <HStack className="" space="md">
                  <Avatar className="h-12 w-12">
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

              <HStack className="gap-4 rounded-lg border-outline-100 px-5 py-6 border h-[230px]">
                <Box className="p-2 h-8 border rounded-lg border-outline-100">
                  <Icon
                    as={DownloadCloudIcon}
                    className="w-4 h-4 text-typography-500"
                  />
                </Box>
                <VStack>
                  <Heading className="text-base font-semibold text-typography-900 leading-6 tracking-[0.2px]">
                    System Error
                  </Heading>
                  <Text className="mt-0.5 mb-4 text-sm font-normal leading-[20px] text-typography-700">
                    Apologies for the inconvenience. Our team is actively
                    working on fixing it.
                  </Text>
                  <ButtonGroup className="flex-row">
                    <Button
                      variant="outline"
                      action="secondary"
                      size="sm"
                      aria-label="Retry"
                    >
                      <ButtonText>Retry</ButtonText>
                    </Button>
                    <Button aria-label="Report" size="sm">
                      <ButtonText>Report issues</ButtonText>
                    </Button>
                  </ButtonGroup>
                </VStack>
                <Box className="p-2 absolute right-2 top-2 cursor-pointer">
                  <Icon
                    as={CloseIcon}
                    className="w-4 h-4 text-typography-500"
                  />
                </Box>
              </HStack>
            </Box>

            {/* 2 */}
            <Box className="gap-6 xl:gap-0 xl:justify-between xl:w-[55%] md:w-auto">
              <Box className="border border-outline-100 sm:flex hidden rounded-lg overflow-hidden">
                {/* @ts-ignore */}
                <Table className="w-full">
                  <TableHeader>
                    {/* @ts-ignore */}
                    <TableRow className="h-[70px] border-outline-100">
                      {/* @ts-ignore */}
                      <TableHead className="h-[70px]">
                        <Checkbox
                          size="sm"
                          isInvalid={false}
                          isDisabled={false}
                          isChecked={allChecked}
                          onChange={handleAllCheckboxChange}
                          value={''}
                          aria-label="Select all"
                        >
                          <CheckboxIndicator>
                            <CheckboxIcon as={CheckIcon} />
                          </CheckboxIndicator>
                        </Checkbox>
                      </TableHead>
                      {/* @ts-ignore */}
                      <TableHead className="px-6 py-5 text-sm font-bold leading-normal my-5 mx-6">
                        Name
                      </TableHead>
                      {/* @ts-ignore */}
                      <TableHead className="px-6 py-5 text-sm font-bold leading-normal text-start">
                        Phone Number
                      </TableHead>
                      <TableHead>
                        <Icon className="w-4 h-4" as={MenuIcon} />
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: 'checkbox1' as CheckboxKey,
                        name: 'John Doe',
                        phone: '+01 1234567890',
                      },
                      {
                        id: 'checkbox2' as CheckboxKey,
                        name: 'Michael K',
                        phone: '+01 1234567890',
                      },
                      {
                        id: 'checkbox3' as CheckboxKey,
                        name: 'Martine D.',
                        phone: '+01 1234567890',
                      },
                    ].map((row) => (
                      <TableRow
                        key={row.id}
                        //@ts-ignore
                        className={`border-b-0 h-[60px] ${
                          checkboxes[row.id] ? 'bg-background-50' : ''
                        }`}
                      >
                        <TableData>
                          <Checkbox
                            size="sm"
                            isChecked={checkboxes[row.id]}
                            isInvalid={false}
                            isDisabled={false}
                            onChange={() => handleCheckboxChange(row.id)}
                            value={''}
                            aria-label="table datas"
                          >
                            <CheckboxIndicator>
                              <CheckboxIcon as={CheckIcon} />
                            </CheckboxIndicator>
                          </Checkbox>
                        </TableData>
                        {/* @ts-ignore */}
                        <TableData className="px-6 py-5 text-sm leading-4 font-normal text-typography-900">
                          {row.name}
                        </TableData>
                        {/* @ts-ignore */}
                        <TableData className="px-6 py-5 text-sm leading-4 font-normal text-typography-900">
                          {row.phone}
                        </TableData>
                        {/* @ts-ignore */}
                        <TableData className="px-6 py-5 shrink-0">
                          {/* <Icon className="w-4 h-4" as={EllipsisIcon} /> */}
                        </TableData>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
              <Box className="relative w-full h-auto aspect-[468/255] rounded-xl overflow-hidden">
                <NextImage
                  alt="Nature image"
                  className="w-full h-auto"
                  src="/images/click.jpeg"
                  sizes="100vw"
                  fill
                />
                <Box className="absolute bg-primary-900 h-[88.6%] w-[48.765%] rounded-full justify-center items-center bottom-[22.5%] left-[62.4%]">
                  <Box className="absolute h-0 py-[93.07%] w-[186.138%] rounded-full bg-primary-900 opacity-50" />
                  <Box className="absolute h-[144.58%] w-[144.58%] rounded-full border-[5.7348vw] md:border-[24.4px] lg:border-[3.5vw] xl:border-[27px] border-primary-900 opacity-70" />
                  <Box className="absolute sm:w-[120px] md:w-auto mr-6">
                    <Text className="lg:text-2xl md:text-2xl sm:text-2xl min-[320px]:text-lg max-[639px]:text-lg text-base text-typography-gray text-right">
                      Customise
                    </Text>
                    <Text className="lg:text-2xl sm:text-2xl min-[400px]:text-lg max-[639px]:text-lg text-base md:text-xl text-typography-gray text-right">
                      with few
                    </Text>
                    <Text className="lg:text-3xl sm:text-3xl min-[400px]:text-xl max-[640px]:text-xl text-lg md:text-2xl font-bold text-typography-white text-right">
                      clicks!
                    </Text>
                  </Box>
                </Box>
              </Box>

              <Box className="gap-4 sm:flex-row flex-col">
                <HStack className="bg-primary-900 p-5 rounded-lg flex-1 justify-between">
                  <VStack>
                    <Text className="text-sm font-medium leading-normal text-typography-white">
                      Weekly Views
                    </Text>
                    <Text className="text-typography-white text-2xl font-bold leading-normal">
                      10,0000
                    </Text>
                    <Text className="text-typography-gray">
                      +1.5% from last week
                    </Text>
                  </VStack>
                  <Box className="p-2 h-8 rounded-lg bg-white/20">
                    <Icon
                      as={EyeIcon}
                      className="w-4 h-4 text-typography-gray"
                    />
                  </Box>
                </HStack>
                <HStack className="bg-background-50 p-5 flex-1 rounded-lg border border-outline-100 justify-between">
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
                  <Box className="p-2 h-8">
                    <Icon
                      as={UsersIcon}
                      className="w-4 h-4 text-background-800"
                    />
                  </Box>
                </HStack>
              </Box>
              <Box className="justify-between md:flex flex-row hidden items-center">
                <Button
                  aria-label="Prev"
                  variant="outline"
                  className="px-3 gap-1 h-8 border-0"
                >
                  <ButtonIcon className="h-4 w-4" as={ChevronLeftIcon} />
                  <ButtonText className="text-xs font-bold text-typography-900">
                    Prev
                  </ButtonText>
                </Button>
                <HStack className="gap-4">
                  <Button aria-label="01" size="xs" className="px-0 w-8">
                    <ButtonText className="text-typography-100">01</ButtonText>
                  </Button>
                  <Button
                    size="xs"
                    className="px-0 w-8 border-0"
                    variant="outline"
                    aria-label="02"
                  >
                    <ButtonText className="text-typography-900">02</ButtonText>
                  </Button>
                  <Button
                    size="xs"
                    className="px-0 w-8 border-0"
                    variant="outline"
                    aria-label="03"
                  >
                    <ButtonText className="text-typography-900">03</ButtonText>
                  </Button>
                  <Button
                    size="xs"
                    className="px-0 w-8 border-0"
                    variant="outline"
                    aria-label="04"
                  >
                    <ButtonText className="text-typography-900">04</ButtonText>
                  </Button>
                  <Button
                    aria-label="EllipsisIcon"
                    className="w-9 h-8 border-0 p-0"
                    variant="outline"
                  >
                    <ButtonIcon
                      className="h-4 w-4 fill-typography-900"
                      as={EllipsisIcon}
                    />
                  </Button>
                </HStack>
                <Button
                  aria-label="Next"
                  variant="outline"
                  className="px-3 gap-1 h-8 border-0"
                >
                  <ButtonText className="text-xs font-bold text-typography-900">
                    Next
                  </ButtonText>
                  <ButtonIcon className="h-4 w-4" as={ChevronRightIcon} />
                </Button>
              </Box>
            </Box>
          </HStack>
          {/* 3 */}
          <Box className="md:items-center xl:flex hidden w-full items-start md:flex-row flex-col justify-between p-5 border border-outline-100 rounded-lg">
            <VStack className="gap-1.5">
              <Text className="text-typography-900 text-base font-bold leading-normal">
                Updates Available
              </Text>
              <Text className="text-sm font-normal leading-[21px] text-typography-700">
                A new version is available. Please upgrade for the best
                experience.
              </Text>
            </VStack>
            <HStack className="gap-3 md:pt-0 pt-2">
              <Button
                aria-label="Skip"
                size="sm"
                action="secondary"
                variant="outline"
              >
                <ButtonText>Skip</ButtonText>
              </Button>
              <Button
                aria-label="Download"
                size="sm"
                className="bg-primary-500"
              >
                <ButtonText>Download</ButtonText>
              </Button>
            </HStack>
          </Box>
        </VStack>
        {/* 4 */}
        <Box className="gap-6 w-full xl:w-1/3 md:w-[75%]">
          <VStack className="rounded-lg border-outline-100 border p-5 gap-5">
            <VStack className="gap-1">
              <Text className="text-typography-900 text-2xl font-bold leading-normal">
                Login to your account
              </Text>
              <HStack className="gap-1.5">
                <Text className="font-normal text-sm text-typography-700">
                  Don&apos;t have an account?
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
                <Input>
                  <InputField
                    aria-labelledby="Email"
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
                <Input>
                  <InputField
                    aria-label="Password"
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
              <HStack className=" items-center">
                <Checkbox
                  size="sm"
                  value="Remember me"
                  aria-label="Remember me"
                >
                  <CheckboxIndicator>
                    <CheckboxIcon as={CheckIcon} />
                  </CheckboxIndicator>
                  <CheckboxLabel className="sm:text-sm text-xs font-normal leading-[21px] text-typography-900">
                    Remember me
                  </CheckboxLabel>
                </Checkbox>
                <Box className="w-full">
                  <Link>
                    <LinkText className="self-end text-xs font-normal leading-[21px] text-typography-700 no-underline">
                      Forgot Password?
                    </LinkText>
                  </Link>
                </Box>
              </HStack>
            </VStack>
            <Button aria-label="Login" size="sm" className="w-full">
              <ButtonText className="text-sm font-semibold leading-normal text-typography-0">
                Login
              </ButtonText>
            </Button>
            <HStack className="justify-center items-center">
              <Divider className="h-0 flex-1 border-outline-100 border" />
              <Text className="text-typography-600 text-center text-xs font-normal leading-normal px-2">
                OR CONTINUE WITH
              </Text>
              <Divider className="h-0 flex-1  border-outline-100 border" />
            </HStack>
            <HStack className="gap-3 items-start self-stretch">
              <Button
                aria-label="Google"
                variant="outline"
                action="secondary"
                className="flex-1"
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
                    fill="currentColor"
                  />
                  <path
                    d="M1.69809 4.50912L4.16221 6.31625C4.82896 4.6655 6.44372 3.5 8.33334 3.5C9.48047 3.5 10.5241 3.93275 11.3187 4.63962L13.4401 2.51825C12.1006 1.26987 10.3088 0.5 8.33334 0.5C5.45259 0.5 2.95434 2.12637 1.69809 4.50912Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8.33346 15.4993C10.2707 15.4993 12.031 14.7579 13.3618 13.5523L11.0406 11.588C10.2876 12.1584 9.35159 12.4993 8.33346 12.4993C6.38271 12.4993 4.72634 11.2554 4.10234 9.51953L1.65659 11.4039C2.89784 13.8328 5.41859 15.4993 8.33346 15.4993Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.6875 6.53113H15.0833V6.5H8.33334V9.5H12.572C12.275 10.3389 11.7353 11.0622 11.0393 11.5891L11.0405 11.5884L13.3617 13.5526C13.1975 13.7019 15.8333 11.75 15.8333 8C15.8333 7.49713 15.7816 7.00625 15.6875 6.53113Z"
                    fill="currentColor"
                  />
                </svg>
              </Button>
              <Button
                aria-label="Twitter"
                variant="outline"
                action="secondary"
                className="flex-1"
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
                    fill="currentColor"
                  />
                </svg>
              </Button>
              <Button
                aria-label="Github"
                variant="outline"
                action="secondary"
                className="flex-1"
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
                      fill="currentColor"
                    />
                    <path
                      d="M4.07504 13.224C4.05567 13.2684 3.98414 13.2818 3.92601 13.2506C3.86789 13.2195 3.82468 13.1617 3.84554 13.1158C3.8664 13.0699 3.93645 13.058 3.99457 13.0891C4.05269 13.1202 4.0974 13.1795 4.07504 13.224Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4.44017 13.6286C4.40931 13.6441 4.374 13.6484 4.34028 13.6408C4.30657 13.6332 4.27656 13.6143 4.25537 13.5871C4.19725 13.5249 4.18532 13.4389 4.23003 13.4004C4.27474 13.3619 4.35522 13.3797 4.41335 13.4419C4.47147 13.5041 4.48488 13.5901 4.44017 13.6286Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4.7949 14.1427C4.73976 14.1812 4.64586 14.1427 4.5937 14.0657C4.57928 14.0518 4.56781 14.0353 4.55998 14.0169C4.55214 13.9986 4.5481 13.9789 4.5481 13.959C4.5481 13.939 4.55214 13.9193 4.55998 13.901C4.56781 13.8827 4.57928 13.8661 4.5937 13.8523C4.64885 13.8152 4.74274 13.8523 4.7949 13.9278C4.84706 14.0034 4.84855 14.1042 4.7949 14.1427Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.27621 14.6407C5.22703 14.6955 5.12718 14.6807 5.04522 14.6066C4.96325 14.5325 4.94387 14.4317 4.99305 14.3784C5.04223 14.3251 5.14208 14.3399 5.22703 14.4125C5.31198 14.4851 5.32837 14.5873 5.27621 14.6407Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.95132 14.931C5.92896 15.0007 5.82762 15.0318 5.72628 15.0022C5.62494 14.9725 5.55787 14.8896 5.57725 14.8184C5.59662 14.7473 5.69945 14.7147 5.80229 14.7473C5.90512 14.7799 5.97069 14.8584 5.95132 14.931Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6.68756 14.9815C6.68756 15.0541 6.60411 15.1164 6.49681 15.1178C6.3895 15.1193 6.30157 15.06 6.30157 14.9874C6.30157 14.9148 6.38503 14.8526 6.49233 14.8511C6.59963 14.8496 6.68756 14.9074 6.68756 14.9815Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.37311 14.8673C7.38652 14.9399 7.31201 15.0155 7.2047 15.0333C7.0974 15.0511 7.00351 15.0081 6.9901 14.937C6.97668 14.8658 7.05418 14.7888 7.1585 14.7695C7.26283 14.7503 7.3597 14.7947 7.37311 14.8673Z"
                      fill="currentColor"
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

          <Box className="border rounded-lg lg:flex border-outline-100 bg-background-0 justify-center p-5">
            <Text className="text-typography-900 text-2xl font-bold leading-7 mb-[30px]">
              Buttons
            </Text>
            <HStack className="w-full mb-6">
              <VStack className="flex-1 items-center">
                <Text className="text-sm font-medium leading-4 text-center mb-3">
                  Solid
                </Text>
                <VStack className="gap-3">
                  <Button aria-label="Default" action="primary" size="sm">
                    <ButtonText>Default</ButtonText>
                  </Button>
                  <Button aria-label="Hover" isHovered size="sm">
                    <ButtonText>Hover</ButtonText>
                  </Button>
                  <Button aria-label="Active" isPressed size="sm">
                    <ButtonText>Active</ButtonText>
                  </Button>
                  <Button aria-label="Disabled" size="sm" isDisabled>
                    <ButtonText>Disabled</ButtonText>
                  </Button>
                </VStack>
              </VStack>
              <Divider
                orientation="vertical"
                className="h-auto mt-7 w-[1px] bg-outline-50"
              />
              <VStack className="flex-1 items-center">
                <Text className="text-sm font-medium leading-4 text-center mb-3">
                  Outline
                </Text>
                <VStack className="gap-3">
                  <Button
                    aria-label="Default"
                    action="secondary"
                    size="sm"
                    variant="outline"
                  >
                    <ButtonText>Default</ButtonText>
                  </Button>
                  <Button
                    aria-label="Hover"
                    isHovered
                    size="sm"
                    variant="outline"
                  >
                    <ButtonText>Hover</ButtonText>
                  </Button>
                  <Button
                    aria-label="Active"
                    isPressed
                    size="sm"
                    variant="outline"
                  >
                    <ButtonText>Active</ButtonText>
                  </Button>
                  <Button
                    aria-label="Disabled"
                    isDisabled
                    size="sm"
                    disabled
                    variant="outline"
                  >
                    <ButtonText>Disabled</ButtonText>
                  </Button>
                </VStack>
              </VStack>
              <Divider
                orientation="vertical"
                className="h-auto mt-7 w-[1px] bg-outline-50 sm:flex hidden"
              />
              <Box className="flex-1 items-center sm:flex hidden flex-col">
                <Text className="text-sm font-medium leading-4 text-center mb-3">
                  Link
                </Text>
                <VStack className="gap-3">
                  <Button
                    aria-label="Default"
                    action="primary"
                    size="sm"
                    variant="link"
                  >
                    <ButtonText>Default</ButtonText>
                  </Button>
                  <Button aria-label="Hover" isHovered size="sm" variant="link">
                    <ButtonText>Hover</ButtonText>
                  </Button>
                  <Button
                    aria-label="Active"
                    isFocusVisible
                    size="sm"
                    variant="link"
                  >
                    <ButtonText>Active</ButtonText>
                  </Button>
                  <Button
                    aria-label="Disabled"
                    size="sm"
                    isDisabled
                    variant="link"
                  >
                    <ButtonText>Disabled</ButtonText>
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Box>
        </Box>
      </HStack>
      {/* </ThemeProvider> */}
    </>
  );
};

const Fold1 = () => {
  return (
    <LocalThemeProvider>
      <Fold1Content />
    </LocalThemeProvider>
  );
};

export default Fold1;
