import type { components, config } from './gluestack-ui.config';

type Config = typeof config.theme; // Assuming `config` is defined elsewhere
type Components = typeof components;

export interface UIConfig {}

type UIConfigType = UIConfig;

type MergeTypes<T, S> = {
  [K in keyof T | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof T
    ? T[K]
    : any;
};

type MergedConfigType = MergeTypes<Config, UIConfigType>;

interface CustomExtendedConfig extends MergedConfigType {}

declare module '@gluestack-style/react' {
  interface ICustomConfig extends CustomExtendedConfig {}
  interface ICustomComponents extends Components {}
}
