import { ComponentPreviewer } from "@/components/custom/component-previewer";
import { Textarea } from "@/components/ui/textarea";
import { TextareaInput } from "@/components/ui/textarea";

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Textarea
      size="{{size}}"
      isReadOnly={ {{isReadOnly}} }
      isInvalid={ {{isInvalid}} }
      isDisabled={ {{isDisabled}} }
      className="w-64"
    >
      <TextareaInput placeholder="Your text goes here..." />
    </Textarea>
  )
}`}
      argTypes={{
        size: {
          control: {
            type: "select",
          },
          options: ["sm", "md", "lg", "xl"],
          defaultValue: "md",
        },
        isReadOnly: {
          control: {
            type: "boolean",
          },
          defaultValue: false,
        },
        isInvalid: {
          control: {
            type: "boolean",
          },
          defaultValue: false,
        },
        isDisabled: {
          control: {
            type: "boolean",
          },
          defaultValue: false,
        },
      }}
      reactLive={{ Textarea, TextareaInput }}
    />
  );
}
