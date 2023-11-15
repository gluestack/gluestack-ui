import { styled } from '@gluestack-style/react';
import { Spinner } from '../../Spinner';

export default styled(Spinner, {}, {
  componentName: 'ButtonSpinner',
  ancestorStyle: ['_spinner'],
  resolveProps: ['color'],
} as const);
