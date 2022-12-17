import createStyleSheet from './create-stylesheet';
import processStyleProp from './process-style-prop';
import { flush } from './utils/inject';

const StyleSheet = {
  create: createStyleSheet,
  process: processStyleProp,
};

export { flush };
export default StyleSheet;
