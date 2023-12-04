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

export type IProgressComponentType<ProgressProps, ProgressFilledTrackProps> =
  React.ForwardRefExoticComponent<ProgressProps & InterfaceProgressProps> & {
    FilledTrack: React.ForwardRefExoticComponent<ProgressFilledTrackProps>;
  };

export type IProgressProps = InterfaceProgressProps;
