import React from 'react';
import { styled, useStyled } from '@gluestack-style/react';
import { usePropResolution } from '../hooks/usePropResolution';
import { addDollarSignsToProps, convertToSXForStateColorModeMediaQuery } from '../utils';

const transformTheme = (componentTheme: any) => {
  const styledContext = useStyled();

  const propsWithDollarSigns = addDollarSignsToProps(
    {
      ...componentTheme.baseStyle, variants: {
        variant: {
          ...componentTheme.variants
        }, size: {
          ...componentTheme.sizes
        }
      },
      props: {
        ...componentTheme.defaultProps
      }
    },
    styledContext.config
  );


  const sxProps = convertToSXForStateColorModeMediaQuery(
    propsWithDollarSigns,
    styledContext.config
  );

  return sxProps
}
export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: {
    variants?: Object,
    sizes?: Object,
    baseStyle?: Object,
    defaultProps?: Object
  }
) {
  const StyledComponent: any = styled(Component, transformTheme(componentTheme));
  return React.forwardRef(
    ({ children, _state, ...props }: any, ref: any) => {
      if (componentTheme) {
        let inlineProps: any = usePropResolution(props);
        // const resolvedPropForGluestack = usePropResolution(props);

        return <StyledComponent ref={ref} {...inlineProps}>{children}</StyledComponent>;
      } else {
        // FIX: Typings
        // @ts-ignore
        return <Component>{children}</Component>;
      }
    }
  );
}
