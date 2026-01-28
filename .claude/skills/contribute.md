---
name: contribute
description: Main entry point for gluestack-ui contributor tasks and workflows
---

# Gluestack-UI Contributor Hub

Welcome to the gluestack-ui contributor skills! This is the main entry point that provides access to all contributor workflows organized as sub-skills.

## Available Sub-Skills

All contributor workflows are organized under the `/contribute` namespace. Use the commands below to access specific workflows:

### 🆕 Component Creation
**Command:** `/contribute/create-component`
Create a new React Native/Expo component with a guided, interactive workflow. The agent will:
- Enter plan mode to analyze existing patterns
- Ask comprehensive questions about requirements
- Propose and confirm the component API design
- Discuss tradeoffs and design decisions
- Ensure pattern consistency with existing components
- Implement following the compound component API pattern
- Create complete documentation and examples
- Test across all apps (kitchen-sink, website)

### 🔧 Component Enhancement
**Command:** `/contribute/enhance-component`
Improve or extend an existing component with new features, variants, or fixes.

### 📦 Package Development
**Command:** `/contribute/create-package`
Create or modify gluestack-core or gluestack-utils packages for component creators and utilities.

### 📝 Documentation
**Command:** `/contribute/create-docs`
Create or update component documentation with examples, API reference, and best practices.

### 🧪 Testing
**Command:** `/contribute/test-component`
Test components across multiple apps (kitchen-sink, website, starter-kits) to ensure cross-platform compatibility.

### ✅ PR Review
**Command:** `/contribute/review-pr`
Pre-submission PR checklist to ensure quality and completeness before creating a pull request.

## Quick Start

1. **Creating a new component?** Use `/contribute/create-component`
2. **Improving existing component?** Use `/contribute/enhance-component`
3. **Working on packages?** Use `/contribute/create-package`
4. **Writing docs?** Use `/contribute/create-docs`
5. **Testing changes?** Use `/contribute/test-component`
6. **Ready to submit PR?** Use `/contribute/review-pr`

## Skill Organization

All contributor skills are organized hierarchically:

```
/contribute                          # Main entry point (this skill)
├── /contribute/create-component     # Create new components
├── /contribute/enhance-component    # Enhance existing components
├── /contribute/create-package       # Work on core packages
├── /contribute/create-docs          # Create documentation
├── /contribute/test-component       # Test components
└── /contribute/review-pr            # Review before PR
```

## How to Use

Simply type the command (e.g., `/create-component`) and the agent will guide you through the entire process with:
- ✅ Step-by-step workflow
- ✅ Pattern analysis and consistency checks
- ✅ Multiple confirmation points
- ✅ Tradeoff discussions
- ✅ Automated implementation following best practices
- ✅ Complete testing and validation

## Important Guidelines

Before starting, make sure you have:
1. ✅ Read CONTRIBUTING.md
2. ✅ Set up development environment (`yarn` and `yarn sync`)
3. ✅ Started watch mode (`yarn dev`)
4. ✅ Understood the source-to-destination file system

**Never edit generated files in `apps/*/components/ui/` - always edit source files in `src/`**

## Need Help?

- Read: `/Users/sanchitkumar/Downloads/new_folder/gluestack-ui/CONTRIBUTING.md`
- Ask questions during any skill workflow
- The agent will guide you through each step

---

**Ready to contribute?** Choose a skill above and let's build amazing components! 🚀
