import type { MutableRefObject } from 'react';

export interface InterfaceAlertProps {
  /** The status of the alert
   *  @default info
   */
  status?: 'info' | 'warning' | 'success' | 'error' | (string & {});
}

export interface IAlertIconProps {}

export type IAlertComponentType<Alert, Icon, Text> = ((
  props: Alert & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Icon: React.MemoExoticComponent<
    (props: Icon & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
  Text: React.MemoExoticComponent<
    (props: Text & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};

export type IAlertProps = InterfaceAlertProps;
