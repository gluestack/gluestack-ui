# Chat AI Component

A compound component for building chat AI interfaces with a custom API.

## Installation

Make sure you have `@legendapp/list` installed:

```bash
npm install @legendapp/list
```

## Basic Usage

### Using the `useChat` Hook (Recommended)

The `useChat` hook handles all the state management and API calls for you.

```tsx
import {
  Chat,
  ChatMessages,
  ChatInput,
  useChat,
} from '@/components/ui/chat-ai';

function MyChatScreen() {
  const { messages, send, loading, error } = useChat({
    api: 'https://api.example.com/chat',
  });

  return (
    <Chat
      messages={messages}
      loading={loading}
      error={error}
      onSend={send}
      className="flex-1"
    >
      <ChatMessages className="flex-1 px-4" />
      <ChatInput />
    </Chat>
  );
}
```

### Manual Control (Advanced)

If you want to handle the API calls yourself:

```tsx
import { useState } from 'react';
import {
  Chat,
  ChatMessages,
  ChatMessage,
  ChatInput,
} from '@/components/ui/chat-ai';
import type { ChatMessage as ChatMessageType } from '@/components/ui/chat-ai';

function MyCustomChat() {
  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (input: string) => {
    setLoading(true);

    // Add user message
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);

    // Call your API
    const response = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
    });
    const data = await response.json();

    // Add assistant response
    const assistantMessage: ChatMessageType = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      content: data.content,
    };
    setMessages((prev) => [...prev, assistantMessage]);
    setLoading(false);
  };

  return (
    <Chat
      messages={messages}
      loading={loading}
      onSend={handleSend}
      className="flex-1"
    >
      <ChatMessages className="flex-1 px-4" />
      <ChatInput />
    </Chat>
  );
}
```

## Styling ChatMessage

The `ChatMessage` component accepts `className` and `textClassName` props for customization:

```tsx
<Chat messages={messages} onSend={send} className="flex-1">
  <ChatMessages
    className="flex-1 px-4"
    renderItem={({ item }) => (
      <ChatMessage
        message={item}
        className={item.role === 'user' ? 'bg-blue-500' : 'bg-gray-200'}
        textClassName={item.role === 'user' ? 'text-white' : 'text-black'}
      />
    )}
  />
  <ChatInput />
</Chat>
```

## Custom Send Button

You can customize the send button in `ChatInput`:

```tsx
<ChatInput
  renderSendButton={(onPress, disabled) => (
    <Button onPress={onPress} disabled={disabled}>
      <Icon name="send" />
    </Button>
  )}
/>
```

## API Reference

### `useChat` Hook

```typescript
const {
  messages,    // ChatMessage[]
  send,        // (input: string) => void
  loading,     // boolean
  error,       // Error | null
  reset,       // () => void
  setMessages, // (messages: ChatMessage[]) => void
  status,      // 'idle' | 'loading' | 'error'
} = useChat({
  api: string,              // Your API endpoint
  initialMessages?: [],   // Optional initial messages
});
```

### Components

| Component      | Props                                                                            | Description                      |
| -------------- | -------------------------------------------------------------------------------- | -------------------------------- |
| `Chat`         | `messages`, `loading?`, `error?`, `onSend?`, `className?`                        | Root component, provides context |
| `ChatMessages` | `className?`, `renderItem?`                                                      | LegendList that renders messages |
| `ChatMessage`  | `message`, `className?`, `textClassName?`                                        | Individual message bubble        |
| `ChatInput`    | `onSend?`, `placeholder?`, `inputProps?`, `sendButtonText?`, `renderSendButton?` | Input with send button           |

### Types

```typescript
interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp?: number;
}
```

## API Contract

Your API endpoint should accept POST requests with:

```json
{
  "message": "user's message",
  "messages": [
    /* array of all messages */
  ]
}
```

And return:

```json
{
  "message": "assistant's response",
  // or
  "content": "assistant's response"
}
```

## Features

- **Compound API**: Share state seamlessly between components
- **LegendList**: High-performance list rendering
- **Customizable**: Style messages and input to match your design
- **TypeScript**: Full type safety
- **Error Handling**: Built-in error state management
- **Loading States**: Visual feedback during API calls
