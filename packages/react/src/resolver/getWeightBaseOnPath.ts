import type { Path } from '../types';

export function getWeightBaseOnPath(path: Path) {
  const weightObject: {
    styled: Array<any>;
    sx: Array<any>;
    state: Array<any>;
  } = {
    styled: [],
    sx: [],
    state: [],
  };
  const STYLED_PRECENDENCE: any = {
    baseStyle: 1,
    variants: 2,
    compoundVariants: 3,
  };

  const SX_PRECEDENCE: any = {
    style: 1,
    platform: 2,
    colorMode: 3,
    queries: 4,
    state: 5,
    descendants: 6,
  };
  const STATE_PRECENDENCE: any = {
    indeterminate: 1,
    checked: 1,
    readOnly: 1,

    required: 2,
    invalid: 2,

    focus: 3,
    focusVisible: 4,
    hover: 5,
    pressed: 6,
    active: 6,
    loading: 7,

    disabled: 10,
  };

  const tempPath = [...path];

  for (let i = 0; i < tempPath.length; i++) {
    const currentValue = tempPath[i];

    let stateType: any = '';
    switch (currentValue) {
      case 'queries':
        i = i + 2;
        break;
      case 'state':
        stateType = tempPath[i + 1];
        i = i + 1;
        break;
      case 'descendants':
        break;
      default:
    }

    if (STYLED_PRECENDENCE[currentValue]) {
      weightObject.styled.push(STYLED_PRECENDENCE[currentValue]);
    }

    if (SX_PRECEDENCE[currentValue]) {
      weightObject.sx.push(SX_PRECEDENCE[currentValue]);
    }
    if (currentValue === 'state' && STATE_PRECENDENCE[stateType]) {
      weightObject.state.push(STATE_PRECENDENCE[stateType]);
    }
  }

  const weightObjectStyledValue = weightObject.styled.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const weightObjectSxValue = weightObject.sx.reduce(
    (partialSum, a) => partialSum + a,
    0
  );
  const weightObjectStateValue = weightObject.state.reduce(
    (partialSum, a) => partialSum + a,
    0
  );

  // console.log(tempPath, weightObject, 'temp path here');

  let weightedStyleString = '';
  if (weightObjectStyledValue < 10) {
    weightedStyleString = '0' + weightObjectStyledValue;
  } else {
    weightedStyleString = '' + weightObjectStyledValue;
  }

  let weightedSxString = '';
  if (weightObjectSxValue < 10) {
    weightedSxString = '0' + weightObjectSxValue;
  } else {
    weightedSxString = '' + weightObjectSxValue;
  }

  let weightedStateString = '';
  if (weightObjectStateValue < 10) {
    weightedStateString = '0' + weightObjectStateValue;
  } else {
    weightedStateString = '' + weightObjectStateValue;
  }

  const weight = parseInt(
    weightedStateString + weightedStyleString + weightedSxString,
    10
  );

  return weight;
}
