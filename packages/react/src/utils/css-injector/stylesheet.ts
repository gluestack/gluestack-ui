import createStyleSheet from './create-stylesheet';
import { flush } from './utils/inject';

const StyleSheet = {
  create: createStyleSheet,
};

export { flush };
export default StyleSheet;
