import { Provider as MainProvider, UIProvider } from './Provider';

export const createProvider = <StyledProviderProps>({
  StyledProvider,
}: {
  StyledProvider: React.ComponentType<StyledProviderProps>;
}) => {
  const GluestackUIStyledProvider = MainProvider({ StyledProvider }) as any;
  GluestackUIStyledProvider.displayName = 'GluestackUIStyledProvider';
  return GluestackUIStyledProvider as (
    props: StyledProviderProps
  ) => JSX.Element;
};
export { UIProvider };
