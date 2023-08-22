import { useStyled } from '@gluestack-style/react';
import { useEffect, useState } from 'react';

const borderStyles = 'borderStyles';
const borderWidths = 'borderWidths';
const colors = 'colors';
const mediaQueries = 'mediaQueries';
const opacity = 'opacity';
const fonts = 'fonts';
const fontSizes = 'fontSizes';
const fontWeights = 'fontWeights';
const letterSpacings = 'letterSpacings';
const lineHeights = 'lineHeights';
const radii = 'radii';
const shadows = 'shadows';
const sizes = 'sizes';
const space = 'space';
const transitions = 'transitions';
const zIndices = 'zIndices';

const propertyTokenMap: any = {
  gap: space,
  gridGap: space,
  columnGap: space,
  gridColumnGap: space,
  rowGap: space,
  gridRowGap: space,
  inset: space,
  insetBlock: space,
  insetBlockEnd: space,
  insetBlockStart: space,
  insetInline: space,
  insetInlineEnd: space,
  insetInlineStart: space,
  margin: space,
  marginTop: space,
  marginRight: space,
  marginBottom: space,
  marginLeft: space,
  marginBlock: space,
  marginBlockEnd: space,
  marginBlockStart: space,
  marginInline: space,
  marginInlineEnd: space,
  marginInlineStart: space,

  marginHorizontal: space,
  marginVertical: space,
  padding: space,
  paddingTop: space,
  paddingRight: space,
  paddingBottom: space,
  paddingLeft: space,

  paddingBlock: space,
  paddingBlockEnd: space,
  paddingBlockStart: space,
  paddingInline: space,
  paddingInlineEnd: space,
  paddingInlineStart: space,

  paddingHorizontal: space,
  paddingVertical: space,
  paddingStart: space,
  paddingEnd: space,

  top: space,
  right: space,
  bottom: space,
  left: space,
  scrollMargin: space,
  scrollMarginTop: space,
  scrollMarginRight: space,
  scrollMarginBottom: space,
  scrollMarginLeft: space,
  scrollMarginX: space,
  scrollMarginY: space,
  scrollMarginBlock: space,
  scrollMarginBlockEnd: space,
  scrollMarginBlockStart: space,
  scrollMarginInline: space,
  scrollMarginInlineEnd: space,
  scrollMarginInlineStart: space,
  scrollPadding: space,
  scrollPaddingTop: space,
  scrollPaddingRight: space,
  scrollPaddingBottom: space,
  scrollPaddingLeft: space,
  scrollPaddingX: space,
  scrollPaddingY: space,
  scrollPaddingBlock: space,
  scrollPaddingBlockEnd: space,
  scrollPaddingBlockStart: space,
  scrollPaddingInline: space,
  scrollPaddingInlineEnd: space,
  scrollPaddingInlineStart: space,
  // shadowOffset: space,
  shadowRadius: space,
  elevation: space,

  fontSize: fontSizes,

  background: colors,
  backgroundColor: colors,
  backgroundImage: colors,
  borderImage: colors,
  border: colors,
  borderBlock: colors,
  borderBlockEnd: colors,
  borderBlockStart: colors,
  borderBottom: colors,
  borderBottomColor: colors,
  borderColor: colors,
  borderInline: colors,
  borderInlineEnd: colors,
  borderInlineStart: colors,
  borderLeft: colors,
  borderLeftColor: colors,
  borderRight: colors,
  borderRightColor: colors,
  borderTop: colors,
  borderTopColor: colors,
  caretColor: colors,
  color: colors,
  columnRuleColor: colors,
  fill: colors,
  outline: colors,
  outlineColor: colors,
  outlineWidth: sizes,
  stroke: colors,
  textDecorationColor: colors,
  shadowColor: colors,

  shadowOpacity: opacity,

  shadow: shadows,
  // Media Query
  condition: mediaQueries,

  fontFamily: fonts,

  fontWeight: fontWeights,

  lineHeight: lineHeights,

  letterSpacing: letterSpacings,

  blockSize: space,
  minBlockSize: space,
  maxBlockSize: space,
  inlineSize: space,
  minInlineSize: space,
  maxInlineSize: space,
  width: sizes,
  minWidth: sizes,
  maxWidth: sizes,
  height: sizes,
  minHeight: sizes,
  maxHeight: sizes,
  flexBasis: space,
  gridTemplateColumns: space,
  gridTemplateRows: space,

  borderWidth: borderWidths,
  borderTopWidth: borderWidths,
  borderRightWidth: borderWidths,
  borderBottomWidth: borderWidths,
  borderLeftWidth: borderWidths,

  borderStyle: borderStyles,
  borderTopStyle: borderStyles,
  borderRightStyle: borderStyles,
  borderBottomStyle: borderStyles,
  borderLeftStyle: borderStyles,

  borderRadius: radii,
  borderTopLeftRadius: radii,
  borderTopRightRadius: radii,
  borderBottomRightRadius: radii,
  borderBottomLeftRadius: radii,

  boxShadow: colors,
  textShadow: shadows,

  transition: transitions,

  zIndex: zIndices,
};
export const CSSPropertiesMap = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  alignSelf: 'auto',
  aspectRatio: 'auto',
  borderBottomWidth: '0',
  borderLeftWidth: '0',
  borderRightWidth: '0',
  borderTopWidth: '0',
  borderEndWidth: '0',
  borderStartWidth: '0',
  borderWidth: '0',
  bottom: 'auto',
  direction: 'ltr',
  display: 'flex',
  end: 'auto',
  start: 'auto',
  flex: 'none',
  flexDirection: 'column',
  flexBasis: 'auto',
  flexGrow: '0',
  flexShrink: '1',
  flexWrap: 'nowrap',
  gap: 'normal',
  rowGap: 'normal',
  columnGap: 'normal',
  height: 'auto',
  justifyContent: 'flex-start',
  left: 'auto',
  margin: '0',
  marginBottom: '0',
  marginHorizontal: '0',
  marginLeft: '0',
  marginRight: '0',
  marginTop: '0',
  marginVertical: '0',
  marginEnd: '0',
  marginStart: '0',
  maxHeight: 'none',
  maxWidth: 'none',
  minHeight: 'auto',
  minWidth: 'auto',
  padding: '0',
  paddingBottom: '0',
  paddingHorizontal: '0',
  paddingLeft: '0',
  paddingRight: '0',
  paddingTop: '0',
  paddingVertical: '0',
  paddingEnd: '0',
  paddingStart: '0',
  position: 'relative',
  right: 'auto',
  top: 'auto',
  width: 'auto',
  zIndex: 'auto',
  shadowColor: 'transparent',
  shadowOffset: '0px 0px',
  shadowOpacity: '0',
  shadowRadius: '0',
  transform: 'none',
  transformOrigin: 'initial',
  backfaceVisibility: 'visible',
  backgroundColor: 'transparent',
  borderBottomLeftRadius: '0',
  borderBottomRightRadius: '0',
  borderColor: 'initial',
  borderRadius: '0',
  borderTopLeftRadius: '0',
  borderTopRightRadius: '0',
  opacity: '1',
  overflow: 'visible',
  overflowX: 'visible',
  overflowY: 'visible',
  borderBottomColor: 'initial',
  borderLeftColor: 'initial',
  borderRightColor: 'initial',
  borderStyle: 'none',
  borderTopColor: 'initial',
  elevation: '0',
  color: 'initial',
  fontFamily: 'system-ui',
  fontSize: 'initial',
  fontStyle: 'normal',
  fontVariant: 'normal',
  textTransform: 'none',
  fontWeight: 'normal',
  lineHeight: 'initial',
  textAlign: 'auto',
  textDecorationLine: 'none',
  textShadowColor: 'transparent',
  textShadowOffset: '0px 0px',
  textShadowRadius: '0',
  textAlignVertical: 'auto',
  letterSpacing: 'normal',
  textDecorationColor: 'initial',
  textDecorationStyle: 'solid',
  borderBottomEndRadius: '0',
  borderBottomStartRadius: '0',
  borderEndColor: 'initial',
  borderStartColor: 'initial',
  borderTopEndRadius: '0',
  borderTopStartRadius: '0',
};

const renameMap: any = {
  _indeterminate: ':indeterminate',
  _checked: ':checked',
  _readOnly: ':readOnly',
  _required: ':required',
  _invalid: ':invalid',
  _focus: ':focus',
  _focusVisible: ':focusVisible',
  _hover: ':hover',
  _pressed: ':pressed',
  _active: ':active',
  _loading: ':loading',
  _disabled: ':disabled',
  // _web: '_web',
  // _android: '_android',
  // _ios: '_ios',
  // _light: '_light',
  // _dark: '_dark',
};

function renamePseudoClasses(obj: any) {
  for (const key in obj) {
    if (renameMap[key]) {
      obj[renameMap[key]] = obj[key];
      delete obj[key];
      renamePseudoClasses(obj[key]);
    } else if (typeof obj[key] === 'object') {
      renamePseudoClasses(obj[key]);
    }
  }
  return obj;
}

function convertResponsiveToPseudoClasses(obj: any, config: any) {
  let newObj = {};
  for (const key in obj) {
    const propName = key;
    const propValue = obj[key];

    if (Array.isArray(propValue)) {
      const breakPoints = config.tokens.breakpoints;
      const breakPointsKeys = Object.keys(breakPoints);
      propValue.forEach((value, index) => {
        newObj[`@${breakPointsKeys[index]}`] = { [propName]: value };
      });
    } else if (typeof propValue === 'object' && !propName.startsWith('_')) {
      const breakPoints = config.tokens.breakpoints;
      const breakPointsKeys = Object.keys(breakPoints);
      Object.keys(propValue).forEach((value) => {
        newObj[`@${value}`] = { [propName]: propValue[value] };
      });
    } else if (typeof propValue === 'object') {
      newObj[key] = convertResponsiveToPseudoClasses(propValue, config);
    } else {
      newObj[key] = propValue;
    }
  }
  return newObj;
}
function convertToSXForStateColorModeMediaQuery(inputObj: any, _config: any) {
  let newObj: any = {
    // ...obj,
    sx: {},
  };

  const obj = convertResponsiveToPseudoClasses(inputObj, _config);

  const newPseudoClass = renamePseudoClasses(obj);

  for (const key in newPseudoClass) {
    const propName = key;
    const propValue = obj[key];
    if (
      propName.startsWith('_') ||
      propName.startsWith(':') ||
      propName.startsWith('@')
    ) {
      newObj.sx[propName] = propValue;
    } else {
      newObj[propName] = propValue;
    }
  }

  return newObj;
}

function addDollarSign(propertyName, propValue, config) {
  if (CSSPropertiesMap.hasOwnProperty(propertyName)) {
    const tokenAvailable = config.tokens[propertyTokenMap[propertyName]]
      ? config.tokens[propertyTokenMap[propertyName]][propValue]
      : undefined;

    if (tokenAvailable === undefined) {
      return propValue;
    } else {
      return `$${propValue}`;
    }
  } else {
    return propValue;
  }
}

function addDollarSignsToProps(obj: any, config: any) {
  const newObj: any = {};

  for (const key in obj) {
    let propertyName = key;
    let propValue = obj[key];
    if (config.aliases.hasOwnProperty(key)) {
      propertyName = config.aliases[key];
    }

    if (Array.isArray(propValue)) {
      const newPropValue = [];
      propValue.forEach((value) => {
        newPropValue.push(addDollarSign(propertyName, value, config));
      });
      newObj[key] = newPropValue;
    } else if (typeof propValue === 'object' && key.startsWith('_')) {
      newObj[key] = addDollarSignsToProps(obj[key], config);
    } else if (typeof propValue === 'object') {
      const newPropValue = {};

      Object.keys(propValue).forEach((key) => {
        newPropValue[key] = addDollarSign(propertyName, propValue[key], config);
      });
      newObj[key] = newPropValue;
    } else {
      newObj[key] = addDollarSign(propertyName, propValue, config);
    }
  }
  return newObj;
}

export function usePropResolution(props: any) {
  const styledContext = useStyled();

  const propsWithDollarSigns = addDollarSignsToProps(
    props,
    styledContext.config
  );

  const sxProps = convertToSXForStateColorModeMediaQuery(
    propsWithDollarSigns,
    styledContext.config
  );

  return sxProps;
}
