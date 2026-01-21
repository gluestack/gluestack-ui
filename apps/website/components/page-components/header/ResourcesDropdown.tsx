'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useColorMode } from '@/app/provider';
import { getResourcesSection } from './MobileSidebarMenu';

const ResourcesDropdown = () => {
  const { colorMode } = useColorMode();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const resourcesSection = getResourcesSection();
  const resources = resourcesSection?.items || [];

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <button
        className="lg:flex hidden rounded-full px-3 py-1 hover:bg-primary/10 active:bg-primary/20 outline-none focus-visible:ring-2 focus-visible:ring-primary items-center"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="leading-normal font-normal text-sm text-foreground/70">
          Resources
        </span>
        {dropdownOpen ? (
          <ChevronUp className="ml-1 h-4 w-4 text-foreground/70 pointer-events-none" />
        ) : (
          <ChevronDown className="ml-1 h-4 w-4 text-foreground/70 pointer-events-none" />
        )}
      </button>

      {dropdownOpen && (
        <div className="absolute top-full left-0 min-w-[350px]">
          <div className="mt-2.5 p-1 bg-background shadow-lg border border-border rounded-md max-h-[300px] overflow-x-scroll">
            {resources.map((resource) => {
              const logoElement =
                mounted && colorMode === 'dark'
                  ? resource.logoDark
                  : resource.logo;

              return (
                <a
                  key={resource.link}
                  className="p-3 rounded flex flex-row min-w-[200px] hover:bg-primary/10 gap-3"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={resource.link}
                >
                  <div className="flex items-center justify-center w-6 h-6 text-foreground/70 flex-shrink-0">
                    {logoElement}
                  </div>
                  <div className="flex flex-col flex-1">
                    <span className="leading-normal font-medium text-sm text-foreground/70 mb-1">
                      {resource.title}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesDropdown;
