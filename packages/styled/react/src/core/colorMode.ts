let colorMode: string = 'light';
const eventsCallbacks: Array<(value: string) => void> = [];

export function set(colorModeValue: string) {
  colorMode = colorModeValue;
  eventsCallbacks.forEach((callback) => {
    callback(colorModeValue);
  });
}

export function get() {
  return colorMode;
}

export function onChange(callback: (colorMode: string) => void) {
  eventsCallbacks.push(callback);
  return () => {
    const index = eventsCallbacks.indexOf(callback);
    if (index !== -1) {
      eventsCallbacks.splice(index, 1);
    }
  };
}
