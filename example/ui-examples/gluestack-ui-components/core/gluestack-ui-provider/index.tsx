import { createProvider } from '@gluestack-ui/provider';
import { StyledProvider } from '@gluestack-style/react';

const Provider = createProvider({
  StyledProvider,
});

export { Provider as GluestackUIProvider };
