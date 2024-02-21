import type { ViewProps, ImageProps, TextProps } from 'react-native';
import type { IComponentStyleConfig, ITheme } from './types';

export const createStyle = <T, Variants>(
  theme: T | ITheme<Variants, ViewProps | ImageProps | TextProps>,
  componentConfig?: Omit<IComponentStyleConfig, 'componentName'>,
  BUILD_TIME_PARAMS?: any
) => {
  const createdStyles = {
    theme,
    componentConfig,
    BUILD_TIME_PARAMS,
  };

  return createdStyles as {
    theme: {
      variants: keyof Variants extends never
        ? {}
        : {
            [key in keyof Variants]: {
              [k in keyof Variants[key]]: any;
            };
          };
    };
    componentConfig?: Omit<IComponentStyleConfig, 'componentName'>;
  };
};
