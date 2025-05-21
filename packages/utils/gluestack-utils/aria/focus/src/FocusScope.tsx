import React, { ReactNode } from 'react';

export interface FocusScopeProps {
  /** The contents of the focus scope. */
  children: ReactNode;

  /**
   * Whether to contain focus inside the scope, so users cannot
   * move focus outside, for example in a modal dialog.
   */
  contain?: boolean;

  /**
   * Whether to restore focus back to the element that was focused
   * when the focus scope mounted, after the focus scope unmounts.
   */
  restoreFocus?: boolean;

  /** Whether to auto focus the first focusable element in the focus scope on mount. */
  autoFocus?: boolean;
}

/**
 * A FocusScope manages focus for its descendants. It supports containing focus inside
 * the scope, restoring focus to the previously focused element on unmount, and auto
 * focusing children on mount. It also acts as a container for a programmatic focus
 * management interface that can be used to move focus forward and back in response
 * to user events.
 */
export function FocusScope(props: FocusScopeProps) {
  return <React.Fragment>{props.children}</React.Fragment>;
}

// Noop - Implement this for mac and windows
export const useFocusManager = () => {};
