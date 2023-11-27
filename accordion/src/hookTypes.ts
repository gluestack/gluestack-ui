export type Collection = {
  key: string;
  isExpanded: boolean;
  isDisabled: boolean;
}[];

export type State = {
  collection: Collection;
  insertItem: (item: {
    key: string;
    isExpanded: boolean;
    isDisabled: boolean;
  }) => void;
  toggleItem: (itemValue: string, isDisabled?: boolean) => void;
};
