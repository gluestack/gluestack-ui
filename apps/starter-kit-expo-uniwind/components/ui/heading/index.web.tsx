import React, { forwardRef, memo } from 'react';
import { headingStyle } from './styles';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
type IHeadingProps = VariantProps<typeof headingStyle> &
  React.ComponentPropsWithoutRef<'h1'> & {
    as?: React.ElementType;
    testID?: string;
  };

const MappedHeading = memo(
  forwardRef<HTMLHeadingElement, IHeadingProps>(function MappedHeading(
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
      testID,
      ...props
    },
    ref
  ) {
    switch (size) {
      case '5xl':
      case '4xl':
      case '3xl':
        return (
          <h1
            className={headingStyle({
              size,
              isTruncated: isTruncated as boolean,
              bold: bold as boolean,
              underline: underline as boolean,
              strikeThrough: strikeThrough as boolean,
              sub: sub as boolean,
              italic: italic as boolean,
              highlight: highlight as boolean,
              class: className,
            })}
            {...props}
            ref={ref}
            data-testid={testID}
          />
        );
      case '2xl':
        return (
          <h2
            className={headingStyle({
              size,
              isTruncated: isTruncated as boolean,
              bold: bold as boolean,
              underline: underline as boolean,
              strikeThrough: strikeThrough as boolean,
              sub: sub as boolean,
              italic: italic as boolean,
              highlight: highlight as boolean,
              class: className,
            })}
            {...props}
            ref={ref}
            data-testid={testID}
          />
        );
      case 'xl':
        return (
          <h3
            className={headingStyle({
              size,
              isTruncated: isTruncated as boolean,
              bold: bold as boolean,
              underline: underline as boolean,
              strikeThrough: strikeThrough as boolean,
              sub: sub as boolean,
              italic: italic as boolean,
              highlight: highlight as boolean,
              class: className,
            })}
            {...props}
            ref={ref}
            data-testid={testID}
          />
        );
      case 'lg':
        return (
          <h4
            className={headingStyle({
              size,
              isTruncated: isTruncated as boolean,
              bold: bold as boolean,
              underline: underline as boolean,
              strikeThrough: strikeThrough as boolean,
              sub: sub as boolean,
              italic: italic as boolean,
              highlight: highlight as boolean,
              class: className,
            })}
            {...props}
            ref={ref}
            data-testid={testID}
          />
        );
      case 'md':
        return (
          <h5
            className={headingStyle({
              size,
              isTruncated: isTruncated as boolean,
              bold: bold as boolean,
              underline: underline as boolean,
              strikeThrough: strikeThrough as boolean,
              sub: sub as boolean,
              italic: italic as boolean,
              highlight: highlight as boolean,
              class: className,
            })}
            {...props}
            ref={ref}
            data-testid={testID}
          />
        );
      case 'sm':
      case 'xs':
        return (
          <h6
            className={headingStyle({
              size,
              isTruncated: isTruncated as boolean,
              bold: bold as boolean,
              underline: underline as boolean,
              strikeThrough: strikeThrough as boolean,
              sub: sub as boolean,
              italic: italic as boolean,
              highlight: highlight as boolean,
              class: className,
            })}
            {...props}
            ref={ref}
            data-testid={testID}
          />
        );
      default:
        return (
          <h4
            className={headingStyle({
              size,
              isTruncated: isTruncated as boolean,
              bold: bold as boolean,
              underline: underline as boolean,
              strikeThrough: strikeThrough as boolean,
              sub: sub as boolean,
              italic: italic as boolean,
              highlight: highlight as boolean,
              class: className,
            })}
            {...props}
            ref={ref}
            data-testid={testID}
          />
        );
    }
  })
);

const Heading = memo(
  forwardRef<HTMLHeadingElement, IHeadingProps>(function Heading(
    { className, size = 'lg', as: AsComp, testID, ...props },
    ref
  ) {
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
            isTruncated: isTruncated as boolean,
            bold: bold as boolean,
            underline: underline as boolean,
            strikeThrough: strikeThrough as boolean,
            sub: sub as boolean,
            italic: italic as boolean,
            highlight: highlight as boolean,
            class: className,
          })}
          {...props}
          ref={ref}
          data-testid={testID}
        />
      );
    }

    return (
      <MappedHeading className={className} size={size} ref={ref} testID={testID} {...props} />
    );
  })
);

Heading.displayName = 'Heading';

export { Heading };
