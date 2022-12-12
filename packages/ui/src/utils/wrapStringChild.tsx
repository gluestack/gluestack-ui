import React from "react";
import { UIContext } from "../UIProvider";

export const wrapStringChild = (
  children: any,
  resolveContextChildrenStyle: any
) => {
  const { StyledBoxText } = React.useContext(UIContext);

  let { ancestorStyle } = StyledBoxText.config;
  let styledObject = {};

  ancestorStyle?.forEach((consumer: any) => {
    if (resolveContextChildrenStyle[consumer]) {
      styledObject = [styledObject, resolveContextChildrenStyle[consumer]];
    }
  });

  return React.Children.map(children, (child) => {
    return typeof child === "string" ||
      typeof child === "number" ||
      (child?.type === React.Fragment &&
        (typeof child.props?.children === "string" ||
          typeof child.props?.children === "number")) ? (
      <StyledBoxText ancestorStyle={styledObject}>{child}</StyledBoxText>
    ) : (
      child
    );
  });
};
