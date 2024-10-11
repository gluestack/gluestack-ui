import React from 'react';

export default function OL({ children, start = 1, ...props }: any) {
  let index = start;
  children = React.Children.map(children, (child: any) => {
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

  return <ol {...props}>{children}</ol>;
}
