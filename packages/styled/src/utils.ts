export const setObjectProperty = (object: any, keyPath: any, value: any) => {
  return keyPath.reduceRight((acc: any, key: any, index: number) => {
    if (index === keyPath.length - 1) {
      return Object.assign({}, acc, { [key]: value });
    }
    return { [key]: acc };
  }, object);
};

export const getObjectProperty = (object: any, keyPath: any) => {
  return keyPath.reduce((acc: any, key: any) => acc && acc[key], object);
};
