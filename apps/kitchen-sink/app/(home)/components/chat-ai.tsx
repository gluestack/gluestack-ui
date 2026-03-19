import { ChatAi } from '@/components/ui/chat-ai'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <ChatAi/>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  }
];

export default function ChatAiScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}