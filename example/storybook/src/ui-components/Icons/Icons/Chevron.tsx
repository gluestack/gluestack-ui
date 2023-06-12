import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';
import { Path } from 'react-native-svg';
const ChevronUpIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  d: 'M12 10L8 6L4 10',
  path: (
    <>
      <Path
        d="M12 10L8 6L4 10"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const ChevronDownIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const ChevronLeftIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M10 12L6 8L10 4"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const ChevronRightIcon = createIcon({
  Root,

  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M6 12L10 8L6 4"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const ChevronsLeftIcon = createIcon({
  Root,

  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M7.33333 11.3334L4 8.00002L7.33333 4.66669"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 11.3334L8.66667 8.00002L12 4.66669"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const ChevronsRightIcon = createIcon({
  Root,

  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M8.66666 11.3334L12 8.00002L8.66666 4.66669"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 11.3334L7.33333 8.00002L4 4.66669"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const ChevronsUpDownIcon = createIcon({
  Root,

  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M4.66666 10L7.99999 13.3333L11.3333 10"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.66666 6.00002L7.99999 2.66669L11.3333 6.00002"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

ChevronUpIcon.displayName = 'ChevronUpIcon';
ChevronDownIcon.displayName = 'ChevronDownIcon';
ChevronLeftIcon.displayName = 'ChevronLeftIcon';
ChevronRightIcon.displayName = 'ChevronRightIcon';

export {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpDownIcon,
};
