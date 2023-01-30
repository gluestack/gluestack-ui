import type { MutableRefObject } from 'react';

export interface InterfaceProgressProps {
  /**
   * Value of Progress.
   * @default 0
   */
  value?: number;
  /**
   * Min progress value
   * @default 0
   */
  min?: number;
  /**
   * Max progress value
   * @default 100
   */
  max?: number;
  children?: any;
}

export type IProgressComponentType<StyledProgress, StyledProgressFilledTrack> =
  ((
    props: StyledProgress &
      InterfaceProgressProps & { ref?: MutableRefObject<any> }
  ) => JSX.Element) & {
    FilledTrack: React.MemoExoticComponent<
      (
        props: StyledProgressFilledTrack & { ref?: MutableRefObject<any> }
      ) => JSX.Element
    >;
  };

export type IProgressProps = InterfaceProgressProps;
