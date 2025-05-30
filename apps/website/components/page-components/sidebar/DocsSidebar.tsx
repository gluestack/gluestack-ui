"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import sidebarData from "@/sidebar.json";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { ThemeContext } from "@/utils/context/theme-context";

interface NavigationItem {
  type?: string;
  title: string;
  path?: string;
  items?: NavigationItem[];
  icons?: {
    source: string;
    name: string;
    headerTitle: string;
  };
  tags?: string[];
}

interface Section {
  type: string;
  title: string;
  icons: {
    source: string;
    name: string;
    headerTitle: string;
  };
  subsections: NavigationItem[];
}

interface Navigation {
  navigation: {
    sections: Section[];
  };
}

const ResponsiveSidebarLink = ({
  item,
  onItemClick,
}: {
  item: NavigationItem;
  onItemClick: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  if (item.type === "heading") {
    return (
      <div className="font-bold text-white py-2 pl-3 my-2 mt-4 uppercase text-sm">
        {item.title}
      </div>
    );
  }

  return (
    <Link
      href={item.path || "#"}
      onClick={onItemClick}
      className={`text-sm font-medium block py-3 px-4 my-0.5 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200 ${
        isActive ? "bg-gray-700 text-white border-l-2 border-blue-500" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <span>{item.title}</span>
        {item.tags?.length && item.tags?.length > 0 && (
          <span
            className={`text-xs uppercase font-semibold rounded px-1.5 py-0.5 ml-2 ${
              item.tags?.includes("alpha")
                ? "text-blue-300 bg-blue-900/30"
                : "text-green-300 bg-green-900/30"
            }`}
          >
            {item.tags?.map((tag) => tag).join(", ")}
          </span>
        )}
      </div>
    </Link>
  );
};

const ResponsiveSidebarSection = ({
  section,
  onItemClick,
}: {
  section: Section;
  onItemClick: () => void;
}) => {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-3 px-4 py-3 mb-2">
        {section.icons && (
          <Icon
            as={
              require("lucide-react-native")[section.icons.name ?? "CircleHelp"]
            }
            className="w-5 h-5 text-white"
          />
        )}
        <Text className="text-white font-bold uppercase text-sm tracking-wide">
          {section.title}
        </Text>
      </div>

      {section.subsections && section.subsections.length > 0 && (
        <div>
          {section.subsections.map(
            (subsection: NavigationItem, idx: number) => (
              <div key={idx}>
                <ResponsiveSidebarLink
                  item={subsection}
                  onItemClick={onItemClick}
                />
                {subsection.items && subsection.items.length > 0 && (
                  <div className="ml-4">
                    {subsection.items.map(
                      (item: NavigationItem, itemIdx: number) => (
                        <ResponsiveSidebarLink
                          key={itemIdx}
                          item={item}
                          onItemClick={onItemClick}
                        />
                      )
                    )}
                  </div>
                )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

interface ResponsiveSidebarProps {
  isOpen: boolean;
  setIsOpenSidebar: (value: boolean) => void;
}

const DocsSidebar: React.FC<ResponsiveSidebarProps> = ({
  isOpen,
  setIsOpenSidebar,
}) => {
  const navigation = (sidebarData as Navigation).navigation;
  const [selectedSection, setSelectedSection] = useState<string>("Home");
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      // Prevent background scroll when sidebar is open
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      // Restore scrolling when sidebar is closed
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    }

    return () => {
      // Cleanup styles when component unmounts
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
      document.body.style.width = "auto";
    };
  }, [isOpen]);

  // Find the parent section that contains the current pathname
  useEffect(() => {
    const findParentSection = (
      sections: Section[],
      currentPath: string
    ): string => {
      for (const section of sections) {
        const hasMatchingSubsection = section.subsections.some((subsection) => {
          if (subsection.path === currentPath) return true;
          return subsection.items?.some((item) => item.path === currentPath);
        });

        if (hasMatchingSubsection) {
          return section.title;
        }
      }
      return "Home";
    };

    const parentSection = findParentSection(navigation.sections, pathname);
    setSelectedSection(parentSection);
  }, [pathname, navigation.sections]);

  const handleSectionClick = (section: Section) => {
    setSelectedSection(section.title);
  };

  if (!isOpen) return null;

  const selectedSectionData = navigation.sections.find(
    (section) => section.title === selectedSection
  );

  return (
    <Box className="w-full bg-background-0 lg:hidden z-50 overflow-y-auto h-[95vh] fixed top-[50px] left-0">
      {/* Fixed navigation at top */}
      <div className="border-b border-outline-100 p-2">
        {navigation.sections.map((section, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-4 py-2 my-1 cursor-pointer rounded-md ${
              selectedSection === section.title
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-800 hover:text-white"
            }`}
            onClick={() => handleSectionClick(section)}
          >
            {section.icons && (
              <Icon
                as={
                  require("lucide-react-native")[
                    section.icons.name ?? "CircleHelp"
                  ]
                }
                className="w-5 h-5"
              />
            )}
            <Text className="font-medium">{section.title}</Text>
          </div>
        ))}
      </div>

      {/* Selected section content */}
      {selectedSectionData && (
        <div className="p-2">
          <ResponsiveSidebarSection
            section={selectedSectionData}
            onItemClick={() => setIsOpenSidebar(false)}
          />
        </div>
      )}
    </Box>
  );
};
export default DocsSidebar;
