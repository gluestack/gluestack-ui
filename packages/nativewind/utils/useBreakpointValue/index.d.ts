declare const screenSize: Record<'sm' | 'md' | 'lg' | 'xl' | '2xl', string>;
type breakpoints = keyof typeof screenSize | 'default';
type BreakPointValue = Partial<Record<breakpoints, any>>;
export declare const getBreakPointValue: (values: any, width: any) => any;
export declare function useBreakpointValue(values: BreakPointValue): null;
export declare function isValidBreakpoint(
  breakPointWidth: any,
  width?: any
): boolean;
export {};
