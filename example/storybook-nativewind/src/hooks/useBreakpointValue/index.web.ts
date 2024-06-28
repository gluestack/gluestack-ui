import { useState, useEffect, useCallback } from 'react';
import { getTailwindConfigBreakpoints } from '../../utils/getTailwindConfigBreakpoints';

const breakpoints = getTailwindConfigBreakpoints();

export const useBreakpointValue = (values: any) => {
  const [value, setValue] = useState(values.base);

  const updateValue = useCallback(() => {
    const width = window.innerWidth;

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
  }, [values]);

  useEffect(() => {
    updateValue();
    window.addEventListener('resize', updateValue);
    return () => window.removeEventListener('resize', updateValue);
  }, [updateValue]);

  return value;
};
