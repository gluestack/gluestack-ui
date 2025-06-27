import components from '../components.json';
import {
  getNestedComponents,
  type NestedComponents,
} from '../types/components';

export function getAllComponents(): NestedComponents {
  return getNestedComponents(components);
}

// Example usage:
/*
const components = getAllComponents();
// This will return an array of objects like:
[
  {
    category: "Typography",
    components: [
      { name: "Heading", path: "/ui/docs/components/heading", tags: ["rsc"] },
      { name: "Text", path: "/ui/docs/components/text", tags: ["rsc"] }
    ]
  },
  {
    category: "Layout",
    components: [
      { name: "Box", path: "/ui/docs/components/box", tags: ["rsc"] },
      // ... other layout components
    ]
  },
  // ... other categories
]
*/
