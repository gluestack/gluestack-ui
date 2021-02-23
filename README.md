### 1) Introduction

React Native ARIA helps you build accessible and rich Apps with React Native. It handles behaviour, accessibility and interactions so you can implement custom components and design systems for Android, iOS and Web.

### 2) Motivation

While implementing accessibility for components on NativeBase, we referred to the existing solutions for web. However, there is no existing component library that works on all the platforms without limiting it's styling, behavior and accessibility.

React Native has raised the expectations of devs to build UIs across all the platforms while reusing as much code as possible. However, React Native ships with a very lean core with a lot of room for customisation. The downside of this is that we need to build our primitive components using [View](https://reactnative.dev/docs/view) and [Pressable](https://reactnative.dev/docs/pressable). This is in contrast to the native development world where component APIs are shipped in SDKs.

React Native ARIA aims to solve this by providing low level primitives to create a component or a primitive library that works on all platforms within the scope of React Native. React Native ARIA solves this for web, Android and iOS.

For macOS and Windows, we're exploring the possibility of using Native components that can be customised.

### 3) Features

Accessible: Amplify user adoption and experience for your apps

Composable: Combine components for your specific app needs

Consistent: Consistent across Web, Android and iOS

Customisable: Design implementations are in your hand

### 4) Installation & Usage

React Native ARIA is incrementally adoptable. Each component is published as a separate package, so you can try it out in a single component and gradually add more over time. All of these packages are published under the [@react-native-aria](https://www.npmjs.com/org/react-native-aria) scope on npm.

**Installing an individual package:**

Using yarn

```bash
yarn add @react-native-aria/checkbox
```

Using npm

```bash
npm install @react-native-aria/checkbox
```

Usage

```jsx
import { useCheckbox } from "@react-native-aria/checkbox";
```

In addition to individual packages, we offer a mono package which contains all the React Native ARIA hooks at one place.

**Installing the mono package:**

Using yarn

```bash
yarn add react-native-aria
```

Using npm

```bash
npm install react-native-aria
```

Usage

```jsx
import { useCheckbox } from "react-native-aria";
```

### 5) Examples

- [Forms](https://geekyants.github.io/react-native-aria/docs/useCheckbox?utm_source=GitHub&utm_medium=README&utm_campaign=RN%20ARIA)
- [Buttons](https://geekyants.github.io/react-native-aria/docs/useToggleButton?utm_source=GitHub&utm_medium=README&utm_campaign=RN%20ARIA)
- [Interactions](https://geekyants.github.io/react-native-aria/docs/useHover?utm_source=GitHub&utm_medium=README&utm_campaign=RN%20ARIA)
- [Overlays](https://geekyants.github.io/react-native-aria/docs/useOverlayPosition?utm_source=GitHub&utm_medium=README&utm_campaign=RN%20ARIA)
- [Collections](https://geekyants.github.io/react-native-aria/docs/useMenu?utm_source=GitHub&utm_medium=README&utm_campaign=RN%20ARIA)

### 6) Tech Stack

React, React Native Web, React Native, TypeScript.

### 7) Contributors

- [Nishan Bende](https://github.com/intergalacticspacehighway)
- [Vidhi Kataria](https://github.com/vidhi499)
- [Gaurav Guha](https://github.com/gauravguha)
- [Sanket Sahu](https://github.com/sanketsahu)

### 8) How to Contribute

Thank you for your interest in contributing to React Native ARIA! Pull requests are welcome. Head over to Contribution Guidelines and learn how you can be a part of a wonderful, growing community.

For major changes, please open an issue first to discuss changes and update tests as appropriate.

### 9) License

Licensed under the MIT License, Copyright © 2020 GeekyAnts. See LICENSE for more information.

In addition to individual packages, we offer a mono package which contains all the React Native ARIA hooks at one place.
