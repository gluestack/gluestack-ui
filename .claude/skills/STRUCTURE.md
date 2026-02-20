# Skills Directory Structure

## Visual Overview

```
.claude/
├── SKILLS_SUMMARY.md                    # Implementation summary and overview
└── skills/                              # All skills directory
    ├── README.md                        # Complete usage guide
    ├── contribute.md                    # Main entry point skill
    └── contribute/                      # Sub-skills namespace
        ├── create-component.md          # Component creation workflow (29.5 KB)
        ├── enhance-component.md         # Component enhancement workflow
        ├── create-package.md            # Package development workflow
        ├── create-docs.md               # Documentation workflow
        ├── test-component.md            # Testing workflow
        └── review-pr.md                 # PR review checklist
```

## Skill Hierarchy

```
/contribute                                          Main Hub
    │
    ├── /contribute/create-component                 🆕 Create Components
    │   └── 8 phases: Discovery → Design → Implementation → Testing
    │
    ├── /contribute/enhance-component                🔧 Enhance Components
    │   └── Impact analysis → Enhancement → Testing
    │
    ├── /contribute/create-package                   📦 Package Development
    │   └── Core creators → ARIA hooks → Utilities
    │
    ├── /contribute/create-docs                      📝 Documentation
    │   └── MDX docs → Examples → API reference
    │
    ├── /contribute/test-component                   🧪 Testing
    │   └── Cross-platform → Accessibility → Performance
    │
    └── /contribute/review-pr                        ✅ PR Review
        └── Code quality → Documentation → Git hygiene
```

## File Details

| File | Type | Size | Lines | Purpose |
|------|------|------|-------|---------|
| `README.md` | Documentation | 9.6 KB | ~350 | Complete usage guide |
| `contribute.md` | Main Skill | 2.9 KB | ~100 | Entry point hub |
| `contribute/create-component.md` | Sub-skill | 29.5 KB | ~1,100 | Component creation (most comprehensive) |
| `contribute/enhance-component.md` | Sub-skill | 8.9 KB | ~320 | Component enhancement |
| `contribute/create-package.md` | Sub-skill | 15.7 KB | ~580 | Package development |
| `contribute/create-docs.md` | Sub-skill | 13.2 KB | ~480 | Documentation creation |
| `contribute/test-component.md` | Sub-skill | 12.7 KB | ~470 | Testing workflows |
| `contribute/review-pr.md` | Sub-skill | 12.7 KB | ~470 | PR review checklist |

**Total:** ~105 KB, ~3,870 lines across 7 skills + README

## Command Reference

### Quick Command List

```bash
# Main entry point
/contribute

# Component workflows
/contribute/create-component      # Create new component (most used)
/contribute/enhance-component     # Modify existing component

# Development workflows
/contribute/create-package        # Work on core packages
/contribute/create-docs           # Write documentation

# Quality assurance
/contribute/test-component        # Test thoroughly
/contribute/review-pr             # Final review before PR
```

## Organization Benefits

### 1. **Namespace Separation**
- All contributor skills under `/contribute`
- Easy to add more namespaces (e.g., `/usage` for user skills)
- Prevents command collision

### 2. **Hierarchical Discovery**
- Start with `/contribute` to see all options
- Drill down to specific workflow
- Clear parent-child relationships

### 3. **Scalability**
- Can add more sub-skills easily
- Can create sub-namespaces (e.g., `/contribute/advanced/`)
- Organized growth

### 4. **Intuitive Navigation**
- Related skills grouped together
- Logical command structure
- Easy to remember paths

## Future Expansion

Potential additional namespaces:

```
.claude/skills/
├── contribute/                  # Contributor workflows ✅ (current)
│   ├── create-component.md
│   └── ...
│
├── usage/                       # User/consumer workflows (future)
│   ├── install-component.md
│   ├── customize-theme.md
│   └── migrate-version.md
│
├── maintain/                    # Maintainer workflows (future)
│   ├── release.md
│   ├── review-contribution.md
│   └── triage-issues.md
│
└── docs/                        # Documentation generation (future)
    ├── generate-api.md
    └── update-changelog.md
```

## Metadata

**Structure Version:** 2.0.0 (Hierarchical)
**Previous Version:** 1.0.0 (Flat)
**Migration:** All skills moved from flat to hierarchical structure
**Breaking Changes:** Command paths changed (e.g., `/create-component` → `/contribute/create-component`)

## Migration Guide

If you were using the old flat structure:

| Old Command | New Command |
|-------------|-------------|
| `/create-component` | `/contribute/create-component` |
| `/enhance-component` | `/contribute/enhance-component` |
| `/create-package` | `/contribute/create-package` |
| `/create-docs` | `/contribute/create-docs` |
| `/test-component` | `/contribute/test-component` |
| `/review-pr` | `/contribute/review-pr` |

**Note:** The main `/contribute` command remains the same.

## Technical Implementation

### Frontmatter Format

Each sub-skill includes:

```yaml
---
name: contribute/skill-name      # Full hierarchical path
description: Brief description   # Shown in listings
parent: contribute               # Parent skill reference
---
```

### Directory Convention

- **Main skills:** `.claude/skills/[skill-name].md`
- **Sub-skills:** `.claude/skills/[parent]/[skill-name].md`
- **Documentation:** `.claude/skills/README.md`, `STRUCTURE.md`

### Validation

To verify structure:

```bash
# Check directory structure
tree .claude/skills/

# List all skills
find .claude/skills -name "*.md" -type f

# Verify frontmatter
grep -r "^name:" .claude/skills/contribute/
```

## Support

Questions about structure?
- Read this file for organization details
- Check README.md for usage
- Review SKILLS_SUMMARY.md for implementation overview

---

**Last Updated:** 2026-01-28
**Structure Maintainer:** gluestack-ui team
