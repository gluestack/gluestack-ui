import { Provider } from './Provider';

export const createProvider = () => {
  const ProviderTemp = Provider() as any;
  return ProviderTemp;
};
