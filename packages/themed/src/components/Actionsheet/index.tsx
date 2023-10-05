import { AnimatedAnimatePresence } from '@gluestack-style/animation-resolver';
import { createActionsheet } from '@gluestack-ui/actionsheet';
import {
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  Icon,
} from './styled-components';

export const AccessibleActionsheet = createActionsheet({
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  Icon,
  //@ts-ignore
  AnimatePresence: AnimatedAnimatePresence,
});

type IAccessibleActionsheet = typeof AccessibleActionsheet;

interface Actionsheet extends IAccessibleActionsheet {
  /**
   * @deprecated Use ActionsheetContent instead.
   */
  Content: IAccessibleActionsheet['Content'];
  /**
   * @deprecated Use ActionsheetItem instead.
   */
  Item: IAccessibleActionsheet['Item'];
  /**
   * @deprecated Use ActionsheetItemText instead.
   */
  ItemText: IAccessibleActionsheet['ItemText'];
  /**
   * @deprecated Use ActionsheetDragIndicator instead.
   */
  DragIndicator: IAccessibleActionsheet['DragIndicator'];
  /**
   * @deprecated Use ActionsheetDragIndicatorWrapper instead.
   */
  DragIndicatorWrapper: IAccessibleActionsheet['DragIndicatorWrapper'];
  /**
   * @deprecated Use ActionsheetBackdrop instead.
   */
  Backdrop: IAccessibleActionsheet['Backdrop'];
  /**
   * @deprecated Use ActionsheetScrollView instead.
   */
  ScrollView: IAccessibleActionsheet['ScrollView'];
  /**
   * @deprecated Use ActionsheetVirtualizedList instead.
   */
  VirtualizedList: IAccessibleActionsheet['VirtualizedList'];
  /**
   * @deprecated Use ActionsheetFlatList instead.
   */
  FlatList: IAccessibleActionsheet['FlatList'];
  /**
   * @deprecated Use ActionsheetSectionList instead.
   */
  SectionList: IAccessibleActionsheet['SectionList'];
  /**
   * @deprecated Use ActionsheetSectionHeaderText instead.
   */
  SectionHeaderText: IAccessibleActionsheet['SectionHeaderText'];
  /**
   * @deprecated Use ActionsheetIcon instead.
   */
  Icon: IAccessibleActionsheet['Icon'];
}

export const Actionsheet = AccessibleActionsheet as Actionsheet;

export const ActionsheetContent = AccessibleActionsheet.Content;
export const ActionsheetItem = AccessibleActionsheet.Item;
export const ActionsheetItemText = AccessibleActionsheet.ItemText;
export const ActionsheetDragIndicator = AccessibleActionsheet.DragIndicator;
export const ActionsheetDragIndicatorWrapper =
  AccessibleActionsheet.DragIndicatorWrapper;
export const ActionsheetBackdrop = AccessibleActionsheet.Backdrop;
export const ActionsheetScrollView = AccessibleActionsheet.ScrollView;
export const ActionsheetVirtualizedList = AccessibleActionsheet.VirtualizedList;
export const ActionsheetFlatList = AccessibleActionsheet.FlatList;
export const ActionsheetSectionList = AccessibleActionsheet.SectionList;
export const ActionsheetSectionHeaderText =
  AccessibleActionsheet.SectionHeaderText;
export const ActionsheetIcon = AccessibleActionsheet.Icon;
