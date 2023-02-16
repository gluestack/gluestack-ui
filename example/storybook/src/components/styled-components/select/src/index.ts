import Root from './Root';
import Item from './Item';
import ItemList from './ItemList';
import Icon from './Icon';
import { createSelect } from '@universa11y/select';

export const Select = createSelect({
  Root,
  Item,
  ItemList,
  Icon,
});
