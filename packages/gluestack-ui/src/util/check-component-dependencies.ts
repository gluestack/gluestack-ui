import { getComponentDependencies } from '../dependencies';

interface AdditionalDependencies {
  components: string[];
}

export async function checkComponentDependencies(
  components: string[]
): Promise<AdditionalDependencies> {
  const additionalDependencies: AdditionalDependencies = {
    components: [],
  };

  const processedComponents = new Set<string>();

  const processComponent = async (component: string) => {
    if (processedComponents.has(component)) {
      return;
    }

    processedComponents.add(component);
    const dependencyConfig = await getComponentDependencies(component);

    // Add additional components
    if (dependencyConfig.additionalComponents) {
      for (const additionalComponent of dependencyConfig.additionalComponents) {
        if (!additionalDependencies.components.includes(additionalComponent)) {
          additionalDependencies.components.push(additionalComponent);
          // Recursively process dependencies of this component
          await processComponent(additionalComponent);
        }
      }
    }
  };

  // Process all requested components
  for (const component of components) {
    await processComponent(component);
  }

  return additionalDependencies;
}
