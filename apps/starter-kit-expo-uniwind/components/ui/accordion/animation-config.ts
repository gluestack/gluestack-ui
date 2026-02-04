/**
 * Accordion Animation Configuration
 *
 * Customize these values to change accordion animation behavior.
 * All durations are in milliseconds.
 */

export const accordionAnimationConfig = {
  /**
   * Duration for content expand/collapse animation
   * @default 300
   */
  contentDuration: 200,

  /**
   * Duration for icon rotation animation
   * @default 300
   */
  iconDuration: 200,

  /**
   * Rotation angle for icon when accordion is expanded (in degrees)
   * @default 180 (upside down)
   */
  iconRotation: 180,
};

/**
 * Type for accordion animation config
 * Users can import this type to ensure type safety when customizing
 */
export type AccordionAnimationConfig = typeof accordionAnimationConfig;
