export interface InterfaceAvatarProps {}

export interface IAvatarBadgeProps {}

export interface IAvatarGroupProps extends IAvatarProps {
  /**
   * Avatar children
   */
  children?: JSX.Element[] | JSX.Element;
}
export type IAvatarComponentType<
  AvatarProps,
  BadgeProps,
  GroupProps,
  ImageProps,
  FallbackTextProps
> = React.ForwardRefExoticComponent<IAvatarProps & AvatarProps> & {
  Badge: React.ForwardRefExoticComponent<BadgeProps>;
  Group: React.ForwardRefExoticComponent<GroupProps & IAvatarGroupProps>;
  Image: React.ForwardRefExoticComponent<ImageProps>;
  FallbackText: React.ForwardRefExoticComponent<FallbackTextProps>;
};

export type IAvatarProps = InterfaceAvatarProps;
