export interface InterfaceRangeSliderProps {
  /** The current value of the Slider */
  value?: number;
  /** The default value (uncontrolled). */
  defaultValue?: number;
  /** Handler that is called when the value changes. */
  onChange?: (value: number) => void;
  children?: any;
  /**
   * If true, the value will be incremented or decremented in reverse.
   */
  isReversed?: boolean;
  /**
   * The orientation of the Slider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the whole Slider is disabled. */
  isDisabled?: boolean;
  /** Fired when the slider stops moving, due to being let go. */
  onChangeEnd?: (value: number) => void;
  /**
   * The slider's minimum value.
   * @default 0
   */
  minValue?: number;
  /**
   * The slider's maximum value.
   * @default 100
   */
  maxValue?: number;
  /**
   * The slider's step value.
   * @default 1
   */
  step?: number;
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
  /** Prop applied to change slider track height */
  sliderTrackHeight?: (string & {}) | number;
  /**Prop applied to change size of slider thumb */
  thumbSize?: (string & {}) | number;
  isHovered?: boolean;
  isFocused?: boolean;
  isFocusVisible?: boolean;
  isPressed?: boolean;
}

export interface IRangeSliderTrackProps {
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
  children?: any;
}

export interface IRangeSliderTrackFilledProps {
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
}

export interface IRangeSliderThumbProps {
  /**
   * The orientation of the Slider.
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /** Whether the Thumb is disabled. */
  isDisabled?: boolean;
  /** Whether the whole Slider is readonly. */
  isReadOnly?: boolean;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
  scaleOnPressed?: any;
}

export type IRangeSliderComponentType<
  StyledRangeSlider,
  StyledRangeSliderLeftThumb,
  StyledRangeSliderRightThumb,
  StyledRangeSliderTrack,
  StyledRangeSliderFilledTrack
> = React.ForwardRefExoticComponent<StyledRangeSlider & IRangeSliderProps> & {
  LeftThumb: React.ForwardRefExoticComponent<
    StyledRangeSliderLeftThumb & IRangeSliderThumbProps
  >;
  RightThumb: React.ForwardRefExoticComponent<
    StyledRangeSliderRightThumb & IRangeSliderThumbProps
  >;
  Track: React.ForwardRefExoticComponent<
    StyledRangeSliderTrack & IRangeSliderTrackProps
  >;
  FilledTrack: React.ForwardRefExoticComponent<
    StyledRangeSliderFilledTrack & IRangeSliderTrackFilledProps
  >;
};

export type IRangeSliderProps = InterfaceRangeSliderProps;
