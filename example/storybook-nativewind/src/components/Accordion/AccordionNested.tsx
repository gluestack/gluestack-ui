import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
} from '@/components/ui/accordion';
import { MinusIcon, PlusIcon } from 'lucide-react-native';
import React from 'react';

const AccordionNested = () => {
  return (
    <Accordion className="border border-outline-300 mt-5 self-center">
      <AccordionItem value="a">
        <AccordionHeader>
          <AccordionTrigger>
            {(states: any) => (
              <>
                {states.isExpanded ? (
                  <AccordionIcon as={MinusIcon} />
                ) : (
                  <AccordionIcon as={PlusIcon} />
                )}
                <AccordionTitleText className="ml-3">USA</AccordionTitleText>
              </>
            )}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent className="pb-0">
          <Accordion className="border border-outline-300 self-center">
            <AccordionItem value="b">
              <AccordionHeader>
                <AccordionTrigger>
                  {(states: any) => (
                    <>
                      {states.isExpanded ? (
                        <AccordionIcon as={MinusIcon} />
                      ) : (
                        <AccordionIcon as={PlusIcon} />
                      )}
                      <AccordionTitleText className="ml-3">
                        California
                      </AccordionTitleText>
                    </>
                  )}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>
                  Capital city of California is Sacramento. California has a GDP
                  of 2.89 trillion dollars and follows Pacific Standard Time
                  zone.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion className="w-full">
            <AccordionItem value="b">
              <AccordionHeader>
                <AccordionTrigger>
                  {(states: any) => (
                    <>
                      {states.isExpanded ? (
                        <AccordionIcon as={MinusIcon} />
                      ) : (
                        <AccordionIcon as={PlusIcon} />
                      )}
                      <AccordionTitleText className="ml-3">
                        Nevada
                      </AccordionTitleText>
                    </>
                  )}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>
                  Nevada is located in a mountainous region that includes vast
                  semiarid grasslands and sandy alkali deserts. It is the most
                  arid state of the country.
                </AccordionContentText>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionNested;
