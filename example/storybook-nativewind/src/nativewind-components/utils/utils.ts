export function parseDataAttribute(inputString: string) {
  const regex = /^data-\[(\w+)=(\w+)\]:(.+)$/;
  const match = inputString.match(regex);

  if (match) {
    return {
      state: match[1],
      value: match[2],
      className: match[3],
    };
  } else {
    return {
      state: null,
      value: null,
      className: null,
    };
  }
}

export function stringToBoolean(str: string) {
  if (str === 'true') return true;
  else return false;
}

export function extractDataClassName(className: string, states: any) {
  const classNamesArray =
    typeof className === 'string' ? className.split(' ') : className;

  let classNamesFinal = '';
  classNamesArray.forEach((classNameItem: string) => {
    // check for data- attribute
    if (classNameItem.includes('data-')) {
      // parse data- attribute
      const {
        state,
        value,
        className: stateClassName,
      } = parseDataAttribute(classNameItem);

      // check if state is present and value is true
      if (state && value && states[state] === stringToBoolean(value)) {
        // append state class name
        classNamesFinal += ` ${stateClassName}`;
      }
    } else {
      classNamesFinal += ` ${className}`;
    }
  });
  return classNamesFinal;
}
