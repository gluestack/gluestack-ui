---
name: contribute/enhance-component
parent: contribute
description: Improve or extend an existing gluestack-ui component with new features, variants, or fixes
---

# Enhance Component Workflow

Help improve or extend an existing gluestack-ui component. This skill guides you through safely modifying existing components while maintaining backward compatibility and following established patterns.

## When to Use This Skill

- Adding new variants to an existing component
- Adding new features or sub-components
- Fixing bugs in existing components
- Improving accessibility
- Enhancing performance
- Updating to new dependencies

## Workflow

### PHASE 1: Component Selection & Analysis

**Step 1.1: Identify Component**

Ask the user:
```yaml
questions:
  - question: "Which component would you like to enhance?"
    header: "Component"
    multiSelect: false
    options:
      - label: "List component name"
        description: "E.g., button, accordion, alert-dialog"
```

**Step 1.2: Read Existing Implementation**

Use Read tool to understand current implementation:
1. Read `src/components/ui/[component]/index.tsx`
2. Read `src/components/ui/[component]/styles.tsx`
3. Read `packages/gluestack-core/src/[component]/creator/index.tsx` (if exists)
4. Read `src/components/ui/[component]/docs/index.mdx`
5. Check examples in `src/components/ui/[component]/examples/`

**Step 1.3: Understand What Needs Enhancement**

Ask the user:
- What needs to be changed or added?
- Is this a bug fix or new feature?
- Are there breaking changes?
- What's the expected behavior?

### PHASE 2: Impact Analysis

**Step 2.1: Check Usage**

Use Grep to find where the component is used:
```bash
# Search for component usage in examples
Grep: "import.*from.*[component-name]" in src/components/ui/

# Check documentation
Grep: "[ComponentName]" in src/components/ui/**/docs/
```

**Step 2.2: Identify Breaking Changes**

Analyze if the enhancement:
- Changes existing prop names or types
- Removes functionality
- Changes default behavior
- Requires migration

If breaking changes exist:
- Document migration path
- Consider deprecation warnings
- Provide backward compatibility if possible

**Step 2.3: Present Impact Analysis**

Show the user:
```markdown
## Impact Analysis

### Files to Modify:
- [ ] src/components/ui/[component]/index.tsx
- [ ] src/components/ui/[component]/styles.tsx
- [ ] packages/gluestack-core/src/[component]/creator/index.tsx
- [ ] src/components/ui/[component]/docs/index.mdx
- [ ] examples

### Breaking Changes:
[List any breaking changes]

### Migration Required:
[If yes, explain migration path]

### Affected Examples:
[List examples that need updates]
```

**CHECKPOINT 1: Get user confirmation on impact and approach**

### PHASE 3: Enhancement Design

**Step 3.1: Design the Enhancement**

Based on the type of enhancement:

**For New Variants:**
```typescript
// Before
variants: {
  size: {
    sm: '...',
    md: '...',
    lg: '...',
  }
}

// After (adding xl)
variants: {
  size: {
    sm: '...',
    md: '...',
    lg: '...',
    xl: '...',  // NEW
  }
}
```

**For New Props:**
```typescript
// Before
interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
}

// After (adding isLoading)
interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'outline';
  isLoading?: boolean;  // NEW
}
```

**For New Sub-components:**
```typescript
// Add new sub-component to compound component
export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionNewSubComponent,  // NEW
}
```

**Step 3.2: Show Before/After**

Present the changes clearly:
```markdown
## Proposed Changes

### Before:
[Show current code]

### After:
[Show enhanced code]

### New Features:
- Feature 1 description
- Feature 2 description

### API Changes:
- New prop: `propName` (type) - description
- Modified prop: `existingProp` - what changed
```

**CHECKPOINT 2: Get user approval on enhancement design**

### PHASE 4: Implementation

**Step 4.1: Setup Development Environment**

```bash
yarn link:create
yarn link:apps
yarn dev
```

**Step 4.2: Implement Changes**

Make changes in order:

1. **Update Core Package** (if needed)
   - Modify creator function
   - Add new functionality
   - Update TypeScript types

2. **Update UI Component**
   - Modify index.tsx
   - Add new props/sub-components
   - Update forwardRef types

3. **Update Styles**
   - Add new variants to styles.tsx
   - Update tva() configuration
   - Add responsive/dark mode styles

4. **Update TypeScript Types**
   - Export new interfaces
   - Update existing interfaces
   - Add generics if needed

5. **Update Examples**
   - Modify existing examples if needed
   - Add new examples for new features
   - Test all examples still work

6. **Update Documentation**
   - Add new props to API table
   - Document new features
   - Add examples
   - Update best practices section
   - Add migration guide if breaking changes

**Step 4.3: Verify Backward Compatibility**

Test that existing usage still works:
- Run all existing examples
- Check no console warnings
- Verify default behavior unchanged

### PHASE 5: Testing

**Step 5.1: Test Enhanced Component**

```bash
# Test in kitchen-sink
cd apps/kitchen-sink && yarn dev

# Test in website
cd apps/website && yarn dev
```

Test:
- ✅ New features work correctly
- ✅ Existing features still work
- ✅ All variants render properly
- ✅ No console errors/warnings
- ✅ TypeScript types correct
- ✅ Examples work
- ✅ Documentation accurate

**Step 5.2: Regression Testing**

Ensure no regressions:
- Test all existing examples
- Test all variants (size, color, etc.)
- Test edge cases
- Test accessibility features
- Test animations

**Step 5.3: Present Results**

Show the user:
```markdown
## Testing Results

### New Features Tested:
- ✅ Feature 1 works on iOS, Android, Web
- ✅ Feature 2 works with all variants
- ✅ New examples render correctly

### Regression Testing:
- ✅ All existing examples work
- ✅ No console errors
- ✅ Backward compatible
- ✅ TypeScript compiles

### Documentation:
- ✅ Updated API reference
- ✅ Added examples
- ✅ Migration guide (if needed)
```

**CHECKPOINT 3: Get user approval on implementation**

### PHASE 6: Finalization

**Step 6.1: Final Checklist**

```markdown
## Enhancement Completion Checklist

### Code Changes
- [ ] Core package updated (if needed)
- [ ] UI component updated
- [ ] Styles updated
- [ ] TypeScript types updated
- [ ] All exports updated

### Documentation
- [ ] API reference updated
- [ ] New examples added
- [ ] Migration guide (if breaking changes)
- [ ] Changelog entry (if applicable)

### Testing
- [ ] New features tested
- [ ] Regression tests passed
- [ ] Accessibility verified
- [ ] Cross-platform tested

### Backward Compatibility
- [ ] Existing examples work
- [ ] No breaking changes (or documented)
- [ ] Default behavior preserved
```

**Step 6.2: Cleanup**

```bash
yarn unlink:apps
```

**Step 6.3: Summary**

```markdown
## ✅ Component Enhancement Complete!

### What Changed:
[Summary of changes]

### Files Modified:
- src/components/ui/[component]/index.tsx
- src/components/ui/[component]/styles.tsx
- [other files]

### Testing:
- ✅ Tested on iOS, Android, Web
- ✅ All existing features work
- ✅ New features work correctly

### Next Steps:
1. Review all changes
2. Run final tests
3. Commit with message: `feat([component]): [description]` or `fix([component]): [description]`
4. Create PR

Ready to commit?
```

**CHECKPOINT 4: Final confirmation before commit**

## Best Practices

1. **Always maintain backward compatibility** unless it's a major version bump
2. **Test all existing examples** to ensure no regressions
3. **Document breaking changes** clearly with migration guides
4. **Add deprecation warnings** before removing features
5. **Update all examples** affected by changes
6. **Keep changes focused** - one enhancement at a time
7. **Follow existing patterns** in the component
8. **Test accessibility** after changes
9. **Update TypeScript types** to match implementation
10. **Verify cross-platform** behavior

## Common Enhancements

### Adding a New Variant
- Update styles.tsx with new variant
- Update TypeScript types
- Add example
- Document in API reference

### Adding a New Prop
- Add to props interface
- Implement functionality
- Update documentation
- Add example

### Adding Sub-component
- Implement in core (if needed)
- Add to UI component
- Create styles
- Export from index
- Document
- Add example

### Bug Fix
- Identify root cause
- Implement fix
- Add regression test
- Update documentation if behavior changes

## Error Recovery

If issues arise:
- Revert changes and start over
- Check existing component patterns
- Read CONTRIBUTING.md for guidance
- Ask user for clarification
- Test incrementally

---

**Ready to enhance a component!** 🔧
