import React from "react";

export const LayoutContent = ({
  children,
  className,
  style,
  display,
  sx,
  height,
  w,
  maxWidth,
  mx,
  ...props
}: any) => {
  // Convert gluestack props to Tailwind classes
  const getClasses = () => {
    let classes = "";

    if (display === "none") classes += "hidden ";
    if (display === "flex") classes += "flex ";
    if (height === "$full") classes += "h-full ";
    if (w === "100%") classes += "w-full ";
    if (mx === "auto") classes += "mx-auto ";

    // Handle responsive classes from sx prop
    if (sx) {
      if (sx["@md"]?.minWidth === 736) classes += "md:min-w-[736px] ";
      if (sx["@lg"]?.minWidth === 662) classes += "lg:min-w-[662px] ";
      if (sx["@lg"]?.display === "flex") classes += "lg:flex ";
      if (sx["@xl"]?.minWidth === 598) classes += "xl:min-w-[598px] ";
      if (sx["@xxl"]?.minWidth === 736) classes += "2xl:min-w-[736px] ";
    }

    if (className) classes += className;

    return classes.trim();
  };

  const getStyle = () => {
    let styles: any = {};

    if (maxWidth) {
      styles.maxWidth =
        typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth;
    }

    return { ...styles, ...style };
  };

  return (
    <div className={getClasses()} style={getStyle()} {...props}>
      {children}
    </div>
  );
};
