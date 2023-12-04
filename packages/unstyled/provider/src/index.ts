import { Provider as MainProvider } from './Provider';

export const createProvider = <StyledProviderProps>({
  StyledProvider,
}: {
  StyledProvider: React.ComponentType<StyledProviderProps>;
}) => {
  const GluestackUIStyledProvider = MainProvider({ StyledProvider });
  GluestackUIStyledProvider.displayName = 'GluestackUIStyledProvider';
  return GluestackUIStyledProvider as React.ExoticComponent<StyledProviderProps>;
};
