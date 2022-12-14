import type {
  IPopperProps,
  IPopoverArrowProps,
  IScrollContentProps,
  PopperContext,
} from './types';
import PopperMain from './Popper';
import PopperArrow from './PopperArrow';
import PopperContent from './PopperContent';

export type {
  IPopperProps,
  IPopoverArrowProps,
  IScrollContentProps,
  PopperContext,
};

PopperArrow.displayName = 'PopperArrow';
const PopperTemp: any = PopperMain;
PopperTemp.Content = PopperContent;
PopperTemp.Arrow = PopperArrow;
const Popper = PopperTemp as any;

export { Popper };
