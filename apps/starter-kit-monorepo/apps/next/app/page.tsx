'use client';
import { Button, ButtonText } from '@repo/components/ui/button';
import { Text } from '@repo/components/ui/text';
import { VStack } from '@repo/components/ui/vstack';
import { HStack } from '@repo/components/ui/hstack';

import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContent,
  AccordionContentText,
  AccordionIcon,
} from '@repo/components/ui/accordion';
import { Divider } from '@repo/components/ui/divider';
import { ChevronDownIcon, ChevronUpIcon } from '@repo/components/ui/icon';
import { View, ScrollView } from 'react-native';
import { Box } from '@repo/components/ui/box';

export default function HomeScreen() {
  return (
    <Box>
      <Text size="4xl" bold className="text-foreground">
        Gluestack UI Monorepo
      </Text>
      <Text size="lg" className="text-muted-foreground text-center">
        Shared gluestack-ui components across Next.js and Expo — powered by{' '}
        <Text size="lg" bold>
          @repo/ui
        </Text>
      </Text>
      <VStack space="md">
        <HStack space="md">
          <Button variant="default">
            <ButtonText>Default Button in expo </ButtonText>
          </Button>
          <Button variant="outline">
            <ButtonText>Outline Button</ButtonText>
          </Button>
          <Button variant="secondary">
            <ButtonText>Secondary</ButtonText>
          </Button>
          <Button variant="destructive">
            <ButtonText>Destructive</ButtonText>
          </Button>
          <Button variant="ghost">
            <ButtonText>Ghost</ButtonText>
          </Button>
        </HStack>
      </VStack>

      <Text size="sm" className="text-muted-foreground mt-4 text-center">
        Edit{' '}
        <Text size="sm" bold>
          apps/expo/app/index.tsx
        </Text>{' '}
        or{' '}
        <Text size="sm" bold>
          packages/ui/src
        </Text>{' '}
        to get started.
      </Text>
      <Accordion
        size="md"
        variant="filled"
        type="single"
        isCollapsible={true}
        isDisabled={false}
        className="m-5 w-[90%] border border-outline-200"
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
                      <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                    )}
                  </>
                );
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
        <Divider />
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
                      <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                    ) : (
                      <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                    )}
                  </>
                );
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
    </Box>
  );
}
