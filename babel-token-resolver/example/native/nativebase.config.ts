module.exports = {
  aliases: {
    bg: {
      property: 'backgroundColor',
      scale: 'color',
    },
    color: {
      property: 'color',
      scale: 'color',
    },
    h: {
      property: 'height',
      scale: 'space',
    },
    w: {
      property: 'width',
      scale: 'space',
    },
    p: {
      property: 'padding',
      scale: 'space',
    },
    px: {
      property: 'paddingHorizontal',
      scale: 'space',
    },
    py: {
      property: 'paddingVertical',
      scale: 'space',
    },
    fontSize: {
      property: 'fontSize',
      scale: 'fontSize',
    },
  },
  tokens: {
    color: {
      red: {
        '50': '#ff4c67',
        '100': '#ff304f',
        '200': '#fd1639',
        '300': '#f0072a',
        '400': '#d50726',
        '500': '#c00a26',
        '600': '#ad0d25',
        '700': '#9a1025',
        '800': '#881123',
        '900': '#761221',
      },
      white: '#fff',
      primary2: {
        '50': '#7bebff',
        '100': '#54e5ff',
        '200': '#2cdfff',
        '300': '#0cd4f7',
        '400': '#06b6d4',
        '500': '#0c9eb8',
        '600': '#10889d',
        '700': '#127283',
        '800': '#135d6a',
        '900': '#124a53',
      },
      secondary: {
        '50': '#b7ff7b',
        '100': '#a1ff54',
        '200': '#8bff2c',
        '300': '#76f70c',
        '400': '#63d507',
        '500': '#59b80c',
        '600': '#4f9d10',
        '700': '#458312',
        '800': '#3a6a13',
        '900': '#305312',
      },
    },
    space: {
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      10: 40,
      20: '80px',
    },
    fontSize: {
      sm: 14,
    },
    platforms: ['web', 'android', 'ios'],
  },
};
