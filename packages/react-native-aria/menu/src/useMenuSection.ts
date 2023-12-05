import { ReactNode } from 'react';
import { useId } from '@react-aria/utils';

interface AriaMenuSectionProps {
  /** The heading for the section. */
  'heading'?: ReactNode;
  /** An accessibility label for the section. Required if `heading` is not present. */
  'aria-label'?: string;
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
  let { heading, 'aria-label': ariaLabel } = props;
  let headingId = useId();

  return {
    itemProps: {
      //@ts-ignore
      role: 'presentation',
    },
    headingProps: heading
      ? {
          // Techincally, menus cannot contain headings according to ARIA.
          // We hide the heading from assistive technology, and only use it
          // as a label for the nested group.
          'nativeID': headingId,
          'aria-hidden': true,
        }
      : {},
    groupProps: {
      'role': 'group',
      'aria-label': ariaLabel,
      'aria-labelledby': heading ? headingId : undefined,
    },
  };
}
