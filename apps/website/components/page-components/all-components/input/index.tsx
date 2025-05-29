import { ComponentPreviewer } from "@/components/custom/component-previewer";
import { Input } from "@/components/ui/input";
import { InputField } from "@/components/ui/input";

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Input variant="{{variant}}" size="{{size}}" isDisabled={ {{isDisabled}} } isInvalid={ {{isInvalid}} } isReadOnly={ {{isReadOnly}} }>
        <InputField placeholder="Enter Text here..." />
    </Input>
  )
}`}
      argTypes={{
        isDisabled: {
          control: {
            type: "boolean",
          },
          defaultValue: true,
        },
        isInvalid: {
          control: {
            type: "boolean",
          },
          defaultValue: false,
        },
        isReadOnly: {
          control: {
            type: "boolean",
          },
          defaultValue: false,
        },
        variant: {
          control: {
            type: "select",
          },
          options: ["outline", "rounded", "underlined"],
          defaultValue: "outline",
        },
        size: {
          control: {
            type: "select",
          },
          options: ["sm", "md", "lg", "xl"],
          defaultValue: "md",
        },
      }}
      reactLive={{ Input, InputField }}
    />
  );
}
