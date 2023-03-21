import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

const ChevronUpIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  d: 'M20.2286 18L11.9973 9.62148L3.76862 17.9973L2 16.1971L12 6L22 16.1971L20.2286 18Z',
});

const ChevronDownIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  d: 'M20.2286 6L11.9973 14.3785L3.76862 6.00268L2 7.80293L12 18L22 7.80293L20.2286 6Z',
});

const ChevronLeftIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  d: 'M18 3.77141L9.62148 12.0027L17.9973 20.2314L16.1971 22L6 12L16.1971 2L18 3.77141Z',
});

const ChevronRightIcon = createIcon({
  Root,

  viewBox: '0 0 24 24',
  d: 'M6 3.77141L14.3785 12.0027L6.00268 20.2314L7.80293 22L18 12L7.80293 2L6 3.77141Z',
});

ChevronUpIcon.displayName = 'ChevronUpIcon';
ChevronDownIcon.displayName = 'ChevronDownIcon';
ChevronLeftIcon.displayName = 'ChevronLeftIcon';
ChevronRightIcon.displayName = 'ChevronRightIcon';

export { ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon };
