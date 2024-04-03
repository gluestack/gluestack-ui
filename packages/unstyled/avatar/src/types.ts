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
  IAvatarProps & AvatarProps & React.RefAttributes<AvatarProps>
> & {
  Badge: React.ForwardRefExoticComponent<
    BadgeProps & React.RefAttributes<BadgeProps>
  >;
  Group: React.ForwardRefExoticComponent<
    GroupProps & React.RefAttributes<GroupProps> & IAvatarGroupProps
  >;
  Image: React.ForwardRefExoticComponent<
    ImageProps & React.RefAttributes<ImageProps>
  >;
  FallbackText: React.ForwardRefExoticComponent<
    FallbackTextProps & React.RefAttributes<FallbackTextProps>
  >;
};

export type IAvatarProps = InterfaceAvatarProps;
