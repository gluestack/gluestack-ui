import type { TVVariants, TVDefaultVariants, ClassValue, TVCompoundSlots, TVCompoundVariants, TVProps, TVReturnProps, VariantProps as TVVariantProps } from 'tailwind-variants';
import type { TVConfig } from 'tailwind-variants/dist/config';
type TVSlots = Record<string, ClassValue> | undefined;
export type TVA = {
    <V extends TVVariants<S, B, EV>, CV extends TVCompoundVariants<V, S, B, EV, ES>, DV extends TVDefaultVariants<V, S, EV, ES>, C extends TVConfig<V, EV>, PV extends TVVariants<S, B, EV>, PCV extends TVCompoundVariants<V, S, B, EV, ES>, B extends ClassValue = undefined, S extends TVSlots = undefined, E extends TVReturnType = TVReturnType<V, S, B, C, EV extends undefined ? {} : EV, ES extends undefined ? {} : ES>, EV extends TVVariants<ES, B, E['variants'], ES> = E['variants'], ES extends TVSlots = E['slots'] extends TVSlots ? E['slots'] : undefined>(options: {
        /**
         * Extend allows for easy composition of components.
         * @see https://www.tailwind-variants.org/docs/composing-components
         */
        extend?: E;
        /**
         * Base allows you to set a base class for a component.
         */
        base?: B;
        /**
         * Slots allow you to separate a component into multiple parts.
         * @see https://www.tailwind-variants.org/docs/slots
         */
        slots?: S;
        /**
         * Variants allow you to create multiple versions of the same component.
         * @see https://www.tailwind-variants.org/docs/variants#adding-variants
         */
        variants?: V;
        /**
         * Compound variants allow you to apply classes to multiple variants at once.
         * @see https://www.tailwind-variants.org/docs/variants#compound-variants
         */
        compoundVariants?: CV;
        /**
         * Compound slots allow you to apply classes to multiple slots at once.
         */
        compoundSlots?: TVCompoundSlots<V, S, B>;
        /**
         * Default variants allow you to set default variants for a component.
         * @see https://www.tailwind-variants.org/docs/variants#default-variants
         */
        defaultVariants?: DV;
        parentVariants?: PV;
        parentCompoundVariants?: PCV;
    }, 
    /**
     * The config object allows you to modify the default configuration.
     * @see https://www.tailwind-variants.org/docs/api-reference#config-optional
     */
    config?: C): TVReturnType<UNION<V, PV>, S, B, C, EV, ES, E>;
};
type UNION<A, B> = A & B;
export type TVReturnType<V extends TVVariants<S>, S extends TVSlots, B extends ClassValue, C extends TVConfig<V, EV>, EV extends TVVariants<ES>, ES extends TVSlots, E extends TVReturnType = undefined> = {
    (props?: TVProps<V, S, C, EV, ES> & {
        parentVariants?: Omit<TVProps<V, S, C, EV, ES>, 'class' | 'className'>;
    }): HasSlots<S, ES> extends true ? {
        [K in keyof (ES extends undefined ? {} : ES)]: (slotProps?: TVProps<V, S, C, EV, ES>) => string;
    } & {
        [K in keyof (S extends undefined ? {} : S)]: (slotProps?: TVProps<V, S, C, EV, ES>) => string;
    } & {
        [K in TVSlotsWithBase<{}, B>]: (slotProps?: TVProps<V, S, C, EV, ES>) => string;
    } : string;
} & TVReturnProps<V, S, B, EV, ES, E>;
type HasSlots<S extends TVSlots, ES extends TVSlots> = S extends undefined ? ES extends undefined ? false : true : true;
type TVSlotsWithBase<S extends TVSlots, B extends ClassValue> = B extends undefined ? keyof S : keyof S | TVBaseName;
type TVBaseName = 'base';
export type VariantProps<T extends (...args: any) => any> = Omit<TVVariantProps<T>, 'parentVariants'>;
export {};
