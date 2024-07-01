import { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { getTailwindConfigBreakpoints } from '@/utils/getTailwindConfigBreakpoints';

const breakpoints = getTailwindConfigBreakpoints();

export const useBreakpointValue = (values: any) => {
  const { width } = useWindowDimensions();
  const [value, setValue] = useState(values.base);

  useEffect(() => {
    if (width >= breakpoints['2xl'] && values['2xl'] !== undefined) {
      setValue(values['2xl']);
    } else if (width >= breakpoints.xl && values.xl !== undefined) {
      setValue(values.xl);
    } else if (width >= breakpoints.lg && values.lg !== undefined) {
      setValue(values.lg);
    } else if (width >= breakpoints.md && values.md !== undefined) {
      setValue(values.md);
    } else if (width >= breakpoints.sm && values.sm !== undefined) {
      setValue(values.sm);
    } else {
      setValue(values.base);
    }
  }, [width, values]);

  return value;
};
