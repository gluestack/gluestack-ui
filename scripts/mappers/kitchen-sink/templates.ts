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
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export default function ComponentExamples() {
  return (
        <KeyboardAwareScrollView enableAutomaticScroll showsVerticalScrollIndicator={false} className='bg-background-0 flex-1 px-3 pb-6 web:flex-col md:max-w-[1230px] w-full mx-auto'>
      ${processedContent.trim()}
        </KeyboardAwareScrollView>
  );
}`;
};
