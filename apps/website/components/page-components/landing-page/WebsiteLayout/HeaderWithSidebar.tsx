'use client';
import React, { useState, useContext } from 'react';
import { Box } from '@/components/ui/box';
import Header from '@/components/page-components/header';
import { Icon, CloseIcon } from '@/components/ui/icon';
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
} from '@/components/ui/drawer';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Link } from '@/components/ui/link';
import {
  headerItems,
  SidebarItemProps,
  SidebarSectionProps,
} from '@/components/page-components/landing-page/ResponsiveSidebar/sidebar-header-items';
import { useTheme } from 'next-themes';

const SidebarItem = ({
  title,
  link,
  logo,
  logoDark,
  badge,
  onItemClick,
}: SidebarItemProps & { onItemClick: () => void }) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Link href={link} onClick={onItemClick}>
      <HStack className="hover:bg-background-100 px-3.5 py-2 gap-2 items-center">
        <Box className="p-0.5 items-center justify-center bg-background-50 rounded">
          {mounted && resolvedTheme === 'light' ? logo : logoDark}
        </Box>
        <Text className="text-typography-800">{title}</Text>
        {badge && <Box className="ml-2">{badge}</Box>}
      </HStack>
    </Link>
  );
};

const SidebarSection = ({
  title,
  items,
  onItemClick,
}: SidebarSectionProps & { onItemClick: () => void }) => (
  <Box className="mb-2 ">
    <Text className="p-3.5 text-typography-900 font-semibold">{title}</Text>
    {items.map((item) => (
      <SidebarItem
        key={item.title}
        title={item.title}
        link={item.link}
        logo={item.logo}
        logoDark={item.logoDark}
        badge={item.badge}
        onItemClick={onItemClick}
      />
    ))}
  </Box>
);

const SidebarWithHeaders = ({ onItemClick }: { onItemClick: () => void }) => {
  return (
    <Box className="w-full h-full">
      {headerItems.map((headerItem) => (
        <SidebarSection
          key={headerItem.title}
          title={headerItem.title}
          items={headerItem.items}
          onItemClick={onItemClick}
        />
      ))}
    </Box>
  );
};

export default function HeaderWithSidebar() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <>
      <Header
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />

      {/* Responsive Sidebar with Drawer */}
      <Drawer
        isOpen={isOpenSidebar}
        size="full"
        anchor="left"
        onClose={() => {
          setIsOpenSidebar(false);
        }}
      >
        <DrawerBackdrop />
        <DrawerContent className="lg:hidden">
          <DrawerCloseButton>
            <Icon as={CloseIcon} />
          </DrawerCloseButton>
          <DrawerBody className="pt-4">
            <VStack className="gap-2 px-4 min-h-fit pb-20">
              <SidebarWithHeaders onItemClick={() => setIsOpenSidebar(false)} />
              <Box className="pb-10 w-full">
                <Link
                  href="https://geekyants.com/hire?utm_source=gluestack.io&utm_medium=referral&utm_campaign=partner_site"
                  className="w-full"
                  onClick={() => setIsOpenSidebar(false)}
                >
                  <Box className="flex-1 justify-center items-center px-4 py-2 bg-primary-500 rounded hover:bg-primary-600">
                    <Text className="font-normal leading-normal text-base text-typography-0">
                      Hire React Native Experts
                    </Text>
                  </Box>
                </Link>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
