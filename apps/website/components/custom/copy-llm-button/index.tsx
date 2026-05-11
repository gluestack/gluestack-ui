'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckIcon, CopyIcon } from '@/components/ui/icon';
import { useToast } from '@/components/ui/toast';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

interface CopyLLMButtonProps {
  componentName: string;
  componentPath: string;
  className?: string;
}

export const CopyLLMButton = ({
  componentName,
  componentPath,
  className = ''
}: CopyLLMButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const generateLLMContent = () => {
    return `# ${componentName}

> Component: ${componentPath}
> Category: UI Component
> Last Updated: ${new Date().toISOString().split('T')[0]}

## Description
The ${componentName} component provides ${componentName.toLowerCase()} functionality for your application. It's designed to work seamlessly across React and React Native platforms with customizable styling through Tailwind CSS.

## Key Features
- Fully responsive design that adapts to different screen sizes
- Cross-platform support (iOS, Android, Web)
- Customizable with Tailwind CSS classes
- Built-in accessibility support
- TypeScript support with proper type definitions
- Consistent styling with Gluestack Design System

## Common Props
- **variant**: Controls the visual style (default, outline, secondary, ghost, destructive)
- **size**: Sets the component size (sm, md, lg)
- **isDisabled**: Disables user interaction when true
- **className**: Apply custom styles using Tailwind classes

## Usage Examples

### Basic Usage
\`\`\`jsx
<${componentName}>
  <${componentName}Text>Click me</${componentName}Text>
</${componentName}>
\`\`\`

### With Icon
\`\`\`jsx
<${componentName} variant="outline">
  <${componentName}Icon as={IconComponent} />
  <${componentName}Text>With Icon</${componentName}Text>
</${componentName}>
\`\`\`

### Different Sizes
\`\`\`jsx
<>
  <${componentName} size="sm">
    <${componentName}Text>Small</${componentName}Text>
  </${componentName}>

  <${componentName} size="md">
    <${componentName}Text>Medium</${componentName}Text>
  </${componentName}>

  <${componentName} size="lg">
    <${componentName}Text>Large</${componentName}Text>
  </${componentName}>
</>
\`\`\`

## Best Practices
1. Always provide appropriate accessibility labels
2. Use the correct variant for your use case
3. Ensure proper spacing between components
4. Test on all target platforms
5. Follow the component composition pattern

## For AI Assistants
When working with ${componentName}:
- Use it within the Gluestack UI ecosystem for consistency
- Follow the documented props and usage patterns
- Ensure proper accessibility attributes are set
- Test on both web and mobile platforms
- Use Tailwind CSS classes for styling
- Refer to the official documentation for advanced features

## Related Components
- Other components in the ${componentName.replace(/s$/, '')} family
- Container components for layout
- Icon components for visual elements
- Form components for user input

---

*This content was generated from ${componentPath} on ${new Date().toLocaleDateString()}*`;
  };

  const handleCopy = async () => {
    try {
      const content = generateLLMContent();
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      toast({
        title: 'Copied to clipboard',
        description: `${componentName} LLM content has been copied`,
        duration: 2000,
      });

      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      toast({
        title: 'Failed to copy',
        description: 'Please try again',
        variant: 'destructive',
        duration: 2000,
      });
    }
  };

  return (
    <Box className={`flex items-center gap-2 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={handleCopy}
        className="gap-1"
      >
        {isCopied ? (
          <CheckIcon className="w-3 h-3" />
        ) : (
          <CopyIcon className="w-3 h-3" />
        )}
        {isCopied ? 'Copied!' : 'Copy LLM'}
      </Button>
      <Text className="text-sm text-muted-foreground">
        Copy component LLM content
      </Text>
    </Box>
  );
};