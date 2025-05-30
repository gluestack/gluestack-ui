import { Box, Text, VStack, HStack } from "@/components/ui";
import Link from "next/link";
import {
  headerItems,
  SidebarItemProps,
  SidebarSectionProps,
} from "./sidebar-header-items";
import { ThemeContext } from "@/utils/context/theme-context";
import { useContext, useEffect } from "react";

const SidebarItem = ({
  title,
  link,
  logo,
  logoDark,
  badge,
  onItemClick,
}: SidebarItemProps & { onItemClick: () => void }) => {
  const { colorMode } = useContext(ThemeContext);
  return (
    <Link href={link} onClick={onItemClick}>
      <HStack className="hover:bg-background-100 px-3.5 py-2 gap-2 items-center">
        <Box className="p-0.5 items-center justify-center bg-background-50 rounded">
          {colorMode === "light" ? logo : logoDark}
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
  <Box className="mb-2 flex-1">
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
    <Box className="w-full">
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

function ResponsiveSidebar({
  isOpen,
  setIsOpenSidebar,
}: {
  isOpen: boolean;
  setIsOpenSidebar: (value: boolean) => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <Box className=" w-full bg-background-0 lg:hidden z-50 overflow-y-auto h-[calc(100vh-60px)]">
        <VStack className="pb-10 flex-grow gap-2 justify-between py-6 px-4">
          <SidebarWithHeaders onItemClick={() => setIsOpenSidebar(false)} />
          <Box className="py-20 w-full">
            <Link
              href="https://geekyants.com/hire?utm_source=gluestack.io&utm_medium=referral&utm_campaign=partner_site"
              className="w-full"
              onClick={() => setIsOpenSidebar(false)}
            >
              <Box className="flex justify-center items-center px-4 py-2 bg-primary-500 rounded hover:bg-primary-600">
                <Text className="font-normal leading-normal text-base text-typography-0">
                  Hire React Native Experts
                </Text>
              </Box>
            </Link>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default ResponsiveSidebar;
