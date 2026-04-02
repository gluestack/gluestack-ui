import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { ChatAi } from '@/components/ui/chat-ai';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <ChatAi/>
  )
}`}
      argTypes={{}}
      reactLive={{ ChatAi }}
      
    />
  );
}