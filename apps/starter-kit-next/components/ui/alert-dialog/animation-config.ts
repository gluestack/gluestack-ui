/**
 * Alert Dialog Animation Configuration
 *
 * Customize these values to change alert dialog animation behavior.
 * All durations are in milliseconds.
 */

export const alertDialogAnimationConfig = {
  /**
   * Duration for backdrop fade animation
   * @default 200
   */
  backdropDuration: 200,

  /**
   * Maximum opacity for backdrop when visible
   * @default 1
   */
  backdropOpacity: 1,

  /**
   * Duration for content animation
   * @default 200
   */
  contentDuration: 200,

  /**
   * Initial scale of content when entering
   * @default 0.95
   */
  contentInitialScale: 0.95,
};

/**
 * Type for alert dialog animation config
 * Users can import this type to ensure type safety when customizing
 */
export type AlertDialogAnimationConfig = typeof alertDialogAnimationConfig;
