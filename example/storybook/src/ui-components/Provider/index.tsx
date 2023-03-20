import { createProvider } from '@gluestack-ui/provider';
import { StyledProvider } from '@gluestack-ui/styled';

const Provider = createProvider({
  StyledProvider,
});

export { Provider as GluestackUIProvider };
