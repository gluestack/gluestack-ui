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

export const wrappedComponentTemplate = (processedContent: string) => {
  return `
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6 web:flex-col">
      ${processedContent.trim()}
        </ScrollView>
    </SafeAreaView>
  );
}`;
};
