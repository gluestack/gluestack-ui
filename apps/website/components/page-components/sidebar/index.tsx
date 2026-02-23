'use client';

import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import sidebarData from '@/sidebar.json';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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

/**
 * Depth controls left padding:
 *   depth 1 → inside a section, no group parent  (pl-2  = 8px inside wrapper)
 *   depth 2 → inside a group                     (pl-5  = 20px inside wrapper)
 */
const SidebarLink = ({
  item,
  depth = 1,
}: {
  item: NavigationItem;
  depth?: 1 | 2;
}) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  const basePl = depth === 2 ? 'pl-5' : 'pl-2';
  const activePl = depth === 2 ? 'pl-[18px]' : 'pl-[6px]'; // compensate 2px border

  return (
    <Link
      href={item.path || '#'}
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

/**
 * Level-2: collapsible group (e.g. "Typography", "Getting Started")
 * Lives inside the section content wrapper (which already has ml-5).
 * Group header uses pl-2; its children use pl-5.
 */
const SidebarGroup = ({ group }: { group: NavigationItem }) => {
  const pathname = usePathname();
  const hasActiveChild =
    group.items?.some((item) => item.path === pathname) ?? false;
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
            <SidebarLink key={idx} item={item} depth={2} />
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Level-1: top-level collapsible section (e.g. "Home", "Components")
 *
 * Indentation breakdown (px-2 outer = 8px on container):
 *   Section button   : px-3  → icon at 8+12=20px from sidebar edge
 *   Section wrapper  : ml-5 border-l  → guide line at 8+20=28px
 *   Group header     : pl-2  → text at 28+8 =36px
 *   Link in group    : pl-5  → text at 28+20=48px
 *   Direct link      : pl-2  → text at 28+8 =36px (same level as groups)
 */
const SidebarSection = ({ section }: { section: Section }) => {
  const pathname = usePathname();

  const hasActiveDescendant = section.subsections.some((sub) => {
    if (sub.path === pathname) return true;
    return sub.items?.some((item) => item.path === pathname);
  });

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-0.5">
      {/* Section toggle button */}
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

      {/* Section content — ml-5 shifts everything 20px right, border-l is the guide line */}
      {isOpen && section.subsections.length > 0 && (
        <div className="mt-0.5 mb-1 ml-5 border-l border-border">
          {section.subsections.map((subsection, idx) => {
            if (subsection.type === 'heading') {
              return <SidebarGroup key={idx} group={subsection} />;
            }
            // Direct link inside section (no group parent) — depth 1
            return <SidebarLink key={idx} item={subsection} depth={1} />;
          })}
        </div>
      )}
    </div>
  );
};

export default function Sidebar() {
  const navigation = (sidebarData as Navigation).navigation;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="ml-4 w-64 border-r border-border flex flex-col left-0 bg-white dark:bg-black max-lg:hidden overflow-hidden fixed top-[60px] bottom-0 z-0">
      <div
        className={`flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full ${
          isHovered
            ? '[&::-webkit-scrollbar-thumb]:bg-muted'
            : '[&::-webkit-scrollbar-thumb]:bg-transparent'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="py-3 px-2">
          {navigation.sections.map((section, idx) => (
            <SidebarSection key={idx} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
}
