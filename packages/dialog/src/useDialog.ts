import type { AriaDialogProps } from '@react-types/dialog';
import type { DOMAttributes, FocusableElement } from '@react-types/shared';

export interface DialogAria {
  /** Props for the dialog container element. */
  dialogProps: DOMAttributes;

  /** Props for the dialog title element. */
  titleProps: DOMAttributes;
}

export function useDialog(
  props: AriaDialogProps,
  ref: RefObject<FocusableElement>
): DialogAria {
  return {};
}
