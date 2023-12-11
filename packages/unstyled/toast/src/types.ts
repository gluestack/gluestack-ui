import type { ReactNode } from 'react';

export interface InterfaceToastProps {
  /**
   * The delay before the toast hides (in milliseconds). If set to `null`, toast will never dismiss.
   * @default 5000
   */
  duration?: number | null;
  /**
   * The `id` of the toast. Mostly used when you need to prevent duplicate. By default, we generate a unique `id` for each toast
   */
  id?: any;
  /**
   * Callback function to run side effects after the toast has closed.
   */
  onCloseComplete?: () => void;
  /**
   * The placement of the toast. Defaults to bottom
   * @default bottom
   */
  placement?:
    | 'top'
    | 'top right'
    | 'top left'
    | 'bottom'
    | 'bottom left'
    | 'bottom right';
  /**
   * Render a component toast component. Any component passed will receive 2 props: `id` and `onClose`.
   */
  render?: (props: any) => ReactNode;
  /**
   * If true and the keyboard is opened, the Toast will move up equivalent to the keyboard height.
   * @default false
   */
  avoidKeyboard?: boolean;

  /**
   * container Style object for the toast
   * @default 0
   */
  containerStyle?: any;
}

export type IToast = {
  id: number;
  component: any;
  config?: IToastProps;
};

export type IToastInfo = {
  [key in any]: Array<IToast>;
};

export type IToastContext = {
  toastInfo: IToastInfo;
  setToastInfo: any;
  setToast: (props: IToastProps) => any;
  removeToast: (id: any) => void;
  hideAll: () => void;
  isActive: (id: any) => boolean;
  visibleToasts: any;
  setVisibleToasts: any;
  hideToast: (id: any) => void;
  avoidKeyboard?: boolean;
  bottomInset?: number;
  AnimationWrapper?: any;
  AnimatePresence?: any;
};

export type IToastComponentType<
  StyledToast,
  StyledToastTitle,
  StyledToastDescription
> = React.ForwardRefExoticComponent<StyledToast> & {
  Title: React.ForwardRefExoticComponent<StyledToastTitle>;
  Description: React.ForwardRefExoticComponent<StyledToastDescription>;
};

export type IToastProps = InterfaceToastProps;
