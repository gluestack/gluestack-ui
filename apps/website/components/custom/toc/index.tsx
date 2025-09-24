import React, { useEffect, useState } from 'react';

interface HeadingItem {
  id: string;
  text: string | null;
  level: number; // 1 = H1, 2 = H2, …
  children: HeadingItem[];
}

function buildTree(flat: HeadingItem[]): HeadingItem[] {
  const root: HeadingItem[] = [];
  const stack: HeadingItem[] = [];

  for (const item of flat) {
    const newItem = { ...item, children: [] };

    // Find parent (pop until stack top < current level)
    while (stack.length > 0 && stack[stack.length - 1].level >= newItem.level) {
      stack.pop();
    }

    if (stack.length === 0) {
      root.push(newItem);
    } else {
      stack[stack.length - 1].children.push(newItem);
    }

    stack.push(newItem);
  }

  return root;
}

export const TOC: React.FC = () => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    // Grab h1–h5
    const scrollContainer = document.getElementById('layout-content');
    if (!scrollContainer) return;

    const elements =
      document.querySelectorAll<HTMLHeadingElement>('h1, h2, h3, h4, h5');
    const flat: HeadingItem[] = Array.from(elements)
      .map((el) => ({
        id: el.id,
        text: el.textContent,
        level: parseInt(el.tagName.replace('H', ''), 10),
        children: [],
      }))
      .filter((item) => item.id);

    setHeadings(buildTree(flat));

    // Scroll listener - listen to the scroll container, not window
    const handleScroll = () => {
      const containerRect = scrollContainer.getBoundingClientRect();
      const containerTop = containerRect.top;

      // Calculate scroll progress
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight =
        scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);

      const visible = flat
        .map(({ id }) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null)
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            id: el.id,
            // Calculate position relative to the scroll container
            top: rect.top - containerTop,
            element: el,
          };
        });

      // Pick the closest heading that's visible or just passed
      // Adjust the threshold as needed (150 is a good default)
      let current = visible
        .filter((h) => h.top <= 150)
        .sort((a, b) => b.top - a.top)[0];

      // If no heading is above the threshold, pick the first one below it
      if (!current && visible.length > 0) {
        current = visible
          .filter((h) => h.top > 150)
          .sort((a, b) => a.top - b.top)[0];
      }

      if (current) {
        setActiveId(current.id);
      }
    };

    // Add scroll listener to the container, not window
    scrollContainer.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  if (headings.length === 0) return null;

  const handleClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById(id);
      const scrollContainer = document.getElementById('layout-content');

      if (el && scrollContainer) {
        // Calculate the position relative to the scroll container
        const containerRect = scrollContainer.getBoundingClientRect();
        const elementRect = el.getBoundingClientRect();
        const relativeTop =
          elementRect.top - containerRect.top + scrollContainer.scrollTop;

        // Smooth scroll within the container
        scrollContainer.scrollTo({
          top: relativeTop - 100, // Add some offset from the top
          behavior: 'smooth',
        });

        setActiveId(id);
      }
    };

  const renderItems = (items: HeadingItem[], level = 1) => (
    <ul
      className={
        level > 1
          ? 'ml-3 mt-1 space-y-1 border-l border-outline-100/50 pl-3'
          : 'space-y-1'
      }
    >
      {items.map((item, index) => {
        const isActive = activeId === item.id;

        return (
          <li key={item.id} className="relative">
            <a
              href={`#${item.id}`}
              onClick={handleClick(item.id)}
              className={`
                group relative block py-1.5 px-2 text-sm transition-all duration-200 ease-out rounded-sm
                ${level > 1 ? 'text-xs pl-0' : ''}
                ${
                  isActive
                    ? 'text-typography-950'
                    : 'text-typography-500 hover:text-typography-700'
                }
              `}
            >
              {/* Text content */}
              <span className="truncate leading-relaxed">{item.text}</span>
            </a>

            {/* Children - always show, no complex animations */}
            {item.children.length > 0 && (
              <div className="mt-1">
                {renderItems(item.children, level + 1)}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="fixed right-8 top-20 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
      {/* Header with progress */}
      <div className="mb-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-foreground">
            On this page
          </h3>
          <span className="text-xs text-primary-600 font-mono">
            {Math.round(scrollProgress)}%
          </span>
        </div>

        {/* Progress bar */}
        <div className="relative h-1 bg-border rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300 ease-out bg-background-500"
            style={{
              width: `${scrollProgress}%`,
            }}
          />
        </div>
      </div>

      {/* Table of contents */}
      <nav className="space-y-0">{renderItems(headings)}</nav>
    </div>
  );
};
