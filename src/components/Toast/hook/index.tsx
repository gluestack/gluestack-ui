import { createToastHook } from '@gluestack-ui/toast';
import { Root } from '../../Box/styled-components';
import React from 'react';
import { Toast } from '..';

export function useToast() {
  type IShowParams = Parameters<typeof useOldToast.show>[0] & {
    title?: string;
    description?: string;
  };

  type ISXProps = React.ComponentProps<typeof Root>['sx'];

  const useOldToast = createToastHook()();

  const close = useOldToast.close;
  const closeAll = useOldToast.closeAll;
  const isActive = useOldToast.isActive;
  const show = ({
    title,
    description,
    duration,
    id: IDbyUser,
    onCloseComplete,
    placement,
    render,
    ...props
  }: IShowParams &
    ISXProps & { _title?: ISXProps; _description?: ISXProps }) => {
    if (render)
      useOldToast.show({
        duration,
        id: IDbyUser,
        onCloseComplete,
        placement,
        render,
      });
    else {
      const ToastComp = ({ id }: any) => {
        return (
          <Toast sx={props} nativeID={id}>
            {title && <Toast.Title>{title}</Toast.Title>}
            {description && (
              <Toast.Description>{description}</Toast.Description>
            )}
          </Toast>
        );
      };
      useOldToast.show({
        duration,
        id: IDbyUser,
        onCloseComplete,
        placement,
        render: ToastComp,
      });
    }
  };

  return { close: close, closeAll: closeAll, isActive: isActive, show: show };
}
