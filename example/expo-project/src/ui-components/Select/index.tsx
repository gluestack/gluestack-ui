import { createSelect } from '@gluestack-ui/select';
import { Actionsheet } from '../Actionsheet';
import { Root, Icon, Item, ItemList } from './styled-components';

export const Select = createSelect(
  {
    Root,
    Icon,
    Item,
    ItemList,
  },
  { Actionsheet }
) as any;
