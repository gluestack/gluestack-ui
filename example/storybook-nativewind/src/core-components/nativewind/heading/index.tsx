import React, { forwardRef, memo } from 'react';
import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
import { headingStyle } from './styles';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

type IHeadingProps = VariantProps<typeof headingStyle> &
  React.ComponentPropsWithoutRef<typeof H1> & {
    as?: React.ElementType;
  };

const MappedHeading = memo(
  forwardRef<React.ElementRef<typeof H1>, IHeadingProps>(
    (
      {
        size,
        className,
        isTruncated,
        bold,
        underline,
        strikeThrough,
        sub,
        italic,
        highlight,
        ...props
      },
      ref
    ) => {
      switch (size) {
        case '5xl':
        case '4xl':
        case '3xl':
          return (
            <H1
              className={headingStyle({
                size,
                isTruncated,
                bold,
                underline,
                strikeThrough,
                sub,
                italic,
                highlight,
                class: className,
              })}
              {...props}
              // @ts-expect-error
              ref={ref}
            />
          );
        case '2xl':
          return (
            <H2
              className={headingStyle({
                size,
                isTruncated,
                bold,
                underline,
                strikeThrough,
                sub,
                italic,
                highlight,
                class: className,
              })}
              {...props}
              // @ts-expect-error
              ref={ref}
            />
          );
        case 'xl':
          return (
            <H3
              className={headingStyle({
                size,
                isTruncated,
                bold,
                underline,
                strikeThrough,
                sub,
                italic,
                highlight,
                class: className,
              })}
              {...props}
              // @ts-expect-error
              ref={ref}
            />
          );
        case 'lg':
          return (
            <H4
              className={headingStyle({
                size,
                isTruncated,
                bold,
                underline,
                strikeThrough,
                sub,
                italic,
                highlight,
                class: className,
              })}
              {...props}
              // @ts-expect-error
              ref={ref}
            />
          );
        case 'md':
          return (
            <H5
              className={headingStyle({
                size,
                isTruncated,
                bold,
                underline,
                strikeThrough,
                sub,
                italic,
                highlight,
                class: className,
              })}
              {...props}
              // @ts-expect-error
              ref={ref}
            />
          );
        case 'sm':
        case 'xs':
          return (
            <H6
              className={headingStyle({
                size,
                isTruncated,
                bold,
                underline,
                strikeThrough,
                sub,
                italic,
                highlight,
                class: className,
              })}
              {...props}
              // @ts-expect-error
              ref={ref}
            />
          );
        default:
          return (
            <H4
              className={headingStyle({
                size,
                isTruncated,
                bold,
                underline,
                strikeThrough,
                sub,
                italic,
                highlight,
                class: className,
              })}
              {...props}
              // @ts-expect-error
              ref={ref}
            />
          );
      }
    }
  )
);

const Heading = memo(
  forwardRef<React.ElementRef<typeof H1>, IHeadingProps>(
    ({ className, size = 'lg', as: AsComp, ...props }, ref) => {
      const {
        isTruncated,
        bold,
        underline,
        strikeThrough,
        sub,
        italic,
        highlight,
      } = props;

      if (AsComp) {
        return (
          <AsComp
            className={headingStyle({
              size,
              isTruncated,
              bold,
              underline,
              strikeThrough,
              sub,
              italic,
              highlight,
              class: className,
            })}
            {...props}
          />
        );
      }

      return (
        <MappedHeading className={className} size={size} ref={ref} {...props} />
      );
    }
  )
);

Heading.displayName = 'Heading';

export { Heading };
