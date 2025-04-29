import {
  getInteractionModality,
  isFocusVisible,
} from '@react-aria/interactions';
import { RefObject, useEffect, useRef } from 'react';
import { mergeProps, useId } from '@react-aria/utils';
import { TooltipTriggerProps } from '@react-types/tooltip';
import { TooltipTriggerState } from '@react-stately/tooltip';
import { useFocusable } from '@react-aria/focus';
import { useHover, usePress } from '@react-native-aria/interactions';

interface TooltipTriggerAria {
  /**
   * Props for the trigger element.
   */
  triggerProps: any;

  /**
   * Props for the overlay container element.
   */
  tooltipProps: any;
}

/**
 * Provides the behavior and accessibility implementation for a tooltip trigger, e.g. a button
 * that shows a description when focused or hovered.
 */
export function useTooltipTrigger(
  props: TooltipTriggerProps,
  state: TooltipTriggerState,
  ref: RefObject<HTMLElement>
): TooltipTriggerAria {
  let { isDisabled, trigger } = props;

  let tooltipId = useId();

  let isHovered = useRef(false);
  let isFocused = useRef(false);

  let handleShow = () => {
    if (isHovered.current || isFocused.current) {
      state.open(isFocused.current);
    }
  };

  let handleHide = () => {
    if (!isHovered.current && !isFocused.current) {
      state.close();
    }
  };

  useEffect(() => {
    let onKeyDown = (e: any) => {
      if (ref && ref.current) {
        // Escape after clicking something can give it keyboard focus
        // dismiss tooltip on esc key press
        if (e.key === 'Escape') {
          state.close();
        }
      }
    };
    if (state.isOpen) {
      document.addEventListener('keydown', onKeyDown, true);
      return () => {
        document.removeEventListener('keydown', onKeyDown, true);
      };
    }

    return () => {};
  }, [ref, state]);

  let onHoverStart = () => {
    if (trigger === 'focus') {
      return;
    }
    // In chrome, if you hover a trigger, then another element obscures it, due to keyboard
    // interactions for example, hover will end. When hover is restored after that element disappears,
    // focus moves on for example, then the tooltip will reopen. We check the modality to know if the hover
    // is the result of moving the mouse.
    if (getInteractionModality() === 'pointer') {
      isHovered.current = true;
    } else {
      isHovered.current = false;
    }
    handleShow();
  };

  let onHoverEnd = () => {
    if (trigger === 'focus') {
      return;
    }
    // no matter how the trigger is left, we should close the tooltip
    isFocused.current = false;
    isHovered.current = false;
    handleHide();
  };

  let onPressStart = () => {
    // no matter how the trigger is pressed, we should close the tooltip
    isFocused.current = false;
    isHovered.current = false;
    handleHide();
  };

  let onFocus = () => {
    let isVisible = isFocusVisible();
    if (isVisible) {
      isFocused.current = true;
      handleShow();
    }
  };

  let onBlur = () => {
    isFocused.current = false;
    isHovered.current = false;
    handleHide();
  };

  let { hoverProps } = useHover(
    {
      isDisabled,
      onHoverStart,
      onHoverEnd,
    },
    ref
  );

  let { pressProps } = usePress({ onPressStart });

  let { focusableProps } = useFocusable(
    {
      isDisabled,
      onFocus,
      onBlur,
    },
    ref
  );

  return {
    triggerProps: {
      'aria-describedby': state.isOpen ? tooltipId : undefined,
      //@ts-ignore
      ...mergeProps(focusableProps, hoverProps, pressProps),
    },
    tooltipProps: {
      id: tooltipId,
    },
  };
}
