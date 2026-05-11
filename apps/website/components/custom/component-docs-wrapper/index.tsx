'use client';

import { ComponentLLMGenerator } from '@/components/custom/component-llm-generator';

interface ComponentDocsWrapperProps {
  componentName: string;
  componentPath: string;
  children: React.ReactNode;
}

export const ComponentDocsWrapper = ({
  componentName,
  componentPath,
  children
}: ComponentDocsWrapperProps) => {
  return (
    <ComponentLLMGenerator componentName={componentName} componentPath={componentPath}>
      <div className="relative">
        {children}
      </div>
    </ComponentLLMGenerator>
  );
};