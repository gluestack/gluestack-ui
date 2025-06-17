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
  /**
   * Orientation of the progress bar.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  children?: any;
}

export type IProgressComponentType<ProgressProps, ProgressFilledTrackProps> =
  React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ProgressProps> &
      React.RefAttributes<ProgressProps> &
      InterfaceProgressProps
  > & {
    FilledTrack: React.ForwardRefExoticComponent<
      React.PropsWithoutRef<ProgressFilledTrackProps> &
        React.RefAttributes<ProgressFilledTrackProps>
    >;
  };

export type IProgressProps = InterfaceProgressProps;
