import { Root } from '../components/Box/styled-components';
import { ViewStyle } from 'react-native';

// type ISXProps = React.ComponentProps<typeof Box>;

// type IDefaultProps = React.ComponentProps<typeof View>;

type IStyleProps = Omit<
  React.ComponentProps<typeof Root>,
  ('sx' | 'key' | 'as' | 'ref' | 'states' | 'at' | 'flat') & ViewStyle
>;

// type ISProps = React.ComponentProps<typeof Root>['sx'];

export type ISXProps = {
  // state props
  _indeterminate: ISXProps;
  _checked: ISXProps;
  _readOnly: ISXProps;
  _required: ISXProps;
  _invalid: ISXProps;
  _focus: ISXProps;
  _focusVisible: ISXProps;
  _hover: ISXProps;
  _pressed: ISXProps;
  _active: ISXProps;
  _loading: ISXProps;
  _disabled: ISXProps;
  // platform props
  _web: ISXProps;
  _ios: ISXProps;
  _android: ISXProps;
  // colorMode props
  _light: ISXProps;
  _dark: ISXProps;
  // mediaQueries props
  /// to do later
} & IStyleProps; // style props e.g. h,w, bg, color etc

export type IProps = React.ComponentProps<typeof Root>['sx'];

// type IHExtract = IProps['h'];
// type IH = React.ComponentProps<typeof Root>['h'];

export type RemoveDollarSign<T> = T extends `${'$'}${infer Rest}` ? Rest : T;

// Use the utility type with conditional types
// type NewType = RemoveDollarSign<IH>;
// type NewType = RemoveDollarSign<IHExtract>;

type ModifiedObject = {
  [K in keyof IProps as K extends `${'$'}${infer Rest}`
    ? `${Rest}`
    : K]: IProps[K];
  // [K in keyof IProps]: 'string'; // RemoveDollarSign<IProps[K]>;
};

// let t: ModifiedObject = {};
const height = { h: 'px', bg: '' } as ModifiedObject;
// eslint-disable-next-line no-console
console.log(height);
