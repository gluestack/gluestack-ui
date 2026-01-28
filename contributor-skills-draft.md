# Gluestack-UI Contributor Skills Draft

## Overview

This document outlines the skill system for gluestack-ui contributors. The skills are designed to guide contributors through common development tasks while following the project's established patterns and best practices.

---

## 1. Main Skill: Contributor Skills (`/contribute`)

**Purpose:** Entry point for all contributor-related tasks.

**Sub-skills:**
- `/create-component` - Create a new component with guided workflow
- `/enhance-component` - Improve or extend an existing component
- `/create-package` - Create or modify core/utils packages
- `/create-docs` - Create or update component documentation
- `/test-component` - Test components across apps
- `/review-pr` - Review pull request checklist before submitting

---

## 2. Core Skill: Create Component (`/create-component`)

### Description
**Interactive component creation workflow that guides contributors through the entire process of creating a production-ready React Native/Expo component following gluestack-ui's compound component API pattern.**

### Workflow Phases

#### **Phase 1: Discovery & Planning (Plan Mode)**
*Agent enters plan mode to understand requirements*

**Questions to ask user:**

1. **Component Name & Purpose**
   - What should the component be called? (kebab-case)
   - What problem does it solve?
   - Is it a standalone component or compound component?

2. **Component Type**
   - Simple component (single element like Card, Badge)
   - Compound component (multiple sub-components like Accordion, AlertDialog)
   - Form component (input, checkbox, select)
   - Overlay component (modal, popover, tooltip)
   - Layout component (container, grid, stack)

3. **Platform Requirements**
   - React Native only?
   - React Native + Web (React Native Web)?
   - Requires web-specific implementation? (index.web.tsx)

4. **Accessibility Requirements**
   - Does it need ARIA support? (keyboard navigation, screen readers)
   - What ARIA patterns apply? (button, dialog, checkbox, etc.)
   - Does it need focus management?

5. **Animation Requirements**
   - Does it need animations? (entrance, exit, transitions)
   - Simple (opacity, scale) or complex (gesture-driven)?
   - Using react-native-reanimated?

6. **Styling & Variants**
   - What variants does it support? (size, color, variant)
   - What's the default variant?
   - Does it need parent-child style context?
   - Custom theming support?

7. **Sub-components (if compound)**
   - List all sub-components needed
   - How do they interact?
   - What context needs to be shared?

8. **Dependencies**
   - External dependencies needed? (react-native-svg, reanimated, etc.)
   - Expo modules required?
   - Native modules needed?

#### **Phase 2: API Design & Confirmation**

**Agent proposes the component API structure:**

```typescript
// Example: Dropdown component API proposal

<Dropdown>
  <DropdownTrigger>
    <Button>
      <ButtonText>Open Menu</ButtonText>
    </Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem>
      <DropdownItemText>Item 1</DropdownItemText>
    </DropdownItem>
    <DropdownItem>
      <DropdownItemText>Item 2</DropdownItemText>
    </DropdownItem>
  </DropdownContent>
</Dropdown>

// Props interface proposal
interface DropdownProps {
  defaultOpen?: boolean;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  onOpenChange?: (open: boolean) => void;
}
```

**Questions for user:**
- Is this API intuitive and easy to use?
- Does it follow React Native conventions?
- Are the prop names clear?
- Any missing props or features?
- Naming conflicts with existing components?

#### **Phase 3: Tradeoffs & Design Decisions**

**Agent discusses tradeoffs with user:**

**Example for Dropdown:**

| Aspect | Option A | Option B | Recommendation |
|--------|----------|----------|----------------|
| **Positioning** | Manual positioning via styles | Auto-positioning with Floating UI | Option B - Better UX, handles edge cases |
| **Trigger** | Button only | Any child component | Option B - More flexible |
| **State Management** | Controlled only | Controlled + Uncontrolled | Option B - Supports both patterns |
| **Animation** | CSS transitions (web) / Animated (native) | react-native-reanimated (unified) | Option B - Consistent cross-platform |
| **Accessibility** | Basic ARIA labels | Full keyboard navigation + screen reader | Option B - WCAG compliant |

**Discuss:**
- Performance implications
- Bundle size impact
- API complexity vs flexibility
- Cross-platform compatibility
- Maintenance overhead
- Breaking changes in future

#### **Phase 4: Pattern Matching**

**Agent analyzes existing components to ensure consistency:**

**Checks:**
- ✅ Similar components exist? (e.g., Popover, Menu might be similar to Dropdown)
- ✅ Naming conventions match? (Dropdown vs DropDown vs DropdownMenu)
- ✅ Props pattern consistent? (size='sm' vs size='small')
- ✅ Style variant naming? (variant='outline' vs variant='outlined')
- ✅ Event handler naming? (onOpenChange vs onToggle vs onChange)
- ✅ TypeScript patterns? (Generic types, forwardRef usage)
- ✅ Export pattern? (named exports for sub-components)

**Agent presents findings:**
```
📋 Pattern Analysis:

Similar Components:
- Popover: Uses Floating UI for positioning ✅
- Menu: Uses compound pattern with MenuItem ✅
- Select: Uses similar dropdown behavior ✅

Naming Convention:
✅ All use kebab-case for folders
✅ All use PascalCase for components
✅ All use 'size' prop (not 'Size' or 'sz')

Recommended Pattern:
Follow Menu component structure with:
- DropdownTrigger (like MenuTrigger)
- DropdownContent (like MenuContent)
- DropdownItem (like MenuItem)
```

#### **Phase 5: Implementation Confirmation**

**Agent presents final implementation plan:**

```markdown
## Component Implementation Plan: Dropdown

### File Structure:
```
src/components/ui/dropdown/
├── index.tsx                 # Main component exports
├── styles.tsx                # Tailwind styles with tva()
├── dependencies.json         # { "dependencies": { "@floating-ui/react-native": "^0.10.0" } }
├── docs/
│   └── index.mdx             # Component documentation
└── examples/
    ├── basic/
    │   ├── meta.json
    │   └── template.handlebars
    ├── with-icons/
    │   ├── meta.json
    │   └── template.handlebars
    └── controlled/
        ├── meta.json
        └── template.handlebars
```

### Core Package Implementation:
```
packages/gluestack-core/src/dropdown/
├── creator/
│   └── index.tsx            # createDropdown factory
├── aria/
│   └── index.tsx            # useDropdown hook with ARIA support
└── index.tsx                # Barrel export
```

### Sub-components:
1. Dropdown (Root) - Context provider, state management
2. DropdownTrigger - Trigger button/element
3. DropdownContent - Floating content container
4. DropdownItem - Individual menu item
5. DropdownItemText - Item text styling
6. DropdownSeparator - Visual separator

### Variants:
- size: 'sm' | 'md' | 'lg'
- variant: 'default' | 'outline'

### Features:
✅ Keyboard navigation (Arrow keys, Enter, Escape)
✅ Auto-positioning with collision detection
✅ Controlled & uncontrolled modes
✅ Focus management
✅ Screen reader support
✅ Animation (entrance/exit)
✅ TypeScript types
✅ Cross-platform (iOS, Android, Web)

### Dependencies:
- @floating-ui/react-native: For positioning
- react-native-reanimated: For animations

### Timeline:
- Core implementation: 2-3 hours
- ARIA support: 1-2 hours
- Documentation: 1 hour
- Examples: 1 hour
- Testing: 1-2 hours
```

**Final confirmation:**
- Does this plan look complete?
- Any changes needed?
- Ready to proceed with implementation?

#### **Phase 6: Implementation**

**Agent executes implementation in order:**

1. **Setup local package development**
   ```bash
   yarn link:create
   yarn link:apps
   ```

2. **Create core package files**
   - Create `packages/gluestack-core/src/dropdown/` folder
   - Implement creator function with factory pattern
   - Implement ARIA hook if needed
   - Export from main index

3. **Create UI component files**
   - Create `src/components/ui/dropdown/` folder
   - Implement compound component structure
   - Add styles with tva()
   - Add TypeScript types
   - Create dependencies.json

4. **Create examples**
   - Basic usage example
   - Customized variant examples
   - Real-world use case examples
   - Add meta.json and template.handlebars for each

5. **Create documentation**
   - Write docs/index.mdx with:
     - Installation instructions
     - API reference
     - Props table
     - Examples
     - Accessibility notes
     - Best practices

6. **Update exports**
   - Export from `src/components/ui/index.tsx`
   - Update `src/sidebar.json` for docs navigation

7. **Test in apps**
   ```bash
   # Verify in kitchen-sink
   cd apps/kitchen-sink && yarn dev

   # Verify in website
   cd apps/website && yarn dev
   ```

#### **Phase 7: Review & Iteration**

**Agent prompts user for review:**
- Component renders correctly?
- Styling matches design?
- All variants work?
- Animations smooth?
- Accessibility working?
- Documentation clear?
- Examples helpful?

**If issues found:**
- Iterate on implementation
- Re-test
- Confirm fixes

#### **Phase 8: Finalization**

**Pre-submission checklist:**
- ✅ Component works in kitchen-sink app
- ✅ Documentation displays on website app
- ✅ TypeScript types are correct
- ✅ No console warnings/errors
- ✅ Accessibility tested
- ✅ Examples are interactive
- ✅ Cross-platform tested (web + native)
- ✅ Dependencies added to dependencies.ts
- ✅ Follows existing patterns
- ✅ Code is clean and commented

**Agent asks:**
- Ready to commit changes?
- Create PR with these changes?
- Any final modifications needed?

---

## 3. Sub-Skill: Enhance Component (`/enhance-component`)

### Description
**Improve or extend an existing component with new features, variants, or fixes.**

### Workflow

1. **Component Selection**
   - Which component to enhance?
   - What needs to be changed/added?

2. **Impact Analysis**
   - Analyze current component implementation
   - Check usage in examples and docs
   - Identify breaking changes
   - Check dependencies

3. **Enhancement Proposal**
   - Present proposed changes
   - Show before/after API
   - Discuss breaking changes
   - Suggest migration path if needed

4. **Implementation**
   - Update core package if needed
   - Update UI component
   - Update styles/variants
   - Update TypeScript types
   - Update examples
   - Update documentation

5. **Testing & Validation**
   - Test all existing examples still work
   - Test new functionality
   - Verify no regressions

---

## 4. Sub-Skill: Create Package (`/create-package`)

### Description
**Create or modify gluestack-core or gluestack-utils packages for component creators and utilities.**

### Workflow

1. **Package Type Selection**
   - gluestack-core: Component creators, ARIA hooks
   - gluestack-utils: Utilities, common functions, styling helpers

2. **Package Analysis**
   - Understand existing structure
   - Check for similar functionality
   - Identify dependencies

3. **Implementation Plan**
   - File structure
   - API design
   - TypeScript types
   - Exports

4. **Local Development Setup**
   ```bash
   yarn link:create-core
   # or
   yarn link:create-utils
   ```

5. **Implementation & Testing**
   - Write package code
   - Test in consuming components
   - Update exports
   - Build and verify

---

## 5. Sub-Skill: Create Documentation (`/create-docs`)

### Description
**Create or update component documentation with examples, API reference, and best practices.**

### Workflow

1. **Documentation Type**
   - Component documentation (MDX)
   - Guide/tutorial
   - API reference
   - Migration guide

2. **Content Structure**
   - Frontmatter (title, description, SEO)
   - Installation section
   - Basic usage
   - API reference table
   - Examples
   - Accessibility notes
   - Best practices
   - Troubleshooting

3. **Example Creation**
   - Create template.handlebars files
   - Create meta.json with configuration
   - Ensure examples are runnable

4. **Sidebar Update**
   - Update `src/sidebar.json` for navigation

5. **Review**
   - Preview in website app
   - Check formatting
   - Verify links work
   - Test interactive examples

---

## 6. Sub-Skill: Test Component (`/test-component`)

### Description
**Test components across multiple apps (kitchen-sink, website, starter-kits) to ensure cross-platform compatibility.**

### Workflow

1. **Test Environment Setup**
   ```bash
   yarn dev  # Watch mode
   yarn sync # One-time sync
   ```

2. **Kitchen Sink Testing**
   - Start kitchen-sink app
   - Test on iOS simulator
   - Test on Android emulator
   - Test component functionality
   - Test all variants
   - Test interactions
   - Test animations

3. **Website Testing**
   - Start website app
   - Test web rendering
   - Test responsive design
   - Test documentation examples
   - Test interactive playground

4. **Starter Kit Testing**
   - Test installation via CLI
   - Verify dependencies installed
   - Test component in fresh project

5. **Accessibility Testing**
   - Keyboard navigation
   - Screen reader (VoiceOver/TalkBack)
   - Focus management
   - ARIA attributes

6. **Performance Testing**
   - Check render performance
   - Test on low-end devices
   - Check bundle size impact
   - Memory usage

7. **Report**
   - Document test results
   - Note any issues found
   - Suggest fixes if needed

---

## 7. Sub-Skill: Review PR (`/review-pr`)

### Description
**Pre-submission PR checklist to ensure quality and completeness.**

### Checklist

#### Code Quality
- [ ] Follows TypeScript best practices
- [ ] No console.log statements
- [ ] No commented-out code
- [ ] Proper error handling
- [ ] Code is DRY (Don't Repeat Yourself)
- [ ] Meaningful variable/function names

#### Component Structure
- [ ] Follows compound component pattern (if applicable)
- [ ] Uses forwardRef for DOM refs
- [ ] TypeScript types are exported
- [ ] Props interface is documented
- [ ] Default props are defined

#### Styling
- [ ] Uses NativeWind/Tailwind classes
- [ ] Styles defined with tva() in styles.tsx
- [ ] Responsive design implemented
- [ ] Dark mode support (if applicable)
- [ ] Consistent spacing/sizing

#### Accessibility
- [ ] ARIA labels present
- [ ] Keyboard navigation works
- [ ] Focus management implemented
- [ ] Screen reader tested
- [ ] Semantic HTML (web)

#### Documentation
- [ ] Component docs created (docs/index.mdx)
- [ ] Props documented in API table
- [ ] Examples created (basic + advanced)
- [ ] Installation instructions included
- [ ] Sidebar.json updated

#### Testing
- [ ] Works in kitchen-sink app
- [ ] Works in website app
- [ ] Cross-platform tested (iOS, Android, Web)
- [ ] All variants tested
- [ ] No console warnings/errors
- [ ] Performance acceptable

#### Dependencies
- [ ] dependencies.json created (if needed)
- [ ] packages/gluestack-ui/src/dependencies.ts updated
- [ ] Only necessary dependencies added
- [ ] Version constraints specified

#### Git
- [ ] Only source files committed (no generated files)
- [ ] Meaningful commit messages
- [ ] No merge conflicts
- [ ] Branch is up-to-date with main

#### Final Review
- [ ] Re-read CONTRIBUTING.md sections relevant to changes
- [ ] Checked similar components for consistency
- [ ] Ready for maintainer review

---

## Implementation Notes

### Technical Requirements

1. **Skill Files Location:**
   ```
   .claude/skills/
   ├── contribute.claude
   ├── create-component.claude
   ├── enhance-component.claude
   ├── create-package.claude
   ├── create-docs.claude
   ├── test-component.claude
   └── review-pr.claude
   ```

2. **Skill Format (Claude Code Skills):**
   Each skill file should contain:
   ```yaml
   ---
   name: create-component
   description: Create a new React Native/Expo component with guided workflow
   triggers:
     - /create-component
     - /new-component
     - /component
   ---

   # Instructions for the skill...
   ```

3. **EnterPlanMode Usage:**
   - `/create-component` should automatically trigger EnterPlanMode
   - Agent should explore codebase first to understand patterns
   - Use AskUserQuestion for gathering requirements
   - Use ExitPlanMode when plan is ready for approval

4. **Pattern Recognition:**
   - Skills should analyze existing components to maintain consistency
   - Use Glob/Grep to find similar implementations
   - Reference CONTRIBUTING.md for guidelines
   - Check dependencies.ts for dependency patterns

5. **User Confirmation Points:**
   - After requirements gathering
   - After API design
   - After tradeoff discussion
   - Before implementation starts
   - After implementation (for review)
   - Before final commit

6. **Error Handling:**
   - Validate component names (kebab-case)
   - Check for naming conflicts
   - Verify dependencies exist in npm
   - Ensure no generated files are modified

---

## Example: Create Component Workflow in Action

### User Command:
```
/create-component
```

### Agent Response Flow:

**Step 1: Enter Plan Mode**
```
I'll help you create a new component for gluestack-ui. Let me analyze the existing component patterns first.

[Enters plan mode, explores codebase]
```

**Step 2: Ask Questions**
```
I've analyzed the existing patterns. Let me ask some questions to understand your component:

1. Component Name & Purpose:
   - What should the component be called?
   - What problem does it solve?

2. Component Type:
   [ ] Simple component (Card, Badge)
   [ ] Compound component (Accordion, Dialog)
   [ ] Form component (Input, Checkbox)
   [ ] Overlay component (Modal, Popover)

[Continues with all questions...]
```

**Step 3: Present API Proposal**
```
Based on your requirements, here's the proposed API:

[Shows code example]

Does this API look good? Any changes needed?
```

**Step 4: Discuss Tradeoffs**
```
Let me discuss some design decisions:

[Shows tradeoffs table]

Which options do you prefer?
```

**Step 5: Pattern Analysis**
```
I've analyzed similar components in the codebase:

[Shows pattern analysis]

I'll follow these patterns for consistency. Confirm?
```

**Step 6: Implementation Plan**
```
Here's the complete implementation plan:

[Shows detailed plan]

Ready to proceed with implementation?
```

**Step 7: Execute Implementation**
```
Great! I'll now implement the component:

1. Setting up local package development...
2. Creating core package files...
3. Creating UI component...
[... continues ...]
```

**Step 8: Review**
```
Component implementation complete!

I've tested it in kitchen-sink and website apps. Here's what I created:
- Core creator in packages/gluestack-core
- UI component in src/components/ui
- 3 examples (basic, with-icons, controlled)
- Complete documentation
- Updated exports and sidebar

Please review and let me know if any changes are needed.
```

---

## Advantages of This Skill System

1. **Guided Workflow:** Step-by-step process reduces cognitive load for contributors
2. **Consistency:** Enforces patterns and conventions automatically
3. **Quality Assurance:** Built-in checks and validations
4. **Education:** Teaches patterns while creating components
5. **Efficiency:** Automates repetitive tasks
6. **Collaboration:** Multiple confirmation points ensure alignment
7. **Documentation:** Generates complete docs as part of workflow
8. **Accessibility:** Ensures ARIA support is considered from the start
9. **Best Practices:** Bakes in gluestack-ui conventions
10. **Flexibility:** Supports various component types and complexities

---

## Future Enhancements

1. **Visual Component Designer:** Generate component from Figma/design files
2. **Component Migration Tool:** Migrate components from other libraries
3. **Performance Profiler:** Built-in performance testing and optimization
4. **Automated Testing:** Generate test files alongside components
5. **Component Variants Generator:** AI-powered variant suggestions
6. **Accessibility Auditor:** Automated WCAG compliance checking
7. **Bundle Size Analyzer:** Track bundle impact of new components
8. **Component Playground:** Live editor for rapid prototyping
9. **Version Migration:** Automated migration guides for breaking changes
10. **Multi-language Docs:** Generate docs in multiple languages

---

## Conclusion

This skill system provides a comprehensive, guided approach to contributing to gluestack-ui. By following these workflows, contributors can create high-quality, consistent, and accessible components while learning the project's patterns and best practices.

The `/create-component` skill in particular addresses the user's requirement for:
- ✅ Planning mode with codebase analysis
- ✅ Asking user everything about the component
- ✅ Confirming API design
- ✅ Discussing tradeoffs and advantages
- ✅ Following existing patterns (compound component API)
- ✅ Repeatedly asking for confirmation
- ✅ Providing best output for React Native/Expo

Each skill is designed to be modular and reusable, allowing for easy extension and maintenance as the project evolves.
