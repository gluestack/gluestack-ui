"use client";

import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sidebarData from "@/sidebar.json";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";
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

const SidebarSection = ({ section }: { section: Section }) => {
  return (
    <div className="flex gap-2 py-2 mb-2">
      <span
        className={`text-typography-950 font-bold pl-3 uppercase font-jakarta`}
      >
        {section.title}
      </span>
    </div>
  );
};

const SidebarLink = ({ item }: { item: NavigationItem }) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  if (item.type === "heading") {
    return (
      <div
        className={`font-bold text-typography-900 py-2 pl-3 my-2 mt-4 uppercase font-jakarta`}
      >
        {item.title}
      </div>
    );
  }

  return (
    <Link
      href={item.path || "#"}
      className={`text-sm font-medium block py-2 px-3.5 mr-2 my-0.5 text-typography-800 hover:bg-background-100 pl-3 font-inter ${
        isActive ? "bg-background-100 border-l-[3px] border-primary-500" : ""
      }`}
    >
      {item.title}
      {item.tags?.length && item.tags?.length > 0 && (
        <span
          className={`text-2xs uppercase font-roboto font-semibold rounded-sm px-1 py-0.5 m-2 ${
            item.tags?.includes("alpha")
              ? "text-info-600 bg-info-50/40"
              : "text-success-600 bg-success-50/40"
          }`}
        >
          {item.tags?.map((tag) => tag).join(", ")}
        </span>
      )}
    </Link>
  );
};

export default function Sidebar() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const pathname = usePathname();
  const navigation = (sidebarData as Navigation).navigation;
  const [isHovered, setIsHovered] = useState(false);
  // Get only the parent sections with type "Dropdown"
  const parentDropdowns = navigation.sections.filter(
    (section) => section.type === "Dropdown"
  );

  // Find the parent section that contains the current pathname
  const findParentSection = (
    sections: Section[],
    currentPath: string
  ): string | null => {
    for (const section of sections) {
      // Check if any subsection matches the current pathname
      const hasMatchingSubsection = section.subsections.some((subsection) => {
        if (subsection.path === currentPath) return true;
        return subsection.items?.some((item) => item.path === currentPath);
      });

      if (hasMatchingSubsection) {
        return section.title;
      }
    }
    return null;
  };

  // Set the selected section based on the current pathname
  useEffect(() => {
    const parentSection = findParentSection(navigation.sections, pathname);
    if (parentSection) {
      setSelectedSection(parentSection);
    }
  }, [pathname, navigation.sections]);

  const handleSectionClick = (title: string) => {
    setSelectedSection(title);
    const element = document.getElementById(
      `section-${title.toLowerCase().replace(/\s+/g, "-")}`
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const { colorMode } = useContext(ThemeContext);
  return (
    <div
      className={`ml-4 w-64  border-r border-outline-100 flex flex-col left-0 ${
        colorMode === "light" ? "bg-white" : "bg-black"
      } h-[94vh] max-lg:hidden overflow-y-scroll fixed bottom-0 z-0`}
    >
      {/* Fixed parent dropdowns at top */}
      <div className="flex-none py-4 border-b border-outline-100">
        {parentDropdowns.map((section: Section, index: number) => (
          <div
            key={index}
            className={`mb-1 cursor-pointer hover:bg-background-100 rounded-md mr-2 ${
              selectedSection === section.title ? "bg-background-100" : ""
            }`}
            onClick={() => handleSectionClick(section.title)}
          >
            <div className="flex items-center gap-2 px-4 py-2">
              {section.icons && (
                <Icon
                  as={
                    require("lucide-react-native")[
                      section.icons.name ?? "CircleHelp"
                    ]
                  }
                />
              )}
              <Text className="text-typography-950 font-medium">
                {section.title}
              </Text>
            </div>
          </div>
        ))}
      </div>

      {/* Scrollable content section with all pages */}
      <div
        className={`flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent  [&::-webkit-scrollbar-thumb]:rounded-full ${isHovered ? "[&::-webkit-scrollbar-thumb]:bg-background-300" : "[&::-webkit-scrollbar-thumb]:bg-transparent"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="py-4">
          {navigation.sections.map((section: Section, index: number) => (
            <div
              key={index}
              id={`section-${section.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <SidebarSection section={section} />
              {section.subsections && section.subsections.length > 0 && (
                <div>
                  {section.subsections.map(
                    (subsection: NavigationItem, idx: number) => (
                      <div key={idx}>
                        <SidebarLink item={subsection} />
                        {subsection.items && subsection.items.length > 0 && (
                          <div className="pb-8">
                            {subsection.items.map(
                              (item: NavigationItem, itemIdx: number) => (
                                <SidebarLink key={itemIdx} item={item} />
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
          ))}
        </div>
      </div>
    </div>
  );
}
