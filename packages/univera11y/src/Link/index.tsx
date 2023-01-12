import { Link as LinkMain } from './Link';
import { useLink } from './useLink';
import type { InterfaceLinkProps, IUseLinkProp } from './types';

const createLink = (StyledLink: any) => {
  const Link = LinkMain(StyledLink) as any;
  Link.displayName = 'Link';
  return Link;
};

export type { InterfaceLinkProps, IUseLinkProp };
export { createLink, useLink };
