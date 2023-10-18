import { AriaLabelingProps, DOMProps, Orientation } from '@react-types/shared';

export interface SeparatorProps extends DOMProps, AriaLabelingProps {
  /**
   * The orientation of the separator.
   * @default 'horizontal'
   */
  orientation?: Orientation;
  /** The HTML element type that will be used to render the separator. */
  elementType?: string;
}

export interface SeparatorAria {
  /** Props for the separator element. */
  separatorProps: {
    'role': any;
    'aria-orientation'?: string;
  };
}

/**
 * Provides the accessibility implementation for a separator.
 * A separator is a visual divider between two groups of content,
 * e.g. groups of menu items or sections of a page.
 */
export function useSeparator(props: SeparatorProps): SeparatorAria {
  let ariaOrientation;
  // if orientation is horizontal, aria-orientation default is horizontal, so we leave it undefined
  // if it's vertical, we need to specify it
  if (props.orientation === 'vertical') {
    ariaOrientation = 'vertical';
  }
  // hr elements implicitly have role = separator and a horizontal orientation
  return {
    separatorProps: {
      ...props,
      'role': 'separator',
      'aria-orientation': ariaOrientation,
    },
  };
}
