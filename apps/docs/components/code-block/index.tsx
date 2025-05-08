// components/CodeBlock.tsx
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/themes/prism.css'; // Or use 'prism-tomorrow.css' for dark mode

type CodeBlockProps = {
  code: string;
  language?: 'jsx' | 'javascript' | 'ts' | 'tsx' | string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'jsx' }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className={`language-${language}`}>
        <p>hello</p>
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
