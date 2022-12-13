import FormControl from './FormControl';
import FormControlErrorMessage from './FormControlErrorMessage';
import FormControlHelperText from './FormControlHelperText';
import FormControlLabel from './FormControlLabel';

const FormControlTemp = FormControl as any;
FormControlTemp.ErrorMessage = FormControlErrorMessage;
FormControlTemp.Label = FormControlLabel;
FormControlTemp.HelperText = FormControlHelperText;

export { FormControlTemp as FormControl };
