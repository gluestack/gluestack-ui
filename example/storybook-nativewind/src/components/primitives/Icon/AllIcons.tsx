import React from 'react';

import {
  AddIcon,
  CheckIcon,
  CloseIcon,
  InfoIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  AtSignIcon,
  Icon,
  VStack,
  HStack,
  CheckCircleIcon,
  AlertCircleIcon,
  ChevronsUpDownIcon,
  PaperclipIcon,
  BellIcon,
  MenuIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowDownIcon,
  CalendarDaysIcon,
  MessageCircleIcon,
  CopyIcon,
  TrashIcon,
  DownloadIcon,
  GripVerticalIcon,
  EditIcon,
  MailIcon,
  LinkIcon,
  ExternalLinkIcon,
  LockIcon,
  RemoveIcon,
  MoonIcon,
  SlashIcon,
  PhoneIcon,
  HelpCircleIcon,
  RepeatIcon,
  Repeat1Icon,
  SearchIcon,
  SettingsIcon,
  LoaderIcon,
  StarIcon,
  SunIcon,
  ClockIcon,
  UnlockIcon,
  EyeIcon,
  EyeOffIcon,
  CloseCircleIcon,
  ShareIcon,
  CircleIcon,
  FavouriteIcon,
  GlobeIcon,
  ThreeDotsIcon,
  PlayIcon,
  createIcon,
} from '@custom-ui/themed';

import { Path, Rect, Defs, Stop, LinearGradient } from 'react-native-svg';

const AdIcon = createIcon({
  viewBox: '0 0 32 32',
  path: (
    <>
      <Rect
        width="32"
        height="32"
        rx="2"
        fill="url(#paint0_linear_7965_77032)"
      />
      <Rect
        width="32"
        height="32"
        rx="2"
        fill="url(#paint1_linear_7965_77032)"
      />
      <Path
        d="M8 14.3559L15.9998 8.46325V11.2441L8 17.1368V14.3559Z"
        fill="currentColor"
      />
      <Path
        d="M23.9995 14.356L15.9998 8.46332V11.2442L23.9995 17.1368V14.356Z"
        fill="currentColor"
      />
      <Path
        d="M8 20.7558L15.9998 14.8632V17.6441L8 23.5367V20.7558Z"
        fill="currentColor"
      />
      <Path
        d="M23.9995 20.7559L15.9998 14.8632V17.6441L23.9995 23.5367V20.7559Z"
        fill="currentColor"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_7965_77032"
          x1="16"
          y1="0"
          x2="36.4235"
          y2="33.8824"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#4AA9FF" />
          <Stop offset="1" stop-color="#004282" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_7965_77032"
          x1="16"
          y1="0"
          x2="36.4235"
          y2="33.8824"
          gradientUnits="userSpaceOnUse"
        >
          <Stop stop-color="#4AA9FF" />
          <Stop offset="1" stop-color="#004282" />
        </LinearGradient>
      </Defs>
    </>
  ),
});

const AllIcons = ({
  size,
  // @ts-ignore
  ..._props
}: any) => {
  return (
    <HStack flexWrap="wrap">
      <Icon as={AdIcon} m="$2" size={size} color="pink" />
      <Icon as={AddIcon} m="$2" size={size} />
      <Icon as={ArrowLeftIcon} m="$2" size={size} />
      <Icon as={ArrowRightIcon} m="$2" size={size} />
      <Icon as={ArrowUpIcon} m="$2" size={size} />
      <Icon as={ArrowDownIcon} m="$2" size={size} />
      <Icon as={ChevronsLeftIcon} m="$2" size={size} />
      <Icon as={ChevronsRightIcon} m="$2" size={size} />
      <Icon as={ChevronsUpDownIcon} m="$2" size={size} />
      <Icon as={AtSignIcon} m="$2" size={size} />
      <Icon as={PaperclipIcon} m="$2" size={size} />
      <Icon as={BellIcon} m="$2" size={size} />
      <Icon as={CalendarDaysIcon} m="$2" size={size} />
      <Icon as={MessageCircleIcon} m="$2" size={size} />
      <Icon as={CheckIcon} m="$2" size={size} />
      <Icon as={ChevronDownIcon} m="$2" size={size} />
      <Icon as={ChevronUpIcon} m="$2" size={size} />
      <Icon as={ChevronLeftIcon} m="$2" size={size} />
      <Icon as={ChevronRightIcon} m="$2" size={size} />
      <Icon as={CloseIcon} m="$2" size={size} />
      <Icon as={CopyIcon} m="$2" size={size} />
      <Icon as={TrashIcon} m="$2" size={size} />
      <Icon as={DownloadIcon} m="$2" size={size} />
      <Icon as={GripVerticalIcon} m="$2" size={size} />
      <Icon as={EditIcon} m="$2" size={size} />
      <Icon as={MailIcon} m="$2" size={size} />
      <Icon as={ExternalLinkIcon} m="$2" size={size} />
      <Icon as={MenuIcon} m="$2" size={size} />
      <Icon as={InfoIcon} m="$2" size={size} />
      <Icon as={LinkIcon} m="$2" size={size} />
      <Icon as={LockIcon} m="$2" size={size} />
      <Icon as={RemoveIcon} m="$2" size={size} />
      <Icon as={MoonIcon} m="$2" size={size} />
      <Icon as={SlashIcon} m="$2" size={size} />
      <Icon as={CheckCircleIcon} m="$2" size={size} />
      <Icon as={PhoneIcon} m="$2" size={size} />
      <Icon as={HelpCircleIcon} m="$2" size={size} />
      <Icon as={RepeatIcon} m="$2" size={size} />
      <Icon as={Repeat1Icon} m="$2" size={size} />
      <Icon as={SearchIcon} m="$2" size={size} />
      <Icon as={SettingsIcon} m="$2" size={size} />
      <Icon as={LoaderIcon} m="$2" size={size} />
      <Icon as={StarIcon} m="$2" size={size} />
      <Icon as={SunIcon} m="$2" size={size} />
      <Icon as={ClockIcon} m="$2" size={size} />
      <Icon as={UnlockIcon} m="$2" size={size} />
      <Icon as={EyeIcon} m="$2" size={size} />
      <Icon as={EyeOffIcon} m="$2" size={size} />
      <Icon as={AlertCircleIcon} m="$2" size={size} />
      <Icon as={CloseCircleIcon} m="$2" size={size} />
      <Icon as={ShareIcon} m="$2" size={size} />
      <Icon as={CircleIcon} m="$2" size={size} />
      <Icon as={FavouriteIcon} m="$2" size={size} />
      <Icon as={GlobeIcon} m="$2" size={size} />
      <Icon as={ThreeDotsIcon} m="$2" size={size} />
    </HStack>
  );
};

export default AllIcons;

export {
  AddIcon,
  CheckIcon,
  CloseIcon,
  InfoIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  AtSignIcon,
  CheckCircleIcon,
  AlertCircleIcon,
  ChevronsUpDownIcon,
  PaperclipIcon,
  BellIcon,
  MenuIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowDownIcon,
  CalendarDaysIcon,
  MessageCircleIcon,
  CopyIcon,
  TrashIcon,
  DownloadIcon,
  GripVerticalIcon,
  EditIcon,
  MailIcon,
  LinkIcon,
  ExternalLinkIcon,
  LockIcon,
  RemoveIcon,
  MoonIcon,
  SlashIcon,
  PhoneIcon,
  HelpCircleIcon,
  RepeatIcon,
  Repeat1Icon,
  SearchIcon,
  SettingsIcon,
  LoaderIcon,
  StarIcon,
  SunIcon,
  ClockIcon,
  UnlockIcon,
  EyeIcon,
  EyeOffIcon,
  CloseCircleIcon,
  ShareIcon,
  CircleIcon,
  FavouriteIcon,
  GlobeIcon,
  ThreeDotsIcon,
  VStack,
  HStack,
  Icon,
  PlayIcon,
};
