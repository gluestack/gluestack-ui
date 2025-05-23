export const componentPreviewerTemplate = (
  code: string,
  argTypes: string,
  title: string
) => `<ComponentPreviewer props={${argTypes}} title={${title}}>
  {props => ${code
    .replace(/function\s+\w+\s*\(\)/, "")
    .replace(/}$/, "")
    .replace(/="{{(\w+)}}"/g, "={props.$1}")
    .replace(/={\s*{{\s*(\w+)\s*}}\s*}/g, "={props.$1}")
    .replace(/\\\\/g, "")
    .trim()}}}
</ComponentPreviewer>`;

export const importTemplate = (imports: string[], importPath: string) => {
  return `import { ${imports.join(", ")} } from '${importPath}'`;
};

export const wrappedComponentTemplate = (processedContent: string) => {
  return `
import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
        <ScrollView className="bg-background-0" contentContainerClassName="px-3 pb-6">
      ${processedContent.trim()}
        </ScrollView>
    </SafeAreaView>
  );
}`;
};
