import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionContentText,
  AccordionTitleText,
  AccordionIcon,
  VStack,
} from '@gluestack-ui/themed';
import { MinusIcon, PlusIcon } from 'lucide-react-native';
import React from 'react';

const AccordionCustomisedBackground = ({ ...props }: any) => {
  return (
    <VStack width="$full" gap="$2" justifyContent="center" alignItems="center">
      <Accordion
        {...props}
        size={'md'}
        shadowColor="transparent"
        borderRadius="$lg"
      >
        <AccordionItem value="a">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }: { isExpanded: boolean }) => {
                return (
                  <>
                    {isExpanded ? (
                      <AccordionIcon as={MinusIcon} mr="$3" />
                    ) : (
                      <AccordionIcon as={PlusIcon} mr="$3" />
                    )}
                    <AccordionTitleText>
                      How do I place an order?
                    </AccordionTitleText>
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent ml="$9">
            <AccordionContentText>
              To place an order, simply select the products you want, proceed to
              checkout, provide shipping and payment information, and finalize
              your purchase.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        {...props}
        size={'md'}
        shadowColor="transparent"
        borderRadius="$lg"
      >
        <AccordionItem value="b">
          <AccordionHeader>
            <AccordionTrigger>
              {({ isExpanded }: { isExpanded: boolean }) => {
                return (
                  <>
                    {isExpanded ? (
                      <AccordionIcon as={MinusIcon} mr="$3" />
                    ) : (
                      <AccordionIcon as={PlusIcon} mr="$3" />
                    )}
                    <AccordionTitleText>
                      How do I place an order?
                    </AccordionTitleText>
                  </>
                );
              }}
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionContent ml="$9">
            <AccordionContentText>
              To place an order, simply select the products you want, proceed to
              checkout, provide shipping and payment information, and finalize
              your purchase.
            </AccordionContentText>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
};

AccordionCustomisedBackground.description =
  'This is a basic Accordion component example. An Accordion component is a versatile and interactive user interface element, designed to efficiently organize and present content in a compact space.';

export default AccordionCustomisedBackground;
