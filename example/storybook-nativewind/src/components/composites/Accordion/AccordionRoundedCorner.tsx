import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionContentText,
  AccordionTitleText,
  AccordionIcon,
} from '@custom-ui/themed';
import { MinusIcon, PlusIcon } from 'lucide-react-native';
import React from 'react';

const AccordionRoundedCorners = ({ ...props }: any) => {
  return (
    <Accordion {...props} size={'md'} shadowColor="transparent">
      <AccordionItem value="item-1" borderRadius="$lg">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={MinusIcon} mr="$3" />
                  ) : (
                    <AccordionIcon as={PlusIcon} mr="$3" />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent pb="$5">
          <AccordionContentText>
            To place an order, simply select the products you want, proceed to
            checkout, provide shipping and payment information, and finalize
            your purchase.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" mt="$5" borderRadius="$lg">
        <AccordionHeader>
          <AccordionTrigger>
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={MinusIcon} mr="$3" />
                  ) : (
                    <AccordionIcon as={PlusIcon} mr="$3" />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent pb="$5">
          <AccordionContentText>
            To place an order, simply select the products you want, proceed to
            checkout, provide shipping and payment information, and finalize
            your purchase.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

AccordionRoundedCorners.description =
  'This is a basic Accordion component example. An Accordion component is a versatile and interactive user interface element, designed to efficiently organize and present content in a compact space.';

export default AccordionRoundedCorners;
