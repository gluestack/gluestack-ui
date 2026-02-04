'use client';
import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const CopySnippetButton = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    const text = 'npx skills add gluestack/agent-skills';
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="relative inline-flex">
      {/* Custom Popover */}
      <div
        className={`absolute bottom-full left-1/2 mb-2 -translate-x-16 px-3 py-1.5 bg-foreground rounded-md whitespace-nowrap transition-all duration-200 ${
          copied
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-1 pointer-events-none'
        }`}
      >
        <span className="text-background text-xs">Copied to clipboard!</span>
        {/* Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
      </div>

      <button
        className="hover:bg-primary/10 rounded-full p-1"
        onClick={() => {
          copyToClipboard();
        }}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
    </div>
  );
};

export default CopySnippetButton;
