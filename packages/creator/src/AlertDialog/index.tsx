import AlertDialog from './AlertDialog';
import AlertDialogContent from './AlertDialogContent';
import AlertDialogBody from './AlertDialogBody';
import AlertDialogCloseButton from './AlertDialogCloseButton';
import AlertDialogFooter from './AlertDialogFooter';
import AlertDialogHeader from './AlertDialogHeader';
import AlertDialogBackdrop from './AlertDialogBackdrop';
// import type { IAlertDialogComponentType } from './types';

const AlertDialogTemp: any = AlertDialog;

AlertDialogTemp.Content = AlertDialogContent;
AlertDialogTemp.CloseButton = AlertDialogCloseButton;
AlertDialogTemp.Header = AlertDialogHeader;
AlertDialogTemp.Footer = AlertDialogFooter;
AlertDialogTemp.Body = AlertDialogBody;
AlertDialogTemp.Backdrop = AlertDialogBackdrop;

const AlertDialogMain = AlertDialogTemp; // as IAlertDialogComponentType;

export { AlertDialogMain as AlertDialog };
// export type { IAlertDialogProps } from './types';
