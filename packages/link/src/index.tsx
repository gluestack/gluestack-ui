import { Link as LinkMain } from './Link';
import { useLink } from './useLink';
import type { InterfaceLinkProps, IUseLinkProp } from './types';

const createLink = ({ Root }: any) => {
  const Link = LinkMain(Root) as any;
  Link.displayName = 'Link';
  return Link;
};

export type { InterfaceLinkProps, IUseLinkProp };
export { createLink, useLink };
