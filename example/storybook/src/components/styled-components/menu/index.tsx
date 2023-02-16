import Root from './Root';
import Backdrop from './Backdrop';
import Content from './Content';
import Group from './Group';
import GroupTitle from './GroupTitle';
import MenuItem from './Item';
// import ItemOption from './ItemOption';
// import ItemOptionIndicator from './ItemOptionIndicator';
// import ItemOptionLabel from './ItemOptionLabel';
// import OptionsGroup from './OptionsGroup';
// import Trigger from './Trigger';
import { createMenu } from '@universa11y/menu';

export const Menu = createMenu({
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  MenuItem,
});
