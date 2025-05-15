import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import './styles.css';

// Theme configurations
const themes = {
  light: {
    background: '#F5F5F5',
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
    background: '#2d2d2d',
    text: '#ccc',
    comment: '#999',
    keyword: '#c5c8c6',
    string: '#99c794',
    function: '#f99157',
    number: '#f99157',
    operator: '#66d9ef',
    punctuation: '#ccc',
  },
};

type CodeBlockProps = {
  className?: string;
  code: string;
  language?: 'jsx' | 'javascript' | 'ts' | 'tsx' | string;
  theme?: 'light' | 'dark';
};

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'jsx', 
  className,
  theme = 'light' 
}) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);
  const currentTheme = themes[theme];

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleCopy = () => {
    if (codeRef.current) {
      const text = codeRef.current.innerText;
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(err => {
        console.error('Copy failed:', err);
      });
    }
  };

  const themeStyles = {
    '--prism-background': currentTheme.background,
    '--prism-text': currentTheme.text,
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
        className={`language-${language} border rounded-lg max-h-[400px] overflow-y-auto p-4 ${className}`}
        style={themeStyles}
      >
        <code ref={codeRef}>
          {code}
        </code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-xs px-2 py-1 rounded-md transition-opacity opacity-0 group-hover:opacity-100"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CodeBlock;
