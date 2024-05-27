import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionContentText,
  AccordionTitleText,
  AccordionIcon,
} from '@/components/ui/accordion';
import { MinusIcon, PlusIcon } from 'lucide-react-native';

const AccordionCustomisedBackground = ({ ...props }: any) => {
  return (
    <Accordion {...props} size={'md'}>
      <AccordionItem value="item-1" className="rounded-lg">
        <AccordionHeader>
          <AccordionTrigger className="data-[focus-visible=true]:rounded-lg">
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  {isExpanded ? (
                    <AccordionIcon as={MinusIcon} className="ml-3" />
                  ) : (
                    <AccordionIcon as={PlusIcon} className="ml-3" />
                  )}
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className="ml-9">
          <AccordionContentText>
            To place an order, simply select the products you want, proceed to
            checkout, provide shipping and payment information, and finalize
            your purchase.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="rounded-lg mt-5 ">
        <AccordionHeader>
          <AccordionTrigger className="data-[focus-visible=true]:rounded-lg">
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  {isExpanded ? (
                    <AccordionIcon as={MinusIcon} className="ml-3" />
                  ) : (
                    <AccordionIcon as={PlusIcon} className="ml-3" />
                  )}
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className="ml-9">
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

export default AccordionCustomisedBackground;
