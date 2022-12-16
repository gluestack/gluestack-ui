export const setObjectProperty = (object: any, keyPath: any, value: any) => {
  if (!Array.isArray(keyPath)) {
    keyPath = [keyPath];
  }
  return keyPath.reduceRight((baseObj: any, key: any, index: number) => {
    if (index === keyPath.length - 1) {
      return Object.assign({}, baseObj, { [key]: value });
    }
    return { [key]: baseObj };
  }, object);
};

export const getObjectProperty = (object: any, keyPath: any) => {
  if (!Array.isArray(keyPath)) {
    keyPath = [keyPath];
  }
  return keyPath.reduce(
    (baseObj: any, key: any) => baseObj && baseObj[key],
    object
  );
};
