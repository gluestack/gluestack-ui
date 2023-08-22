//@ts-nocheck
import { useStyled } from '@gluestack-style/react';

import {
  addDollarSignsToProps,
  convertToSXForStateColorModeMediaQuery,
} from '../utils';

export function usePropResolution(props: any) {
  const styledContext = useStyled();

  const propsWithDollarSigns = addDollarSignsToProps(
    props,
    styledContext.config
  );

  const sxProps = convertToSXForStateColorModeMediaQuery(
    propsWithDollarSigns,
    styledContext.config
  );

  return sxProps;
}
