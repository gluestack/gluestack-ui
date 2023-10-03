import { default as Root } from './Root';
import { createIcon } from '@gluestack-ui/icon';

type ParameterTypes = Omit<Parameters<typeof createIcon>[0], 'Root'>;

const createIconNew = (props: ParameterTypes) => {
  const NewIcon = createIcon({ Root, ...props });
  return NewIcon;
};

export { createIconNew as createIcon };

export { default as Root } from './Root';
export { StyledIcon } from './Root';
