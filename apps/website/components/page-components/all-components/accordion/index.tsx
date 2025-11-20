import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Accordion } from '@/components/ui/accordion';
import { AccordionItem } from '@/components/ui/accordion';
import { AccordionHeader } from '@/components/ui/accordion';
import { AccordionTrigger } from '@/components/ui/accordion';
import { AccordionTitleText } from '@/components/ui/accordion';
import { AccordionContent } from '@/components/ui/accordion';
import { AccordionContentText } from '@/components/ui/accordion';
import { AccordionIcon } from '@/components/ui/accordion';
import { Divider } from '@/components/ui/divider';
import { ChevronDownIcon } from '@/components/ui/icon';
import { ChevronUpIcon } from '@/components/ui/icon';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Accordion
      type="single"
      isCollapsible={ true }
      isDisabled={ false }
      className=" w-[90%]"
    >
      <AccordionItem value="a">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon}  />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            To place an order, simply select the products you want, proceed to
            checkout, provide shipping and payment information, and finalize
            your purchase.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <Divider className="bg-border" />
      <AccordionItem value="b">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }) => {
              return (
                <>
                  <AccordionTitleText>
                    What payment methods do you accept?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={ChevronUpIcon}  />
                  ) : (
                    <AccordionIcon as={ChevronDownIcon} />
                  )}
                </>
              )
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            We accept all major credit cards, including Visa, Mastercard, and
            American Express. We also support payments through PayPal.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`}
      argTypes={{}}
      reactLive={{ Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionTitleText, AccordionContent, AccordionContentText, AccordionIcon, Divider, ChevronDownIcon, ChevronUpIcon }}
    />
  );
}