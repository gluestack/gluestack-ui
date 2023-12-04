// import { StyleSheet } from 'react-native';

export function value(styleResolved: any) {
  return {
    [styleResolved.meta.cssId]: styleResolved?.resolved,
  }; /* StyleSheet.create({
    [styleResolved.meta.cssId]: styleResolved?.resolved as any,
  }); */
}
