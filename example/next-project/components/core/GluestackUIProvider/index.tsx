import { createProvider } from '@gluestack-ui/provider';
import { StyledProvider } from '@dank-style/react';

const Provider = createProvider({
  StyledProvider,
});

export { Provider as GluestackUIProvider };
