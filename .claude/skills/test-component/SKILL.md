---
name: test-component
description: Comprehensive testing of gluestack-ui components across platforms and apps
---

# Test Component Workflow

Comprehensive testing workflow for gluestack-ui components to ensure cross-platform compatibility, accessibility, and quality.

## Testing Scope

This skill helps you test:
- Component functionality across iOS, Android, and Web
- Visual rendering and styling
- Accessibility features
- Performance
- Documentation and examples
- Integration in different apps

## Workflow

### PHASE 1: Test Environment Setup

**Step 1.1: Identify Component to Test**

Ask the user which component needs testing.

**Step 1.2: Setup Development Environment**

```bash
# Ensure dependencies are installed
yarn

# Sync source files to apps
yarn sync

# Start watch mode for live updates
yarn dev
```

**Step 1.3: Link Packages (if testing core changes)**

```bash
# If testing core package changes
yarn link:create
yarn link:apps
```

### PHASE 2: Kitchen Sink App Testing

**Step 2.1: Start Kitchen Sink App**

```bash
cd apps/kitchen-sink
yarn dev
```

**Step 2.2: iOS Testing**

Test on iOS Simulator:
```markdown
## iOS Testing Checklist

### Rendering
- [ ] Component renders correctly
- [ ] All variants display properly
- [ ] Styles are applied correctly
- [ ] Dark mode works (if supported)
- [ ] Responsive to screen sizes

### Functionality
- [ ] All interactive elements work (buttons, inputs, etc.)
- [ ] Animations smooth (60fps)
- [ ] Touch gestures work
- [ ] State changes work correctly
- [ ] Event handlers fire correctly

### Accessibility (VoiceOver)
- [ ] Component is focusable
- [ ] VoiceOver reads labels correctly
- [ ] Navigation with gestures works
- [ ] Announcements are clear
- [ ] All interactive elements accessible

### Performance
- [ ] No frame drops during animations
- [ ] Smooth scrolling (if applicable)
- [ ] Fast initial render
- [ ] No memory leaks
- [ ] Small bundle impact

### Edge Cases
- [ ] Long text content
- [ ] Missing optional props
- [ ] Extreme variant combinations
- [ ] Rapid interactions
- [ ] Network delays (if applicable)
```

**Step 2.3: Android Testing**

Test on Android Emulator:
```markdown
## Android Testing Checklist

### Rendering
- [ ] Component renders correctly
- [ ] All variants display properly
- [ ] Styles are applied correctly
- [ ] Dark mode works (if supported)
- [ ] Responsive to screen sizes

### Functionality
- [ ] All interactive elements work
- [ ] Animations smooth
- [ ] Touch/press gestures work
- [ ] State changes work correctly
- [ ] Event handlers fire correctly

### Accessibility (TalkBack)
- [ ] Component is focusable
- [ ] TalkBack reads labels correctly
- [ ] Navigation works
- [ ] Announcements are clear
- [ ] All interactive elements accessible

### Performance
- [ ] No frame drops
- [ ] Smooth scrolling
- [ ] Fast initial render
- [ ] Memory efficient
- [ ] Works on low-end devices

### Android-Specific
- [ ] Back button behavior (if applicable)
- [ ] Hardware menu button (if applicable)
- [ ] Different screen densities
- [ ] Various Android versions
```

**Step 2.4: Web Testing**

Test in web browsers:
```markdown
## Web Testing Checklist

### Rendering (Chrome)
- [ ] Component renders correctly
- [ ] All variants display properly
- [ ] Styles match native
- [ ] Dark mode works
- [ ] Responsive design works

### Rendering (Safari)
- [ ] Component renders correctly
- [ ] All variants display properly
- [ ] Styles match native
- [ ] iOS Safari works

### Rendering (Firefox)
- [ ] Component renders correctly
- [ ] All variants work

### Functionality
- [ ] Click events work
- [ ] Hover states work (if applicable)
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] State management works

### Accessibility (Web)
- [ ] Semantic HTML used
- [ ] ARIA attributes correct
- [ ] Keyboard navigation complete
- [ ] Tab order logical
- [ ] Focus indicators visible
- [ ] Screen reader announcements clear

### Performance
- [ ] Fast initial load
- [ ] Smooth animations
- [ ] Small bundle size
- [ ] No layout shifts
- [ ] Good Lighthouse score
```

### PHASE 3: Website App Testing

**Step 3.1: Start Website App**

```bash
cd apps/website
yarn dev
```

**Step 3.2: Documentation Testing**

```markdown
## Documentation Testing Checklist

### Page Load
- [ ] Documentation page loads without errors
- [ ] No console warnings
- [ ] All sections render

### Content
- [ ] Component description clear
- [ ] Installation instructions present
- [ ] API reference table complete
- [ ] Props documented accurately
- [ ] Examples render correctly

### Interactive Examples
- [ ] Basic example works
- [ ] All variant examples work
- [ ] Code is copy-pasteable
- [ ] Examples are self-contained
- [ ] No missing imports

### Navigation
- [ ] Sidebar navigation works
- [ ] Component appears in correct category
- [ ] Links to related components work
- [ ] Search finds component

### Code Blocks
- [ ] Syntax highlighting works
- [ ] Copy button works
- [ ] Code is formatted correctly
- [ ] TypeScript types shown
```

### PHASE 4: Accessibility Testing

**Step 4.1: Keyboard Navigation**

```markdown
## Keyboard Navigation Checklist

### Focus Management
- [ ] Tab moves focus forward
- [ ] Shift+Tab moves focus backward
- [ ] Focus visible (outline/ring)
- [ ] Focus order logical
- [ ] Focus trapped (if modal/dialog)
- [ ] Focus returns correctly (after close)

### Keyboard Shortcuts
- [ ] Enter activates buttons/links
- [ ] Space activates buttons/checkboxes
- [ ] Escape closes overlays
- [ ] Arrow keys navigate (if applicable)
- [ ] Home/End keys work (if applicable)

### Form Controls
- [ ] Tab to next input works
- [ ] Arrow keys work in select/radio
- [ ] Space checks checkbox
- [ ] Enter submits form
```

**Step 4.2: Screen Reader Testing**

Test with VoiceOver (macOS/iOS) and TalkBack (Android):

```markdown
## Screen Reader Checklist

### Labels and Descriptions
- [ ] All interactive elements have labels
- [ ] Labels are descriptive
- [ ] Descriptions provide context
- [ ] Dynamic content announced

### ARIA Attributes
- [ ] role attribute correct
- [ ] aria-label present where needed
- [ ] aria-describedby used correctly
- [ ] aria-expanded for expandable elements
- [ ] aria-disabled for disabled elements
- [ ] aria-checked for checkboxes/radios
- [ ] aria-selected for selectable items

### Navigation
- [ ] Logical reading order
- [ ] Headings structure correct
- [ ] Landmarks present (if applicable)
- [ ] Lists announced correctly

### State Changes
- [ ] Loading states announced
- [ ] Error messages announced
- [ ] Success messages announced
- [ ] Dynamic content changes announced
```

### PHASE 5: Variant Testing

**Step 5.1: Test All Variant Combinations**

```markdown
## Variant Testing Matrix

For each variant dimension (size, variant, color, etc.):

### Size Variants
- [ ] sm renders correctly
- [ ] md renders correctly
- [ ] lg renders correctly
- [ ] xl renders correctly (if exists)

### Visual Variants
- [ ] default renders correctly
- [ ] outline renders correctly
- [ ] ghost renders correctly
- [ ] destructive renders correctly
- [ ] [other variants...]

### State Variants
- [ ] Default state
- [ ] Hover state (web)
- [ ] Active/Pressed state
- [ ] Disabled state
- [ ] Loading state (if applicable)
- [ ] Error state (if applicable)

### Combination Testing
Test critical combinations:
- [ ] sm + outline
- [ ] lg + destructive
- [ ] disabled + all variants
- [ ] [other important combinations]
```

### PHASE 6: Performance Testing

**Step 6.1: Rendering Performance**

```markdown
## Performance Checklist

### Initial Render
- [ ] Time to first render < 100ms
- [ ] No unnecessary re-renders
- [ ] Memoization used correctly

### Animation Performance
- [ ] Animations run at 60fps
- [ ] No jank during transitions
- [ ] react-native-reanimated on UI thread
- [ ] Smooth on low-end devices

### Bundle Size
- [ ] Component bundle size reasonable
- [ ] No duplicate dependencies
- [ ] Tree-shaking works
- [ ] Only imports needed

### Memory
- [ ] No memory leaks
- [ ] Event listeners cleaned up
- [ ] Timers cleared
- [ ] Subscriptions unsubscribed

### Runtime Performance
- [ ] Fast re-renders
- [ ] Efficient event handlers
- [ ] Optimized list rendering (if applicable)
```

**Step 6.2: Load Testing**

Test with many instances:
- Render 50+ instances of component
- Check for performance degradation
- Monitor memory usage
- Check frame rate

### PHASE 7: Edge Cases & Error Handling

**Step 7.1: Test Edge Cases**

```markdown
## Edge Cases Checklist

### Content
- [ ] Empty content
- [ ] Very long text (overflow handling)
- [ ] Special characters (emoji, unicode)
- [ ] RTL text (if applicable)
- [ ] Multiline text

### Props
- [ ] All props undefined
- [ ] Invalid prop values (should have defaults)
- [ ] Conflicting props
- [ ] Missing required props (TypeScript should catch)

### State
- [ ] Rapid state changes
- [ ] Concurrent updates
- [ ] State during unmount

### Interaction
- [ ] Rapid clicks/taps
- [ ] Double clicks
- [ ] Long press (mobile)
- [ ] Gesture conflicts

### Environment
- [ ] Slow network (if network-dependent)
- [ ] Offline mode
- [ ] Low memory
- [ ] Low battery (mobile)
```

### PHASE 8: Integration Testing

**Step 8.1: Test in Starter Kits**

Test component installation via CLI:

```bash
# Create test project
npx create-gluestack@latest test-project

# Initialize gluestack-ui
cd test-project
npx gluestack-ui init

# Add component
npx gluestack-ui add [component-name]

# Verify installation
# - Check component files copied
# - Check dependencies installed
# - Run the project
# - Test component works
```

**Step 8.2: Test with Other Components**

Test component alongside other components:
- Does it play well with other components?
- Any style conflicts?
- Z-index issues (overlays)?
- Event handling conflicts?

### PHASE 9: Report Results

**Step 9.1: Generate Test Report**

Create comprehensive report:

```markdown
## Component Testing Report: [ComponentName]

**Date:** [Date]
**Tester:** [Your name]
**Component Version:** [Version]

### Summary
- ✅ Overall Status: [PASS/FAIL/PARTIAL]
- ✅ Tested Platforms: iOS, Android, Web
- ✅ Issues Found: [Number]

### Platform Testing

#### iOS
- ✅ Rendering: PASS
- ✅ Functionality: PASS
- ✅ Accessibility: PASS
- ✅ Performance: PASS
- ⚠️ Issues: [List any issues]

#### Android
- ✅ Rendering: PASS
- ✅ Functionality: PASS
- ✅ Accessibility: PASS
- ✅ Performance: PASS
- ⚠️ Issues: [List any issues]

#### Web
- ✅ Rendering: PASS
- ✅ Functionality: PASS
- ✅ Accessibility: PASS
- ✅ Performance: PASS
- ⚠️ Issues: [List any issues]

### Documentation
- ✅ Page loads: PASS
- ✅ Examples work: PASS
- ✅ API reference: PASS
- ⚠️ Issues: [List any issues]

### Accessibility
- ✅ Keyboard navigation: PASS
- ✅ Screen reader: PASS
- ✅ ARIA attributes: PASS
- ⚠️ Issues: [List any issues]

### Performance
- ✅ Render time: [X]ms
- ✅ Bundle size: [X]KB
- ✅ Frame rate: 60fps
- ⚠️ Issues: [List any issues]

### Issues Found

#### Critical Issues
[List critical issues that block usage]

#### Major Issues
[List major issues that impact UX]

#### Minor Issues
[List minor issues or improvements]

### Recommendations
[Provide recommendations for fixes or improvements]

### Screenshots
[Include relevant screenshots if issues found]
```

**Step 9.2: Present to User**

Show the user:
- Complete test report
- Any issues found
- Recommendations for fixes
- Overall assessment (ready to ship / needs work)

**CHECKPOINT: Confirm with user if issues need to be fixed**

### PHASE 10: Fix Issues (if needed)

If issues were found:
1. Prioritize issues (critical > major > minor)
2. Fix critical and major issues
3. Re-test after fixes
4. Update test report
5. Confirm all critical issues resolved

---

## Quick Test Commands

```bash
# Full test workflow
yarn sync
yarn dev

# Kitchen sink
cd apps/kitchen-sink && yarn dev

# Website
cd apps/website && yarn dev

# Build test
yarn build

# Type check
yarn tsc --noEmit
```

## Best Practices

1. **Test on real devices** when possible, not just simulators
2. **Test with screen readers** enabled, don't just check ARIA attributes
3. **Test performance on low-end devices** to ensure accessibility
4. **Test all variants**, not just the default
5. **Test edge cases** that users might encounter
6. **Document all issues** with reproduction steps
7. **Re-test after fixes** to ensure resolution
8. **Test cross-browser** on web (Chrome, Safari, Firefox)
9. **Test with real content** (long text, images, etc.)
10. **Test accessibility early** in development, not as an afterthought

---

**Let's ensure quality!** 🧪
