import { Link } from './Link';
import { useLink } from './useLink';
import type { InterfaceLinkProps, IUseLinkProp } from './types';

const createLink = (StyledLink: any) => {
  const LinkTemp = Link(StyledLink) as any;
  return LinkTemp;
};

export type { InterfaceLinkProps, IUseLinkProp };
export { createLink, useLink };
