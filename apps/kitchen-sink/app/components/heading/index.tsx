import { CodePreviewer } from '@/components/custom/code-previewer';
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';

<CodePreviewer
  code={`function Example() {
  return <Heading>I am a Heading</Heading>
}`}
  argTypes={{}}
  reactLive={{ Heading }}
/>

<CodePreviewer
  code={`function App() { 
  const sizes = [ 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl',
'4xl', '5xl' ]; 
return (
<Center>
  {sizes.map((size, index) => (
  <Heading size={size} key={index}>
    {size}
  </Heading>
  ))}
</Center>
); }`}
  argTypes={{}}
  reactLive={{ Heading, Center }}
/>