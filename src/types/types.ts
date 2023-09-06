import { Root } from '../components/Box/styled-components';

// type ISXProps = React.ComponentProps<typeof Box>;

type IStyleProps = Omit<Parameters<typeof Root>[0], 'sx'>;
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
