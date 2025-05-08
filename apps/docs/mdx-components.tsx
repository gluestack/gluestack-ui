import type { MDXComponents } from 'mdx/types'
import { View, Text } from "react-native"
import CodeBlock from '@/components/code-block'
import React from 'react'

interface CodeProps {
  children: string;
  className?: string;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Define custom heading styles
    h1: (props) => <p className=" text-3xl font-bold" {...props} />,
    h2: (props) => <p className="text-2xl font-bold" {...props} />,
    h3: (props) => <p className="text-xl font-medium" {...props} />,
    // Define paragraph styles
    p: (props) => <Text className="text-lg" {...props} />,
    // Define container styles
    wrapper: (props) => <View className="max-w-prose mx-auto py-8" {...props} />,
    // Handle code blocks
    pre: ({ children }: { children: React.ReactElement<CodeProps> }) => {
      const code = children?.props?.children || '';
      const language = children?.props?.className?.replace('language-', '') || 'jsx';
      return <CodeBlock code={code} language={language} />;
    },
    // Add more custom components as needed
  }
}