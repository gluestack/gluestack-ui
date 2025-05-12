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
import 'prismjs/themes/prism.css';

type CodeBlockProps = {
  className?: string;
  code: string;
  language?: 'jsx' | 'javascript' | 'ts' | 'tsx' | string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'jsx', className }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const handleCopy = () => {
    if (codeRef.current) {
      const text = codeRef.current.innerText; // Gets raw text from DOM
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }).catch(err => {
        console.error('Copy failed:', err);
      });
    }
  };

  return (
    <div className="relative group">
      <pre className={`language-${language} border rounded-lg max-h-[400px] overflow-y-auto p-4 ${className}`}>
        <code ref={codeRef} className={`language-${language}`}>
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
