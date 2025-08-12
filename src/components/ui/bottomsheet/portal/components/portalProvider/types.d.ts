import type { ReactNode } from 'react';

export interface PortalProviderProps {
  /**
   * Defines whether to add a default root host or not.
   *
   * @default true
   * @type boolean
   */
  shouldAddRootHost?: boolean;

  /**
   * Defines the root portal host name.
   *
   * @default "root"
   * @type string
   */
  rootHostName?: string;

  children: ReactNode | ReactNode[];
}
