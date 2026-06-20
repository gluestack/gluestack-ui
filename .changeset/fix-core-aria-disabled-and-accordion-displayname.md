---
"@gluestack-ui/core": patch
---

Fix two small bugs in core

- Checkbox group: the disabled prop was written under the key `' aria-disabled'` (with a leading space), so a disabled `CheckboxGroup` never set `aria-disabled` on the rendered element. Removed the stray space so the attribute is applied. This brings it in line with the radio, switch, button and checkbox hooks, which all use the un-spaced `'aria-disabled'` key.
- Accordion: the `Accordion.TitleText` `displayName` was misspelled `'Accordion.TtitleText'` (doubled "t"). Corrected it to `'Accordion.TitleText'`.
