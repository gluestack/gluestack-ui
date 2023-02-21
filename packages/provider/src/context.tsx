import { createContext } from '@gluestack-ui/utils';

export const [AlertProvider, useAlert] = createContext<any>('AlertContext');
