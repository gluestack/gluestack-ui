# Contributing to `gluestack-ui`

Thank you for your interest in contributing to `gluestack-ui`! 🚀  
Your efforts help us build a more robust and versatile library for the community.

This comprehensive guide will walk you through everything you need to know about contributing to gluestack-ui, from initial setup to advanced development workflows.

We're thrilled to have you on this journey with us. Together, we can accelerate universal app development! 🎉

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Architecture](#project-architecture)
3. [Generated Files System](#generated-files-system)
4. [Development Workflow](#development-workflow)
5. [Creating Your First Component](#creating-your-first-component)
6. [Documentation Guidelines](#documentation-guidelines)
7. [Testing Your Changes](#testing-your-changes)
8. [Contribution Guidelines](#contribution-guidelines)
9. [Troubleshooting](#troubleshooting)

## Getting Started

### Initial Setup

1. **Fork and Clone**

   ```bash
   # Fork gluestack-ui from GitHub first, then:
   git clone git@github.com:${YOUR_USERNAME}/gluestack-ui.git
   cd gluestack-ui
   ```

2. **Add Remote**

   ```bash
   git remote add origin git@github.com:<your_github_id>/gluestack-ui.git
   ```

3. **Install Dependencies**

   ```bash
   yarn
   ```

4. **Initial Sync** (Copy files from `src/` to `apps/`)

   ```bash
   yarn sync
   ```

5. **Start Development Watcher**
   ```bash
   yarn dev
   ```

### Prerequisites

Before contributing, ensure you understand:

- How the source-to-destination system works
- Project architecture and component organization
- Development workflow and testing approach

## Project Architecture

### High-Level Structure

```
gluestack-ui/
├── src/                          # Source files (single source of truth)
├── packages/                     # Published packages
├── apps/                        # Example applications & documentation
├── scripts/                     # Build & development scripts
```

### Key Directories

#### Source (`src/`)

- **`components/ui/`** - Core UI components (Button, Input, Modal, etc.)
- **`utils/gluestack-utils/`** - Shared utility functions
- **`docs-components/`** - Documentation-specific components
- **`sidebar.json`** - Documentation sidebar configuration

#### Applications (`apps/`)

- **`website/`** - Documentation website (gluestack-ui.com)
- **`kitchen-sink/`** - Component showcase & testing
- **`starter-kit-next/`** - Next.js starter template
- **`starter-kit-expo/`** - Expo starter template

#### Packages (`packages/`)

- **`gluestack-ui/`** - Main CLI package for component installation
- **`create-gluestack/`** - Project initialization tool

## Generated Files System

This repository uses a **source-to-destination** file generation system where:

- **Source files** are maintained in the `src/` directory at the root level
- **Mapper scripts** in `scripts/` automatically copy and sync files to destination projects in `apps/`
- **Generated files** in destination projects are gitignored to prevent accidental commits

### File Structure

```
/
├── src/                          # Source files
│   ├── components/ui/           # UI components source
│   ├── utils/gluestack-utils/   # Utility functions source
│   ├── docs-components/         # Documentation components source
│   └── sidebar.json            # Sidebar configuration source
|
├── scripts/                     # Mapper scripts
│   └── mappers/                # Individual app mappers
|
└── apps/                       # Destination projects
    ├── website/                # Generated files are gitignored
    ├── starter-kit-next/
    ├── starter-kit-expo/
    └── kitchen-sink/           # Generated files are gitignored
```

### Generated Files by Destination

#### All Apps

The following files are generated in **all** destination apps:

- `components/ui/` - UI components copied from `src/components/ui/`
- `utils/gluestack-utils/` - Utility functions copied from `src/utils/gluestack-utils/`

#### Website App Only

Additional files generated only for the website app:

- `components/docs-components/` - Documentation components copied from `src/docs-components/`
- `sidebar.json` - Sidebar configuration copied from `src/sidebar.json`
- `app/ui/docs` - Docs or examples copied from `src/docs` or `src/components/ui/${component_name}/docs`

### Why This System?

#### ✅ Benefits

- **Single source of truth** - All components maintained in one place
- **Consistency** - Same components across all apps
- **No duplication** - Avoid copy-paste errors
- **Easy updates** - Change once, update everywhere
- **Clean git history** - Only source changes are committed

#### ⚠️ Important Notes

- **Never edit generated files directly** - Changes will be overwritten
- **Always edit source files** in `src/` directory
- **Generated files are local only** - Not committed to git
- **Run mappers after pulling** to sync local generated files

## Development Workflow

### Making Changes

#### For UI Components

1. **Edit source files** in `src/components/ui/` - Never edit in `apps/*/components/ui/`
2. **Test changes** in the `kitchen-sink` app or `website`
3. **Verify** across different applications
4. **Commit only source files** - Generated files are automatically ignored

#### For Documentation

1. **Edit content** in appropriate `src/docs/` directories
2. **Update sidebar** in `src/sidebar.json` if adding any new component
3. **Test** on the website app
4. **Review** documentation flow and navigation

### Mapper Scripts

The mapper system uses:

- `scripts/dev.ts` - Main script that watches for file changes
- `scripts/mappers/` - Individual mappers for each destination app
- File watching and debouncing to handle rapid changes
- Event-based processing (add, change, delete)

### Development Commands

```bash
# Watch all mappers and sync changes
yarn dev

# Run specific mapper only
yarn dev:website

# One-time sync without watching
yarn sync

# Run specific mapper with sync
yarn sync:starter-kit-next
```

### Gitignore Configuration

Each destination app has been configured to ignore generated files:

#### Website App (`apps/website/.gitignore`)

```gitignore
# Generated files from src/ - DO NOT COMMIT
# These files are automatically generated by the mapper scripts
components/ui/
components/docs-components/
utils/gluestack-utils/
sidebar.json
```

#### Other Apps (`apps/*/\.gitignore`)

```gitignore
# Generated files from src/ - DO NOT COMMIT
# These files are automatically generated by the mapper scripts
components/ui/
utils/gluestack-utils/
```

## Creating Your First Component

> Make sure you have set up your gluestack-ui development environment and have `yarn dev` running at root to watch for file changes.

### Prerequisites for Component Creation

1. **Development Environment Setup**
   - Follow the setup instructions above
   - Verify all apps are properly synced with `yarn sync`
   - Ensure `yarn dev` is running to watch for file changes

### Step 1: Create the Core Component

#### Component Structure

Create your component in the source directory following this structure:

```
src/components/ui/<component-name>/
├── index.tsx                 # Main component file
├── aria/                     # ARIA related code for component
├── creator/                  # Creator code of the component
├── examples/                 # Examples of component
├── docs/                     # Docs of the component
```

#### Create Component Steps

1. **Create component folder** inside `src/components/ui/` (use kebab-case).

2. **Create composable component file** inside `src/components/ui/<component-name>/index.tsx`.

3. **Export** all the composable components from this file. Make sure the components are exported as named-exports.

4. **Create creator functions** inside (`src/components/ui/<component-name>/creator/`):

   - All creator/factory functions for unstyled components should go here
   - Use this for creating base component factories that can be styled

5. **Create ARIA hooks** inside (`src/components/ui/<component-name>/aria/`):

   - All accessibility-related code and ARIA hooks should go here
   - Include keyboard navigation, screen reader support, and other a11y features

6. **Add component examples** inside (`src/components/ui/<component-name>/examples/`):

   - Create usage examples showing different variants and use cases

7. **Add component documentation** inside (`src/components/ui/<component-name>/docs/`):

   - Include comprehensive documentation for the component

8. **Export from main index** (`src/components/ui/index.tsx`):
   ```tsx
   // Add your component export
   export * from './<component-name>';
   ```

### Step 2: Component Guidelines

#### Code Standards

- **Use TypeScript** for all component files
- **Follow naming conventions**: PascalCase for components, kebab-case for directories
- **Include accessibility features** where appropriate
- **Write meaningful prop types** and documentation
- **Support className prop** for styling flexibility

#### Styling Guidelines

- **Use NativeWind/Tailwind** classes via className prop
- **Import from react-native directly** (View, Text, etc.)
- **Don't import styled components** from NativeWind
- **Support theming** through CSS variables when needed

### Step 3: Add Component Dependencies

Update dependencies in the appropriate configuration files:

**Starter-Kits** - Update starter-kit-* templates if needed.

**gluestack-ui package** - Update `packages/gluestack-ui/src/dependencies.json` if needed.

### Advanced Features

#### Accessibility Support

If your component needs accessibility features:

1. **Import accessibility props** from react-native
2. **Add ARIA attributes** where appropriate
3. **Support screen readers** with proper labels
4. **Test with accessibility tools**

#### Animation Support

For animated components:

1. **Use react-native-reanimated** for animations
2. **Provide animation configuration props**
3. **Ensure performance** on lower-end devices
4. **Document animation behavior**

## Documentation Guidelines

### Documentation Structure

Create Component documentation in this directory:

```
src/components/ui/<component-name>/
├── examples/               # Usage examples
│   ├── basic/
|        |- meta.json
|        |- template.handlebars
|── docs/                   # Main docs
|     |- index.mdx

```


### Documentation Best Practices

- **Include comprehensive examples** showing different variants and use cases
- **Document all props** with types and descriptions
- **Provide accessibility guidelines** for component usage
- **Include common patterns** and best practices
- **Update sidebar.json** when adding new component documentation

## Testing Your Changes

### Using Kitchen Sink App

The `kitchen-sink` app is the primary testing environment:

- Contains all components with various configurations
- Hot reloads when source files change
- Best for component development and testing

#### Testing Components in Kitchen Sink

1. **Navigate to Kitchen Sink**:

   ```bash
   cd apps/kitchen-sink
   ```

2. **Start Development Server**
   ```bash
   yarn dev
   ```

### Using Website App

The `website` app for documentation testing:

- Full documentation experience
- Component examples and API documentation
- Best for documentation changes

Test documentation rendering:

```bash
# Run website for documentation testing
cd apps/website
yarn dev
```

Visit the documentation page to verify:

- Component examples render correctly
- API documentation is accurate
- Examples are interactive

### Using Starter Kits

Test starter templates to ensure:

- Components work in fresh projects
- Installation process is smooth
- No missing dependencies



### Component Testing Checklist

Before submitting your component:

- [ ] Component renders correctly in Kitchen Sink app
- [ ] Documentation displays properly on Website app
- [ ] Component works in starter templates
- [ ] TypeScript types are properly defined
- [ ] Accessibility features are implemented
- [ ] Examples cover common use cases
- [ ] Props are well documented
- [ ] Cross-platform compatibility (web and native)
- [ ] Performance tested on lower-end devices

## Contribution Guidelines

### Before Contributing

1. **Understand the project structure** (this document)
2. **Set up your development environment**
3. **Run the mapper scripts** to ensure everything works locally
4. **Explore the codebase** using the kitchen-sink and website apps

### Code Style & Standards

- Follow existing code patterns and conventions
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes across multiple applications
- Update documentation when adding new features

### Pull Request Process

The process of proposing a change to `gluestack/gluestack-ui` can be summarized as follows:

1. **Create a feature branch** from `main`
2. **Make your changes** in source files only
3. **Test thoroughly** using kitchen-sink and website apps
4. **Update documentation** if needed
5. **Push changes** to your fork
6. **Create a pull request** to the `gluestack/gluestack-ui` repository
7. **Review and address comments** on your pull request

If all goes well, your pull request will be merged. If it is not merged, maintainers will do their best to explain the reason why.

### File Identification

#### Generated Files (DO NOT EDIT)

- Any file in `apps/*/components/ui/`
- Any file in `apps/*/utils/gluestack-utils/`
- `apps/website/components/docs-components/`
- `apps/website/sidebar.json`

#### Source Files (EDIT THESE)

- Any file in `src/components/ui/`
- Any file in `src/utils/gluestack-utils/`
- Any file in `src/docs-components/`
- `src/sidebar.json`

### Common Pitfalls to Avoid

- ❌ Editing generated files in `apps/*/components/ui/`
- ❌ Committing generated files
- ❌ Not testing in multiple applications
- ❌ Forgetting to update documentation
- ❌ Making changes without understanding the mapper system

## Troubleshooting

### Missing Generated Files?

```bash
yarn sync
```

### Changes Not Reflecting?

Check if `yarn dev` is running and watching for changes.

### Git Trying to Commit Generated Files?

Check `.gitignore` configuration in the respective app directory.

### Mapper Scripts Not Working?

1. Ensure you're in the root directory
2. Check that dependencies are installed
3. Verify file permissions on scripts

## Getting Help

If you have any questions or need guidance, feel free to reach out—collaboration is key!

- **Issues**: Open a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Documentation**: Check the website for comprehensive guides
- **Code**: Refer to existing components for patterns and examples

## Maintenance

The gitignore rules are maintained in each destination app. If you add new generated file patterns, update the respective `.gitignore` files and this documentation.

For questions or issues with the generated files system, refer to the mapper scripts in `scripts/mappers/` or contact the development team.

---

Happy contributing,  
**The `gluestack-ui` Team** ❤️
