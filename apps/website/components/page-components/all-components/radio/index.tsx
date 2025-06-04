import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Radio } from '@/components/ui/radio';
import { RadioGroup } from '@/components/ui/radio';
import { RadioIndicator } from '@/components/ui/radio';
import { RadioIcon } from '@/components/ui/radio';
import { RadioLabel } from '@/components/ui/radio';
import { CircleIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <RadioGroup>
      <Radio value="{{value}}" size="{{size}}" isInvalid={ {{isInvalid}} } isDisabled={ {{isDisabled}} }>
        <RadioIndicator>
          <RadioIcon as={CircleIcon} />
        </RadioIndicator>
        <RadioLabel>Label</RadioLabel>
      </Radio>
    </RadioGroup>
  )
}`}
      argTypes={{
        size: {
          control: {
            type: 'select',
          },
          options: ['sm', 'md', 'lg'],
          defaultValue: 'md',
        },
        isInvalid: {
          control: {
            type: 'boolean',
          },
          defaultValue: false,
        },
        isDisabled: {
          control: {
            type: 'boolean',
          },
          defaultValue: false,
        },
      }}
      reactLive={{
        Radio,
        RadioGroup,
        RadioIndicator,
        RadioIcon,
        RadioLabel,
        CircleIcon,
      }}
    />
  );
}
