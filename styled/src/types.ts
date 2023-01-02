// import { GenericSizes } from './types';
// import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';
// import type { config } from './nativebase.config';

// import type { AliasesProps, ColorTokens } from '@gluestack/config';

// export type StylePropsAliases = typeof config.aliases;

// type GetAliasesProps<T> = {
//   [Property in keyof T]: Property extends 'bg'
//     ? `$${IColors}` | `$colors$${IColors}` | (string & {})
//     : unknown;
// };

// export type StylePropsConfig = typeof config;

// export type Platform = 'web' | 'android' | 'ios';

// type RNStyles = ViewStyle & ImageStyle & TextStyle;

// // interface Sx<T> {
// //   style?: StyleProps<T>;
// //   state?: ISxProps;
// //   platform?: ISxProps;
// //   colorMode?: ISxProps;
// //   descendants?: ISxProps;
// // }

// export type StyleProps<T> = Partial<T & RNStyles>;

// // export type SxProps = Sx<getAliasesProps<StylePropsAliases>>;

// // export type ISxProps = { [key: string]: SxProps };

// export type ISxProps = { [key: string]: SxProps };

// export type PlatformProps = Partial<Record<Platform, SxProps>>;

// export type StateProps = Partial<Record<state, SxProps>>;

// interface Sx<T> {
//   style: StyleProps<T>;
//   state: ISxProps;
//   platform: PlatformProps;
//   colorMode: ISxProps;
//   descendants: ISxProps;
// }

// type AllPropsss<T> = {
//   [Property in keyof T]: Property extends 'platform'
//     ? PlatformProps
//     : Property extends 'state'
//     ? StateProps
//     : ISxProps;
// };

// export type SxProps = Partial<
//   Sx<GetAliasesProps<AllPropsss<StylePropsAliases>>>
// >;

// // const obj: SxProps = {
// //   state: {
// //     hover: {
// //       style: {
// //         bg: "",
// //       },
// //     },
// //   },
// //   platform: {
// //     android: {
// //       style: {},
// //     },
// //   },
// // };

// //StateProps
// export type IStates = {
//   hover?: boolean;
//   active?: boolean;
//   focus?: boolean;
// };

// export type state = keyof IStates;

// // ColorProps
// export type IColors = Leaves<typeof config.tokens.colors>;

// //Utils
// /* eslint no-use-before-define: 0 */ // --> OFF
// // @ts-ignore
// type Join<K, P> = K extends string | number
//   ? P extends string | number
//     ? `${K}${'' extends P ? '' : '.'}${P}`
//     : never
//   : never;

// export type Leaves<T> = T extends object
//   ? { [K in keyof T]-?: Join<K, Leaves<T[K]>> }[keyof T]
//   : '';

// //Theme typings
interface IThemeProps {
  baseStyle: SxProps;
  variants: { [key: string]: SxProps };
  sizes: { [key: string]: SxProps };
  defaultProps: {
    variant?: string;
    size?: string;
  };
}

export type ThemeType = Partial<IThemeProps>;

// //Config typings
interface IConfigProps {
  descendantStyle: Array<string>;
  ancestorStyle: Array<string>;
  resolveProps: Array<string>;
  DEBUG?: string;
}

export type ConfigType = Partial<IConfigProps>;

// interface Sx<T> {
//   style: StyleProps<T>;
//   state: ISxProps;
//   platform: PlatformProps;
//   colorMode: ISxProps;
//   descendants: ISxProps;
// }

export type SxProps = {
  // style?: Partial<AliasesProps>;
  style?: any;
  state?: { [key: string]: SxProps };
  platform?: {
    [key: string]: SxProps;
  };
  descendants?: {
    [key: string]: SxProps;
  };
  colorMode?: {
    [key: string]: SxProps;
  };
};

// type GenericKey = string;

export type IStates = 'hover' | 'active' | 'focus';

export type Sx = {
  sx: SxProps;
  variant: GenericVariants;
  size: GenericSizes;
  states?: {
    hover?: SxProps;
    active?: SxProps;
    focus?: SxProps;
  };
  ancestorStyle: {
    [key: string]: SxProps;
  };
  children?: React.ReactNode | { (resolveContextChildrenStyle: any): void };
  colorMode?: string;
};

export type Variant = {
  [key: string]: SxProps;
};

export type Sizes = {
  [key: string]: SxProps;
};

export type GenericVariants = ITheme['variants'];

export type DefaultProps = {
  variant?: keyof GenericVariants | string;
  size?: keyof GenericVariants | string;
};

export type GenericSizes = ITheme['sizes'];
export interface ITheme {
  baseStyle?: SxProps;
  variants?: Variant;
  sizes?: Sizes;
  defaultProps?: DefaultProps;
}

export type UtilityPropsType = any;

export type UtilityProp = {
  'md-hover-bg': any;
};
