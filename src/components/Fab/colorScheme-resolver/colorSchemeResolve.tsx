export function colorSchemeResolveFn({ ...props }: any) {
  let value = {};
  if (props.colorScheme) {
    const color = props.colorScheme;
    const variant = props.variant;
    switch (variant) {
      case 'ghost':
        value = {
          '_text': {
            color: `$${color}.600`,
          },
          '_icon': {
            color: `$${color}.600`,
          },
          '_spinner': {
            props: {
              color: `$${color}.600`,
            },
          },
          ':hover': {
            bg: `$${color}.300.alpha0.1`,
          },
          ':active': {
            bg: `$${color}.400.alpha0.2`,
          },

          '_dark': {
            '_text': {
              color: `$${color}.500`,
            },
            '_icon': {
              color: `$${color}.500`,
            },
            '_spinner': {
              props: {
                color: `$${color}.500`,
              },
            },
            ':hover': {
              bg: `$${color}.500.alpha0.1`,
            },
            ':active': {
              bg: `$${color}.500.alpha0.2`,
            },
          },
        };
        break;
      case 'outline':
        value = {
          'borderWidth': 1,
          'borderColor': '$muted.300',
          '_text': {
            color: `$${color}.600`,
          },
          '_icon': {
            color: `$${color}.600`,
          },
          '_spinner': {
            props: {
              color: `$${color}.600`,
            },
          },
          ':hover': {
            bg: `$${color}.600.alpha0.1`,
          },
          ':active': {
            bg: `$${color}.600.alpha0.2`,
          },

          '_dark': {
            'borderColor': '$muted.700',
            '_text': {
              color: `$${color}.500`,
            },
            '_icon': {
              color: `$${color}.500`,
            },
            '_spinner': {
              props: {
                color: `$${color}.500`,
              },
            },
            ':hover': {
              bg: `$${color}.500.alpha0.1`,
            },
            ':active': {
              bg: `$${color}.500.alpha0.2`,
            },
          },
        };
        break;
      case 'solid':
        value = {
          '_text': {
            color: '$text.50',
          },
          '_icon': {
            color: '$text.50',
          },
          '_spinner': {
            props: {
              color: `$text.50`,
            },
          },
          'bg': `$${color}.600`,
          ':hover': {
            bg: `$${color}.700`,
          },
          ':active': {
            bg: `$${color}.800`,
          },

          '_dark': {
            'bg': `$${color}.600`,
            ':hover': {
              bg: `$${color}.700`,
            },
            ':active': {
              bg: `$${color}.800`,
            },
          },
        };
        break;
      case 'subtle':
        value = {
          'bg': `$${color}.100`,
          '_text': {
            color: `$${color}.900`,
          },
          '_icon': {
            color: `$${color}.900`,
          },
          '_spinner': {
            props: {
              color: `$${color}.900`,
            },
          },
          ':hover': {
            bg: `$${color}.200`,
          },
          ':active': {
            bg: `$${color}.300`,
          },

          '_dark': {
            'bg': `$${color}.300`,
            ':hover': {
              bg: `$${color}.200`,
            },
            ':active': {
              bg: `$${color}.100`,
            },
          },
        };
        break;
      case 'link':
        value = {
          '_icon': {
            color: `$${color}.600`,
          },
          '_spinner': {
            props: {
              color: `$${color}.600`,
            },
          },

          ':hover': {
            _text: {
              textDecorationLine: 'underline',
            },
          },
          ':active': {
            _text: {
              color: `$${color}.800`,
              textDecorationLine: 'underline',
            },
          },

          '_text': {
            color: `$${color}.600`,
          },
          '_dark': {
            '_text': {
              color: `$${color}.500`,
            },
            ':active': {
              _text: {
                color: `$${color}.300`,
              },
            },
          },
        };
        break;
    }
  }
  return value;
}
