
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "gluestack-ui Chat Component | AI Chat UI for React Native & Web",
  description: "Composable chat UI components for building AI chatbot interfaces in React Native and Expo. Works with any AI backend including Vercel AI SDK, OpenAI, and more."
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