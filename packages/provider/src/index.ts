import { Provider as MainProvider } from './Provider';

export const createProvider = <StyledProviderProps>({
  StyledProvider,
}: {
  StyledProvider: React.ComponentType<StyledProviderProps>;
}) => {
  const Provider = MainProvider({ StyledProvider }) as any;
  Provider.displayName = 'Provider';
  return Provider as (props: StyledProviderProps) => JSX.Element;
};
