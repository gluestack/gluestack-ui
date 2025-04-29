import { HTMLAttributes, RefObject } from 'react';

interface OverlayProps {
  /** Whether the overlay is currently open. */
  isOpen?: boolean;

  /** Handler that is called when the overlay should close. */
  onClose?: () => void;

  /**
   * Whether to close the overlay when the user interacts outside it.
   * @default false
   */
  isDismissable?: boolean;

  /** Whether the overlay should close when focus is lost or moves outside it. */
  shouldCloseOnBlur?: boolean;

  /**
   * Whether pressing the escape key to close the overlay should be disabled.
   * @default false
   */
  isKeyboardDismissDisabled?: boolean;

  /**
   * When user interacts with the argument element outside of the overlay ref,
   * return true if onClose should be called.  This gives you a chance to filter
   * out interaction with elements that should not dismiss the overlay.
   * By default, onClose will always be called on interaction outside the overlay ref.
   */
  shouldCloseOnInteractOutside?: (element: HTMLElement) => boolean;
}

interface OverlayAria {
  /** Props to apply to the overlay container element. */
  overlayProps: HTMLAttributes<HTMLElement>;
}

/**
 * Provides the behavior for overlays such as dialogs, popovers, and menus.
 * Hides the overlay when the user interacts outside it, when the Escape key is pressed,
 * or optionally, on blur. Only the top-most overlay will close at once.
 */
export function useOverlay(
  _props: OverlayProps,
  _ref: RefObject<HTMLElement>
): OverlayAria {
  return {
    overlayProps: {},
  };
}
