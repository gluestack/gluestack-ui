import { Link as LinkMain } from './Link';
import { useLink } from './useLink';
import type { InterfaceLinkProps, IUseLinkProp } from './types';

const createLink = <Root,>({ Root }: { Root: React.ComponentType<Root> }) => {
  const Link = LinkMain(Root);
  Link.displayName = 'Link';
  return Link;
};

export type { InterfaceLinkProps, IUseLinkProp };
export { createLink, useLink };
