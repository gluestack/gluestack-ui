import React from 'react';

export const LayoutContent = ({
  children,
  className = '',
  style,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}) => {
  return (
    <div className={className} style={style} {...props}>
      {children}
    </div>
  );
};
