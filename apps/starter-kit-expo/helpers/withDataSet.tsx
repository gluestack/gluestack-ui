import React from 'react';

/**
 * Bridges React Native's `dataSet` prop to individual `data-*` props
 * for uniwind's data-attribute variant support.
 *
 * @gluestack-ui/core passes component state via dataSet (e.g. dataSet={{ disabled: 'true' }}).
 * Uniwind resolves data-[*] variants by reading data-disabled, data-active, etc. as direct props.
 * This HOC converts camelCase dataSet keys to kebab-case data-* props so both systems stay in sync.
 */
export function withDataSet<C extends React.ComponentType<any>>(Component: C): C {
  const Wrapped = React.forwardRef(
    (props: React.ComponentPropsWithoutRef<C>, ref: React.Ref<any>) => {
      const dataProps = props.dataSet
        ? Object.fromEntries(
            Object.entries(props.dataSet).map(([key, value]: [string, any]) => [
              `data-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`,
              value,
            ]),
          )
        : {};

      return <Component ref={ref} {...props} {...dataProps} />;
    },
  );

  Wrapped.displayName = Component.displayName || Component.name || 'withDataSet';

  return Wrapped as unknown as C;
}
