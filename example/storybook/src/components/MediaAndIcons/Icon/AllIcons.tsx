import React from 'react';
import Wrapper from '../../Wrapper';

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
} from '../../../ui-components';
import {
  Cake,
  ChromeIcon,
  InstagramIcon,
  FacebookIcon,
} from 'lucide-react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { Text, View } from 'react-native';

export const AllIcons = ({ ...props }: any) => {
  return (
    <Wrapper>
      <VStack space="lg">
        {/* Default props from styled */}
        <HStack space="md">
          <Icon as={Cake} {...props} />
          <Icon as={MenuIcon} />
          {/* TODO: Fix get size directly from styled */}
          {/* <Icon as={Ionicons} name="add" type="font" size={18} /> */}
        </HStack>

        {/* sx props support */}
        <HStack space="md">
          <Icon as={Cake} sx={{ h: 40, w: 40, color: 'red' }} />
          <Icon as={MenuIcon} sx={{ h: 40, w: 40, color: 'red' }} />
          {/* <Icon
            as={Ionicons}
            name="add"
            sx={{ color: 'red', bg: '$blue100', h: 40, w: 40 }}
            type="font"
          /> */}
        </HStack>

        {/* size props from styled */}
        <HStack space="md">
          <Icon as={Cake} size="xl" />
          <Icon as={MenuIcon} size="xl" />
          {/* FIX: size xl not getting resolved */}
          {/* <Icon as={Ionicons} name="add" type="font" sx={{ h: 24, w: 24 }} /> */}
        </HStack>

        {/*  token resolution from styled */}
        <HStack space="md">
          <Icon as={Cake} color="$primary500" />
          {/* <Icon
            as={Ionicons}
            name="add"
            color="$primary500"
            type="font"
            sx={{ h: 18, w: 18 }}
          /> */}
        </HStack>
        <HStack flexWrap="wrap">
          <Icon as={AddIcon} m="$2" w="$4" h="$4" />
          <Icon as={ArrowLeftIcon} m="$2" w="$4" h="$4" />
          <Icon as={ArrowRightIcon} m="$2" w="$4" h="$4" />
          <Icon as={ArrowUpIcon} m="$2" w="$4" h="$4" />
          <Icon as={ArrowDownIcon} m="$2" w="$4" h="$4" />

          <Icon as={ChevronsLeftIcon} m="$2" w="$4" h="$4" />
          <Icon as={ChevronsRightIcon} m="$2" w="$4" h="$4" />
          <Icon as={ChevronsUpDownIcon} m="$2" w="$4" h="$4" />

          <Icon as={AtSignIcon} m="$2" w="$4" h="$4" />

          <Icon as={PaperclipIcon} m="$2" w="$4" h="$4" />
          <Icon as={BellIcon} m="$2" w="$4" h="$4" />
          <Icon as={CalendarDaysIcon} m="$2" w="$4" h="$4" />
          <Icon as={MessageCircleIcon} m="$2" w="$4" h="$4" />
          <Icon as={CheckIcon} m="$2" w="$4" h="$4" />

          <Icon as={ChevronDownIcon} m="$2" w="$4" h="$4" />
          <Icon as={ChevronUpIcon} m="$2" w="$4" h="$4" />
          <Icon as={ChevronLeftIcon} m="$2" w="$4" h="$4" />
          <Icon as={ChevronRightIcon} m="$2" w="$4" h="$4" />

          <Icon as={CloseIcon} m="$2" w="$4" h="$4" />

          <Icon as={CopyIcon} m="$2" w="$4" h="$4" />

          <Icon as={TrashIcon} m="$2" w="$4" h="$4" />
          <Icon as={DownloadIcon} m="$2" w="$4" h="$4" />
          <Icon as={GripVerticalIcon} m="$2" w="$4" h="$4" />
          <Icon as={EditIcon} m="$2" w="$4" h="$4" />
          <Icon as={MailIcon} m="$2" w="$4" h="$4" />
          <Icon as={ExternalLinkIcon} m="$2" w="$4" h="$4" />

          <Icon as={MenuIcon} m="$2" w="$4" h="$4" />
          <Icon as={InfoIcon} m="$2" w="$4" h="$4" />
          <Icon as={LinkIcon} m="$2" w="$4" h="$4" />

          <Icon as={LockIcon} m="$2" w="$4" h="$4" />
          <Icon as={RemoveIcon} m="$2" w="$4" h="$4" />

          <Icon as={MoonIcon} m="$2" w="$4" h="$4" />
          <Icon as={SlashIcon} m="$2" w="$4" h="$4" />
          <Icon as={CheckCircleIcon} m="$2" w="$4" h="$4" />
          <Icon as={PhoneIcon} m="$2" w="$4" h="$4" />
          <Icon as={HelpCircleIcon} m="$2" w="$4" h="$4" />
          <Icon as={RepeatIcon} m="$2" w="$4" h="$4" />
          <Icon as={Repeat1Icon} m="$2" w="$4" h="$4" />

          <Icon as={SearchIcon} m="$2" w="$4" h="$4" />
          <Icon as={SettingsIcon} m="$2" w="$4" h="$4" />
          <Icon as={LoaderIcon} m="$2" w="$4" h="$4" />
          <Icon as={StarIcon} m="$2" w="$4" h="$4" />
          <Icon as={SunIcon} m="$2" w="$4" h="$4" />
          <Icon as={ClockIcon} m="$2" w="$4" h="$4" />
          <Icon as={UnlockIcon} m="$2" w="$4" h="$4" />
          <Icon as={EyeIcon} m="$2" w="$4" h="$4" />
          <Icon as={EyeOffIcon} m="$2" w="$4" h="$4" />
          <Icon as={AlertCircleIcon} m="$2" w="$4" h="$4" />
          <Icon as={CloseCircleIcon} m="$2" w="$4" h="$4" />

          <Icon as={ShareIcon} m="$2" w="$4" h="$4" />
          <Icon as={CircleIcon} m="$2" w="$4" h="$4" />
          <Icon as={FavouriteIcon} m="$2" w="$4" h="$4" />
          <Icon as={GlobeIcon} m="$2" w="$4" h="$4" />
          <Icon as={ThreeDotsIcon} m="$2" w="$4" h="$4" />
        </HStack>
      </VStack>
    </Wrapper>
  );
};

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
  ChromeIcon,
  InstagramIcon,
  FacebookIcon,
};
