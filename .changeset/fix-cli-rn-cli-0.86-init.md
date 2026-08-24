---
"gluestack-ui": patch
---

Fix `npx gluestack-ui init` breaking fresh React Native 0.86 projects (issue #3421):

- Write the correct `@react-native/babel-preset` (instead of the removed `metro-react-native-babel-preset`) for NativeWind v4 RN CLI projects. The babel and metro configs are now inlined in the CLI, so the fix ships with the npm release instead of depending on the stale `main-v4-alpha` template cache.
- Add a `react-dom` → `react-native` resolver alias to the RN CLI metro config so Metro no longer crashes on react-aria's transitive react-dom import.
- Stop installing web-only `react-aria`/`react-stately` and explicit `react-dom` for React Native CLI and Expo projects.
- Bump `react-native-reanimated` pins from `~4.1.0` to `~4.4.1` (compatible with RN 0.84+) in component `dependencies.json` files, and update the `upgrade` command pins to reanimated `~4.4.1` + worklets `~0.9.3`.
- Restrict component copy operations to source-code files only (`.ts`/`.tsx`/`.js`/`.jsx`), so docs/, examples/, `.handlebars` and other non-code files can never be copied into user projects.
