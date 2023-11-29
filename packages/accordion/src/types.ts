export type CollectionItem = {
  key: string;
  isExpanded: boolean;
  isDisabled: boolean;
};

export type Collection = Map<string, CollectionItem>;

export type State = {
  collection: Collection;
  insertItem: (item: {
    key: string;
    isExpanded: boolean;
    isDisabled: boolean;
  }) => void;
  toggleItem: (itemValue: string, isDisabled?: boolean) => void;
};
