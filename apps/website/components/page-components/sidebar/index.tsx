"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sidebarData from "@/sidebar.json";
// import { Icon } from "./icon";
import { Icon } from "@/components/ui/icon";
import { Text } from "@/components/ui/text";

interface Page {
  type?: string;
  title: string;
  pages: Page[];
  id?: string;
  icons?: {
    source: string;
    name: string;
    headerTitle: string;
  };
  tags?: string[];
}

const SidebarSection = ({ section }: { section: Page }) => {
  return (
    <div className="flex gap-2 py-2 mb-2">
      <span className={`text-typography-950 font-bold pl-3 uppercase font-jakarta`}>
        {section.title}
      </span>
    </div>
  );
};

const SidebarLink = ({ page }: { page: Page }) => {
  const pathname = usePathname();
  const isActive = pathname === page.id;

  if (page.type === "heading") {
    return (
      <div
        className={`font-bold text-typography-900 py-2 pl-3 my-2 mt-4 uppercase font-jakarta`}
      >
        {page.title}
      </div>
    );
  }

  return (
    <Link
      href={page.id || "#"}
      className={`text-sm font-medium block py-2 px-3.5 mr-2 my-0.5 text-typography-800 hover:bg-background-100 pl-3 font-inter ${
        isActive ? "bg-background-100 border-l-[3px] border-primary-500" : ""
      }`}
    >
      {page.title}
      {page.tags?.length && page.tags?.length > 0 && (
        <span className={`text-2xs uppercase font-roboto font-semibold  rounded-sm px-1 py-0.5 m-2  ${page.tags?.includes("alpha") ? "text-info-600 bg-info-50/40" : "text-success-600 bg-success-50/40"}`}>
          {page.tags?.map((tag) => tag).join(", ")}
        </span>
      )}
    </Link>
  );
};

export default function Sidebar() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Get only the parent pages with type "Dropdown"
  const parentDropdowns = sidebarData.pages.filter(
    (page) => page.type === "Dropdown"
  );

  // Get all pages including children for the scrollable section
  const allPages = sidebarData.pages;

  // Find the parent page that contains the current pathname
  const findParentPage = (
    pages: Page[],
    currentPath: string
  ): string | null => {
    for (const page of pages) {
      if (page.type === "Dropdown") {
        // Check if any child page matches the current pathname
        const hasMatchingChild = page.pages.some((childPage) => {
          if (childPage.id === currentPath) return true;
          return childPage.pages?.some(
            (grandChild) => grandChild.id === currentPath
          );
        });

        if (hasMatchingChild) {
          return page.title;
        }
      }
    }
    return null;
  };

  // Set the selected section based on the current pathname
  useEffect(() => {
    const parentPage = findParentPage(allPages, pathname);
    if (parentPage) {
      setSelectedSection(parentPage);
    }
  }, [pathname, allPages]);

  const handleSectionClick = (title: string) => {
    setSelectedSection(title);
    const element = document.getElementById(
      `section-${title.toLowerCase().replace(/\s+/g, "-")}`
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="ml-4 w-64 h-full border-r border-outline-100 flex flex-col">
      {/* Fixed parent dropdowns at top */}
      <div className="flex-none py-4 border-b border-outline-100">
        {parentDropdowns.map((section: Page, index: number) => (
          <div
            key={index}
            className={`mb-1 cursor-pointer hover:bg-background-100 rounded-md mr-2 ${
              selectedSection === section.title ? "bg-background-100" : ""
            }`}
            onClick={() => handleSectionClick(section.title)}
          >
            <div className="flex items-center gap-2 px-4 py-2">
              {section.icons && (
                  <Icon as={section.icons.name} />
              )}
              <Text className="text-typography-950 font-medium">{section.title}</Text>
            </div>
          </div>
        ))}
      </div>

      {/* Scrollable content section with all pages */}
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-background-300 [&::-webkit-scrollbar-thumb]:rounded-full">
        <div className="py-4">
          {allPages.map((page: Page, index: number) => (
            <div
              key={index}
              id={`section-${page.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <SidebarSection section={page} />
              {page.pages && page.pages.length > 0 && (
                <div>
                  {page.pages.map((childPage: Page, idx: number) => (
                    <div key={idx}>
                      <SidebarLink page={childPage} />
                      {childPage.pages && childPage.pages.length > 0 && (
                        <div className="pb-8">
                          {childPage.pages.map(
                            (grandChild: Page, grandIdx: number) => (
                              <SidebarLink key={grandIdx} page={grandChild} />
                            )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
