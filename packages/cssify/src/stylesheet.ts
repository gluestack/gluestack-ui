import createStyleSheet from './create-stylesheet';
import processStyleProp from './process-style-prop';

const flush = () => {};

const StyleSheet = {
  create: createStyleSheet,
  process: processStyleProp,
};

export { flush };
export default StyleSheet;
