interface ComponentItem {
  title: string;
  path?: string;
  tags?: string[];
  url?: string;
  darkUrl?: string;
}

interface ComponentSection {
  type: 'heading';
  title: string;
  items: ComponentItem[];
}

interface NavigationSection {
  type: 'Dropdown';
  title: string;
  icons: {
    source: string;
    name: string;
    headerTitle: string;
  };
  subsections: (ComponentSection | { title: string; path: string })[];
}

interface ComponentsJson {
  navigation: {
    sections: NavigationSection[];
  };
}

export function getNestedComponents(componentsJson: ComponentsJson) {
  // Find the Components section
  const componentsSection = componentsJson.navigation.sections.find(
    (section) => section.title === 'Components'
  );

  if (!componentsSection) {
    return [];
  }

  // Create a nested structure of components
  const nestedComponents = componentsSection.subsections
    .filter(
      (subsection): subsection is ComponentSection =>
        'type' in subsection && subsection.type === 'heading'
    )
    .map((section) => ({
      category: section.title,
      components: section.items.map((item) => ({
        name: item.title,
        path: item.path?.replace('/ui/docs/components/', ''),
        tags: item.tags || [],
        url: item.url,
        darkUrl: item.darkUrl,
      })),
    }));

  return nestedComponents;
}

export type NestedComponents = ReturnType<typeof getNestedComponents>;
