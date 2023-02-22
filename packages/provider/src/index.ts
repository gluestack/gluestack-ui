import { Provider as MainProvider, UIContext } from './Provider';

export const createProvider = <StyledProviderProps>({
  StyledProvider,
}: {
  StyledProvider: React.ComponentType<StyledProviderProps>;
}) => {
  const Provider = MainProvider({ StyledProvider }) as any;
  Provider.displayName = 'Provider';
  return Provider as (props: StyledProviderProps) => JSX.Element;
};
export { UIContext };
