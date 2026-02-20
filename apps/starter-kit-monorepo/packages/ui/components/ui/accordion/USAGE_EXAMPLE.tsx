/**
 * Accordion Usage Example with Automatic Icon Rotation
 *
 * This example shows the new simplified API where icons automatically
 * rotate when the accordion expands/collapses.
 */

import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionIcon,
  AccordionContent,
  AccordionContentText,
} from './index';
import { ChevronDownIcon } from 'lucide-react-native'; // or your icon library

// ============================================================================
// BASIC USAGE - With Automatic Icon Rotation
// ============================================================================

export function BasicAccordionExample() {
  return (
    <Accordion type="single" isCollapsible={true}>
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>
            <AccordionTitleText>
              How do I place an order?
            </AccordionTitleText>
            {/* Icon automatically rotates 180° when expanded! */}
            <AccordionIcon as={ChevronDownIcon} />
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

      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>
            <AccordionTitleText>
              What payment methods do you accept?
            </AccordionTitleText>
            <AccordionIcon as={ChevronDownIcon} />
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
  );
}

// ============================================================================
// COMPARISON: Old vs New Approach
// ============================================================================

// ❌ OLD APPROACH (manual icon switching)
export function OldApproach() {
  return (
    <AccordionTrigger>
      {({ isExpanded }) => (
        <>
          <AccordionTitleText>Question?</AccordionTitleText>
          {/* Had to manually switch icons */}
          {isExpanded ? (
            <AccordionIcon as={ChevronUpIcon} />
          ) : (
            <AccordionIcon as={ChevronDownIcon} />
          )}
        </>
      )}
    </AccordionTrigger>
  );
}

// ✅ NEW APPROACH (automatic rotation)
export function NewApproach() {
  return (
    <AccordionTrigger>
      <AccordionTitleText>Question?</AccordionTitleText>
      {/* Just one icon - it rotates automatically! */}
      <AccordionIcon as={ChevronDownIcon} />
    </AccordionTrigger>
  );
}

// ============================================================================
// ADVANCED: Still want manual control? You can!
// ============================================================================

export function ManualControlExample() {
  return (
    <AccordionTrigger>
      {({ isExpanded }) => (
        <>
          <AccordionTitleText>
            {isExpanded ? 'Click to collapse' : 'Click to expand'}
          </AccordionTitleText>
          {/* Icon still rotates automatically */}
          <AccordionIcon as={ChevronDownIcon} />
        </>
      )}
    </AccordionTrigger>
  );
}

// ============================================================================
// MULTIPLE ACCORDIONS
// ============================================================================

export function MultipleAccordionsExample() {
  return (
    <Accordion type="multiple" defaultValue={['item-1']}>
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>
            <AccordionTitleText>Features</AccordionTitleText>
            <AccordionIcon as={ChevronDownIcon} />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            60fps animations, icon rotation, fully customizable.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>
            <AccordionTitleText>Performance</AccordionTitleText>
            <AccordionIcon as={ChevronDownIcon} />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent>
          <AccordionContentText>
            Runs on UI thread using React Native Reanimated.
          </AccordionContentText>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

// ============================================================================
// NOTES
// ============================================================================

/**
 * KEY BENEFITS:
 *
 * 1. ✨ Simpler code - no need to manually switch icons
 * 2. 🎨 Smooth 60fps rotation animation
 * 3. ⚙️ Customizable rotation angle in animation-config.ts
 * 4. 🚀 Runs on UI thread (no JS blocking)
 *
 * CUSTOMIZATION:
 *
 * Edit `animation-config.ts` to customize:
 * - contentDuration: How fast accordion expands/collapses
 * - iconDuration: How fast icon rotates
 * - iconRotation: Rotation angle (180° = upside down, 90° = quarter turn)
 *
 * For advanced customization, edit AnimatedIcon.tsx and AnimatedHeight.tsx
 */
