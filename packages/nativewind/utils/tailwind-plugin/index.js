import plugin from 'tailwindcss/plugin';

const stateObj = {
  'indeterminate=true': 1,
  'indeterminate=false': 1,
  'checked=true': 1,
  'checked=false': 1,
  'read-only=true': 1,
  'read-only=false': 1,
  'flip=true': 1,
  'flip=false': 1,
  'required=true': 2,
  'required=false': 2,
  'invalid=true': 2,
  'invalid=false': 2,
  'focus=true': 3,
  'focus=false': 3,
  'focus-visible=true': 4,
  'focus-visible=false': 4,
  'hover=true': 5,
  'hover=false': 5,
  'pressed=true': 6,
  'pressed=false': 6,
  'active=true': 6,
  'active=false': 6,
  'loading=true': 7,
  'loading=false': 7,
  'disabled=true': 10,
  'disabled=false': 10,
};
const getStatesWeight = (state) => {
  return stateObj[state];
};
const gluestackPlugin = plugin(function ({ matchVariant }) {
  matchVariant(
    'data',
    (_value) => {
      if (!_value.includes('=')) {
        return `&`;
      }
      const [state, value] = _value.split('=');
      return `&[data-${state}="${value}"]`;
    },
    {
      sort(a, z) {
        return getStatesWeight(a.value) - getStatesWeight(z.value);
      },
    }
  );
});
export default gluestackPlugin;
