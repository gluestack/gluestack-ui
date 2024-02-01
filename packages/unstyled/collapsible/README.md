# `@gluestack-ui/collapsible`

The Collapsible component is a versatile and interactive user interface element, designed to efficiently organize and present content in a compact space.

## Installation

To install the component, run the following command in your terminal. This will add the component to your project's dependencies and allow you to use it in your project.

```sh
npx install @gluestack-ui/collapsible
```

## Usage

```jsx
// import the styles
import {
  Root,
  Trigger,
  Content,
  Icon,
  TitleText,
  ContentText,
} from '../components/core/collapsible/styled-components';

// import the createAccordion function
import { createAccordion } from '@gluestack-ui/collapsible';

// Understanding the API
const Collapsible = createCollapsible({
  Root,
  Item,
  Header,
  Trigger,
  Content,
  Icon,
  TitleText,
  ContentText,
});

// Using the Collapsible component
export default () => (
  <Collapsible>
    <Collapsible.Trigger>
      {({ open }: { open: boolean }) => {
        return (
          <Collapsible.TriggerText>
            {open ? 'Expand' : 'Collapse'}
          </Collapsible.TriggerText>
        );
      }}
    </Collapsible.Trigger>
    <Collapsible.Content>
      <Collapsible.ContentText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      </Collapsible.ContentText>
    </Collapsible.Content>
  </Collapsible>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/).
