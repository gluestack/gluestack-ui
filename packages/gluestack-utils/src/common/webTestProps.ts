/**
 * Maps React Native's `testID` to the DOM `data-testid` attribute on web.
 * Use in `.web.tsx` components that render native HTML elements so `testID`
 * works in tests without React's "unknown prop" warning.
 */
export function mapTestIDToWebProps<T extends Record<string, unknown>>(
  props: T & { testID?: string | null }
): Omit<T, 'testID'> & { 'data-testid'?: string } {
  const { testID, ...rest } = props;
  if (testID == null) {
    return rest as Omit<T, 'testID'> & { 'data-testid'?: string };
  }
  return {
    ...rest,
    'data-testid': String(testID),
  } as Omit<T, 'testID'> & { 'data-testid'?: string };
}
