# Gluestack-UI Contributor Skills

This directory contains Claude Code skills for contributing to gluestack-ui. These skills provide guided, interactive workflows for common contributor tasks.

## 📁 Directory Structure

```
.claude/skills/
├── README.md                            # This file
├── contribute.md                        # Main entry skill
└── contribute/                          # Sub-skills directory
    ├── create-component.md              # Component creation workflow
    ├── enhance-component.md             # Component enhancement workflow
    ├── create-package.md                # Package development workflow
    ├── create-docs.md                   # Documentation workflow
    ├── test-component.md                # Testing workflow
    └── review-pr.md                     # PR review checklist
```

All skills are organized hierarchically under the `/contribute` namespace for better organization and discoverability.

## Available Skills

### 🎯 Main Entry Point

#### `/contribute`
Main hub for all contributor workflows. Use this to see all available sub-skills.

```bash
/contribute
```

---

### 🆕 Component Creation

#### `/contribute/create-component`
**Most comprehensive skill** - Creates a new React Native/Expo component with complete guided workflow.

**Features:**
- Enters plan mode automatically
- Analyzes existing component patterns
- Asks comprehensive questions about requirements
- Proposes and confirms API design
- Discusses tradeoffs and design decisions
- Implements following compound component API pattern
- Creates complete documentation and examples
- Tests across all apps

**When to use:**
- Creating a new UI component from scratch
- Need guidance on component structure
- Want to follow gluestack-ui patterns

**Workflow phases:**
1. Plan Mode & Discovery (analyze codebase)
2. API Design & Confirmation
3. Tradeoffs & Design Decisions
4. Pattern Matching & Consistency
5. Implementation Plan & Confirmation
6. Implementation
7. Testing & Review
8. Finalization

```bash
/contribute/create-component
```

---

### 🔧 Component Enhancement

#### `/contribute/enhance-component`
Improve or extend existing components with new features, variants, or fixes.

**When to use:**
- Adding new variants
- Adding new props or features
- Fixing bugs
- Improving accessibility
- Enhancing performance

```bash
/contribute/enhance-component
```

---

### 📦 Package Development

#### `/contribute/create-package`
Work with gluestack-core and gluestack-utils packages.

**When to use:**
- Creating component creators (factory functions)
- Creating ARIA hooks
- Creating utility functions
- Modifying core package code

```bash
/contribute/create-package
```

---

### 📝 Documentation

#### `/contribute/create-docs`
Create or update component documentation.

**When to use:**
- Writing new component docs
- Creating examples
- Updating API reference
- Writing guides/tutorials

```bash
/contribute/create-docs
```

---

### 🧪 Testing

#### `/contribute/test-component`
Comprehensive testing across platforms and apps.

**When to use:**
- Testing components on iOS, Android, Web
- Accessibility testing
- Performance testing
- Integration testing

```bash
/contribute/test-component
```

---

### ✅ PR Review

#### `/contribute/review-pr`
Pre-submission checklist for quality assurance.

**When to use:**
- Before creating a pull request
- Need to verify all requirements met
- Want to ensure quality

```bash
/contribute/review-pr
```

---

## Quick Start Guide

### For New Contributors

1. **Read CONTRIBUTING.md first**
   ```bash
   # From repository root
   cat CONTRIBUTING.md
   ```

2. **Set up development environment**
   ```bash
   yarn
   yarn sync
   yarn dev
   ```

3. **Choose your task**
   - Creating component? → `/contribute/create-component`
   - Updating component? → `/contribute/enhance-component`
   - Writing docs? → `/contribute/create-docs`
   - Testing? → `/contribute/test-component`

4. **Follow the guided workflow**
   - Answer questions
   - Review proposals
   - Confirm decisions
   - Let the agent implement

5. **Review before submitting**
   ```bash
   /contribute/review-pr
   ```

### For Creating a Component

The `/contribute/create-component` skill is the most comprehensive:

```bash
# Start the workflow
/contribute/create-component

# The agent will:
# 1. Enter plan mode
# 2. Analyze existing patterns
# 3. Ask you questions about:
#    - Component name and purpose
#    - Component type (simple/compound)
#    - Platform requirements
#    - Accessibility needs
#    - Animation requirements
#    - Styling variants
#    - Dependencies
# 4. Propose API design → you confirm
# 5. Discuss tradeoffs → you choose
# 6. Show implementation plan → you approve
# 7. Implement everything
# 8. Test and iterate
# 9. Final review → ready to commit
```

**Key features:**
- ✅ 6 confirmation checkpoints
- ✅ Analyzes existing components for consistency
- ✅ Follows compound component API pattern
- ✅ Creates complete documentation
- ✅ Creates multiple examples
- ✅ Tests across platforms
- ✅ Ensures accessibility

---

## Workflow Philosophy

All skills follow these principles:

### 1. **Plan Before Code**
- Analyze existing patterns
- Design API first
- Get user approval
- Then implement

### 2. **Confirmation Points**
- User approves API design
- User approves tradeoffs
- User approves implementation plan
- User approves final result

### 3. **Pattern Consistency**
- Read existing components
- Match naming conventions
- Follow established patterns
- Maintain consistency

### 4. **Quality Assurance**
- Complete documentation
- Multiple examples
- Cross-platform testing
- Accessibility checking

### 5. **Education**
- Explain patterns
- Discuss tradeoffs
- Show examples
- Teach best practices

---

## Skill Features

### Automatic Pattern Analysis
Skills automatically:
- Read similar components
- Check naming conventions
- Verify prop patterns
- Ensure TypeScript consistency

### Interactive Questioning
Skills use `AskUserQuestion` to:
- Gather requirements
- Clarify preferences
- Offer choices
- Confirm decisions

### Tradeoff Discussion
Skills present:
- Multiple options
- Pros and cons
- Recommendations
- Let user decide

### Complete Implementation
Skills handle:
- Core package creation
- UI component creation
- Styling with tva()
- TypeScript types
- Documentation
- Examples
- Testing

---

## Examples

### Creating a Dropdown Component

```bash
/contribute/create-component
```

**Agent:** "I'll help you create a new component. Let me analyze existing patterns first."

[Agent enters plan mode, reads accordion, button, alert-dialog]

**Agent:** "What should the component be called?"

**You:** "dropdown"

**Agent:** "What type of component is this?"
- [ ] Simple component
- [x] Compound component ✓
- [ ] Form component
- [ ] Overlay component

**You:** Select "Compound component"

**Agent:** "Which platforms should this support?"
- [x] iOS ✓
- [x] Android ✓
- [x] Web ✓

**You:** Select all platforms

[... more questions ...]

**Agent:** "Based on your requirements, here's the proposed API:"
```tsx
<Dropdown>
  <DropdownTrigger>
    <Button>Open</Button>
  </DropdownTrigger>
  <DropdownContent>
    <DropdownItem>
      <DropdownItemText>Item 1</DropdownItemText>
    </DropdownItem>
  </DropdownContent>
</Dropdown>
```

**Agent:** "Does this API look good?"

**You:** "Yes, looks great!"

**Agent:** "Let me discuss some design decisions..."

[Shows tradeoffs table for positioning, state management, animations]

**Agent:** "Here's the complete implementation plan..."

[Shows file structure, features, dependencies]

**Agent:** "Ready to proceed?"

**You:** "Yes, let's do it!"

[Agent implements everything]

**Agent:** "Component complete! I've tested it in kitchen-sink and website apps."

---

## Tips for Best Results

### 1. Be Specific
- Provide clear component name
- Describe use cases
- Specify requirements upfront

### 2. Review Carefully
- Check proposed API
- Review tradeoffs
- Verify implementation plan

### 3. Test Thoroughly
- Use `/test-component` skill
- Test all platforms
- Check accessibility

### 4. Use Review Skill
- Run `/review-pr` before submitting
- Fix any issues found
- Ensure quality

### 5. Follow Patterns
- Trust the pattern analysis
- Stick to conventions
- Maintain consistency

---

## Troubleshooting

### "Skill not found"
Make sure you're using the correct hierarchical path:
```bash
/contribute/create-component     # Correct ✅
/create-component                # Wrong (old path) ❌
/createcomponent                 # Wrong ❌
/create component                # Wrong ❌
```

### "Generated files modified"
Skills will warn if you try to edit generated files:
- Only edit files in `src/`
- Never edit `apps/*/components/ui/`
- Use `yarn dev` to sync changes

### "Pattern analysis failed"
Ensure repository is up to date:
```bash
git pull origin main
yarn
yarn sync
```

### "Build errors"
Check local package linking:
```bash
yarn unlink:apps
yarn link:create
yarn link:apps
```

---

## Contributing to Skills

To improve these skills:

1. **Suggest improvements** - Open GitHub issue
2. **Report bugs** - Describe what went wrong
3. **Add examples** - Share successful workflows
4. **Update docs** - Submit PR with improvements

---

## Architecture

### Skill Structure

Each skill file follows this format:

```markdown
---
name: skill-name
description: Brief description
---

# Skill Title

Instructions and workflow...

## PHASE 1: ...
## PHASE 2: ...
...
```

### Skill Hierarchy

Skills are organized hierarchically:

```
/contribute                              # Main entry point
├── /contribute/create-component         # Most comprehensive workflow
├── /contribute/enhance-component        # For modifications
├── /contribute/create-package           # For core work
├── /contribute/create-docs              # For documentation
├── /contribute/test-component           # For testing
└── /contribute/review-pr                # For final check
```

This organization:
- ✅ Groups related skills together
- ✅ Makes navigation intuitive
- ✅ Scales well for future additions
- ✅ Follows namespace conventions

### Tools Used

Skills leverage Claude Code tools:
- `EnterPlanMode` - For planning phase
- `AskUserQuestion` - For gathering requirements
- `Glob` - For finding files
- `Grep` - For searching code
- `Read` - For reading files
- `Edit/Write` - For modifying files
- `Bash` - For running commands

---

## Support

Need help?

- **Read this README** - Covers common scenarios
- **Check CONTRIBUTING.md** - Project guidelines
- **Use `/contribute`** - See all available skills
- **Ask questions** - During skill workflows
- **Open issue** - For bugs or improvements

---

## Version

**Skills Version:** 1.0.0
**Last Updated:** 2026-01-28
**Compatible with:** gluestack-ui v4.0.0-alpha

---

**Happy Contributing!** 🚀

Built with ❤️ by the gluestack-ui team
