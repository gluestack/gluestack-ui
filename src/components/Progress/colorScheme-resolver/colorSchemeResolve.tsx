export function colorSchemeResolveFn({ ...props }: any) {
  if (props.colorScheme) {
    const color = props.colorScheme;
    const value = {
      _filledTrack: {
        bg: `$${color}.600`,
      },
      _dark: {
        _filledTrack: {
          bg: `$${color}.400`,
        },
      },
    };
    return value;
  }
  return {};
}
