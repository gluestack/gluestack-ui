import { AriaTooltipProps } from '@react-types/tooltip';
import { filterDOMProps, mergeProps } from '@react-aria/utils';
import { mapDomPropsToRN } from '@react-native-aria/utils';

interface TooltipAria {
  /**
   * Props for the tooltip element.
   */
  tooltipProps: any;
}

/**
 * Provides the accessibility implementation for a Tooltip component.
 */
export function useTooltip(props: AriaTooltipProps): TooltipAria {
  let domProps = filterDOMProps(props, { labelable: true });

  return {
    tooltipProps: mergeProps(
      domProps,
      mapDomPropsToRN({
        role: 'tooltip',
      })
    ),
  };
}
