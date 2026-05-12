'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckIcon, CopyIcon } from '@/components/ui/icon';
import { useToast } from '@/components/ui/toast';

interface CopyButtonProps {
  content: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const CopyButton = ({
  content,
  className = '',
  variant = 'ghost',
  size = 'sm'
}: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      toast({
        title: 'Copied to clipboard',
        description: 'Component LLM content has been copied',
        duration: 2000,
      });

      // Reset after 2 seconds
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
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      className={`gap-1 ${className}`}
    >
      {isCopied ? (
        <CheckIcon className="w-3 h-3" />
      ) : (
        <CopyIcon className="w-3 h-3" />
      )}
      {isCopied ? 'Copied!' : 'Copy LLM'}
    </Button>
  );
};