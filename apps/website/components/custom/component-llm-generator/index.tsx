'use client';

import { useEffect, useState } from 'react';
import { CopyButton } from '@/components/custom/copy-button';

interface ComponentLLMGeneratorProps {
  componentName: string;
  componentPath: string;
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

export const ComponentLLMGenerator = ({
  componentName,
  componentPath,
  children
}: ComponentLLMGeneratorProps) => {
  const [componentInfo, setComponentInfo] = useState<ComponentInfo | null>(null);
  const [llmContent, setLlmContent] = useState('');

  useEffect(() => {
    // Generate component-specific LLM content
    const generateLLMContent = () => {
      const content = `# ${componentName}

> Component: ${componentPath}
> Category: UI Component
> Last Updated: ${new Date().toISOString().split('T')[0]}

## Description
${componentInfo?.description || 'A React & React Native component from Gluestack UI.'}

## Key Features
${componentInfo?.features?.map(feature => `- ${feature}`).join('\n') || '- Responsive design\n- Cross-platform support\n- Customizable styling'}

## Props
${componentInfo?.props?.map(prop =>
  `- **${prop.name}** (${prop.type})${prop.required ? ' *required*' : ''}${prop.defaultValue ? ` = ${prop.defaultValue}` : ''}\n  ${prop.description || ''}`
).join('\n') || '- Standard props with TypeScript support'}

## Usage Examples
${componentInfo?.examples?.map((example, index) => `### Example ${index + 1}\n\`\`\`jsx\n${example}\n\`\`\``).join('\n\n') || 'Basic usage example'}

## Best Practices
${componentInfo?.bestPractices?.map(practice => `- ${practice}`).join('\n') || '- Use semantic HTML elements when possible\n- Ensure accessibility compliance\n- Test on all supported platforms'}

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

*This content was generated from ${componentPath} on ${new Date().toLocaleDateString()}`;

      setLlmContent(content);
    };

    // In a real implementation, you might fetch this from an API or generate it based on MDX content
    const mockComponentInfo: ComponentInfo = {
      name: componentName,
      description: `The ${componentName} component provides ${componentName.toLowerCase()} functionality for your application.`,
      props: [
        {
          name: 'variant',
          type: 'string',
          required: false,
          description: 'Determines the visual style of the component',
          options: ['default', 'outline', 'secondary', 'ghost'],
          defaultValue: 'default'
        },
        {
          name: 'size',
          type: 'string',
          required: false,
          description: 'Controls the size of the component',
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md'
        },
        {
          name: 'isDisabled',
          type: 'boolean',
          required: false,
          description: 'Disables user interaction with the component',
          defaultValue: 'false'
        }
      ],
      features: [
        'Fully responsive design',
        'Cross-platform support (iOS, Android, Web)',
        'Customizable with Tailwind CSS',
        'Accessibility compliant',
        'TypeScript support'
      ],
      examples: [
        `<${componentName} variant="default">
  <${componentName}Text>Click me</${componentName}Text>
</${componentName}>`,
        `<${componentName} size="lg" variant="outline">
  <${componentName}Icon><Icon /></${componentName}Icon>
  <${componentName}Text>Large button</${componentName}Text>
</${componentName}>`
      ],
      bestPractices: [
        'Always provide proper accessibility labels',
        'Use appropriate variants for different contexts',
        'Test on all target platforms',
        'Follow the component composition pattern'
      ]
    };

    setComponentInfo(mockComponentInfo);
    generateLLMContent();
  }, [componentName, componentPath]);

  return (
    <div className="relative group">
      {children}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton content={llmContent} />
      </div>
    </div>
  );
};