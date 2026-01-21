'use client';

import { ToggleColorModeButton } from '@/components/custom/color-mode-toggle-button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { ScrollArea } from '@/components/web/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/web/sheet';
import sidebarData from '@/sidebar.json';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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
      <div className="font-bold text-foreground py-2 pl-3 my-2 mt-4 uppercase font-geist-sans">
        {item.title}
      </div>
    );
  }

  return (
    <Link
      href={item.path || '#'}
      onClick={onItemClick}
      className={`text-sm font-medium block py-2 px-3.5 mr-2 my-0.5 text-muted-foreground hover:bg-accent hover:text-foreground pl-3 font-inter ${isActive ? 'bg-accent text-foreground border-l-[3px] border-primary' : ''
        }`}
    >
      <div className="flex items-center ">
        <span>{item.title}</span>
        {item.tags?.length && item.tags?.length > 0 && (
          <span
            className={`text-2xs uppercase font-roboto font-semibold rounded-sm px-1 py-0.5 m-2 ${item.tags?.includes('alpha')
              ? 'text-blue-500 bg-blue-500/10'
              : 'text-green-500 bg-green-500/10'
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
        <Text className="text-foreground font-bold uppercase text-sm tracking-wide">
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

  const selectedSectionData = navigation.sections.find(
    (section) => section.title === selectedSection
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpenSidebar}>
      <SheetContent side="left" className="w-full sm:max-w-md p-0">
        <SheetHeader className="sr-only">
          <SheetTitle>Documentation Navigation</SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-full">
          <div className="flex flex-col h-full">
            {/* Fixed navigation at top */}
            <div className="border-b border-border p-2 sticky top-0 bg-background z-10">
              {navigation.sections.map((section, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 my-1 cursor-pointer rounded-md ${selectedSection === section.title
                    ? 'bg-accent text-foreground'
                    : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground'
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
              <div className="p-2 flex-1">
                <ResponsiveSidebarSection
                  section={selectedSectionData}
                  onItemClick={() => setIsOpenSidebar(false)}
                />
              </div>
            )}

            {/* Color mode toggle button */}
            <div className="border-t border-border p-4 flex justify-end">
              <ToggleColorModeButton />
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
export default DocsSidebar;
