export type ColorMode = 'light' | 'dark' | null | undefined;

export interface ColorModeOptions {
  initialColorMode?: ColorMode;
  useSystemColorMode?: boolean;
  accessibleColors?: boolean;
}

export type IColorModeProviderProps = {
  children?: React.ReactNode;
  options: ColorModeOptions;
  colorModeManager?: StorageManager;
};

export interface IColorModeContextProps {
  colorMode: ColorMode;
  toggleColorMode: () => void;
  setColorMode: (value: any) => void;
  accessibleColors: boolean;
  setAccessibleColors: (value: boolean) => void;
}
