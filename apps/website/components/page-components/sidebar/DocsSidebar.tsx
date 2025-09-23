'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import sidebarData from '@/sidebar.json';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { ToggleColorModeButton } from '@/components/custom/color-mode-toggle-button';

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

  if (item.type === 'heading') {
    return (
      <div className="font-bold text-typography-900 py-2 pl-3 my-2 mt-4 uppercase font-geist-sans">
        {item.title}
      </div>
    );
  }

  return (
    <Link
      href={item.path || '#'}
      onClick={onItemClick}
      className={`text-sm font-medium block py-2 px-3.5 mr-2 my-0.5 text-typography-800 hover:bg-background-100 pl-3 font-inter ${
        isActive ? 'bg-background-100 border-l-[3px] border-primary-500' : ''
      }`}
    >
      <div className="flex items-center ">
        <span>{item.title}</span>
        {item.tags?.length && item.tags?.length > 0 && (
          <span
            className={`text-2xs uppercase font-roboto font-semibold rounded-sm px-1 py-0.5 m-2 ${
              item.tags?.includes('alpha')
                ? 'text-info-600 bg-info-50/40'
                : 'text-success-600 bg-success-50/40'
            }`}
          >
            {item.tags?.map((tag) => tag).join(', ')}
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
              require('lucide-react-native')[section.icons.name ?? 'CircleHelp']
            }
          />
        )}
        <Text className="text-typography-950 font-bold uppercase text-sm tracking-wide">
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
  const [selectedSection, setSelectedSection] = useState<string>('Home');
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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
      return 'Home';
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
    <Box className="w-full dark:bg-black bg-white lg:hidden z-0 overflow-y-auto fixed h-[calc(100vh-56px)] top-0 pt-16 left-0 scrollbar-hide">
      {/* Fixed navigation at top */}
      <div className="border-b border-outline-100 p-2">
        {navigation.sections.map((section, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 px-4 py-2 my-1 cursor-pointer rounded-md ${
              selectedSection === section.title
                ? 'bg-background-50 text-typography-950'
                : 'text-typography-800 hover:bg-background-100 hover:text-typography-900'
            }`}
            onClick={() => handleSectionClick(section)}
          >
            {section.icons && (
              <Icon
                as={
                  require('lucide-react-native')[
                    section.icons.name ?? 'CircleHelp'
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
      {/* color mode toggle button start */}
      <div className="absolute bottom-0 right-0 p-4">
        <ToggleColorModeButton />
      </div>
      {/* color mode toggle button end */}
    </Box>
  );
};
export default DocsSidebar;
