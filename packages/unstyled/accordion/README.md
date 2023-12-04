# `@gluestack-ui/accordion`

The Accordion component is a versatile and interactive user interface element, designed to efficiently organize and present content in a compact space.

## Installation

To install the component, run the following command in your terminal. This will add the component to your project's dependencies and allow you to use it in your project.

```sh
npx install @gluestack-ui/accordion
```

## Usage

```jsx
// import the styles
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
  Icon,
  TitleText,
  ContentText,
} from '../components/core/accordion/styled-components';

// import the createAccordion function
import { createAccordion } from '@gluestack-ui/accordion';

// Understanding the API
const Accordion = createAccordion({
  Root,
  Item,
  Header,
  Trigger,
  Content,
  Icon,
  TitleText,
  ContentText,
});

// Using the Accordion component
export default () => (
  <Accordion>
    <AccordionItem value="a">
      <AccordionHeader>
        <AccordionTrigger>
          {({ isExpanded }: { isExpanded: boolean }) => {
            return (
              <>
                <AccordionTitleText>
                  How do I place an order?
                </AccordionTitleText>
                {isExpanded ? (
                  // ChevronUpIcon is imported from 'lucide-react-native'
                  <AccordionIcon as={ChevronUpIcon} />
                ) : (
                  // ChevronDownIcon is imported from 'lucide-react-native'
                  <AccordionIcon as={ChevronDownIcon} />
                )}
              </>
            );
          }}
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent>
        <AccordionContentText>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </AccordionContentText>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/).
