import Root from './styled-components/Root';
import Item from './styled-components/Item';
import ItemList from './styled-components/ItemList';
import Icon from './styled-components/Icon';
import { createSelect } from '@universa11y/select';

export const Select = createSelect({
  Root,
  Item,
  ItemList,
  Icon,
});
