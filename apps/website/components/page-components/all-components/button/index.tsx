import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Button variant="{{variant}}" size="{{size}}" action="{{action}}">
        <ButtonText>Click me</ButtonText>
    </Button>
  )
}`}
      argTypes={{
        variant: {
          control: {
            type: 'select',
          },
          options: ['solid', 'outline', 'link'],
          defaultValue: 'solid',
        },
        action: {
          control: {
            type: 'select',
          },
          options: ['primary', 'secondary', 'positive', 'negative'],
          defaultValue: 'primary',
        },
        size: {
          control: {
            type: 'select',
          },
          options: ['xs', 'sm', 'md', 'lg'],
          defaultValue: 'md',
        },
      }}
      reactLive={{ Button, ButtonText }}
    />
  );
}
