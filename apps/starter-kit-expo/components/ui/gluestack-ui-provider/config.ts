'use client';
import { vars } from 'nativewind';

export const config = {
  light: vars({
    //new tokens form schadcn
    '--primary': '23 23 23',
    '--primary-foreground': '250 250 250',

    /* Secondary  */

    '--secondary': '245 245 245',
    '--secondary-foreground': '23 23 23',

    '--background': '255 255 255',

    /* Focus Ring Indicator  */

    '--muted': '0 0 0',
    '--muted-foreground': '115 115 115',

    '--destructive': '220 38 38',
    '--destructive-foreground': '255 255 255',

    '--foreground': '9 9 11',

    '--border': '229 229 229',
    '--input': '229 229 229',
    '--ring': '212 212 212',

    '--accent': '247 247 247',
    '--accent-foreground': '52 52 52',
  }),
  dark: vars({
    '--primary-foreground': '23 23 23',
    '--primary': '255 245 245',

    /* Secondary  */

    '--secondary': '38 38 38',
    '--secondary-foreground': '250 250 250',

    /* Error */

    '--background': '255 255 255',

    '--color-input': '255 255 255',
    '--color-border': '255 255 255',
    '--color-foreground': '250 250 250',

    '--color-accent': '38 38 38',
    '--color-accent-foreground': '250 250 250',

    '--color-muted': '250 250 250',
    '--color-muted-foreground': '161 161 161',
  }),
};
