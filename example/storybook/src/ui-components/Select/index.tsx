import { createSelect } from '@gluestack-ui/select';
import { Actionsheet } from '../Actionsheet';
import {
  Root as SelectRoot,
  Icon as SelectIcon,
  Item as SelectItem,
  ItemList as SelectItemList,
} from './styled-components';

export const Select = createSelect(
  {
    Root: SelectRoot,
    Icon: SelectIcon,
    Item: SelectItem,
    ItemList: SelectItemList,
  },
  { Actionsheet }
) as any;
