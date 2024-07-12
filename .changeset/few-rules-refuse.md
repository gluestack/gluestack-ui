---
'@gluestack-ui/toast': patch
---

Multple fixes to toast

- Fixed `isActive` always returning false
- Removed almost all instances of `any`, replaced with actual types
- Fixed duplicate toasts when calling `show` with an existing id
- Removed unnecessary `@ts-ignore` usages
