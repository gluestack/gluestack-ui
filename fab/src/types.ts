export type IFabComponentType<StyledFab, StyledFabLabel> = ((
  props: StyledFab
) => JSX.Element) & {
  Label: React.MemoExoticComponent<(props: StyledFabLabel) => JSX.Element>;
};
