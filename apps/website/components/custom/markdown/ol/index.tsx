import React from 'react';

export function OL({ children, mb, start = 1, ...props }: any) {
  let index = start;
  const NewChildren = React.Children.map(children, (child: any) => {
    if (typeof child !== 'string') {
      index++;
      return React.cloneElement(
        child,
        {
          ol: true,
          index,
          ...child.props,
        },
        child?.props?.children
      );
    }
    return child;
  });

  return <ol {...props}>{NewChildren}</ol>;
}
