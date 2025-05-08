import React from "react";
import type { VariantProps } from "@/utils/nativewind/utils";
import { hstackStyle } from "../../../../../apps/docs/components/ui/hstack/styles";

type IHStackProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof hstackStyle>;

const HStack = React.forwardRef<React.ComponentRef<"div">, IHStackProps>(
  function HStack({ className, space, reversed, ...props }, ref) {
    return (
      <div
        className={hstackStyle({ space, reversed, class: className })}
        {...props}
        ref={ref}
      />
    );
  }
);

HStack.displayName = "HStack";

export { HStack };
