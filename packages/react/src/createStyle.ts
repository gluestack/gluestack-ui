import type { ViewProps, ImageProps, TextProps } from 'react-native';
import type {
  IComponentStyleConfig,
  ITheme,
  UnionToIntersection,
} from './types';

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
    theme: UnionToIntersection<
      T | ITheme<Variants, ViewProps | ImageProps | TextProps>
    >;
    componentConfig?: Omit<IComponentStyleConfig, 'componentName'>;
  };
};
