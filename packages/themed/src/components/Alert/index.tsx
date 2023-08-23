import { createAlert } from '@gluestack-ui/alert';
import { Root, Text, Icon } from './styled-components';
export const AccessibleAlert = createAlert({
  Root,
  Text,
  Icon,
});

type IAccessibleAlert = typeof AccessibleAlert;

interface Alert extends IAccessibleAlert {
  /**
   * @deprecated Use ActionsheetText instead.
   */
  Text: IAccessibleAlert['Text'];
  /**
   * @deprecated Use ActionsheetIcon instead.
   */
  Icon: IAccessibleAlert['Icon'];
}

export const Alert = AccessibleAlert as Alert;

export const AlertText = AccessibleAlert.Text;
export const AlertIcon = AccessibleAlert.Icon;
