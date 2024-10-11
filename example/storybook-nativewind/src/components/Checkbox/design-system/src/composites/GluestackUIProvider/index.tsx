import { createProvider } from '@gluestack-ui/provider';
import { StyledProvider } from '@gluestack-style/react';

const GluestackUIProvider = createProvider({ StyledProvider });
//@ts-ignore
GluestackUIProvider.displayName = 'GluestackUIProvider';
export { GluestackUIProvider };
