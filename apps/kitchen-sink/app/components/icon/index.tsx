import { ComponentPreviewer } from '@/components/custom/component-previewer';
import {
  Icon,
  EditIcon,
  AddIcon,
  AlertCircleIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  AtSignIcon,
  BellIcon,
  CalendarDaysIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpDownIcon,
  CircleIcon,
  ClockIcon,
  CloseIcon,
  CloseCircleIcon,
  CopyIcon,
  DownloadIcon,
  EyeIcon,
  EyeOffIcon,
  FavouriteIcon,
  GlobeIcon,
  GripVerticalIcon,
  HelpCircleIcon,
  InfoIcon,
  LinkIcon,
  ExternalLinkIcon,
  LoaderIcon,
  LockIcon,
  MailIcon,
  MenuIcon,
  MessageCircleIcon,
  MoonIcon,
  PaperclipIcon,
  PhoneIcon,
  PlayIcon,
  RemoveIcon,
  RepeatIcon,
  Repeat1Icon,
  SearchIcon,
  SettingsIcon,
  ShareIcon,
  SlashIcon,
  StarIcon,
  SunIcon,
  ThreeDotsIcon,
  TrashIcon,
  UnlockIcon,
  createIcon,
} from '@/components/ui/icon';
import { Center } from '@/components/ui/center';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import {
  Camera,
  ChromeIcon,
  InstagramIcon,
  FacebookIcon,
} from 'lucide-react-native';
import { Path } from 'react-native-svg';

import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <ScrollView
      className="bg-background-0 flex-1"
      contentContainerClassName="px-3 pb-6"
    >
      <ComponentPreviewer
        props={{
          size: {
            control: {
              type: 'select',
            },
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            defaultValue: 'md',
          },
        }}
        title={undefined}
      >
        {(props) => {
          return <Icon as={EditIcon} size={props.size} />;
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'All Gluestack Icons'}>
        {(props) => {
          return (
            <Center>
              <HStack className="w-[70%] flex flex-wrap">
                <Icon
                  as={AddIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ArrowLeftIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ArrowRightIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ArrowUpIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ArrowDownIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ChevronsLeftIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ChevronsRightIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ChevronsUpDownIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={AtSignIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={PaperclipIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={BellIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={CalendarDaysIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={MessageCircleIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={CheckIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ChevronDownIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ChevronUpIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ChevronLeftIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ChevronRightIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={CloseIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={CopyIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={TrashIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={DownloadIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={GripVerticalIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={EditIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={MailIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ExternalLinkIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={MenuIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={InfoIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={LinkIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={LockIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={RemoveIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={MoonIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={SlashIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={CheckCircleIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={PhoneIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={HelpCircleIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={RepeatIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={Repeat1Icon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={SearchIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={SettingsIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={LoaderIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={StarIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={SunIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ClockIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={UnlockIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={EyeIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={EyeOffIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={AlertCircleIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={CloseCircleIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ShareIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={CircleIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={FavouriteIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={GlobeIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={ThreeDotsIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
                <Icon
                  as={PlayIcon}
                  className="text-typography-500 m-2 w-4 h-4"
                />
              </HStack>
            </Center>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Lucide Icons (Recommended)'}>
        {(props) => {
          return (
            <VStack space="md" className="items-center">
              <Icon className="text-typography-500" as={Camera} />
              <Icon className="text-typography-500" as={ChromeIcon} />
              <Icon className="text-typography-500" as={InstagramIcon} />
              <Icon className="text-typography-500" as={FacebookIcon} />
            </VStack>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'SVG & Custom Icons'}>
        {(props) => {
          const GluestackIcon = createIcon({
            viewBox: '0 0 32 32',
            path: (
              <>
                <Path
                  d="M9.5 14.6642L15.9999 9.87633V12.1358L9.5 16.9236V14.6642Z"
                  fill="white"
                />
                <Path
                  d="M22.5 14.6642L16.0001 9.87639V12.1359L22.5 16.9237V14.6642Z"
                  fill="white"
                />
                <Path
                  d="M9.5 19.8641L15.9999 15.0763V17.3358L9.5 22.1236V19.8641Z"
                  fill="white"
                />
                <Path
                  d="M22.5 19.8642L16.0001 15.0764V17.3358L22.5 22.1237V19.8642Z"
                  fill="white"
                />
              </>
            ),
          });
          return (
            <Icon
              as={GluestackIcon}
              size="xl"
              className="text-typography-black"
            />
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
