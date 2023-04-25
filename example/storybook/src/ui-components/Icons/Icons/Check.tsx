import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

const CheckIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  d: 'M8.53115 15.1856L3.96198 10.744L2 12.6512L8.53115 19L22 5.9072L20.038 4L8.53115 15.1856Z',
});

const CheckCircleIcon = createIcon({
  Root,
  viewBox: '0 0 20 20',
  d: 'M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.2197 6.96967L8.75 11.4393L6.78033 9.46967C6.48744 9.17678 6.01256 9.17678 5.71967 9.46967C5.42678 9.76256 5.42678 10.2374 5.71967 10.5303L8.21967 13.0303C8.51256 13.3232 8.98744 13.3232 9.28033 13.0303L14.2803 8.03033C14.5732 7.73744 14.5732 7.26256 14.2803 6.96967C13.9874 6.67678 13.5126 6.67678 13.2197 6.96967Z',
});

CheckIcon.displayName = 'CheckIcon';
CheckCircleIcon.displayName = 'CheckCircleIcon';

export { CheckIcon, CheckCircleIcon };
