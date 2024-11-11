type IParams = {
  enabled?: boolean;
  callback: () => any;
};
export declare const keyboardDismissHandlerManager: {
  push: (handler: () => any) => () => void;
  length: () => number;
  pop: () => (() => any) | undefined;
};
/**
 * Handles attaching callback for Escape key listener on web and Back button listener on Android
 */
export declare const useKeyboardDismissable: ({
  enabled,
  callback,
}: IParams) => void;
export declare function useBackHandler({ enabled, callback }: IParams): void;
export {};
