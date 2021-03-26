import { ReactNode } from 'react';
import { useId } from '@react-aria/utils';

interface AriaMenuSectionProps {
  /** The heading for the section. */
  heading?: ReactNode;
  /** An accessibility label for the section. Required if `heading` is not present. */
  accessibilityLabel?: string;
}

interface MenuSectionAria {
  /** Props for the wrapper list item. */
  itemProps: any;

  /** Props for the heading element, if any. */
  headingProps: any;

  /** Props for the group element. */
  groupProps: any;
}

/**
 * Provides the behavior and accessibility implementation for a section in a menu.
 * See `useMenu` for more details about menus.
 * @param props - Props for the section.
 */
export function useMenuSection(props: AriaMenuSectionProps): MenuSectionAria {
  let { heading, accessibilityLabel } = props;
  let headingId = useId();

  return {
    itemProps: {
      //@ts-ignore
      accessibilityRole: 'presentation',
    },
    headingProps: heading
      ? {
          // Techincally, menus cannot contain headings according to ARIA.
          // We hide the heading from assistive technology, and only use it
          // as a label for the nested group.
          'nativeID': headingId,
          // RN Web < 0.14
          'aria-hidden': true,
          // RN Web >= 0.15
          'accessibilityHidden': true,
        }
      : {},
    groupProps: {
      'accessibilityRole': 'group',
      accessibilityLabel,
      // RN Web < 0.14
      'aria-labelledby': heading ? headingId : undefined,
      // RN Web >= 0.15
      'accessibilityLabelledBy': heading ? headingId : undefined,
    },
  };
}
