import React, { forwardRef } from 'react';
import { default as Root } from './Root';
import { createIcon } from '@gluestack-ui/icon';
import { usePropResolution } from '../../../hooks/usePropResolution';

type IParameterTypes = Omit<Parameters<typeof createIcon>[0], 'Root'>;

const createIconNB = (props: IParameterTypes) => {
  const Icon = createIcon({ Root, ...props });
  // return Icon;
  //
  type ISize = React.ComponentProps<typeof Icon>['size'];
  type IProps = Omit<React.ComponentProps<typeof Icon>, 'size'> & {
    size?: ISize | number;
  };
  //
  const CreatedIcon = forwardRef(
    ({ size, ...propsIcon }: IProps, ref?: any) => {
      let sizeProp = {};
      const resolvedProps = usePropResolution(propsIcon);
      if (typeof size === 'number') sizeProp = { h: size, w: size };
      return <Icon {...sizeProp} {...resolvedProps} ref={ref} />;
    }
  );
  return CreatedIcon;
};

// const createIconNB = (props: IParameterTypes) => createIcon({ Root, ...props });

export { createIconNB as createIcon };

export { default as Root } from './Root';
export { StyledIcon } from './Root';
