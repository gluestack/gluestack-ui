import Root from './styled-components/Root';
import Backdrop from './styled-components/Backdrop';
import Content from './styled-components/Content';
import Group from './styled-components/Group';
import GroupTitle from './styled-components/GroupTitle';
import MenuItem from './styled-components/Item';
// import ItemOption from './styled-components/ItemOption';
// import ItemOptionIndicator from './styled-components/ItemOptionIndicator';
// import ItemOptionLabel from './styled-components/ItemOptionLabel';
// import OptionsGroup from './styled-components/OptionsGroup';
// import Trigger from './styled-components/Trigger';
import { createMenu } from '@universa11y/menu';

export const Menu = createMenu({
  Root,
  Backdrop,
  Content,
  Group,
  GroupTitle,
  MenuItem,
});
