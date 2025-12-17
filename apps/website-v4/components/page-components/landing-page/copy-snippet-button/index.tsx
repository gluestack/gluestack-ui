'use client';
import React, { useState } from 'react';
import { CheckIcon, CopyIcon, Icon } from '@/components/ui/icon';

const CopySnippetButton = () => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = async () => {
    const text = 'npm create gluestack@latest';
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
        className={`absolute bottom-full left-1/2 mb-2 -translate-x-16 px-3 py-1.5 bg-background-800 rounded-md whitespace-nowrap transition-all duration-200 ${
          copied
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-1 pointer-events-none'
        }`}
      >
        <span className="text-typography-50 text-xs">Copied to clipboard!</span>
        {/* Arrow */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-background-800" />
      </div>

      <button
        className="hover:bg-primary-100/10 rounded-full p-1"
        onClick={() => {
          copyToClipboard();
        }}
      >
        {copied ? (
          <Icon as={CheckIcon} className="text-success-500" />
        ) : (
          <Icon as={CopyIcon} className="text-primary-100" />
        )}
      </button>
    </div>
  );
};

export default CopySnippetButton;
