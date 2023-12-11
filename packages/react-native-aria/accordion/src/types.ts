export type State = {
  selectedValues: string[];
  toggleItem: (itemValue: string, isDisabled?: boolean) => void;
};
