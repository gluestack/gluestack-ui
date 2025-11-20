'use client';
import { vars } from 'nativewind';

export const config = {
  light: vars({
    //new tokens form schadcn
    '--primary': '23 23 23',
    '--primary-foreground': '250 250 250',

    '--card': '255 255 255',
    /* Secondary  */

    '--secondary': '245 245 245',
    '--secondary-foreground': '23 23 23',

    '--background': '255 255 255',

    /* Focus Ring Indicator  */

    '--muted': '245 245 245',
    '--muted-foreground': '115 115 115',

    '--destructive': '231 0 11',
    '--destructive-foreground': '255 255 255',

    '--foreground': '10 10 10',

    '--border': '229 229 229',
    '--input': '229 229 229',
    '--ring': '212 212 212',

    '--accent': '247 247 247',
    '--accent-foreground': '52 52 52',
  }),
  dark: vars({
    '--primary-foreground': '23 23 23',
    '--primary': '255 245 245',

    '--card': '23 23 23',
    '--foreground': '250 250 250',

    '--secondary': '38 38 38',
    '--secondary-foreground': '250 250 250',

    '--destructive': '255 100 103',
    /* Error */

    '--background': '255 255 255',

    '--input': '255 255 255',
    '--border': '255 255 255',

    '--accent': '38 38 38',
    '--accent-foreground': '250 250 250',

    '--muted': '38 38 38',
    '--muted-foreground': '161 161 161',
  }),
};
