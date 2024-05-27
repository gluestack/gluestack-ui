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
import React from 'react';

const AccordionRoundedCorners = ({ ...props }: any) => {
  return (
    <Accordion {...props} size={'md'} shadowColor="transparent">
      <AccordionItem value="item-1" className="rounded-lg">
        <AccordionHeader>
          <AccordionTrigger className="data-[focus-visible=true]:rounded-lg">
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={MinusIcon} className="mr-3" />
                  ) : (
                    <AccordionIcon as={PlusIcon} className="mr-3" />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className="pb-5">
          <AccordionContentText>
            To place an order, simply select the products you want, proceed to
            checkout, provide shipping and payment information, and finalize
            your purchase.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="rounded-lg mt-5">
        <AccordionHeader>
          <AccordionTrigger className="data-[focus-visible=true]:rounded-lg">
            {({ isExpanded }: { isExpanded: boolean }) => {
              return (
                <>
                  <AccordionTitleText>
                    How do I place an order?
                  </AccordionTitleText>
                  {isExpanded ? (
                    <AccordionIcon as={MinusIcon} className="mr-3" />
                  ) : (
                    <AccordionIcon as={PlusIcon} className="mr-3" />
                  )}
                </>
              );
            }}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className="pb-5">
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

export default AccordionRoundedCorners;
