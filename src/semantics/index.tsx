import React from 'react';
import { Text, TextProps, View, ViewProps } from 'react-native';

const H1 = React.forwardRef<Text, TextProps>(function H1(props, ref) {
  //@ts-ignore
  return <Text accessibilityRole="heading" ref={ref} {...props} />;
});

const H2 = React.forwardRef<Text, TextProps>(function H2(props, ref) {
  return (
    //@ts-ignore
    <Text accessibilityRole="heading" aria-level="2" ref={ref} {...props} />
  );
});

const H3 = React.forwardRef<Text, TextProps>(function H3(props, ref) {
  return (
    //@ts-ignore
    <Text accessibilityRole="heading" aria-level="3" ref={ref} {...props} />
  );
});

const H4 = React.forwardRef<Text, TextProps>(function H4(props, ref) {
  return (
    //@ts-ignore
    <Text accessibilityRole="heading" aria-level="4" ref={ref} {...props} />
  );
});

const H5 = React.forwardRef<Text, TextProps>(function H5(props, ref) {
  return (
    //@ts-ignore
    <Text accessibilityRole="heading" aria-level="5" ref={ref} {...props} />
  );
});

const H6 = React.forwardRef<Text, TextProps>(function H6(props, ref) {
  return (
    //@ts-ignore
    <Text accessibilityRole="heading" aria-level="6" ref={ref} {...props} />
  );
});

const A = React.forwardRef<Text, TextProps>(function A(props, ref) {
  return <Text accessibilityRole="link" ref={ref} {...props} />;
});

const Aside = React.forwardRef<View, ViewProps>(function Aside(props, ref) {
  return (
    //@ts-ignore
    <View accessibilityRole="complementary" ref={ref} {...props} />
  );
});

const Article = React.forwardRef<View, ViewProps>(function H6(props, ref) {
  return (
    //@ts-ignore
    <View accessibilityRole="article" ref={ref} {...props} />
  );
});

const Header = React.forwardRef<View, ViewProps>(function H6(props, ref) {
  return (
    //@ts-ignore
    <View accessibilityRole="banner" ref={ref} {...props} />
  );
});

const Label = React.forwardRef<Text, TextProps>(function H6(props, ref) {
  return (
    //@ts-ignore
    <Text accessibilityRole="label" ref={ref} {...props} />
  );
});

const Main = React.forwardRef<View, ViewProps>(function H6(props, ref) {
  return (
    //@ts-ignore
    <View accessibilityRole="main" ref={ref} {...props} />
  );
});

const Footer = React.forwardRef<View, ViewProps>(function H6(props, ref) {
  return (
    //@ts-ignore
    <View accessibilityRole="contentinfo" ref={ref} {...props} />
  );
});

const Form = React.forwardRef<View, ViewProps>(function H6(props, ref) {
  return (
    //@ts-ignore
    <View accessibilityRole="form" ref={ref} {...props} />
  );
});

const Section = React.forwardRef<View, ViewProps>(function H6(props, ref) {
  return (
    //@ts-ignore
    <View accessibilityRole="region" ref={ref} {...props} />
  );
});

const Ul = React.forwardRef<View, ViewProps>(function H6(props, ref) {
  return (
    //@ts-ignore
    <View accessibilityRole="list" ref={ref} {...props} />
  );
});

const Li = React.forwardRef<View, ViewProps>(function H6(props, ref) {
  return (
    //@ts-ignore
    <View accessibilityRole="listitem" ref={ref} {...props} />
  );
});

const Nav = React.forwardRef<View, ViewProps>(function H6(props, ref) {
  //@ts-ignore
  return <View accessibilityRole="navigation" ref={ref} {...props} />;
});

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Article,
  Header,
  Aside,
  Footer,
  Form,
  A,
  Ul,
  Li,
  Main,
  Nav,
  Section,
  Label,
};
