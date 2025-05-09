import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/components/code-block";
import React from "react";

interface CodeProps {
  children: string;
  className?: string;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Define custom heading styles
    h1: (props) => <h1 className=" text-4xl  font-bold" {...props} />,
    h2: (props) => <h2 className="text-2xl font-bold" {...props} />,
    h3: (props) => <h3 className="text-xl font-bold" {...props} />,
    // Define paragraph styles
    p: (props) => <p className="text-base" {...props} />,
    // Define container styles
    wrapper: (props) => (
      <div className="max-w-prose mx-auto py-8" {...props} />
    ),
    // Handle code blocks
    pre: ({ children }: { children: React.ReactElement<CodeProps> }) => {
      const code = children?.props?.children || "";
      const language =
        children?.props?.className?.replace("language-", "") || "jsx";
      return <CodeBlock code={code} language={language} />;
    },
    // Add more custom components as needed
  };
}
