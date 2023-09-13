import { createIcon } from '@gluestack-ui/icon';
import Root from './styled-components/Root';
import { Root as IconRoot } from './styled-components';

export const Icon = createIcon({
  Root,
});

export * from './Icons';
type ParameterTypes = Omit<Parameters<typeof createIcon>[0], 'Root'>;
const createIconUI = ({ ...props }: ParameterTypes) =>
  createIcon({ Root: IconRoot, ...props });

export { createIconUI as createIcon };
