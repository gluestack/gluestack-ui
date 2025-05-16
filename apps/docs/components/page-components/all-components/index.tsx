import { useEffect, useState } from "react";

const componentsList = [
  "accordion",
  "avatar",
  "badge",
  "button",
  "card",
  "checkbox",
  "divider",
  "form-control",
  "grid",
  "heading",
  "hstack",
  "icon",
  "image",
  "input",
  "link",
  "menu",
  "modal",
  "popover",
  "pressable",
  "progress",
  "radio",
  "select",
  "slider",
  "spinner",
  "switch",
  "table",
  "tabs",
  "text",
  "textarea",
  "toast",
  "tooltip",
  "vstack"
];

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
    <div className="space-y-8">
      {componentsList.map((componentName) => {
        const Component = components[componentName];
        if (!Component) return null;
        
        return (
          <div key={componentName} className="border rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4 capitalize">{componentName}</h2>
            <Component />
          </div>
        );
      })}
    </div>
  );
}
