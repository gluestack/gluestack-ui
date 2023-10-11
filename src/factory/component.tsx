import React from 'react';
import { styled } from '@gluestack-style/react';
import { usePropResolution } from '../hooks/usePropResolution';

export default function Factory<P>(
  Component: React.ComponentType<P>,
  componentTheme?: {
    variants?: Object,
    sizes?: Object,
    baseStyle?: Object,
    defaultProps?: Object
  }
) {
  return React.forwardRef(
    ({ children, _state, }: any, ref: any) => {
      if (componentTheme) {
        let finalTheme: any = {
          ...usePropResolution(componentTheme.baseStyle), variants: {
            variant: {
              ...usePropResolution(componentTheme.variants)
            }, size: {
              ...usePropResolution(componentTheme.sizes)
            }
          },
          props: {
            ...usePropResolution(componentTheme.defaultProps)
          }
        }
        // const resolvedPropForGluestack = usePropResolution(props);
        const StyledComponent: any = styled(Component, finalTheme);
        return <StyledComponent ref={ref}>{children}</StyledComponent>;
      } else {
        // FIX: Typings
        // @ts-ignore
        return <Component>{children}</Component>;
      }
    }
  );
}
