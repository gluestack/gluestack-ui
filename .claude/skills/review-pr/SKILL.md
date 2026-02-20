---
name: review-pr
description: Pre-submission PR checklist for gluestack-ui contributions
---

# Review PR - Pre-Submission Checklist

Comprehensive pre-submission checklist to ensure your contribution meets gluestack-ui quality standards before creating a pull request.

## How to Use

This skill will guide you through a complete review of your changes to ensure:
- Code quality and consistency
- Documentation completeness
- Testing coverage
- No breaking changes
- Follows contribution guidelines

## Workflow

### PHASE 1: Identify Changes

**Step 1.1: Check Git Status**

```bash
git status
```

Review:
- What files were modified?
- Are any generated files included? (should NOT be committed)
- Are source files in correct locations?

**Step 1.2: Review Diff**

```bash
git diff
```

Analyze:
- Are changes focused and relevant?
- Any accidental changes?
- Debug code left in?

**CHECKPOINT: Ensure only source files are modified, no generated files in apps/**

### PHASE 2: Code Quality Review

Run through this comprehensive checklist with the user:

```markdown
## Code Quality Checklist

### General Code Quality
- [ ] No `console.log()` statements
- [ ] No commented-out code
- [ ] No TODO comments (or documented in issues)
- [ ] No debugging code
- [ ] No unused imports
- [ ] No unused variables
- [ ] Meaningful variable/function names
- [ ] Code is DRY (no duplication)
- [ ] Proper error handling
- [ ] No hardcoded values (use constants)

### TypeScript
- [ ] All types explicitly defined
- [ ] No `any` types (use proper types)
- [ ] Interfaces/types exported
- [ ] Generic types used correctly
- [ ] Type guards where needed
- [ ] Proper type inference
- [ ] No TypeScript errors (`yarn tsc --noEmit`)

### Code Style
- [ ] Consistent formatting (use Prettier)
- [ ] Proper indentation
- [ ] Consistent naming conventions
- [ ] Import order organized
- [ ] Proper file organization
```

**CHECKPOINT: Confirm code quality standards met**

### PHASE 3: Component Structure Review

For component changes:

```markdown
## Component Structure Checklist

### Component Architecture
- [ ] Follows compound component pattern (if multi-part)
- [ ] Uses `React.forwardRef` correctly
- [ ] Proper TypeScript generic types
- [ ] Props interface defined and exported
- [ ] Default props defined (or use default parameters)
- [ ] Display name set (`Component.displayName = '...'`)

### Sub-components (if compound)
- [ ] All sub-components implemented
- [ ] Context provider/consumer (if needed)
- [ ] `withStyleContext` used for parent component
- [ ] `useStyleContext` used in children
- [ ] All sub-components exported

### Props
- [ ] Destructured properly
- [ ] Spread props to underlying component (`{...props}`)
- [ ] `className` prop supported
- [ ] `ref` forwarded correctly
- [ ] Event handlers have correct signature
- [ ] Boolean props prefixed with `is`/`has`/`should`

### Exports
- [ ] All components exported from index.tsx
- [ ] Named exports (not default)
- [ ] Types exported
- [ ] Exported from src/components/ui/index.tsx
- [ ] No missing exports
```

**CHECKPOINT: Confirm component structure follows patterns**

### PHASE 4: Styling Review

```markdown
## Styling Checklist

### NativeWind/Tailwind
- [ ] Only uses className prop (not style prop for Tailwind)
- [ ] Styles defined in styles.tsx
- [ ] Uses `tva()` for variants
- [ ] Base styles defined
- [ ] All variants defined
- [ ] Default variants specified
- [ ] Parent variants (if sub-component)

### Responsive Design
- [ ] Mobile-first approach
- [ ] Breakpoints used correctly
- [ ] Works on small screens
- [ ] Works on large screens
- [ ] No horizontal overflow

### Dark Mode
- [ ] Dark mode styles defined (if applicable)
- [ ] Uses theme colors (not hardcoded)
- [ ] Contrasts accessible in both modes

### Consistency
- [ ] Spacing matches design system
- [ ] Colors from theme
- [ ] Font sizes consistent
- [ ] Border radius consistent
```

**CHECKPOINT: Confirm styling follows guidelines**

### PHASE 5: Accessibility Review

```markdown
## Accessibility Checklist

### ARIA
- [ ] Appropriate ARIA roles
- [ ] `aria-label` where needed
- [ ] `aria-labelledby` for associations
- [ ] `aria-describedby` for descriptions
- [ ] `aria-expanded` for expandable elements
- [ ] `aria-disabled` for disabled elements
- [ ] `aria-checked` for checkboxes/radios
- [ ] `aria-selected` for selectable items
- [ ] `aria-hidden` for decorative elements
- [ ] `aria-live` for dynamic updates

### Keyboard Navigation
- [ ] Tab order is logical
- [ ] Enter activates buttons/links
- [ ] Space activates buttons
- [ ] Escape closes modals/overlays
- [ ] Arrow keys navigate (where applicable)
- [ ] Focus visible (outline/ring)
- [ ] Focus management correct
- [ ] No keyboard traps

### Screen Readers
- [ ] Component announces correctly
- [ ] Labels are descriptive
- [ ] State changes announced
- [ ] Error messages announced
- [ ] Tested with VoiceOver/TalkBack

### Semantic Markup (Web)
- [ ] Uses semantic HTML
- [ ] Proper heading hierarchy
- [ ] Lists use <ul>/<ol>
- [ ] Buttons use <button> (not div)
- [ ] Links use <a> (not button for navigation)
```

**CHECKPOINT: Confirm accessibility requirements met**

### PHASE 6: Documentation Review

```markdown
## Documentation Checklist

### Component Documentation (docs/index.mdx)
- [ ] Documentation file exists
- [ ] Frontmatter complete (title, description)
- [ ] Component description clear
- [ ] Installation section present
- [ ] CLI installation command
- [ ] Manual installation steps
- [ ] Usage examples
- [ ] Code examples copy-pasteable

### API Reference
- [ ] Props table complete
- [ ] All props documented
- [ ] Types shown
- [ ] Default values shown
- [ ] Required props marked
- [ ] Descriptions clear
- [ ] Sub-components documented

### Examples
- [ ] Basic example exists
- [ ] Examples render correctly
- [ ] meta.json files present
- [ ] template.handlebars files present
- [ ] Examples are self-contained
- [ ] Examples show common use cases
- [ ] Advanced examples (if applicable)

### Additional Documentation
- [ ] Accessibility notes included
- [ ] Best practices section
- [ ] Common pitfalls mentioned
- [ ] Related components linked

### Sidebar
- [ ] Component added to sidebar.json
- [ ] Correct category
- [ ] Correct order
```

**CHECKPOINT: Confirm documentation is complete**

### PHASE 7: Testing Review

```markdown
## Testing Checklist

### Manual Testing
- [ ] Tested in kitchen-sink app
- [ ] Tested on iOS
- [ ] Tested on Android
- [ ] Tested on Web (Chrome)
- [ ] Tested on Web (Safari)
- [ ] Tested on Web (Firefox)

### Functionality Testing
- [ ] All features work
- [ ] All variants work
- [ ] All props work
- [ ] Event handlers fire
- [ ] State management works
- [ ] Animations smooth
- [ ] No console errors
- [ ] No console warnings

### Edge Cases
- [ ] Empty/undefined props
- [ ] Very long content
- [ ] Special characters
- [ ] Rapid interactions
- [ ] Network delays (if applicable)

### Cross-platform
- [ ] Identical behavior on all platforms
- [ ] Styles consistent
- [ ] No platform-specific bugs

### Performance
- [ ] Fast initial render
- [ ] Smooth animations (60fps)
- [ ] No memory leaks
- [ ] Small bundle size
- [ ] Works on low-end devices

### Regression Testing
- [ ] Existing examples still work
- [ ] No breaking changes to existing API
- [ ] Backward compatible (or documented)
```

**CHECKPOINT: Confirm testing is complete**

### PHASE 8: Dependencies Review

```markdown
## Dependencies Checklist

### Component Dependencies
- [ ] dependencies.json created (if needed)
- [ ] Only necessary dependencies included
- [ ] Version constraints specified
- [ ] Dependencies available on npm
- [ ] No conflicting versions

### Package Dependencies
- [ ] Updated packages/gluestack-ui/src/dependencies.ts
- [ ] Correct project type (nextjs, expo, react-native)
- [ ] Version numbers correct

### Package Linking
- [ ] Local packages unlinked (yarn unlink:apps)
- [ ] Using published packages (not yalc)
```

**CHECKPOINT: Confirm dependencies are correct**

### PHASE 9: Git Review

```markdown
## Git Checklist

### Files
- [ ] Only source files committed
- [ ] No generated files in apps/*/components/ui/
- [ ] No generated docs files
- [ ] No node_modules
- [ ] No .env files
- [ ] No IDE config files (unless intentional)
- [ ] No large binary files
- [ ] No sensitive data

### Commits
- [ ] Commit messages are meaningful
- [ ] Follow conventional commit format
  - feat: new feature
  - fix: bug fix
  - docs: documentation
  - style: formatting
  - refactor: code refactoring
  - test: adding tests
  - chore: maintenance
- [ ] Commits are atomic (one logical change)
- [ ] No "WIP" or "temp" commits

### Branch
- [ ] Branch name descriptive
- [ ] Based on latest main/develop
- [ ] No merge conflicts
- [ ] Up to date with remote
```

**CHECKPOINT: Confirm git hygiene**

### PHASE 10: Build & Compile Check

**Step 10.1: Run Build**

```bash
# Build packages
yarn build

# Check TypeScript
yarn tsc --noEmit

# Check for errors
```

```markdown
## Build Checklist

- [ ] Builds without errors
- [ ] TypeScript compiles cleanly
- [ ] No build warnings
- [ ] All imports resolve
- [ ] Barrel exports correct
```

**CHECKPOINT: Confirm clean build**

### PHASE 11: Final Review

**Step 11.1: Review CONTRIBUTING.md Compliance**

Ask the user to confirm they followed:
- [ ] Read CONTRIBUTING.md
- [ ] Followed project architecture
- [ ] Used source-to-destination system correctly
- [ ] Followed development workflow
- [ ] Tested in multiple apps
- [ ] Updated documentation

**Step 11.2: PR Description Preparation**

Help user prepare PR description:

```markdown
## PR Title
[type]([scope]): [description]

Example: feat(dropdown): add new dropdown component

## PR Description Template

### Summary
[Brief description of what this PR does]

### Type of Change
- [ ] New component
- [ ] Component enhancement
- [ ] Bug fix
- [ ] Documentation
- [ ] Other (specify)

### Changes Made
- Change 1
- Change 2
- Change 3

### Screenshots/Videos
[Include if UI changes]

### Testing
- [ ] Tested on iOS
- [ ] Tested on Android
- [ ] Tested on Web
- [ ] Accessibility tested
- [ ] Documentation tested

### Checklist
- [ ] Code follows project conventions
- [ ] TypeScript types are correct
- [ ] Documentation updated
- [ ] Examples created
- [ ] No breaking changes (or documented)
- [ ] Tested cross-platform

### Related Issues
Closes #[issue number]

### Additional Notes
[Any additional context]
```

**CHECKPOINT: Final confirmation before creating PR**

### PHASE 12: Create PR

**Step 12.1: Push Changes**

```bash
git push origin [branch-name]
```

**Step 12.2: Create Pull Request**

Guide user to:
1. Go to GitHub repository
2. Click "New Pull Request"
3. Select your branch
4. Fill in PR template
5. Request reviewers
6. Add labels
7. Submit PR

**Step 12.3: Post-Submission**

Remind user:
- Monitor PR for review comments
- Be responsive to feedback
- Update PR if requested
- Thank reviewers

---

## Summary Report

At the end, provide a summary:

```markdown
## ✅ PR Review Complete!

### Review Results

#### Code Quality: ✅ PASS
- No console.log statements
- TypeScript properly typed
- Code is clean and readable

#### Component Structure: ✅ PASS
- Follows compound component pattern
- Proper exports
- Props correctly defined

#### Styling: ✅ PASS
- Uses NativeWind/Tailwind
- Responsive design
- Dark mode support

#### Accessibility: ✅ PASS
- ARIA attributes correct
- Keyboard navigation works
- Screen reader tested

#### Documentation: ✅ PASS
- Complete documentation
- API reference accurate
- Examples provided

#### Testing: ✅ PASS
- Cross-platform tested
- All variants tested
- No regressions

#### Dependencies: ✅ PASS
- Correct dependencies
- Version constraints proper

#### Git: ✅ PASS
- Clean commits
- No generated files
- Meaningful messages

### Ready to Submit!

Your PR is ready to be submitted to gluestack-ui!

#### Next Steps:
1. Push your changes: `git push origin [branch]`
2. Create PR on GitHub
3. Use the PR description template above
4. Request reviewers
5. Be responsive to feedback

Good luck with your contribution! 🎉
```

---

## Best Practices

1. **Run this review BEFORE creating PR** - catch issues early
2. **Be thorough** - each checklist item matters
3. **Test everything** - don't assume it works
4. **Document everything** - help future contributors
5. **Follow patterns** - consistency is key
6. **Ask for help** - if unsure about anything
7. **Be patient** - quality takes time
8. **Accept feedback** - reviews make code better

---

**Let's make your PR shine!** ✨
