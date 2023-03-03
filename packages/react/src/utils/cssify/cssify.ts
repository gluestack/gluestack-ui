import createStyleSheet from './create-stylesheet';
import { flush } from './utils/inject';

const Cssify = {
  create: createStyleSheet,
};

export { flush };
export default Cssify;
