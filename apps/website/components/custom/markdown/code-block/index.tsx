import React, { useEffect, useRef, useState, useContext } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-diff';
import { ThemeContext } from '@/utils/context/theme-context';
import './styles.css';
import { Icon } from '@/components/ui/icon';
import { CheckIcon, CopyIcon } from 'lucide-react-native';
import * as prettier from 'prettier';
import prettierPluginBabel from 'prettier/plugins/babel';
import prettierPluginEstree from 'prettier/plugins/estree';
import prettierPluginTypescript from 'prettier/plugins/typescript';
import prettierPluginCSS from 'prettier/plugins/postcss';
import prettierPluginHTML from 'prettier/plugins/html';
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
  code: string;
  language?: 'jsx' | 'javascript' | 'ts' | 'tsx' | 'patch' | string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'jsx',
  className,
}) => {
  const [copied, setCopied] = useState(false);
  const [formattedCode, setFormattedCode] = useState(code);
  const codeRef = useRef<HTMLElement>(null);
  const { colorMode } = useContext(ThemeContext);
  const currentTheme = themes[colorMode as keyof typeof themes];

  useEffect(() => {
    const formatCode = async () => {
      try {
        const parser = language === 'tsx' ? 'typescript' : language;
        const formatted = await prettier.format(code, {
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
      } catch (error) {
        console.error('Error formatting code:', error);
        setFormattedCode(code);
      }
    };
    formatCode();
  }, [code, language]);

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
        className={`language-${language} border border-outline-100 rounded-lg max-h-[400px] overflow-y-auto p-6 scrollbar-hide ${className}`}
        style={themeStyles}
      >
        <code ref={codeRef}>{formattedCode}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs px-4 py-1 rounded-md transition-opacity opacity-0 group-hover:opacity-100"
      >
        <div className="flex items-center gap-2">
          {/* @ts-ignore */}
          <Icon
            as={CopyIcon}
            size={16}
            className={` ${copied ? 'text-green-500' : ''}`}
          />
          {copied ? 'Copied!' : ''}
        </div>
      </button>
    </div>
  );
};
