import type {
  Dispatch,
  MutableRefObject,
  ReactNode,
  SetStateAction,
} from 'react';

export type ToastPlacement =
  | 'top'
  | 'top right'
  | 'top left'
  | 'bottom'
  | 'bottom left'
  | 'bottom right';

export interface InterfaceToastProps {
  /**
   * The delay before the toast hides (in milliseconds). If set to `null`, toast will never dismiss.
   * @default 5000
   */
  duration?: number | null;
  /**
   * The `id` of the toast. Mostly used when you need to prevent duplicate. By default, we generate a unique `id` for each toast
   */
  id?: string;
  /**
   * Callback function to run side effects after the toast has closed.
   */
  onCloseComplete?: () => void;
  /**
   * The placement of the toast. Defaults to bottom
   * @default bottom
   */
  placement?: ToastPlacement;
  /**
   * Render a component toast component. Any component passed will receive 1 prop: `id`
   */
  render?: (props: ToastComponentProps) => ReactNode;
  /**
   * If true and the keyboard is opened, the Toast will move up equivalent to the keyboard height.
   * @default false
   */
  avoidKeyboard?: boolean;

  /**
   * container Style object for the toast
   * @default 0
   */
  containerStyle?: React.CSSProperties;
}

export interface ToastComponentProps {
  id: string;
}

export interface VisibleToasts {
  [key: string]: boolean;
}

export interface IToast {
  id: string;
  component: ReactNode;
  config?: IToastProps;
}

export type IToastInfo = {
  [key in ToastPlacement]: Array<IToast>;
};

export type IToastContext = {
  toastInfo: IToastInfo;
  setToastInfo: Dispatch<SetStateAction<IToastInfo>>;
  setToast: (props: IToastProps) => string;
  removeToast: (id: string) => void;
  hideAll: () => void;
  isActive: (id: string) => boolean;
  visibleToasts: VisibleToasts;
  setVisibleToasts: Dispatch<SetStateAction<VisibleToasts>>;
  hideToast: (id: string) => void;
  avoidKeyboard?: boolean;
  bottomInset?: number;
  AnimationWrapper: MutableRefObject<any | null>;
  AnimatePresence: MutableRefObject<any | null>;
};

export type IToastComponentType<
  StyledToast,
  StyledToastTitle,
  StyledToastDescription
> = React.ForwardRefExoticComponent<
  InnerForwardRefExoticComponent<StyledToast>
> & {
  Title: React.ForwardRefExoticComponent<
    InnerForwardRefExoticComponent<StyledToastTitle>
  >;
  Description: React.ForwardRefExoticComponent<
    InnerForwardRefExoticComponent<StyledToastDescription>
  >;
};

type InnerForwardRefExoticComponent<T> = React.PropsWithoutRef<T> &
  React.RefAttributes<T>;
export type IToastProps = InterfaceToastProps;
