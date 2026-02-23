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
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import GluestackLogoDark from '@/public/svg/gluestack_logo_dark.svg';
import GluestackLogo from '@/public/svg/gluestack_logo.svg';
import { useColorMode } from '@/app/provider';
import NextLink from 'next/link';

const ChevronDownIcon = require('lucide-react-native')['ChevronDown'];
const ChevronRightIcon = require('lucide-react-native')['ChevronRight'];

interface NavigationItem {
  type?: string;
  title: string;
  path?: string;
  items?: NavigationItem[];
  icons?: { source: string; name: string; headerTitle: string };
  tags?: string[];
}

interface Section {
  type: string;
  title: string;
  icons: { source: string; name: string; headerTitle: string };
  subsections: NavigationItem[];
}

interface Navigation {
  navigation: { sections: Section[] };
}

const TagBadge = ({ tags }: { tags: string[] }) => {
  if (!tags || tags.length === 0) return null;
  const isAlpha = tags.includes('alpha');
  return (
    <span
      className={`shrink-0 text-2xs uppercase font-roboto font-semibold rounded-sm px-1 py-0.5 ml-1.5 ${
        isAlpha ? 'text-blue-500 bg-blue-500/10' : 'text-green-500 bg-green-500/10'
      }`}
    >
      {tags.join(', ')}
    </span>
  );
};

const SidebarLink = ({
  item,
  depth = 1,
  onClose,
}: {
  item: NavigationItem;
  depth?: 1 | 2;
  onClose: () => void;
}) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  const basePl = depth === 2 ? 'pl-5' : 'pl-2';
  const activePl = depth === 2 ? 'pl-[18px]' : 'pl-[6px]';

  return (
    <Link
      href={item.path || '#'}
      onClick={onClose}
      className={`text-sm flex items-center py-1.5 pr-3 mr-1 my-0.5 rounded-md transition-colors font-inter ${
        isActive
          ? `bg-accent text-foreground font-medium border-l-2 border-primary ${activePl}`
          : `text-muted-foreground hover:bg-accent/60 hover:text-foreground ${basePl}`
      }`}
    >
      <span className="truncate flex-1">{item.title}</span>
      {item.tags && item.tags.length > 0 && <TagBadge tags={item.tags} />}
    </Link>
  );
};

const SidebarGroup = ({
  group,
  onClose,
}: {
  group: NavigationItem;
  onClose: () => void;
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-0.5">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between pl-2 pr-3 py-1.5 rounded-md text-left hover:bg-accent/40 transition-colors group cursor-pointer"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground group-hover:text-foreground font-geist-sans">
          {group.title}
        </span>
        <Icon
          as={isOpen ? ChevronDownIcon : ChevronRightIcon}
          className="w-3 h-3 shrink-0 text-muted-foreground"
        />
      </button>

      {isOpen && group.items && group.items.length > 0 && (
        <div className="mt-0.5 mb-1">
          {group.items.map((item, idx) => (
            <SidebarLink key={idx} item={item} depth={2} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  );
};

const SidebarSection = ({
  section,
  onClose,
}: {
  section: Section;
  onClose: () => void;
}) => {
  const pathname = usePathname();
  const hasActiveDescendant = section.subsections.some((sub) => {
    if (sub.path === pathname) return true;
    return sub.items?.some((item) => item.path === pathname);
  });

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-0.5">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-left transition-colors cursor-pointer group ${
          hasActiveDescendant
            ? 'text-foreground'
            : 'text-muted-foreground hover:text-foreground hover:bg-accent/40'
        }`}
      >
        {section.icons && (
          <Icon
            as={require('lucide-react-native')[section.icons.name ?? 'CircleHelp']}
            className={`w-4 h-4 shrink-0 ${
              hasActiveDescendant
                ? 'text-foreground'
                : 'text-muted-foreground group-hover:text-foreground'
            }`}
          />
        )}
        <Text
          className={`text-sm font-medium flex-1 ${
            hasActiveDescendant
              ? 'text-foreground'
              : 'text-muted-foreground group-hover:text-foreground'
          }`}
        >
          {section.title}
        </Text>
        <Icon
          as={isOpen ? ChevronDownIcon : ChevronRightIcon}
          className={`w-3.5 h-3.5 shrink-0 ${
            hasActiveDescendant
              ? 'text-muted-foreground'
              : 'text-muted-foreground/60 group-hover:text-muted-foreground'
          }`}
        />
      </button>

      {isOpen && section.subsections.length > 0 && (
        <div className="mt-0.5 mb-1 ml-5 border-l border-border">
          {section.subsections.map((subsection, idx) => {
            if (subsection.type === 'heading') {
              return (
                <SidebarGroup key={idx} group={subsection} onClose={onClose} />
              );
            }
            return (
              <SidebarLink key={idx} item={subsection} depth={1} onClose={onClose} />
            );
          })}
        </div>
      )}
    </div>
  );
};

interface DocsSidebarProps {
  isOpen: boolean;
  setIsOpenSidebar: (value: boolean) => void;
}

const DocsSidebar: React.FC<DocsSidebarProps> = ({ isOpen, setIsOpenSidebar }) => {
  const navigation = (sidebarData as Navigation).navigation;
  const { colorMode } = useColorMode();

  const handleClose = () => setIsOpenSidebar(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpenSidebar}>
      <SheetContent side="left" className="w-full sm:max-w-sm p-0 flex flex-col">
        <SheetHeader className="sr-only">
          <SheetTitle>Documentation Navigation</SheetTitle>
        </SheetHeader>

        {/* Logo */}
        <div className="p-4 border-b border-border shrink-0">
          <NextLink href="/" onClick={handleClose}>
            <Image
              src={colorMode === 'dark' ? GluestackLogoDark : GluestackLogo}
              alt="gluestack-ui logo"
              className="h-[20px] w-full max-w-fit"
            />
          </NextLink>
        </div>

        {/* Scrollable nav tree */}
        <ScrollArea className="flex-1 min-h-0">
          <div className="py-3 px-2">
            {navigation.sections.map((section, idx) => (
              <SidebarSection key={idx} section={section} onClose={handleClose} />
            ))}
          </div>
        </ScrollArea>

        {/* Color mode toggle */}
        <div className="border-t border-border p-4 flex justify-end shrink-0">
          <ToggleColorModeButton />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DocsSidebar;
