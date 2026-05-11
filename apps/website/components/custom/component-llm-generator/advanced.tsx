'use client';

import { useEffect, useState } from 'react';
import { CopyButton } from '@/components/custom/copy-button';

interface ComponentLLMGeneratorProps {
  componentName: string;
  componentPath: string;
  mdxContent: string;
  children: React.ReactNode;
}

interface ComponentInfo {
  name: string;
  description: string;
  props: {
    name: string;
    type: string;
    required?: boolean;
    description?: string;
    defaultValue?: string;
    options?: string[];
  }[];
  features: string[];
  examples: string[];
  bestPractices: string[];
}

export const AdvancedComponentLLMGenerator = ({
  componentName,
  componentPath,
  mdxContent,
  children
}: ComponentLLMGeneratorProps) => {
  const [llmContent, setLlmContent] = useState('');

  useEffect(() => {
    // Extract information from MDX content
    const extractComponentInfo = () => {
      // Extract description (first paragraph after title)
      const descriptionMatch = mdxContent.match(/# [^\n]+\n\n([^#\n]+)/);
      const description = descriptionMatch ? descriptionMatch[1].trim() : '';

      // Extract props table
      const propsTableMatch = mdxContent.match(/### Props[\s\S]*?<TableBody[\s\S]*?<\/Table>/);
      const props: ComponentInfo['props'] = [];

      if (propsTableMatch) {
        // Extract rows from table
        const rows = propsTableMatch[0].match(/<TableRow[\s\S]*?<\/TableRow>/g) || [];
        rows.forEach(row => {
          const nameMatch = row.match(/<TableCell>\s*<InlineCode>([^<]+)<\/InlineCode>\s*<\/TableCell>/);
          const typeMatch = row.match(/<TableCell>([^<]+)<\/TableCell>/);
          const requiredMatch = row.match(/<TableCell>\s*\*required\*\s*<\/TableCell>/);
          const descMatch = row.match(/<TableCell>([^<]+)<\/TableCell>/);
          const defaultMatch = row.match(/<TableCell>=\s*([^<]+)\s*<\/TableCell>/);

          if (nameMatch && typeMatch) {
            props.push({
              name: nameMatch[1],
              type: typeMatch[1],
              required: requiredMatch ? true : false,
              description: descMatch ? descMatch[1] : '',
              defaultValue: defaultMatch ? defaultMatch[1] : undefined
            });
          }
        });
      }

      // Extract features
      const featuresMatch = mdxContent.match(/### Features[\s\S]*?(?=###|$)/);
      const features = featuresMatch
        ? featuresMatch[0].split('\n').slice(1).map(f => f.replace(/^[-*]\s*/, '')).filter(f => f)
        : [];

      // Extract examples (CodePreviewer blocks)
      const examples = mdxContent.match(/<CodePreviewer[^>]*>[\s\S]*?<\/CodePreviewer>/g) || [];
      const exampleCode = examples.map(example => {
        // Extract code from CodePreviewer
        const codeMatch = example.match(/code={`([^`]+)`}/);
        return codeMatch ? codeMatch[1] : '';
      }).filter(code => code);

      // Extract best practices
      const bestPracticesMatch = mdxContent.match(/### Best Practices[\s\S]*?(?=###|$)/);
      const bestPractices = bestPracticesMatch
        ? bestPracticesMatch[0].split('\n').slice(1).map(f => f.replace(/^[-*]\s*/, '')).filter(f => f)
        : [];

      // Generate LLM content
      const content = `# ${componentName}

> Component: ${componentPath}
> Category: UI Component
> Last Updated: ${new Date().toISOString().split('T')[0]}

## Description
${description}

## Key Features
${features.length > 0 ? features.map(feature => `- ${feature}`).join('\n') : '- Responsive design\n- Cross-platform support\n- Customizable styling'}

## Props
${props.length > 0 ? props.map(prop =>
  `- **${prop.name}** (${prop.type})${prop.required ? ' *required*' : ''}${prop.defaultValue ? \` = \${prop.defaultValue}\` : ''}\n  ${prop.description || ''}`
).join('\n') : '- Standard props with TypeScript support'}

## Usage Examples
${exampleCode.map((code, index) => \`### Example \${index + 1}
\`\`\`jsx
\${code}
\`\`\`\`).join('\n\n')}

## Best Practices
${bestPractices.length > 0 ? bestPractices.map(practice => `- ${practice}`).join('\n') : '- Use semantic HTML elements when possible\n- Ensure accessibility compliance\n- Test on all supported platforms'}

## For AI Assistants
When working with ${componentName}:
- Use it within the Gluestack UI ecosystem
- Follow the documented props and patterns
- Ensure proper accessibility attributes
- Test on both web and mobile platforms
- Use Tailwind CSS classes for styling

## Related Components
- Check the Gluestack UI documentation for more components
- Follow the component composition patterns
- Use the provided styling tokens

---

*This content was generated from ${componentPath} on ${new Date().toLocaleDateString()}*`;

      setLlmContent(content);
    };

    extractComponentInfo();
  }, [componentName, componentPath, mdxContent]);

  return (
    <div className="relative group">
      {children}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <CopyButton content={llmContent} />
      </div>
    </div>
  );
};