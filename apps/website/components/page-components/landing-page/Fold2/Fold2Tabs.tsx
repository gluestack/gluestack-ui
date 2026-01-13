'use client';
import { Box } from '@/components/ui/box';
import { Divider } from '@/components/ui/divider';
import { HStack } from '@/components/ui/hstack';
import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Image } from '@/components/ui/image';
import React, { useContext } from 'react';
import FormsContent from './Forms';
import NavigationContent from './Navigation';
import CardsContent from './Cards';
import { useColorMode } from '@/app/provider';

type IActiveTab = 'Forms' | 'Navigation' | 'Cards';

const tabsNameArray: IActiveTab[] = ['Forms', 'Navigation', 'Cards'];
const tabs: Array<{
  name: IActiveTab;
  description?: string;
  DarkModeIcon: any;
  LightModeIcon: any;
}> = [
  {
    name: 'Forms',
    description: 'Button, Checkbox, FormControl, Input, Radio, +10 components.',
    DarkModeIcon: require('@/public/svg/EditIcon_dark.svg'),
    LightModeIcon: require('@/public/svg/EditIcon.svg'),
  },
  {
    name: 'Navigation',
    description:
      'Tabs, Pagination, Bottom Navigation, Fab, Header +5 components.',
    DarkModeIcon: require('@/public/svg/NavIcon_dark.svg'),
    LightModeIcon: require('@/public/svg/NavIcon.svg'),
  },
  {
    name: 'Cards',
    description: 'Banners, Cards, Toasts, Banners +8 components.',
    DarkModeIcon: require('@/public/svg/BellIcon_dark.svg'),
    LightModeIcon: require('@/public/svg/BellIcon.svg'),
  },
];

const HoriZontalTabNavigation = ({
  colorMode,
  isActive,
  handleFormsClick,
  showDividers,
  tabName,
  tabDescription,
  darkModeIcon: DarkModeIcon,
  lightModeIcon: LightModeIcon,
}: {
  colorMode: 'light' | 'dark';
  isActive: boolean;
  handleFormsClick: () => void;
  showDividers?: boolean;
  tabName: IActiveTab;
  tabDescription: string | undefined;
  darkModeIcon: any;
  lightModeIcon: any;
}) => {
  return (
    <>
      <Pressable
        onPress={handleFormsClick}
        className={`gap-6 flex-row hover:bg-muted/70 rounded-lg p-4 ${
          isActive ? 'bg-muted' : ''
        }`}
      >
        <Image
          alt={`icon for ${tabName} tab`}
          className="w-6 h-6 self-center"
          source={colorMode === 'light' ? LightModeIcon : DarkModeIcon}
          resizeMode="contain"
        />
        <VStack>
          <Text
            className={`text-base font-bold no-underline text-foreground`}
          >
            {tabName}
          </Text>
          <Text>{tabDescription}</Text>
        </VStack>
      </Pressable>
      {showDividers && (
        <Divider
          orientation="vertical"
          className="mx-6 my-2 h-[78px] w-0.5 bg-outline-300"
        />
      )}
    </>
  );
};

export default function Fold2Tabs() {
  const { colorMode } = useColorMode();
  const [activeTab, setActiveTab] = React.useState<IActiveTab>('Forms');
  const handleClick = (buttonName: IActiveTab) => {
    setActiveTab(buttonName);
  };

  return (
    <>
      <Box className="w-full xl:flex hidden flex-row gap-5">
        <VStack className="">
          {tabs.map((tab, index) => (
            <HoriZontalTabNavigation
              key={tab.name}
              colorMode={colorMode as 'light' | 'dark'}
              isActive={activeTab === tab.name}
              handleFormsClick={() => handleClick(tab.name)}
              showDividers={tabs.length - 1 !== index}
              tabName={tab.name}
              tabDescription={tab.description}
              darkModeIcon={tab.DarkModeIcon}
              lightModeIcon={tab.LightModeIcon}
            />
          ))}
        </VStack>
        <FormsContent show={activeTab === 'Forms'} />
        <NavigationContent show={activeTab === 'Navigation'} />
        <CardsContent show={activeTab === 'Cards'} />
      </Box>
      {/*  For mobile view */}
      <VStack className="gap-6 xl:hidden">
        <HStack className="bg-muted w-fit rounded-lg p-1 gap-1.5 items-center">
          {tabsNameArray.map((buttonName: IActiveTab) => (
            <Pressable
              key={buttonName}
              onPress={() => handleClick(buttonName)}
              className={`gap-1.5 cursor-pointer ${
                activeTab === buttonName ? 'bg-background' : ''
              } rounded-lg px-3.5 py-2 items-center`}
            >
              <Text
                className={`text-xs ${
                  activeTab === buttonName
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                } ${
                  activeTab === buttonName ? 'font-semibold' : 'text-normal'
                }`}
              >
                {buttonName}
              </Text>
            </Pressable>
          ))}
        </HStack>
        <FormsContent show={activeTab === 'Forms'} />
        <NavigationContent show={activeTab === 'Navigation'} />
        <CardsContent show={activeTab === 'Cards'} />
      </VStack>
    </>
  );
}

