import { createProvider } from '@gluestack/ui-creator';
import { StyledProvider } from '@gluestack/ui-styled';

const GluestackUIProvider = createProvider({ StyledProvider }) as any;
GluestackUIProvider.displayName = 'GluestackUIProvider';
export { GluestackUIProvider };
