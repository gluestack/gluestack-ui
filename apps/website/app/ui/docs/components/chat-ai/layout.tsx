
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Chat AI Component | AI Chat Interface for React Native",
  description: "Build AI chat interfaces with a comprehensive set of components including conversations, messages, attachments, and prompt inputs. Perfect for creating AI-powered chat applications in React & React Native."
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