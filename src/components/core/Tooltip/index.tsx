import { Root, Content } from "./styled-components";
import { createTooltip } from "@gluestack-ui/tooltip";
import { styled } from "../styled";
// @ts-ignore
export const Tooltip = createTooltip({
  Root,
  Content,
  //@ts-ignore
  AnimatePresence: styled.Component,
});
