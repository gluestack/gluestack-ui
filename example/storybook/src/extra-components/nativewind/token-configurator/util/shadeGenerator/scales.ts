import { DEFAULT_STOP, DEFAULT_STOPS } from './constants';

export function createSaturationScale(
  tweak: number = 0,
  stop: number = DEFAULT_STOP
) {
  const stops = DEFAULT_STOPS;
  const index = stops.indexOf(stop);

  if (index === -1) {
    throw new Error(`Invalid key value: ${stop}`);
  }

  return stops.map((stop) => {
    const diff = Math.abs(stops.indexOf(stop) - index);
    const tweakValue = tweak
      ? Math.round((diff + 1) * tweak * (1 + diff / 10))
      : 0;

    if (tweakValue > 100) {
      return { stop, tweak: 100 };
    }

    return { stop, tweak: tweakValue };
  });
}

export function createHueScale(tweak: number = 0, stop: number = DEFAULT_STOP) {
  const stops = DEFAULT_STOPS;
  const index = stops.indexOf(stop);

  if (index === -1) {
    throw new Error(`Invalid parameter value: ${stop}`);
  }

  return stops.map((stop) => {
    const diff = Math.abs(stops.indexOf(stop) - index);
    const tweakValue = tweak ? diff * tweak : 0;

    return { stop, tweak: tweakValue };
  });
}

export function createDistributionValues(
  min: number = 0,
  max: number = 100,
  lightness: number,
  stop: number = DEFAULT_STOP
) {
  const stops = DEFAULT_STOPS;

  // Create known stops
  const newValues = [
    { stop: 0, tweak: max },
    { stop, tweak: lightness },
    { stop: 1000, tweak: min },
  ];

  // Create missing stops
  for (let i = 0; i < stops.length; i++) {
    const stopValue = stops[i];

    if (stopValue === 0 || stopValue === 1000 || stopValue === stop) {
      continue;
    }

    const diff = Math.abs((stopValue - stop) / 100);
    const totalDiff =
      stopValue < stop
        ? Math.abs(stops.indexOf(stop) - stops.indexOf(DEFAULT_STOPS[0])) - 1
        : Math.abs(
            stops.indexOf(stop) -
              stops.indexOf(DEFAULT_STOPS[DEFAULT_STOPS.length - 1])
          ) - 1;
    const increment = stopValue < stop ? max - lightness : lightness - min;

    const tweak =
      stopValue < stop
        ? (increment / totalDiff) * diff + lightness
        : lightness - (increment / totalDiff) * diff;

    newValues.push({ stop: stopValue, tweak: Math.round(tweak) });
  }

  newValues.sort((a, b) => a.stop - b.stop);

  return newValues;
}
