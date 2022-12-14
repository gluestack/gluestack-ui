import React, { forwardRef } from 'react';
import SVGIcon from './SVGIcon';
import { Path } from './nbSvg';

interface CreateIconOptions {
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string;
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[];
  /**
   * If the `svg` has a single path, simply copy the path's `d` attribute
   */
  d?: string;
  /**
   * The display name useful in the dev tools
   */
  displayName?: string;
  /**
   * Default props automatically passed to the component; overwritable
   */
  defaultProps?: any;
}

export const createIcon = ({ path, d, ...initialProps }: CreateIconOptions) => {
  const createdIcon = (props: any, ref: any) => {
    let children = path;
    if (d && (!path || Object.keys(path).length === 0)) {
      children = <Path fill="currentColor" d={d} />;
    }
    return (
      <SVGIcon children={children} {...initialProps} {...props} ref={ref} />
    );
  };
  return forwardRef(createdIcon);
};
