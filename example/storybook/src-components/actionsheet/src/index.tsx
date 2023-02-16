import Root from './styled-components/Root';
import Content from './styled-components/Content';
import Item from './styled-components/Item';
import ItemText from './styled-components/ItemText';
import DragIndicator from './styled-components/DragIndicator';
import IndicatorWrapper from './styled-components/IndicatorWrapper';
import Backdrop from './styled-components/Backdrop';
import { createActionsheet } from '@universa11y/actionsheet';

export const Actionsheet = createActionsheet({
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
});
