import React, { forwardRef } from 'react';
import SVGIcon from './SVGIcon';
import { Path } from './nbSvg';
// @ts-ignore
import isEmpty from 'lodash.isempty';

export const createIcon = ({ path, d, ...initialProps }: any) => {
  const createdIcon = (props: any, ref: any) => {
    let children = path;
    if (d && (!path || isEmpty(path))) {
      children = <Path fill="currentColor" d={d} />;
    }
    return (
      <SVGIcon children={children} {...initialProps} {...props} ref={ref} />
    );
  };
  return forwardRef(createdIcon);
};
