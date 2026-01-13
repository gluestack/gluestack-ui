import { useColorMode } from '@/app/provider';
import { Icon } from '@/components/ui/icon';
import { CopyIcon } from 'lucide-react-native';
import * as prettier from 'prettier';
import prettierPluginBabel from 'prettier/plugins/babel';
import prettierPluginEstree from 'prettier/plugins/estree';
import prettierPluginHTML from 'prettier/plugins/html';
import prettierPluginCSS from 'prettier/plugins/postcss';
import prettierPluginTypescript from 'prettier/plugins/typescript';
import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-diff';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
// Theme configurations
const themes = {
  light: {
    background: '#F5F5F5',
    fontFamily: 'var(--font-mono-space-mono)',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '24px',
    text: '#728FCB',
    comment: '#8E908C',
    keyword: '#728FCB',
    string: '#B29762',
    function: '#063289',
    number: '#728FCB',
    operator: '#063289',
    punctuation: '#B6AD9A',
  },
  dark: {
    background: '#171717',
    fontFamily: 'var(--font-mono-space-mono)',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '24px',
    text: '#9CDCFE',
    comment: '#D4D4D4',
    keyword: '#9CDCFE',
    string: '#CE9178',
    function: '#DCDCAA',
    number: '#9CDCFE',
    operator: '#569CD6',
    punctuation: '#D4D4D4',
  },
};

type CodeBlockProps = {
  className?: string;
  code: string | React.ReactNode;
  language?: 'jsx' | 'javascript' | 'ts' | 'tsx' | 'patch' | string;
};

// Helper function to extract text from React children
const extractTextFromChildren = (children: React.ReactNode): string => {
  if (typeof children === 'string') {
    return children;
  }
  if (typeof children === 'number') {
    return String(children);
  }
  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join('');
  }
  if (React.isValidElement(children) && children.props) {
    return extractTextFromChildren((children.props as any).children);
  }
  return '';
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'tsx',
  className,
}) => {
  const [copied, setCopied] = useState(false);
  // Ensure code is always a string by extracting text from React children
  const codeString = extractTextFromChildren(code);
  const [formattedCode, setFormattedCode] = useState(codeString);
  const codeRef = useRef<HTMLElement>(null);
  const { colorMode } = useColorMode();
  const currentTheme = themes[colorMode as keyof typeof themes];

  useEffect(() => {
    const formatCode = async () => {
      try {
        // Map languages to parsers and check if formatting is supported
        let parser = language;
        let shouldFormat = true;

        // Map common language aliases to parser names
        if (language === 'tsx') {
          parser = 'typescript';
        } else if (language === 'ts') {
          parser = 'typescript';
        } else if (language === 'jsx' || language === 'javascript') {
          parser = 'babel';
        } else if (language === 'css') {
          parser = 'css';
        } else if (language === 'html' || language === 'markup') {
          parser = 'html';
        } else if (language === 'json') {
          parser = 'json';
        } else {
          // Don't format unsupported languages like bash, diff, etc.
          shouldFormat = false;
        }

        if (shouldFormat) {
          const formatted = await prettier.format(codeString, {
            parser,
            plugins: [
              prettierPluginBabel,
              prettierPluginEstree,
              prettierPluginTypescript,
              prettierPluginCSS,
              prettierPluginHTML,
            ],
            semi: true,
            singleQuote: true,
            trailingComma: 'es5',
          });
          setFormattedCode(formatted);
        } else {
          // Skip formatting for unsupported languages
          setFormattedCode(codeString);
        }
      } catch (error) {
        console.error('Error formatting code:', error);
        setFormattedCode(codeString);
      }
    };
    formatCode();
  }, [code, language, codeString]);

  useEffect(() => {
    Prism.highlightAll();
  }, [formattedCode]);

  const handleCopy = () => {
    if (codeRef.current) {
      const text = codeRef.current.innerText;
      navigator.clipboard
        .writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error('Copy failed:', err);
        });
    }
  };

  const themeStyles = {
    '--prism-background': currentTheme.background,
    '--prism-text': currentTheme.text,
    '--prism-font-size': currentTheme.fontSize,
    '--prism-font-weight': currentTheme.fontWeight,
    '--prism-font-family': currentTheme.fontFamily,
    '--prism-line-height': currentTheme.lineHeight,
    '--prism-comment': currentTheme.comment,
    '--prism-keyword': currentTheme.keyword,
    '--prism-string': currentTheme.string,
    '--prism-function': currentTheme.function,
    '--prism-number': currentTheme.number,
    '--prism-operator': currentTheme.operator,
    '--prism-punctuation': currentTheme.punctuation,
  } as React.CSSProperties;

  return (
    <div className="relative group mb-5">
      <pre
        className={`language-${language} border border-border rounded-lg max-h-[400px] overflow-y-auto p-6 scrollbar-hide ${className}`}
        style={themeStyles}
        suppressHydrationWarning
      >
        <code ref={codeRef} suppressHydrationWarning>
          {formattedCode}
        </code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs px-4 py-1 rounded-md transition-opacity opacity-0 group-hover:opacity-100 hover:bg-accent"
      >
        <div className="flex items-center gap-2">
          {/* @ts-ignore */}
          <Icon
            as={CopyIcon}
            size="sm"
            className={`text-muted-foreground ${copied ? 'text-green-500' : ''}`}
          />
          <span className="text-muted-foreground">
            {copied ? 'Copied!' : ''}
          </span>
        </div>
      </button>
    </div>
  );
};
