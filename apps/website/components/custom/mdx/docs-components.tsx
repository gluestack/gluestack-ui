import React from 'react';
import { CodeBlock } from '@/components/custom/markdown/code-block';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Link } from '@/components/ui/link';
import { LI } from '@/components/custom/markdown/li';
import { InlineCode } from '@/components/docs-components/inline-code';
import { Note } from '@/components/custom/markdown/note';
import { OL } from '@/components/custom/markdown/ol';
import { UL } from '@/components/custom/markdown/ul';

// Type definitions
interface CodeProps {
  children: string;
  className?: string;
}

interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}

/**
 * Utility function to check if a URL contains specific domain patterns
 * Used to determine if links should open externally
 */
const isExternalLink = (href: string): boolean => {
  const externalPatterns = [
    'gluestack.io',
    'ui',
    'style', 
    'enterprise',
    'contact-us'
  ];
  
  return externalPatterns.some(pattern => href?.includes(pattern));
};

/**
 * Professional MDX component mappings for documentation
 * Provides consistent typography, spacing, and visual hierarchy
 */
export const docsComponents = {
  // Heading Components - Semantic hierarchy with professional typography
  h1: (props: ComponentProps) => (
    <Heading
      size="3xl"
      className="font-bold text-4xl text-typography-950 mt-8 mb-6 font-jakarta leading-tight"
      {...props}
    />
  ),

  h2: (props: ComponentProps) => (
    <Heading
      size="2xl"
      className="text-3xl font-bold text-typography-900 mt-10 mb-4 font-jakarta leading-tight border-b border-border-200 pb-2"
      {...props}
    />
  ),

  h3: (props: ComponentProps) => (
    <Heading
      size="xl"
      className="text-2xl font-semibold text-typography-900 mt-8 mb-3 font-jakarta leading-tight"
      {...props}
    />
  ),

  h4: (props: ComponentProps) => (
    <Heading
      size="lg"
      className="text-xl font-semibold text-typography-900 mt-6 mb-2.5 font-jakarta leading-tight"
      {...props}
    />
  ),

  h5: (props: ComponentProps) => (
    <Heading
      size="md"
      className="text-lg font-medium text-typography-900 mt-5 mb-2 font-jakarta leading-tight"
      {...props}
    />
  ),

  h6: (props: ComponentProps) => (
    <Heading
      size="sm"
      className="text-base font-medium text-typography-800 mt-4 mb-2 font-jakarta leading-tight uppercase tracking-wide"
      {...props}
    />
  ),

  // Text Components - Optimized for readability
  p: (props: ComponentProps) => (
    <Text 
      className="block mb-6 text-typography-700 font-inter leading-7 text-base" 
      {...props} 
    />
  ),

  // List Components - Professional spacing and hierarchy
  ul: (props: ComponentProps) => (
    <UL 
      {...props} 
      className="w-full mb-6 pl-6 space-y-2 text-typography-700" 
    />
  ),

  ol: (props: ComponentProps) => (
    <OL 
      {...props} 
      className="w-full mb-6 pl-6 space-y-2 text-typography-700" 
    />
  ),

  li: (props: ComponentProps) => (
    <LI 
      {...props} 
      className="w-full leading-7 marker:text-typography-500"
    >
      {props?.children}
    </LI>
  ),

  // Link Component - Professional styling with external link detection
  a: (props: ComponentProps) => (
    <Link
      isExternal={isExternalLink(props.href)}
      className="
        font-medium text-primary-600 
        underline underline-offset-2 
        decoration-primary-600/30 decoration-2
        hover:text-primary-700 hover:decoration-primary-700/50
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:rounded-sm inline-block
      "
      {...props}
    />
  ),

  // Layout Components
  wrapper: (props: ComponentProps) => (
    <div 
      className="mx-auto py-8" 
      {...props} 
    />
  ),

  // Code Components - Professional syntax highlighting
  pre: ({ children }: { children: React.ReactElement<CodeProps> }) => {
    const code = children?.props?.children || '';
    const language = children?.props?.className?.replace('language-', '') || 'tsx';
    
    return (
      <div className="my-6">
        <CodeBlock 
          code={code} 
          language={language}
        />
      </div>
    );
  },

  code: (props: ComponentProps) => (
    <InlineCode 
      className="
        px-1.5 py-0.5 
        bg-gray-100 dark:bg-gray-800 
        text-gray-800 dark:text-gray-200
        rounded-md text-sm font-mono
        border border-gray-200 dark:border-gray-700
      " 
      {...props} 
    />
  ),

  // Special Components
  blockquote: (props: ComponentProps) => (
    <Note 
      className="
        my-6 p-4 
        bg-blue-50 dark:bg-blue-950/30
        border-l-4 border-blue-400 dark:border-blue-600
        rounded-r-lg
      " 
      {...props} 
    />
  ),

  // Table Components - Professional table styling
  table: (props: ComponentProps) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border-200">
      <table 
        className="w-full border-collapse bg-background-0" 
        {...props} 
      />
    </div>
  ),

  thead: (props: ComponentProps) => (
    <thead 
      className="bg-background-50 dark:bg-background-900" 
      {...props} 
    />
  ),

  tbody: (props: ComponentProps) => (
    <tbody 
      className="divide-y divide-border-200" 
      {...props} 
    />
  ),

  tr: (props: ComponentProps) => (
    <tr 
      className="hover:bg-background-50/50 transition-colors duration-150" 
      {...props} 
    />
  ),

  th: (props: ComponentProps) => (
    <th 
      className="
        px-4 py-3 text-left text-sm font-semibold 
        text-typography-900 uppercase tracking-wider
        border-b border-border-200
      " 
      {...props} 
    />
  ),

  td: (props: ComponentProps) => (
    <td 
      className="
        px-4 py-3 text-sm text-typography-700 
        border-b border-border-100 last:border-b-0
      " 
      {...props} 
    />
  ),

  // Horizontal Rule
  hr: (props: ComponentProps) => (
    <hr 
      className="
        my-8 border-0 h-px 
        bg-gradient-to-r from-transparent via-border-300 to-transparent
      " 
      {...props} 
    />
  ),

  // Strong and Emphasis
  strong: (props: ComponentProps) => (
    <strong 
      className="font-semibold text-typography-900" 
      {...props} 
    />
  ),

  em: (props: ComponentProps) => (
    <em 
      className="italic text-typography-800" 
      {...props} 
    />
  ),
};