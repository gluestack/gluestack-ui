// Code copied from the open source library 'react-native-web'
// https://github.com/necolas/react-native-web

const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export default canUseDOM;
