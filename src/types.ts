import { config } from './components/gluestack-ui.config';
import { propertyTokenMap } from './utils';

type aliases = typeof config.theme.aliases;
type propertyTokenMap = typeof propertyTokenMap;

type ReplaceDollar<T extends string> = T extends `$${infer N}` ? N : never;

type FilteredKeys<T> = {
  [K in keyof T]: T[K] extends never | undefined ? never : K;
}[keyof T];

export type RemoveNever<T> = {
  [K in FilteredKeys<T>]: T[K];
};

export type GenericPropTypes<ComponentPropsType> = Omit<
  ComponentPropsType,
  keyof aliases | keyof propertyTokenMap
> &
  RemoveNever<{
    [K in keyof Pick<
      ComponentPropsType,
      //@ts-ignore
      keyof aliases | keyof propertyTokenMap
    >]: ReplaceDollar<
      //@ts-ignore
      Pick<ComponentPropsType, keyof aliases | keyof propertyTokenMap>[K]
    >;
  }>;

export type GenericComponentType<PropType> = (
  //@ts-ignore
  props: GenericPropTypes<React.ComponentProps<PropType>>
) => JSX.Element;
