import React, { forwardRef, memo } from 'react';
import { H1 as _H1, H2 as _H2, H3 as _H3, H4 as _H4, H5 as _H5, H6 as _H6 } from '@expo/html-elements';
import { headingStyle } from './styles';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { withUniwind } from 'uniwind';

const H1 = withUniwind(_H1);
const H2 = withUniwind(_H2);
const H3 = withUniwind(_H3);
const H4 = withUniwind(_H4);
const H5 = withUniwind(_H5);
const H6 = withUniwind(_H6);

type IHeadingProps = VariantProps<typeof headingStyle> &
  React.ComponentPropsWithoutRef<typeof H1> & {
    as?: React.ElementType;
  };


const MappedHeading = memo(
  forwardRef<React.ComponentRef<typeof H1>, IHeadingProps>(
    function MappedHeading(
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
    ) {
      switch (size) {
        case '5xl':
        case '4xl':
        case '3xl':
          return (
            <H1
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
              // @ts-expect-error : type issue
              ref={ref}
            />
          );
        case '2xl':
          return (
            <H2
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
              // @ts-expect-error : type issue
              ref={ref}
            />
          );
        case 'xl':
          return (
            <H3
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
              // @ts-expect-error : type issue
              ref={ref}
            />
          );
        case 'lg':
          return (
            <H4
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
              // @ts-expect-error : type issue
              ref={ref}
            />
          );
        case 'md':
          return (
            <H5
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
              // @ts-expect-error : type issue
              ref={ref}
            />
          );
        case 'sm':
        case 'xs':
          return (
            <H6
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
              // @ts-expect-error : type issue
              ref={ref}
            />
          );
        default:
          return (
            <H4
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
              // @ts-expect-error : type issue
              ref={ref}
            />
          );
      }
    }
  )
);

const Heading = memo(
  forwardRef<React.ComponentRef<typeof H1>, IHeadingProps>(function Heading(
    { className, size = 'lg', as: AsComp, ...props },
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
        />
      );
    }

    return (
      <MappedHeading className={className} size={size} ref={ref} {...props} />
    );
  })
);

Heading.displayName = 'Heading';

export { Heading };
