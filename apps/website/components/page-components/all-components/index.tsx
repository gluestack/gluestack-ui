import React, { useEffect, useState } from "react";
import sidebarData from "@/sidebar.json";
import { GridItem } from "@/components/ui/grid";
import { Box, Grid } from "@/components/ui";
import { Text } from "@/components/ui/text";
const getComponentsFromSidebar = () => {
  // Find the Components section
  const componentsSection = sidebarData.navigation.sections.find(
    (section) => section.title === "Components"
  );

  if (!componentsSection) return [];

  // Get all subsections that are of type "heading"
  const componentHeadings = componentsSection.subsections.filter(
    (subsection) => subsection.type === "heading"
  );

  // Extract all component items from each heading
  const components = componentHeadings.reduce((acc: string[], heading) => {
    const componentItems = heading.items || [];
    const componentNames = componentItems.map((item) => {
      // Extract component name from path, e.g., "/ui/docs/components/button" -> "button"
      const pathParts = item.path?.split("/") || [];
      return pathParts[pathParts.length - 1];
    });
    return [...acc, ...componentNames];
  }, []);

  // Filter out any empty or undefined values and components we don't want to show
  return components.filter(
    (component) =>
      component &&
      component !== "table" // Exclude specific components that might not have implementations
  );
};

const componentsList = getComponentsFromSidebar();

export default function AllComponents() {
  const [components, setComponents] = useState<{ [key: string]: any }>({});

  useEffect(() => {
    const loadComponents = async () => {
      const loadedComponents: { [key: string]: any } = {};

      for (const component of componentsList) {
        try {
          const module = await import(`./${component}`);
          loadedComponents[component] = module.default;
        } catch (error) {
          console.error(`Failed to load component: ${component}`, error);
        }
      }

      setComponents(loadedComponents);
    };

    loadComponents();
  }, []);

  return (
    <Grid
      className="gap-5"
      _extra={{
        className: "grid-cols-2 md:grid-cols-3",
      }}
    >
      {componentsList.map((componentName) => {
        const Component = components[componentName];
        if (!Component) return null;

        return (
          <GridItem
            _extra={{
              className: "col-span-1",
            }}
            key={componentName}
          >
            <Box className="flex h-[250px] border border-outline-100  items-center overflow-hidden justify-center rounded-lg">
              <Box className="flex-1 w-full flex items-center bg-background-50 justify-center">
                <Component />
              </Box>
              <Box className="w-full py-2 px-4 bg-background-0">
                <Text className="text-left text-typography-700 text-lg font-medium">{componentName}</Text>
              </Box>
            </Box>
          </GridItem>
        );
      })}
    </Grid>
  );
}
