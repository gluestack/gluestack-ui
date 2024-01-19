import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
} from '@custom-ui/themed';
import { MinusIcon, PlusIcon } from 'lucide-react-native';
import React from 'react';

const AccordionNested = () => {
  return (
    <Accordion
      alignSelf="center"
      mt="$5"
      shadowColor="transparent"
      borderWidth={1}
      sx={{
        _light: {
          borderColor: '$borderLight300',
        },
        _dark: {
          borderColor: '$borderDark700',
        },
      }}
    >
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
                <AccordionTitleText ml="$3">USA</AccordionTitleText>
              </>
            )}
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent pb="$0">
          <Accordion
            width="100%"
            shadowColor="transparent"
            borderWidth={1}
            sx={{
              _light: {
                borderColor: '$borderLight300',
              },
              _dark: {
                borderColor: '$borderDark700',
              },
            }}
          >
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
                      <AccordionTitleText ml="$3">
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
          <Accordion width="100%" shadowColor="transparent">
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
                      <AccordionTitleText ml="$3">Nevada</AccordionTitleText>
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

AccordionNested.description =
  'This is a basic Accordion component example. An Accordion component is a versatile and interactive user interface element, designed to efficiently organize and present content in a compact space.';

export default AccordionNested;
