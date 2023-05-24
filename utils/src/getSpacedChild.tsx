import React from 'react';
// Thanks @gregberge for code and @nandorojo for suggestion.
// Original source: https://github.com/gregberge/react-flatten-children
type ReactChildArray = ReturnType<typeof React.Children.toArray>;
export function flattenChildren(
  children: JSX.Element[] | JSX.Element,
  keys: (string | number)[] = []
): ReactChildArray {
  const childrenArray = React.Children.toArray(children);
  return childrenArray.reduce(
    (flatChildren: ReactChildArray, child: any, index: number) => {
      if ((child as React.ReactElement<any>).type === React.Fragment) {
        return flatChildren.concat(
          flattenChildren(
            (child as React.ReactElement<any>).props.children,
            keys.concat(child.key || index)
          )
        );
      }
      if (React.isValidElement(child)) {
        flatChildren.push(
          React.cloneElement(child, {
            key: keys.concat(String(child.key || index)).join('.'),
          })
        );
      } else {
        flatChildren.push(child);
      }
      return flatChildren;
    },
    []
  );
}

const getSpacedChildren = (
  children: JSX.Element[] | JSX.Element,
  space: undefined | number | string,
  SpacerComponent: any
): any => {
  let childrenArray = React.Children.toArray(flattenChildren(children));

  childrenArray = childrenArray.map((child: any, index: number) => {
    return (
      <React.Fragment key={child.key ?? `spaced-child-${index}`}>
        {child}
        {index < childrenArray.length - 1 && space && (
          <SpacerComponent size={space} />
        )}
      </React.Fragment>
    );
  });
  return childrenArray;
};

export default getSpacedChildren;
