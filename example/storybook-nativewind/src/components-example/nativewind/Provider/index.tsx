import React from 'react';
import { Platform, View } from 'react-native';
import { vars } from 'nativewind';

export const config = {
  light: vars({
    '--color-primary-0': '#B3B3B3',
    '--color-primary-50': '#999999',
    '--color-primary-100': '#808080',
    '--color-primary-200': '#737373',
    '--color-primary-300': '#666666',
    '--color-primary-400': '#525252',
    '--color-primary-500': '#333333',
    '--color-primary-600': '#292929',
    '--color-primary-700': '#1F1F1F',
    '--color-primary-800': '#0D0D0D',
    '--color-primary-900': '#0A0A0A',
    '--color-primary-950': '#080808',

    /* Secondary  */
    '--color-secondary-0': '#FEFFFF',
    '--color-secondary-50': '#F1F2F2',
    '--color-secondary-100': '#E7E8E8',
    '--color-secondary-200': '#DBDBDB',
    '--color-secondary-300': '#AFB0B0',
    '--color-secondary-400': '#727373',
    '--color-secondary-500': '#5E5F5F',
    '--color-secondary-600': '#515252',
    '--color-secondary-700': '#3F4040',
    '--color-secondary-800': '#272626',
    '--color-secondary-900': '#181717',
    '--color-secondary-950': '#0B0C0C',

    /* Tertiary */
    '--color-tertiary-0': '#FFFAF5',
    '--color-tertiary-50': '#FFF2E5',
    '--color-tertiary-100': '#FFE9D5',
    '--color-tertiary-200': '#FED1AA',
    '--color-tertiary-300': '#FDB474',
    '--color-tertiary-400': '#FB9D4B',
    '--color-tertiary-500': '#E78128',
    '--color-tertiary-600': '#D7751F',
    '--color-tertiary-700': '#B4621A',
    '--color-tertiary-800': '#824917',
    '--color-tertiary-900': '#6C3D13',
    '--color-tertiary-950': '#543112',

    /* Error */
    '--color-error-0': ' #FEE9E9',
    '--color-error-50': ' #FEE2E2',
    '--color-error-100': ' #FECACA',
    '--color-error-200': ' #FCA5A5',
    '--color-error-300': ' #F87171',
    '--color-error-400': ' #EF4444',
    '--color-error-500': ' #E63535',
    '--color-error-600': ' #DC2626',
    '--color-error-700': ' #B91C1C',
    '--color-error-800': ' #991B1B',
    '--color-error-900': ' #7F1D1D',
    '--color-error-950': ' #531313',

    /* Success */
    '--color-success-0': ' #E4FFF4',
    '--color-success-50': ' #CAFFE8',
    '--color-success-100': ' #A2F1C0',
    '--color-success-200': ' #84D3A2',
    '--color-success-300': ' #66B584',
    '--color-success-400': ' #489766',
    '--color-success-500': ' #348352',
    '--color-success-600': ' #2A7948',
    '--color-success-700': ' #206F3E',
    '--color-success-800': ' #166534',
    '--color-success-900': ' #14532D',
    '--color-success-950': ' #1B3224',

    /* Warning */
    '--color-warning-0': ' #FFFDFB',
    '--color-warning-50': ' #FFF9F5',
    '--color-warning-100': ' #FFE7D5',
    '--color-warning-200': ' #FECDAA',
    '--color-warning-300': ' #FDAD74',
    '--color-warning-400': ' #FB954B',
    '--color-warning-500': ' #E77828',
    '--color-warning-600': ' #D76C1F',
    '--color-warning-700': ' #B45A1A',
    '--color-warning-800': ' #824417',
    '--color-warning-900': ' #6C3813',
    '--color-warning-950': ' #542D12',

    /* Info */
    '--color-info-0': ' #ECF8FE',
    '--color-info-50': ' #C7EBFC',
    '--color-info-100': ' #A2DDFA',
    '--color-info-200': ' #7CCFF8',
    '--color-info-300': ' #57C2F6',
    '--color-info-400': ' #32B4F4',
    '--color-info-500': ' #0DA6F2',
    '--color-info-600': ' #0B8DCD',
    '--color-info-700': ' #0973A8',
    '--color-info-800': ' #075A83',
    '--color-info-900': ' #05405D',
    '--color-info-950': ' #032638',

    /* Typography */
    '--color-typography-0': ' #FEFEFF',
    '--color-typography-50': ' #F5F5F5',
    '--color-typography-100': ' #E5E5E5',
    '--color-typography-200': ' #DBDBDC',
    '--color-typography-300': ' #D4D4D4',
    '--color-typography-400': ' #A3A3A3',
    '--color-typography-500': ' #8C8C8C',
    '--color-typography-600': ' #737373',
    '--color-typography-700': ' #525252',
    '--color-typography-800': ' #404040',
    '--color-typography-900': ' #262627',
    '--color-typography-950': ' #171717',

    /* Outline */
    '--color-outline-0': ' #FDFEFE',
    '--color-outline-50': ' #F3F3F3',
    '--color-outline-100': ' #E6E6E6',
    '--color-outline-200': ' #DDDCDB',
    '--color-outline-300': ' #D3D3D3',
    '--color-outline-400': ' #A5A3A3',
    '--color-outline-500': ' #8C8D8D',
    '--color-outline-600': ' #737474',
    '--color-outline-700': ' #535252',
    '--color-outline-800': ' #414141',
    '--color-outline-900': ' #272624',
    '--color-outline-950': ' #1A1717',
    /* Background */
    '--color-background-0': '#FBFBFB',
    '--color-background-50': '#F6F6F6',
    '--color-background-100': '#F2F1F1',
    '--color-background-200': '#DCDBDB',
    '--color-background-300': '#D5D4D4',
    '--color-background-400': '#A2A3A3',
    '--color-background-500': '#8E8E8E',
    '--color-background-600': '#747474',
    '--color-background-700': '#535252',
    '--color-background-800': '#414040',
    '--color-background-900': '#272625',
    '--color-background-950': '#181718',

    /* Background Special */
    '--color-background-error': '#FEF1F1',
    '--color-background-warning': '#FFF4EB',
    '--color-background-success': '#EDFCF2',
    '--color-background-muted': '#F6F6F7',
    // '--color-background-muted': 'red',
    '--color-background-info': '#EBF8FE',
  }),
  dark: vars({
    '--color-primary-0': '#828282',
    '--color-primary-50': '#949494',
    '--color-primary-100': '#9E9E9E',
    '--color-primary-200': '#B3B3B3',
    '--color-primary-300': '#C7C7C7',
    '--color-primary-400': '#E6E6E6',
    '--color-primary-500': '#F0F0F0',
    '--color-primary-600': '#FAFAFA',
    '--color-primary-700': '#FCFCFC',
    '--color-primary-800': '#FDFDFD',
    '--color-primary-900': '#FDFCFC',
    '--color-primary-950': '#FDFCFC',
  }),
};

const providerStyle = Platform.select({
  web: {
    flex: 1,
    height: '100vh',
    width: '100%',
  },
  android: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  ios: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
});

export function Provider({
  mode,
  ...props
}: {
  mode?: 'light' | 'dark';
  children: any;
}) {
  // @ts-ignore
  return (
    <View
      style={[
        mode ? config[mode] : config['light'],
        providerStyle,
        // @ts-ignore
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}
