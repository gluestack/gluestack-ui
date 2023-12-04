import { Link as LinkMain } from './Link';
import { LinkText } from './LinkText';
import { useLink } from './useLink';
import type {
  InterfaceLinkProps,
  IUseLinkProp,
  ILinkComponentType,
} from './types';

const createLink = <Root, TextProps>({
  Root,
  Text,
}: {
  Root: React.ComponentType<Root>;
  Text: React.ComponentType<TextProps>;
}) => {
  const Link = LinkMain(Root) as any;
  //ts-ignore
  Link.Text = LinkText(Text);
  Link.Text.displayName = 'Link.Text';
  return Link as ILinkComponentType<Root, TextProps>;
};

export type { InterfaceLinkProps, IUseLinkProp };
export { createLink, useLink };
