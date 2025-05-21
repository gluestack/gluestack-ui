import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Image } from '@/components/ui/image';

export default function Example() {
  return (
    <ComponentPreviewer props={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "2xs",
      "xs",
      "sm",
      "md",
      "lg",
      "xl",
      "2xl"
    ],
    "defaultValue": "md"
  }
}}>
      {props => {
  return (
    <Image
      size={props.size}
      source={{
        uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      }}
      alt="image"
    />
  )
}
    </ComponentPreviewer>
  );
}