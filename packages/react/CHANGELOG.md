# @gluestack-style/react

## 0.1.32

### Patch Changes

- - Prop resolution issue when composing on styled component into another.

## 0.1.31

### Patch Changes

- - Global style media query typing fixes

## 0.1.30

### Patch Changes

- fix: typing issues of decendant style

## 0.1.29

### Patch Changes

- - Compound variant resolution fixes

## 0.1.28

### Patch Changes

- - Global style merging issue fixes

## 0.1.27

### Patch Changes

- - Hotfix: Responsive style style resolution crash with global style

## 0.1.26

### Patch Changes

- Global style support
- `createConfig` for type-safe

- Variant specificity issue. Component variant will have higher specificity than ancestor style.

## 0.1.24

### Patch Changes

- fix: Typing fixes for descendants styles

## 0.1.20

### Patch Changes

- Hotfix - remove context provider id

## 0.1.19

### Patch Changes

- - Multiple provider theme hash

## 0.1.18

### Patch Changes

- Size token resolution

## 0.1.17

### Patch Changes

- Default value updated for all CSS properties

## 0.1.16

### Patch Changes

- - transform array resolution in plugin
  - default style property for flex and flexDirection

  - Advanced docs for babel plugin

## 0.1.14

### Patch Changes

- Feature

  - Negative token resolution

## 0.1.12

### Patch Changes

- dependancy issues and removed unwanted code

## 0.1.0

### Changes

- Fixed default color mode
- Fix font plugin
- Passing props specificity
- Media queries width check condition
- type warnings while exporting types and interfaces
- Fixes
  - stylecss id ordering
- Variant precedence issue fixes
- Conflicting variant name in mobile crash fixes
- Conflicting variant name with component property fixes
- Fixed inline props specificity
- Inline props specificity issue (attached gs class to inline props)
- Fixed compound variant color mode issue
- Descendant styling with defautl props issue fixed
- sx props variant resolution fixes
- Margin, padding and border precedence issue
- Optional chaining in token resolution
- Variant support for fonts plugin
- inline dataset override fix
- Fixed undefined token resolution for fontFamily
- Fixed plugin typings
- Fixes
  - Added overflowX and overflowY in css properties
  - Fix undefined font family token resolution
- Descendant style fixes
- Fix: Font resolver token resolution
  Feat: Added environment based font family resolution
  Feat: Added typings for gluestack plugins
- Added support for as prop in passing props
