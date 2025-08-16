export function removeHyphen(str: string): string {
  return str.replace(/-/g, '');
}

export const pascalToDash = (str: string): string => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

export const dashToPascal = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/-(.)/g, (_, group1) => group1.toUpperCase())
    .replace(/(^|-)([a-z])/g, (_, _group1, group2) => group2.toUpperCase());
};
