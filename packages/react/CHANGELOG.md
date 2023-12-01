# @gluestack-style/react

## 1.0.20

### Patch Changes

- Fixed build time to be injected styles [PR](https://github.com/gluestack/gluestack-style/pull/550)

## 1.0.19

### Patch Changes

- Fixed component refrence issue for plugins [PR](https://github.com/gluestack/gluestack-style/pull/547)

## 1.0.18

### Patch Changes

- Fixed style injection order incase of composed styled component [PR](https://github.com/gluestack/gluestack-style/pull/544)

## 1.0.17

### Patch Changes

### Fixes

- Fixed children typings [PR](https://github.com/gluestack/gluestack-style/pull/538)
- Fixed react-native style typings [PR](https://github.com/gluestack/gluestack-style/pull/539)
- Fixed config warning [PR](https://github.com/gluestack/gluestack-style/pull/540)

## 1.0.16

### Patch Changes

- - Conditional as prop rerender issue fixes
  - Provider without config issue fixes

## 1.0.15

### Patch Changes

- Fixed descendants compound variant resolution [PR](https://github.com/gluestack/gluestack-style/pull/526)

## 1.0.14

### Patch Changes

- Fixed utility props typings [PR](https://github.com/gluestack/gluestack-style/pull/524)

## 1.0.13

### Patch Changes

- Added Utility props support [PR](https://github.com/gluestack/gluestack-style/pull/519)

## 1.0.12

### Patch Changes

- Fixed AsForwarder unmount issue [PR](https://github.com/gluestack/gluestack-style/pull/513)

## 1.0.11

### Patch Changes

- - added `useMedia` hook [PR](https://github.com/gluestack/gluestack-style/pull/509)

## 1.0.10

### Patch Changes

- Fixed theme and styled circular dependency

## 1.0.9

### Patch Changes

- - Fixed composed components props forwarding [PR](https://github.com/gluestack/gluestack-style/pull/498)
  - Layouting issue with theme component and provide styling capability [PR](https://github.com/gluestack/gluestack-style/pull/500)
  - Add component config prop as data prop on web [PR](https://github.com/gluestack/gluestack-style/pull/499)

## 1.0.8

### Patch Changes

- - Fixed global style platform based resolution
  - Fixed useToken to return default value as fallback
  - Fixed theme passing props resolution

## 1.0.7

### Patch Changes

- fix: component typings

## 0.2.9

### Patch Changes

- fix: customizing component specififcity issue

## 0.2.4

### Patch Changes

- - Component extended theme [PR](https://github.com/gluestack/gluestack-style/pull/328)

  - Resolver exports [PR](https://github.com/gluestack/gluestack-style/pull/330)
  - Typing fixes for \_web prop [PR](https://github.com/gluestack/gluestack-style/pull/327)

## 0.2.3

### Patch Changes

- Reduced DOM size for injected style tags [PR](https://github.com/gluestack/gluestack-style/pull/323)

## 0.2.1

### Patch Changes

- Boot time performance improvments [PR](https://github.com/gluestack/gluestack-style/pull/318)
- Typing improvement
- Styled precedence order
- AsForwarder style injection order

## 0.1.33

### Patch Changes

- - Injection order fixes when compose a style component into another component

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
