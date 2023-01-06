import { Provider as MainProvider } from './Provider';

export const createProvider = ({ StyledProvider }: any) => {
  const Provider = MainProvider({ StyledProvider }) as any;
  Provider.displayName = 'Provider';
  return Provider;
};
