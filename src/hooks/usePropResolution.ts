import { useStyled } from '@gluestack-style/react';
import { useMemo, useState } from 'react';

import {
  addDollarSignsToProps,
  convertToSXForStateColorModeMediaQuery,
} from '../utils';

function resolveProps(props: any) {
  const styledContext = useStyled();

  if (props) {
    let sizeProp = {};
    if (props.size) {
      sizeProp = { height: props.size, width: props.size };
    }
    props = { ...props, ...sizeProp };
    const propsWithDollarSigns = addDollarSignsToProps(
      props,
      styledContext.config
    );

    const sxProps = convertToSXForStateColorModeMediaQuery(
      propsWithDollarSigns,
      styledContext.config
    );
    if (!sxProps.hasOwnProperty('sx')) {
      sxProps.sx = {};
    }
    Object.keys(sxProps).forEach((key) => {
      const propName = key;
      const propValue = sxProps[key];

      if (
        propName.startsWith('_') ||
        propName.startsWith(':') ||
        propName.startsWith('@')
      ) {
        sxProps.sx[propName] = propValue;
        delete sxProps[propName];
      }
    });

    Object.keys(sxProps).forEach((key) => {
      const propName = key;
      const propValue = sxProps[key];
      if (
        propName.startsWith('_') ||
        propName.startsWith(':') ||
        propName.startsWith('@')
      ) {
        sxProps.sx[propName] = propValue;
        delete sxProps[propName];
      }
    });

    return sxProps;
  }
}

export function usePropResolution(props: any) {
  return useMemo(() => {
    console.log('IN use prop resolution');
    return resolveProps(props);
  }, [props]);
}
