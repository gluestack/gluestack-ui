import React, { createContext } from "react";
import type { IStackProps } from "./types";
import { UIContext } from "../UIProvider";
import { flattenChildren } from "../utils/getSpacedChild";
export const StackContext = createContext<any>({});

export function VStack({ children, space, ...props }: IStackProps) {
  const { VStack: StyledVStack, VStackSpacer: StyledVStackSpacer } =
    React.useContext(UIContext);

  const getSpacedChildren = (children: any) => {
    let childrenArray = React.Children.toArray(flattenChildren(children));

    childrenArray = childrenArray.map((child: any, index: number) => {
      return (
        <React.Fragment key={child.key ?? `spaced-child-${index}`}>
          {child}
          {index < childrenArray.length - 1 && (
            <StyledVStackSpacer size={space} />
          )}
        </React.Fragment>
      );
    });

    return childrenArray;
  };
  return <StyledVStack {...props}>{getSpacedChildren(children)}</StyledVStack>;
}
