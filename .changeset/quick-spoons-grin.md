---
'@gluestack-ui/core': patch
---

fix(form-control): build FormControl.Helper.Text from the helper-text wrapper so it keeps its own id

The creator imported the helper-text component from `./FormControlHelper`, so `FormControl.Helper.Text` was built from the helper wrapper. That wrapper forces `id={labelId}` and toggles `setHasHelpText`, so the helper text rendered with the label's id and the help text id referenced by `aria-describedby` pointed at nothing. It now imports from `./FormControlHelperText`.
