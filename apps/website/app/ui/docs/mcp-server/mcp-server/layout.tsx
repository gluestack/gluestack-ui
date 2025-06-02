
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    "title": "MCP Server | gluestack-ui | Code Generator",
    "pageTitle": "MCP Server",
    "description": "Learn about the MCP Server – a tool that generates complete, consistent codebases using gluestack-ui v2 components. Watch the demo and explore the GitHub repository."
}

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}