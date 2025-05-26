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
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IAvatarProps & AvatarProps> &
    React.RefAttributes<AvatarProps>
> & {
  Badge: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<BadgeProps> & React.RefAttributes<BadgeProps>
  >;
  Group: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<GroupProps & IAvatarGroupProps> &
      React.RefAttributes<GroupProps>
  >;
  Image: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<ImageProps> & React.RefAttributes<ImageProps>
  >;
  FallbackText: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<FallbackTextProps> &
      React.RefAttributes<FallbackTextProps>
  >;
};

export type IAvatarProps = InterfaceAvatarProps;
