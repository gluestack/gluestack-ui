export const componentPreviewerTemplate = (
  code: string,
  argTypes: string,
  title: string
) => `<ComponentPreviewer props={${argTypes}} title={${title}}>
  {props => ${code
    .replace(/function\s+\w+\s*\(\)/, '')
    .replace(/}$/, '')
    .replace(/="{{(\w+)}}"/g, '={props.$1}')
    .replace(/={\s*{{\s*(\w+)\s*}}\s*}/g, '={props.$1}')
    .replace(/\\\\/g, '')
    .trim()}}}
</ComponentPreviewer>`;

export const importTemplate = (imports: string[], importPath: string) => {
  return `import { ${imports.join(', ')} } from '${importPath}'`;
};

export const wrappedComponentTemplate = (
  componentDefinitions: string,
  variantsArray: string
) => {
  return `
import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

${componentDefinitions}

const COMPONENT_VARIANTS = [
${variantsArray}
];

export default function ComponentExamples() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}`;
};
