import { useSlider as useSliderWeb } from './useSlider.web';
import { mapDomPropsToRN } from '@react-native-aria/utils';

export const useSlider = (props: any, state: any, ref: any) => {
  let { groupProps: webGroupProps, ...rest } = useSliderWeb(props, state, ref);
  let groupProps = mapDomPropsToRN(webGroupProps);
  let labelProps = mapDomPropsToRN(rest.labelProps);
  return { groupProps, ...rest, labelProps };
};
export { useSliderThumb } from './useSliderThumb';
