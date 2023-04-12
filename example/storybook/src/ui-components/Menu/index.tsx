import { createMenu } from '@gluestack-ui/menu';
import { Root, Item, Label } from './styled-components';
import { styled } from '../styled';
export const Menu = createMenu({
  Root,
  Item,
  Label,
  AnimatePresence: styled.Component,
});
