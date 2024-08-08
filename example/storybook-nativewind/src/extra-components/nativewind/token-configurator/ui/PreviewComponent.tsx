'use client';
import React from 'react';
// import '../globals.css';
import SolidButtonGrid from './SolidButtonGrid';
import OutlineButtonGrid from './OutlineButtonGrid';
import LinkButtonGrid from './LinkButtonGrid';
import BadgesGrid from './BadgesGrid';
import SpinnerAndProgressGrid from './SpinnerAndProgressGrid';
import SwitchesCheckboxAndRadioGrid from './SwitchesCheckboxAndRadioGrid';
import SliderGrid from './SliderGrid';
import InputGrid from './InputGrid';
import CardAndLinkGrid from './CardAndLinkGrid';
import AlertGrid from './AlertGrid';
import { Center } from '../../../../core-components/nativewind/center';
import { Heading } from '../../../../core-components/nativewind/heading';
import {
  Textarea,
  TextareaInput,
} from '../../../../core-components/nativewind/textarea';
import {
  Avatar,
  AvatarFallbackText,
  AvatarGroup,
} from '../../../../core-components/nativewind/avatar';
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionTitleText,
  AccordionTrigger,
} from '../../../../core-components/nativewind/accordion';
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from '../../../../core-components/nativewind/icon';

const PreviewComponent = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'];

  const avatars = [
    {
      src: 'https://example.com.jpg',
      alt: 'Sandeep Srivastva',
      color: 'bg-primary-600',
    },
    {
      src: 'https://example.com.jpg',
      alt: 'Arjun Kapoor',
      color: 'bg-cyan-600',
    },
    {
      src: 'https://example.com.jpg',
      alt: 'Ritik Sharma ',
      color: 'bg-indigo-600',
    },
    {
      src: 'https://example.com.jpg',
      alt: 'Akhil Sharma',
      color: 'bg-gray-600',
    },
  ];
  const extraAvatars = avatars.slice(3);
  const remainingCount = extraAvatars.length;
  return (
    <div className="bg-white rounded-lg p-6 border-2">
      <SolidButtonGrid />
      <OutlineButtonGrid />
      <LinkButtonGrid />
      <BadgesGrid />
      <SpinnerAndProgressGrid />
      <SwitchesCheckboxAndRadioGrid />
      <SliderGrid />
      <InputGrid />
      <CardAndLinkGrid />
      <AlertGrid />

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 pt-4">
        <div className="w-full sm:w-full flex justify-center mb-4">
          <Textarea
            // className="w-full"
            size="md"
            isReadOnly={false}
            isInvalid={false}
            isDisabled={false}
          >
            <TextareaInput placeholder="Your text goes here..." />
          </Textarea>
        </div>

        <div className="w-full sm:w-full flex justify-center mb-4">
          <AvatarGroup>
            {avatars.slice(0, 3).map((avatar, index) => (
              <Avatar
                key={index}
                size="lg"
                className={`border-2 border-outline-0 ${avatar.color}`}
              >
                <AvatarFallbackText>{avatar.alt}</AvatarFallbackText>
              </Avatar>
            ))}
            <Avatar size="lg">
              <AvatarFallbackText>
                {'+ ' + remainingCount + ''}
              </AvatarFallbackText>
            </Avatar>
          </AvatarGroup>
        </div>
      </div>

      <Accordion
        size="md"
        variant="filled"
        type="single"
        isCollapsible={true}
        isDisabled={false}
        className="m-5 w-[90%]"
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

      <Center>
        {sizes.map((size, index) => (
          <Heading key={index} size={size}>
            {size}
          </Heading>
        ))}
      </Center>
    </div>
  );
};

export default PreviewComponent;
