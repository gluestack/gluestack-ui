export const componentPreviewerTemplate = (
  imports: string,
  code: string,
  argTypes: string
) => `import { ComponentPreviewer } from '@/components/custom/component-previewer';

${imports}

export default function Example() {
  return (
    <ComponentPreviewer props={${argTypes}}>
      {props => ${code.replace(/function\s+\w+\s*\(\)\s*{\s*return\s*/, '').replace(/}$/, '')
        .replace(/="{{(\w+)}}"/g, "={props.$1}")
        .replace(/={\s*{{\s*(\w+)\s*}}\s*}/g, "={props.$1}")}}
    </ComponentPreviewer>
  );
}`;


export const codePreviewerTemplate = (
  code: string,
  argTypes: string
) => `<ComponentPreviewer props={${argTypes}}>
  {props => ${code
    .replace(/function\s+\w+\s*\(\)/, '')
    .replace(/}$/, '')
    .replace(/="{{(\w+)}}"/g, "={props.$1}")
    .replace(/={\s*{{\s*(\w+)\s*}}\s*}/g, "={props.$1}")
    .replace(/\\\\/g, '')
    .trim()}}}
</ComponentPreviewer>`; 